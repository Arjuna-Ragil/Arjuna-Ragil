import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Footer(){
    const longText = `
        You've reached the end of my digital universe. If you think my skills could be a good fit for your crew, I'd be excited to hear 
        from you. I'm currently seeking my next mission—whether it's an internship, a new project, or a full-time role. Don't hesitate 
        to reach out."
    `

    return(
        <div className="min-h-screen h-full w-full grid grid-rows-2">
            <div className="row-start-2 flex flex-col lg:grid grid-cols-4 self-end justify-self-center items-center gap-3 justify-center bg-white rounded-t-2xl md:p-10 p-3">
                <div className="col-span-2 flex flex-col gap-3 p-3">
                    <h3 className="md:text-3xl font-medium">Reach Out To Me</h3>
                    <p className="md:text-xl text-sm text-justify">{longText}</p>
                </div>
                <div className="lg:h-full h-30 w-auto aspect-square relative flex items-center justify-center">
                    <Image src={"/Shamy.svg"} alt="Shamy" fill/>
                </div>
                <div className="grid grid-cols-2 items-center justify-center gap-3 max-md:text-sm">
                    <a href="https://github.com/Arjuna-Ragil" className="rounded-full bg-white hover:bg-neutral-200 duration-150 p-2 border-black border text-black flex flex-row gap-3" target="_blank"><Github /> Github</a>
                    <a href="https://www.linkedin.com/in/arjunaragilputera/" className="rounded-full bg-white hover:bg-neutral-200 duration-150 p-2 border-black border text-black flex flex-row gap-3" target="_blank"><Linkedin /> Linkedin</a>
                    <a href="https://www.instagram.com/arjuna_ragill/" className="rounded-full bg-white hover:bg-neutral-200 duration-150 p-2 border-black border text-black flex flex-row gap-3" target="_blank"><Instagram /> Instagram</a>
                    <a href="mailto:arjunaragilputera@gmail.com" className="rounded-full bg-white hover:bg-neutral-200 duration-150 p-2 border-black border text-black flex flex-row gap-3" target="_blank"><Mail /> Email</a>
                </div>
            </div>
        </div>
    )
}