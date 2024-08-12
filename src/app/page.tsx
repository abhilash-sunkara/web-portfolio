

'use client';

import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { useRouter } from "next/navigation";
import NavBar from "./components/navbar";
import AnimatedHeader from "./components/animated_header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-10 bg-slate-950">
      <AnimatedHeader text="My name is Abhilash Sunkara" className="text-slate-300 font-bold text-7xl"></AnimatedHeader>      
      <div className="pb-8">
        <p className="text-slate-300 font-bold text-3xl py-1 leading-snug">
          I am a high school senior in the ATX area<br/>
          and from mobile app development to virtual 4-bars,<br/> 
          I&apos;m interested in everything related to engineering.
        </p>
        </div>
        <div>
        <p className="text-slate-300 font-bold text-3xl py-1">
          Some of my interests include: 
        </p>
        </div>
        <div className = "px-5">
          <h1 className="text-slate-300 font-bold text-2xl py-1">
            1.&nbsp; Designing robots 
          </h1>
          <h1 className="text-slate-300 font-bold text-2xl py-1">
            2.&nbsp; Low level programming 
          </h1>
          <h1 className="text-slate-300 font-bold text-2xl py-1">
            3.&nbsp; Web development
          </h1>
        </div> 
        <NavBar/>
    </main>
  );
}

