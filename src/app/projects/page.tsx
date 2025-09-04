'use client';

import { useRouter } from "next/navigation";
import NavBar from "../components/navbar";
import Image from "next/image";
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import AnimatedHeader from "../components/animated_header";
import { motion } from "framer-motion";
import { slideFromLeft } from "../components/animations";
import { ProjectArray } from "./project_array";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";

export default function RoboticsProjects() {
    const router = useRouter()
    const [filter, setFilter] = useState<string>("All Projects")

    const handleChange = (event: SelectChangeEvent) => {
        setFilter(event.target.value as string);
        console.log(event.target.value as string)
    };

    const checkForFilter = (p: Project) => {
        console.log(p.tags.includes(filter))
        return p.tags.includes(filter)
    }

    return (
        <main className="flex min-h-screen flex-col items-start justify-start p-10 co bg-slate-950">
            <div className="flex flex-row items-center justify-between w-full">
                <AnimatedHeader
                    text="Projects"
                    className="text-slate-300 font-bold text-7xl"
                />
                <div onClick={() => {router.push("/")}} className="flex items-center justify-center w-16 h-16 bg-slate-900 border rounded-md hover:bg-slate-300 group">
                    <MdArrowBackIos className="text-slate-300 w-10 h-10 translate-x-[8px] group-hover:text-slate-900 group-hover:w-12 group-hover:h-12 group-hover:translate-x-[12px] transition-all duration-200 ease-in-out" />
                </div>
            </div>
            <div className="flex flex-row justify-start items-center">
                <div className="text-slate-300 font-bold text-5xl mr-4">Filter: </div>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter} 
                    label="Filter"
                    onChange={handleChange}
                    defaultValue={"All Projects"}
                    sx={{ fontWeight: 'bold' }}
                    className="rounded-xl border border-gray-300 bg-slate-300 px-3 font-bold text-slate-700 shadow-md focus:border-blue-500"
                >
                    <MenuItem value={"All Projects"}>All Projects</MenuItem>
                    <MenuItem value={"Robotics"}>Robotics</MenuItem>
                    <MenuItem value={"Practice CADS"}>Practice CADS</MenuItem>
                    <MenuItem value={"Physical Robots"}>Physical Robots</MenuItem>
                    <MenuItem value={"Software Projects"}>Software Projects</MenuItem>
                    <MenuItem value={"Java"}>Java</MenuItem>
                    <MenuItem value={"Rust"}>Rust</MenuItem>
                    <MenuItem value={"C++"}>C++</MenuItem>
                </Select>
            </div>
            {ProjectArray.filter((p) => {return checkForFilter(p)}).map((item, index) => (
                <RoboticsProjectsTab key = {index} name = {item.name} details={item.details} imagePath={item.imagePath} tags = {item.tags}></RoboticsProjectsTab>
            ))}
        </main>
    )
}

const RoboticsProjectsTab: React.FC<Project> = ({name, details, imagePath, tags}) => {
    return (
        <motion.div variants={slideFromLeft} initial = "hidden" animate = "active" className="w-11/12 bg-slate-800 rounded border-2 border-slate-500 flex flex-row justify-between items-start p-4 my-4">
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
            </motion.div>
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

export type Project = {
    name : string, 
    details : string[],
    imagePath : string,
    tags : string[]
}

