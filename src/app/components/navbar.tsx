'use client';

import { usePathname, useRouter } from "next/navigation";


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
      <div className = {`navbar-default ${lastSegment === 'skills' ? 'navbar-selected hover:navbar-hovered' : 'hover:navbar-hovered'}`} onClick={() => handleClick("skills")}>
        <h1 className="text-xl">
          Skills
        </h1>
      </div>
      <div className = {`navbar-default ${lastSegment === 'robotics-projects' ? 'navbar-selected hover:navbar-hovered' : 'hover:navbar-hovered'}`} onClick={() => {handleClick("robotics-projects")}}>
        <h1 className="text-xl text-center">
          Robotics Projects
        </h1>
      </div>
      <div className = {`navbar-default ${lastSegment === 'software-projects' ? 'navbar-selected hover:navbar-hovered' : 'hover:navbar-hovered'}`} onClick={() => {handleClick("software-projects")}}>
        <h1 className="text-xl text-center">
          Software Projects
        </h1>
      </div>
      <div className = {`navbar-default ${lastSegment === 'about-me' ? 'navbar-selected hover:navbar-hovered' : 'hover:navbar-hovered'}`} onClick={() => {handleClick("about-me")}}>
        <h1 className="text-xl">
          About Me
        </h1>
      </div>
    </div>
  );
};

export default NavBar;

