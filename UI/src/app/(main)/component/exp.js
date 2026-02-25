import Image from "next/image";

export default function Exp() {
    return (
        <div className="min-h-screen h-full w-full flex items-center justify-center p-4 py-16" id="jupiter">
            <div className="max-w-4xl w-full flex text-zinc-300 flex-col gap-8 items-center justify-center glass-card rounded-custom md:p-12 pl-4 pr-4 py-8 shadow-[0_0_30px_rgba(171,138,255,0.05)] border-brand/10 hover:border-brand/30 transition-colors duration-500">
                <h2 className="text-3xl font-bold text-center tracking-widest uppercase text-white mb-2">My Experience</h2>
                <div className="w-full flex flex-col items-center justify-evenly text-center md:p-5 gap-6">
                    <div className="h-32 w-32 relative group">
                        <Image src="/GSALogo.svg" alt="GSA" fill className="object-contain group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-white tracking-wider">Google Student Ambassador (2025)</h2>
                    <ul className="list-disc px-4 md:px-12 text-justify space-y-3 text-lg leading-relaxed opacity-90 mx-auto max-w-3xl">
                        <li>Developed and presented educational materials for people to learn about Gemini Pro AI.</li>
                        <li>Created engaging social media content about Gemini Pro AI upgrade, reaching 4,000+ views organically.</li>
                        <li>Drove 10+ successful Gemini Pro upgrades through personal outreach and social media campaigns.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}