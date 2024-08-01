
'use client';

import { useRouter } from "next/navigation";
import NavBar from "../components/navbar";


export default function Skills() {
    const router = useRouter()
    
    return (
        <main className="flex min-h-screen flex-col items-start justify-start p-10 co bg-slate-950">
            <div className="pb-8 flex-row w-full">
                <h1 className = "text-slate-300 font-bold text-7xl">
                    Skills
                    
                </h1>
                <h1 className = "text-blue-600 font-bold text-4xl absolute right-44 top-14" onClick={() => {router.back()}}>
                    Back
                </h1>
            </div>
            <div className="py-1">
                <h1 className = "text-slate-300 font-bold text-3xl py-1 leading-snug">
                    Programming Languages
                </h1>
            </div>
            <div className = "px-5">
                <h1 className="text-slate-300 font-bold text-2xl py-1">
                    1.&nbsp; Java
                </h1>
                <h1 className="text-slate-300 font-bold text-2xl py-1">
                    2.&nbsp; Javascript / Typescript
                </h1>
                <h1 className="text-slate-300 font-bold text-2xl py-1">
                    3.&nbsp; Rust
                </h1>
            </div> 
            <div className="py-1">
                <h1 className = "text-slate-300 font-bold text-3xl py-1 leading-snug">
                    Software
                </h1>
            </div>
            <div className = "px-5">
                <h1 className="text-slate-300 font-bold text-2xl py-1">
                    1.&nbsp; PTC Onshape
                </h1>
                <h1 className="text-slate-300 font-bold text-2xl py-1">
                    2.&nbsp; Fusion 360
                </h1>
                <h1 className="text-slate-300 font-bold text-2xl py-1">
                    3.&nbsp; Ultimaker Cura
                </h1>
            </div> 
            <div className="py-1">
                <h1 className = "text-slate-300 font-bold text-3xl py-1 leading-snug">
                    Frameworks
                </h1>
            </div>
            <div className = "px-5">
                <h1 className="text-slate-300 font-bold text-2xl py-1">
                    1.&nbsp; React
                </h1>
                <h1 className="text-slate-300 font-bold text-2xl pt-1">
                    2.&nbsp; React Native
                </h1>
            </div> 
            <NavBar></NavBar>
        </main>
    )
}