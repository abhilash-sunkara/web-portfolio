'use client';

import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import 'overlayscrollbars/overlayscrollbars.css';
import NavBar from "../components/navbar";
import { Project } from "../robotics-projects/page";
import Image from "next/image";
import AnimatedHeader from "../components/animated_header";

export default function SoftwareProjects() {
    
    
    return (
        <main className="flex min-h-screen flex-col items-start justify-start p-10 co bg-slate-950">
            <AnimatedHeader text = "Software Projects" className="text-slate-300 font-bold text-7xl"></AnimatedHeader>
            <OverlayScrollbarsComponent
                className="w-11/12"
                options={{ scrollbars: { autoHide: "never" } }}
                style={{ maxHeight: 'calc(100vh - 200px)', overflow: 'auto', backgroundColor : "2d3748", color : "a0aec0" }}
            >
            {ProjectArray.map((item, index) => (
                <SoftwareProjectsTab key = {index} name = {item.name} details={item.details} imagePath={item.imagePath}></SoftwareProjectsTab>
            ))}
            </OverlayScrollbarsComponent>


            <NavBar></NavBar>
        </main>
    )
}

const SoftwareProjectsTab: React.FC<Project> = ({name, details, imagePath}) => {
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
        <div className="min-h-12 min-w-36 my-2 mr-2 flex flex-row items-center justify-center border p-2 border-slate-300 rounded">
            <h1 className="text-slate-300 font-bold text-l">
                {text}
            </h1>
        </div>
    )
}

const ProjectArray: Project[] = [
    {name : "Masters of the Air", details : ["Computer Science 3 final project in Java", 
        "Made using LibGDX", "Plane shooter game with moving enemies and powerups", 
        "Collisions handled by Box2D", "Manager system to control enemies, bullets and powerups"], imagePath : "/masters_of_the_air.png"},
    {name : "Terminal Space Invaders", details : ["Terminal game in Rust", 
        "Multithreaded rendering system with mpsc channels", 
        "Terminal input handled through crossterm"], imagePath : "/space_invaders.png"},
    {name : "Custom CLI", details : ["CLI written in rust", "Can create .txt files and append text to them", "Also supports text search in files"], imagePath : "/custom_cli.png"}
]