'use client'

import { Github } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function ProjectCard({ title, logo, img, desc, techstack, github, demo}){
    const [flip, setFlip] = useState(false)

    return(
        <div className="h-full w-full flex items-center justify-center" onMouseEnter={() => setFlip(true)} onMouseLeave={() => setFlip(false)}>
            <div className={`${flip ? "rotate-y-180" : " "} bg-gray-500 border duration-200 border-white rounded-3xl h-full w-full p-3`}>
                {!flip ? 
                    <div className="h-full w-full flex flex-col items-center justify-evenly">
                        <h2 className="text-xl font-medium">{title}</h2>
                        <div className="h-1/2 w-auto aspect-square relative">
                            <Image src={logo} alt="logo" fill/>
                        </div>
                        <p className="text-justify px-5">{desc}</p>
                    </div>
                    :
                    <div className="rotate-y-180 h-full w-full flex flex-col items-center justify-evenly">
                        <p>TechStack: {techstack}</p>
                        <div className="h-1/3 w-auto aspect-video relative">
                            <Image src={img} alt="doc" fill/>
                        </div>
                        <div className="grid grid-cols-2 gap-5 text-black">
                            <a href={github} className="rounded-full aspect-square bg-white hover:bg-neutral-200 duration-150 p-1 border-black border flex items-center justify-center"><Github/></a>
                            <a href={demo} className="rounded-full aspect-square bg-white hover:bg-neutral-200 duration-150 p-1 border-black border flex items-center justify-center">Demo</a> 
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}