'use client';

import { useState } from "react";
import AnimatedHeader from "../components/animated_header";
import NavBar from "../components/navbar";
import { motion } from "framer-motion";
import { slideFromLeft } from "../components/animations";

export default function AboutMe() {
    
    const staggerContainer = {
        hidden: {},
        active: {
          transition: {
            staggerChildren: 0.4,
          },
        },
      };
    
    
      const [firstAnim, setFirstAnim] = useState(false)
    
    return (
        <main className="flex min-h-screen flex-col items-start justify-start p-10 co bg-slate-950">
            <AnimatedHeader text = "About Me" className="text-slate-300 font-bold text-7xl" setNextAnim={setFirstAnim}></AnimatedHeader>
            <motion.div
                variants={staggerContainer}
                initial = "hidden"
                animate = {firstAnim ? "active" : "hidden"}
            >
            <motion.div variants={slideFromLeft} className="w-9/12 pb-8">
                <h1 className="text-2xl text-slate-300 text-justify">
                    I am a Computer Engineer at TAMU and I&apos;m an aspiring engineer and software 
                    developer. I&apos;m planning to pursue an electrical computer engineering major while 
                    refining my own skills in web development, designing and manufacturing robots and 
                    creating performant applications.
                </h1>
            </motion.div>
            <motion.div variants={slideFromLeft} className="w-9/12 pb-8">
                <h1 className="text-2xl text-slate-300 text-justify">
                    I have experience with CAD programs and the engineering design process through 
                    leading my FTC Robotics team, 21438 Chaotic Current, for 2 years. During this time,
                    we&apos;ve made it to the Texas States competition in 2022 and finalized for the Inspire award 
                    in 2023. I also refined my skills with data collection, sensor usage and OOP through my work here.
                </h1>
            </motion.div>
            <motion.div variants={slideFromLeft} className="w-9/12 pb-8">
                <h1 className="text-2xl text-slate-300 text-justify">
                    My future aspirations include learning more about Rust and low level programming 
                    while also improving my web-dev skills with WASM, React and other technologies
                </h1>
            </motion.div>
            </motion.div>

            <NavBar></NavBar>
        </main>
    )
}