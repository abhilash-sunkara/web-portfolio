
'use client';

import { useRouter } from "next/navigation";
import NavBar from "../components/navbar";
import AnimatedHeader from "../components/animated_header";
import 'overlayscrollbars/overlayscrollbars.css';
import { motion } from "framer-motion";
import { useState } from "react";
import { slideFromLeft } from "../components/animations";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";


export default function Skills() {
    const router = useRouter()

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
            
            <AnimatedHeader text = "Skills" className="text-slate-300 font-bold text-7xl" setNextAnim={setFirstAnim}></AnimatedHeader>
            <OverlayScrollbarsComponent
                className="w-11/12"
                options={{ scrollbars: { autoHide: "never" } }}
                style={{ maxHeight: 'calc(100vh - 200px)', overflow: 'auto', backgroundColor : "2d3748", color : "a0aec0" }}
            >
            <motion.div
                variants={staggerContainer}
                initial = "hidden"
                animate = {firstAnim ? "active" : "hidden"}
            >
                <motion.div variants = {slideFromLeft} className="py-1">
                    <h1 className = "text-slate-300 font-bold text-3xl py-1 leading-snug">
                        Programming Languages
                    </h1>
                </motion.div>
                <motion.div variants={staggerContainer} className = "px-5">
                    <motion.h1 variants={slideFromLeft} className="text-slate-300 font-bold text-2xl py-1">
                        1.&nbsp; Java
                    </motion.h1>
                    <motion.h1 variants={slideFromLeft} className="text-slate-300 font-bold text-2xl py-1">
                        2.&nbsp; Javascript / Typescript
                    </motion.h1>
                    <motion.h1 variants={slideFromLeft} className="text-slate-300 font-bold text-2xl py-1">
                        3.&nbsp; Rust
                    </motion.h1>
                    <motion.h1 variants={slideFromLeft} className="text-slate-300 font-bold text-2xl py-1">
                        4.&nbsp; HTML / CSS
                    </motion.h1>
                    <motion.h1 variants={slideFromLeft} className="text-slate-300 font-bold text-2xl py-1">
                        5.&nbsp; Python
                    </motion.h1>
                </motion.div> 
                <motion.div variants = {slideFromLeft} className="py-1">
                    <h1 className = "text-slate-300 font-bold text-3xl py-1 leading-snug">
                        Software
                    </h1>
                </motion.div>
                <motion.div variants={staggerContainer} className = "px-5">
                    <motion.h1 variants={slideFromLeft} className="text-slate-300 font-bold text-2xl py-1">
                        1.&nbsp; PTC Onshape
                    </motion.h1>
                    <motion.h1 variants={slideFromLeft} className="text-slate-300 font-bold text-2xl py-1">
                        2.&nbsp; Fusion 360
                    </motion.h1>
                    <motion.h1 variants={slideFromLeft} className="text-slate-300 font-bold text-2xl py-1">
                        3.&nbsp; Ultimaker Cura
                    </motion.h1>
                </motion.div>  
                <motion.div variants = {slideFromLeft} className="py-1">
                    <h1 className = "text-slate-300 font-bold text-3xl py-1 leading-snug">
                        Frameworks
                    </h1>
                </motion.div>
                <motion.div variants={staggerContainer} className = "px-5">
                    <motion.h1 variants = {slideFromLeft} className="text-slate-300 font-bold text-2xl py-1">
                        1.&nbsp; React
                    </motion.h1>
                    <motion.h1 variants = {slideFromLeft} className="text-slate-300 font-bold text-2xl pt-1">
                        2.&nbsp; React Native
                    </motion.h1>
                    <motion.h1 variants = {slideFromLeft} className="text-slate-300 font-bold text-2xl pt-1">
                        3.&nbsp; Tailwind CSS
                    </motion.h1>
                </motion.div> 
            </motion.div>
            </OverlayScrollbarsComponent>
            <NavBar></NavBar>
        </main>
    )
}