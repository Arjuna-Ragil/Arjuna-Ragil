import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Profile({type}){

    const desc = 
    `
        I'm Arjuna, a System Information student from UIN Syarif Hidayatullah Jakarta with a keen interest in web development. 
        I'm particularly passionate about bridging the gap between static web pages and immersive 3D experiences, which led me to 
        explore technologies like Three.js and GSAP.
    `

    if (type === 1){
        return(
            <div className="min-h-screen h-full w-full flex items-center justify-center md:grid grid-cols-2 p-10" id="mercury">
                <div className="flex text-white flex-col gap-5 self-center items-center justify-center bg-gray-400/10 border border-white backdrop-blur-sm rounded-2xl p-5">
                    <h1 className="text-3xl font-bold text-center">My Profile</h1>
                    <div className="h-[33dvh] w-auto aspect-square relative">
                        <Image src={"/selfPic.svg"} alt="Me..." fill/>
                    </div>
                    <h2 className="text-3xl font-medium text-center">Arjuna Ragil Putera</h2>
                </div>
            </div>
        )
    }

    if (type === 2){
        return(
            <div className="min-h-screen h-full w-full flex items-center justify-center md:grid grid-cols-2 p-10">
                <div className="flex text-white flex-col gap-5 self-center items-center justify-center bg-gray-400/10 border border-white backdrop-blur-sm rounded-2xl p-5">
                    <h2 className="text-3xl font-medium text-center">Know Me Better</h2>
                    <p className="text-justify">{desc}</p>
                    <div className="flex flex-row gap-3">
                        <a href="/document/Portfolio.pdf" download className="bg-gray-500/50 rounded-full p-2 px-5 border border-white hover:bg-gray-600 duration-200">Portfolio</a>
                        <a href="/document/CV.pdf" download className="bg-gray-500/50 rounded-full p-2 px-5 border border-white hover:bg-gray-600 duration-200">CV</a>
                    </div>
                </div>
            </div>
        )
    }

    if (type === 3){
        return(
            <div className="min-h-screen h-full w-full flex items-center justify-center md:grid grid-cols-2 p-10">
                <div className="flex flex-col text-white gap-5 self-center items-center justify-center bg-gray-400/10 border border-white backdrop-blur-sm rounded-2xl p-5">
                    <h2 className="text-3xl font-medium text-center">Contact Me</h2>
                    <ul className="list-none space-y-3">
                        <li className="flex flex-row gap-3"><MapPin /> Jakarta, Indonesia</li>
                        <li className="flex flex-row gap-3"><Phone /> +62 812-1794-2843</li>
                        <li className="flex flex-row gap-3"><Mail /> arjunaragilputera@gmail.com</li>
                    </ul>
                    <div className="flex flex-row items-center justify-center gap-3">
                        <a href="https://github.com/Arjuna-Ragil" className="rounded-full bg-white hover:bg-neutral-200 duration-150 p-2 border-black border text-black flex flex-row gap-3" target="_blank"><Github /> Github</a>
                        <a href="https://www.linkedin.com/in/arjunaragilputera/" className="rounded-full bg-white hover:bg-neutral-200 duration-150 p-2 border-black border text-black flex flex-row gap-3" target="_blank"><Linkedin /> Linkedin</a>
                    </div>
                </div>
            </div>
        )
    }
}