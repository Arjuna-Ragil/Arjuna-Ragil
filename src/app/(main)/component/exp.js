import Image from "next/image";
import ExperienceBg from "./3js/experienceBg";

export default function Exp(){
    return(
        <div className="min-h-screen h-full w-full flex flex-col md:grid md:grid-cols-2 bg-black" id="experience">
            <div className="h-full w-full p-5 flex flex-col text-center gap-10">
                <h1 className="text-3xl font-bold">Experience</h1>
                <div className="h-full w-full flex flex-col items-center justify-evenly text-center bg-gray-700 border-white border-2 rounded-2xl">
                    <div className="md:h-1/2 h/18 w-auto aspect-square relative">
                        <Image src="/GSALogo.svg" alt="GSA" fill/>
                    </div>
                    <h2 className="text-2xl font-medium">Google Student Ambassador (2025)</h2>
                    <ul className="list-disc px-15 text-justify space-y-2">
                        <li>Developed and presented educational materials for people to learn about Gemini Pro AI</li>
                        <li>Created engaging social media content about Gemini Pro AI upgrade, reaching 4,000+ views organically.</li>
                        <li>Drove 10+ successful Gemini Pro upgrades through personal outreach and social media campaigns.</li>
                    </ul>
                </div>
            </div>
            <ExperienceBg/>
        </div>
    )
}