'use client';

import { useRouter } from "next/navigation";

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

  
  const Icon = () => {
    return (
      <></>
    );
  };
  
export default NavBar;