import Image from "next/image";

export default function Exp(){
    return(
        <div className="h-screen w-full flex items-center justify-center p-10">
            <div className="h-full flex text-white flex-col gap-5 self-center items-center justify-center bg-gray-400/10 border border-white backdrop-blur-sm rounded-2xl p-10">
                <h2 className="text-3xl font-medium text-center">My Experience</h2>
                <div className="h-full w-full flex flex-col items-center justify-evenly text-center p-5 gap-5 rounded-2xl">
                    <div className="h-full w-auto aspect-square relative">
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
        </div>
    )
}