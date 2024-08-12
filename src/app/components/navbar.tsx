'use client';

import { usePathname, useRouter } from "next/navigation";
import { FaLightbulb, FaRobot, FaCode } from "react-icons/fa";
import { FaFaceGrin } from "react-icons/fa6";

const NavBar = () => {
  const router = useRouter()
  
  const handleClick = (route: string) => {
    if(lastSegment == route){
      router.push("/")
    }else{
      router.push("/" + route)
    }
  }
  let segments = usePathname().split("/")
  let lastSegment = segments[segments.length - 1]

  return (
    <div className="fixed top-0 right-0 h-screen w-32 flex flex-col justify-evenly bg-slate-300 text-slate-950">
      <div className = {`navbar-default ${lastSegment === 'skills' ? 'navbar-selected hover:navbar-hovered' : 'hover:navbar-hovered'} group`} onClick={() => handleClick("skills")}>
        <h1 className="text-xl hidden group-hover:inline-block">
          Skills
        </h1> 
        <FaLightbulb size = {36} className="inline-block group-hover:hidden"></FaLightbulb> 
      </div>
      <div className = {`navbar-default ${lastSegment === 'robotics-projects' ? 'navbar-selected hover:navbar-hovered' : 'hover:navbar-hovered'} group`} onClick={() => {handleClick("robotics-projects")}}>
        <h1 className="text-xl text-center hidden group-hover:inline-block">
          Robotics Projects
        </h1>
        <FaRobot size = {36} className="inline-block group-hover:hidden"></FaRobot>
      </div>
      <div className = {`navbar-default ${lastSegment === 'software-projects' ? 'navbar-selected hover:navbar-hovered' : 'hover:navbar-hovered'} group`} onClick={() => {handleClick("software-projects")}}>
        <h1 className="text-xl text-center hidden group-hover:inline-block">
          Software Projects
        </h1>
        <FaCode size = {36} className="inline-block group-hover:hidden"></FaCode>
      </div>
      <div className = {`navbar-default ${lastSegment === 'about-me' ? 'navbar-selected hover:navbar-hovered' : 'hover:navbar-hovered'} group`} onClick={() => {handleClick("about-me")}}>
        <h1 className="text-xl text-center hidden group-hover:inline-block">
          About Me
        </h1>
        <FaFaceGrin size = {36} className="inline-block group-hover:hidden"/>
      </div>
    </div>
  );
};

export default NavBar;

