import NavBar from "../components/navbar";

export default function AboutMe() {
    
    
    return (
        <main className="flex min-h-screen flex-col items-start justify-start p-10 co bg-slate-950">
            <div className="pb-8 flex-row w-full ">
                <h1 className = "text-slate-300 font-bold text-7xl">
                    About Me
                </h1>
            </div>
            <NavBar></NavBar>
        </main>
    )
}