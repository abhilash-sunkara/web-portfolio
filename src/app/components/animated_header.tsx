"use client";

import { Variants, motion } from "framer-motion";

import {useEffect} from "react"

import {slideFromTop, scaleFromLeft} from "./animations";

type AnimatedHeaderProps = {
    text: string,
    className?: string
    setNextAnim? : (payload : boolean) => void
}

export const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({text, className = '', setNextAnim = (payload: boolean) => {}}) => {

    const length = text.length
    const staggerDelay = 1
    const time = length * staggerDelay

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("set next to run")
            setNextAnim(true)
        }, time * 100)

        return () => {
            clearTimeout(timer)
        }
    }, [])


    return (
        <div className="pb-8 min-h-28 min-w-96">
            <p className="text-slate-300 font-bold text-7xl">
                <span className="sr-only">{text}</span>
                <motion.span
                    initial="hidden"
                    animate="active"
                    exit="hidden"
                    transition={{ staggerChildren: 0.1 }}
                    variants={slideFromTop}
                    className={`${className} w-fit`}
                    aria-hidden>
                    {text.split("").map((word, index) => (
                        <motion.span variants={scaleFromLeft as Variants} className="" key={index}>
                            {word}
                        </motion.span>
                    ))}
                </motion.span>
            </p>
        </div>
    )
}

export default AnimatedHeader