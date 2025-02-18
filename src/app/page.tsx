

'use client';

import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { useRouter } from "next/navigation";
import NavBar from "./components/navbar";
import AnimatedHeader from "./components/animated_header";
import { motion, stagger } from "framer-motion";
import { slideFromLeft } from "./components/animations";
import { useEffect, useState } from "react";


{/* <motion.p
      initial = "hidden"
      animate = {firstAnim ? "active" : "hidden"}
      exit = "hidden"
      variants={slideFromLeft}
      className="text-slate-300 font-bold text-3xl py-1 leading-snug"
      aria-hidden>
          I am a high school senior in the ATX area<br/>
          and from mobile app development to virtual 4-bars,<br/> 
          I&apos;m interested in everything related to engineering.
      </motion.p> */}

export default function Home() {

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
    <main className="flex min-h-screen flex-col items-start justify-start p-10 bg-slate-950">
      <AnimatedHeader text="My name is Abhilash Sunkara" className="text-slate-300 font-bold text-7xl" setNextAnim={setFirstAnim}></AnimatedHeader> 
      <motion.div
        variants={staggerContainer}
        initial = "hidden"
        animate = {firstAnim ? "active" : "hidden"}
      >
        <motion.div variants = {slideFromLeft} className="pb-8">
        <p className="text-slate-300 font-bold text-3xl py-1 leading-snug">
          I am a high school senior in the ATX area<br/>
          and from mobile app development to virtual 4-bars,<br/> 
          I&apos;m interested in everything related to engineering.
        </p>
        </motion.div>
        <motion.div variants={slideFromLeft}>
        <p className="text-slate-300 font-bold text-3xl py-1">
          Some of my interests include: 
        </p>
        </motion.div >
        <motion.div className = "px-5" variants = {staggerContainer}>
          <motion.h1 className="text-slate-300 font-bold text-2xl py-1" variants = {slideFromLeft}>
            1.&nbsp; Designing robots 
          </motion.h1>
          <motion.h1 className="text-slate-300 font-bold text-2xl py-1" variants = {slideFromLeft}>
            2.&nbsp; Low level programming 
          </motion.h1>
          <motion.h1 className="text-slate-300 font-bold text-2xl py-1" variants = {slideFromLeft}>
            3.&nbsp; Web development
          </motion.h1>
        </motion.div> 
        </motion.div>
        <NavBar/>
    </main>
  );
}

