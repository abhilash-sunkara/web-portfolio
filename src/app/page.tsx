

'use client';

import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-20 bg-slate-950">
      <div className="pb-8">
        <p className="text-slate-300 font-bold text-7xl">
          Hi, my name is <br/> Abhilash Sunkara.
        </p>
      </div>
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

const NavBar = () => {
  const router = useRouter()

  const handleClick = (route: string) => {
    router.push("/" + route)
  }

  return (
    <div className="fixed top-0 right-0 h-screen w-32 flex flex-col justify-evenly bg-slate-300 text-slate-950">
      <div className="w-28 h-28 bg-slate-600 m-2 text-slate-300 rounded-3xl hover:bg-slate-900 hover:rounded-none transition-all duration-200 ease-in-out flex justify-center items-center" onClick={() => {handleClick("skills")}}>
        <h1 className="text-xl">
          Skills
        </h1>
      </div>
      <div className="w-28 h-28 bg-slate-600 m-2 text-slate-300 rounded-3xl hover:bg-slate-900 hover:rounded-none transition-all duration-200 ease-in-out flex justify-center items-center" onClick={() => {handleClick("robotics-projects")}}>
        <h1 className="text-xl text-center">
          Robotics Projects
        </h1>
      </div>
      <div className="w-28 h-28 bg-slate-600 m-2 text-slate-300 rounded-3xl hover:bg-slate-900 hover:rounded-none transition-all duration-200 ease-in-out flex justify-center items-center" onClick={() => {handleClick("software-projects")}}>
        <h1 className="text-xl text-center">
          Software Projects
        </h1>
      </div>
      <div className="w-28 h-28 bg-slate-600 m-2 text-slate-300 rounded-3xl hover:bg-slate-900 hover:rounded-none transition-all duration-200 ease-in-out flex justify-center items-center" onClick={() => {handleClick("about-me")}}>
        <h1 className="text-xl">
          About Me
        </h1>
      </div>
    </div>
  );
};
