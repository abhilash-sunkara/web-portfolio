'use client';

import { useRouter } from "next/navigation";
import NavBar from "../components/navbar";
import Image from "next/image";
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

export default function RoboticsProjects() {
    const router = useRouter()
    
    return (
        <main className="flex min-h-screen flex-col items-start justify-start p-10 co bg-slate-950">
            <div className="pb-8 flex-row w-full ">
                <h1 className = "text-slate-300 font-bold text-7xl">
                    Robotics Projects
                </h1>
                <h1 className = "text-blue-600 font-bold text-4xl absolute right-44 top-14 hover:text-blue-200 hover:text-5xl transition-all duration-200 ease-in-out " onClick={() => {router.back()}}>
                    Back
                </h1>
            </div>
            <OverlayScrollbarsComponent
                className="w-11/12"
                options={{ scrollbars: { autoHide: "never" } }}
                style={{ maxHeight: 'calc(100vh - 200px)', overflow: 'auto', backgroundColor : "2d3748", color : "a0aec0" }}
            >
            {ProjectArray.map((item, index) => (
                <RoboticsProjectsTab key = {index} name = {item.name} details={item.details} imagePath={item.imagePath}></RoboticsProjectsTab>
            ))}
            </OverlayScrollbarsComponent>
            <NavBar></NavBar>
        </main>
    )
}

const RoboticsProjectsTab: React.FC<Project> = ({name, details, imagePath}) => {
    return (
        <div className="w-11/12 bg-slate-800 rounded border-2 border-slate-500 flex flex-row justify-between items-start p-4 my-4">
                <div className="flex flex-col">
                    <h1 className="text-slate-300 font-bold text-3xl pb-2">{name}</h1>
                    <div className="flex flex-col">
                        <div className= "flex flex-wrap w-[36rem]">
                            {details.map((item, index) => (
                                <DetailTab text={item} key = {index}></DetailTab>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={imagePath} alt="wattson" width={400} height={200} style={{borderRadius : 4, borderColor : "#cbd5e1", borderWidth : 2}}/>
                </div>
            </div>
    )
}

type DetailTabTypes = {
    text : string
}

const DetailTab: React.FC<DetailTabTypes> = ({text}) => {
    return (
        <div className="h-12 w-36 my-2 mr-2">
            <h1 className="text-slate-300 font-bold text-l">
                {text}
            </h1>
        </div>
    )
}

type Project = {
    name : string, 
    details : string[],
    imagePath : string
}

const ProjectArray: Project[] = [
    {name : "Wattson", details : ["PowerPlay robot", 
        "Polycarbonate + HDPE Plates", "Silicone Claw Intake", 
        "Polycarb arm actuated by motor", 
        "Vertical extension powered by linear slides, motors and pulleys", 
        "Advanced to Texas States"], imagePath : "/wattson.jpg"
    },
    {name : "Maelstrom", details : ["PowerPlay robot", 
        "Aluminum + polycarbonate plates", "Claw intake", 
        "Virtual 4-Bar with belts", 
        "Bearing stack turret", 
        ], imagePath : "/maelstrom.png"
    },
    {name : "Vortex", details : ["PowerPlay robot", 
        "Aluminum plates", "Double servo claw intake", 
        "Servo linkage horizontal extension", 
        "Dual camera set-up", 
        "Aluminum arm powered by motor"], imagePath : "/vortex.png"
    },
    {name : "Tempest", details : ["PowerPlay robot", 
        "Aluminum plates", "Servo linkage extension", 
        "MGN Linear rails powered by motors and pulleys", 
        "Polycarb servo arm", 
        "Bearing stack turret"], imagePath : "/tempest.png"
    },
    {name : "Hurricane", details : ["PowerPlay robot", 
        "Polycarb plates", "Vertical claw", 
        "Aluminum arm with chain virtual 4-bar", 
        "Silicone wheel intake", 
        "Aluminum cone re-righter"], imagePath : "/hurricane.png"
    }
    
]

