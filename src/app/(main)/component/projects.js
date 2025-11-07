import { Github } from "lucide-react"
import Image from "next/image"

export default function Projects({type}){

    const demokratos = [
        {
            "name": "React",
            "image": "/techstack/reactLogo.svg"
        },
        {
            "name": "Tailwind",
            "image": "/techstack/tailwindLogo.svg"
        },
        {
            "name": "Firebase",
            "image": "/techstack/firebaseLogo.svg"
        },
    ]

    const planix = [
        {
            "name": "React",
            "image": "/techstack/reactLogo.svg"
        },
        {
            "name": "Tailwind",
            "image": "/techstack/tailwindLogo.svg"
        },
        {
            "name": "Firebase",
            "image": "/techstack/firebaseLogo.svg"
        },
        {
            "name": "Leaflet",
            "image": "/techstack/leafletLogo.svg"
        },
    ]

    const picprice = [
        {
            "name": "React",
            "image": "/techstack/reactLogo.svg"
        },
        {
            "name": "Tailwind",
            "image": "/techstack/tailwindLogo.svg"
        },
        {
            "name": "Firebase",
            "image": "/techstack/firebaseLogo.svg"
        },
        {
            "name": "CSE",
        },
    ]
    

    if (type === 1){
        return(
            <div className="min-h-screen h-full w-full flex items-center justify-center md:grid grid-cols-2 p-10" id="saturn">
                <div className="flex text-white flex-col gap-5 self-center items-center justify-center bg-gray-400/10 border border-white backdrop-blur-sm rounded-2xl md:p-10 p-3">
                    <div className="flex flex-row items-center justify-center gap-3">
                        <h1 className="text-3xl font-bold text-center">Demokratos</h1>
                        <Image src={"/project/demoLogo.svg"} alt="Logo" height={50} width={50}/>
                    </div>
                    <div className="lg:h-50 h-30 w-auto aspect-video relative flex items-center justify-center">
                        <Image src={"/project/demoDoc.svg"} alt="Logo" fill/>
                    </div>
                    <p className="text-xl md:text-justify">A web-based platform powered by Gemini AI that helps governments analyze public needs and aspirations.</p>
                    <div className="h-full w-full grid md:grid-cols-3 grid-cols-2 gap-3">
                        {demokratos.map((tech) => (
                            <div key={tech.name} className="h-full w-full flex flex-col items-center justify-center bg-white/30 rounded-4xl p-3">
                                <div className="h-full w-auto aspect-square relative flex items-center justify-center">
                                    <Image src={tech.image} alt={tech.name} width={50} height={50}/>
                                </div>
                                <p>{tech.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <a href="https://github.com/s-erzv/demokratos.git" className="rounded-full bg-white hover:bg-neutral-200 duration-150 p-2 border-black border text-black flex flex-row items-center justify-center gap-3" target="_blank"><Github /> Github</a>
                        <a href="https://demokratos-5b0ce.web.app/welcome" className="rounded-full bg-white hover:bg-neutral-200 duration-150 p-2 border-black border text-black flex flex-row items-center justify-center gap-3" target="_blank">Demo</a>
                    </div>
                </div>
            </div>
        )
    }

    if (type === 2){
        return(
            <div className="min-h-screen h-full w-full flex items-center justify-center md:grid grid-cols-2 p-10">
                <div className="col-start-2 flex text-white flex-col gap-5 self-center items-center justify-center bg-gray-400/10 border border-white backdrop-blur-sm rounded-2xl md:p-10 p-5">
                    <div className="flex flex-row items-center justify-center gap-3">
                        <h1 className="text-3xl font-bold text-center">Planix</h1>
                        <Image src={"/project/planLogo.svg"} alt="Logo" height={50} width={50}/>
                    </div>
                    <div className="lg:h-50 h-30 w-auto aspect-video relative flex items-center justify-center">
                        <Image src={"/project/planDoc.svg"} alt="Logo" fill/>
                    </div>
                    <p className="text-xl md:text-justify">A web-based application that leverages AI (Gemini) and real-time spatial data to support urban planning and land-use analysis.</p>
                    <div className="h-full w-full grid md:grid-cols-4 grid-cols-2 gap-3">
                        {planix.map((tech) => (
                            <div key={tech.name} className="h-full w-full flex flex-col items-center justify-center bg-white/30 rounded-4xl p-3">
                                <div className="h-full w-auto aspect-square relative flex items-center justify-center">
                                    <Image src={tech.image} alt={tech.name} width={50} height={50}/>
                                </div>
                                <p>{tech.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <a href="https://github.com/amdihsann/Planix.git" className="rounded-full bg-white hover:bg-neutral-200 duration-150 p-2 border-black border text-black flex flex-row items-center justify-center gap-3" target="_blank"><Github /> Github</a>
                        <a href="https://planix-2b1a8.web.app/" className="rounded-full bg-white hover:bg-neutral-200 duration-150 p-2 border-black border text-black flex flex-row items-center justify-center gap-3" target="_blank">Demo</a>
                    </div>
                </div>
            </div>
        )
    }

    if (type === 3){
        return(
            <div className="min-h-screen h-full w-full flex items-center justify-center md:grid grid-cols-2 p-10">
                <div className="flex text-white flex-col gap-5 self-center items-center justify-center bg-gray-400/10 border border-white backdrop-blur-sm rounded-2xl md:p-10 p-3">
                    <div className="flex flex-row items-center justify-center gap-3">
                        <h1 className="text-3xl font-bold text-center">PicPrice</h1>
                        <Image src={"/project/ppLogo.svg"} alt="Logo" height={50} width={50}/>
                    </div>
                    <div className="lg:h-50 h-30 w-auto aspect-video relative flex items-center justify-center">
                        <Image src={"/project/ppDoc.svg"} alt="Logo" fill/>
                    </div>
                    <p className="text-xl md:text-justify">AI-powered web application that allows users to upload or take a picture of a product and instantly search for its average price across multiple online platforms.</p>
                    <div className="h-full w-full grid md:grid-cols-4 grid-cols-2 gap-3">
                        {picprice.map((tech) => (
                            <div key={tech.name} className="h-full w-full flex flex-col items-center justify-center bg-white/30 rounded-2xl p-3">
                                {tech.image ?
                                    <div className="h-full w-auto aspect-square relative flex items-center justify-center">
                                        <Image src={tech.image} alt={tech.name} width={50} height={50}/>
                                    </div>
                                :
                                    null
                                }
                                <p>{tech.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <a href="https://github.com/Arjuna-Ragil/PicPrice.git" className="rounded-full bg-white hover:bg-neutral-200 duration-150 p-2 border-black border text-black flex flex-row items-center justify-center gap-3" target="_blank"><Github /> Github</a>
                        <a href="https://picprice-73be9.web.app/landingpage" className="rounded-full bg-white hover:bg-neutral-200 duration-150 p-2 border-black border text-black flex flex-row items-center justify-center gap-3" target="_blank">Demo</a>
                    </div>
                </div>
            </div>
        )
    }
}