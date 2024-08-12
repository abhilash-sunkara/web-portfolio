import NavBar from "../components/navbar";

export default function AboutMe() {
    
    
    return (
        <main className="flex min-h-screen flex-col items-start justify-start p-10 co bg-slate-950">
            <div className="pb-8 flex-row w-full ">
                <h1 className = "text-slate-300 font-bold text-7xl">
                    About Me
                </h1>
                
            </div>
            <div className="w-9/12 pb-8">
                <h1 className="text-2xl text-slate-300 text-justify">
                    I am a current senior in highschool and I'm an aspiring engineer and software 
                    developer. I'm planning to pursue an electrical computer engineering major while 
                    refining my own skills in web development, designing and manufacturing robots and 
                    creating performant applications.
                </h1>
            </div>
            <div className="w-9/12 pb-8">
                <h1 className="text-2xl text-slate-300 text-justify">
                    I have experience with CAD programs and the engineering design process through 
                    leading my FTC Robotics team, 21438 Chaotic Current, for 2 years. During this time,
                     we've made it to the Texas States competition in 2022 and finalized for the Inspire award 
                     in 2023. I also refined my skills with data collection, sensor usage and OOP through my work here.
                </h1>
            </div>
            <div className="w-9/12 pb-8">
                <h1 className="text-2xl text-slate-300 text-justify">
                    My future aspirations include learning more about Rust and low level programming 
                    while also improving my web-dev skills with WASM, React and other technologies
                </h1>
            </div>
            <NavBar></NavBar>
        </main>
    )
}