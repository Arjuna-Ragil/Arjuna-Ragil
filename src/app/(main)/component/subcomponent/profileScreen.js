'use client'

import Image from "next/image"
import { useProfile } from "../../hook/useProfile"
import { BriefcaseBusiness, Github, Linkedin, Mail, MapPin, Phone, X } from "lucide-react"

export default function ProfileScreen(){
    const { showComp, showDoc, setShowComp } = useProfile()

    const shortDesc = 
    `
        I'm Arjuna, a System Information student from UIN Syarif Hidayatullah Jakarta with a keen interest in web development.
        I'm particularly passionate about bridging the gap between static web pages and immersive 3D experiences, which led me to explore technologies like Three.js and GSAP.
    `

    const techStack = [
        {
            "name": "JavaScript",
            "image": "/techstack/jsLogo.svg"
        },
        {
            "name": "React",
            "image": "/techstack/reactLogo.svg"
        },
        {
            "name": "Next.js",
            "image": "/techstack/nextLogo.svg"
        },
        {
            "name": "Tailwind",
            "image": "/techstack/tailwindLogo.svg"
        },
        {
            "name": "Three.js",
            "image": "/techstack/threeLogo.svg"
        },
        {
            "name": "Node.js",
            "image": "/techstack/nodeLogo.svg"
        },
        {
            "name": "Express.js",
            "image": "/techstack/expressLogo.svg"
        },
        {
            "name": "Firebase",
            "image": "/techstack/firebaseLogo.svg"
        },
        {
            "name": "Vercel",
            "image": "/techstack/vercelLogo.svg"
        },
    ]

    if (!showComp && !showDoc) return null

    if (showComp) {
        return(
            <div className="h-screen w-screen z-50 p-10 ">
                <div className="h-full w-full flex flex-col gap-2 bg-screen border-4 border-gray-600 p-5 text-black">
                    <button onClick={() => setShowComp(false)}><X /></button>
                    <div className="h-full w-full grid grid-cols-3 gap-5">
                        <div className="h-full w-full grid grid-rows-2 gap-5">
                            <div className="h-full w-full flex items-center justify-center relative bg-screen-container rounded-2xl p-3">
                                <Image src={"/selfPic.svg"} alt="Arjuna" fill/>
                            </div>
                            <div className="h-full w-full flex flex-col items-center justify-center gap-5">
                                <h1 className="text-4xl font-bold text-center">Arjuna Ragil Putera</h1>
                                <div className="h-full w-full flex flex-col p-5 gap-3">
                                    <div className="flex flex-row gap-3 items-center">
                                        <MapPin />
                                        <p className="text-lg">Jakarta, Indonesia</p>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center">
                                        <BriefcaseBusiness />
                                        <h2 className="text-lg">Web Developer || Google Student Ambassador</h2>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center">
                                        <Phone />
                                        <h2 className="text-lg">+62 812-1794-2843</h2>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center">
                                        <Mail />
                                        <h2 className="text-lg">arjunaragilputera@gmail.com</h2>
                                    </div>
                                    <div className="flex flex-row items-center justify-center gap-3">
                                        <a href="https://github.com/Arjuna-Ragil" className="rounded-full aspect-square bg-white hover:bg-neutral-200 duration-150 p-2 border-black border"><Github /></a>
                                        <a href="https://github.com/Arjuna-Ragil" className="rounded-full aspect-square bg-white hover:bg-neutral-200 duration-150 p-2 border-black border"><Linkedin /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-full w-full col-span-2 bg-screen-container rounded-2xl p-5 gap-3 flex flex-col">
                            <h2 className="text-xl font-medium">Helloo...</h2>
                            <p className="text-justify">{shortDesc}</p>
                            <div className="h-full w-full flex flex-col gap-3">
                                <h3 className="text-xl font-medium">My Tech-Stack:</h3>
                                <div className="h-full w-full grid grid-cols-3 gap-3">
                                    {techStack.map((tech) => (
                                        <div key={tech.name} className="h-full w-full flex flex-col items-center justify-center bg-white rounded-4xl p-3">
                                            <div className="h-full w-auto aspect-square relative">
                                                <Image src={tech.image} alt={tech.name} fill/>
                                            </div>
                                            <p>{tech.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }   

    if (showDoc) {
        return(
            <div className="min-h-screen h-full w-full grid grid-cols-2 bg-white/10 backdrop-blur-md">
                <div className="h-full w-full flex flex-col items-center justify-center gap-3">
                    <p>Portfolio</p>
                    <div className="h-1/2 w-auto aspect-square relative">
                        <Image src={"/portCover.svg"} alt="portfolio" fill/>
                    </div>
                    <a href="/document/Portfolio.pdf" download className="bg-gray-500/50 rounded-full p-2 px-5 border border-white hover:bg-gray-600 duration-200">Download Portfolio</a>
                </div>
                <div className="h-full w-full flex flex-col items-center justify-center gap-3">
                    <p>CV</p>
                    <div className="h-1/2 w-auto aspect-square relative">
                        <Image src={"/cvCover.svg"} alt="cv" fill/>
                    </div>
                    <a href="/document/CV.pdf" download className="bg-gray-500/50 rounded-full p-2 px-5 border border-white hover:bg-gray-600 duration-200">Download CV</a>
                </div>
            </div>
        )
    }
}