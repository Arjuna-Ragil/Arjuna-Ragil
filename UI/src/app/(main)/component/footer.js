import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Footer() {
    const longText = `
        You've reached the end of my digital universe. If you think my skills could be a good fit for your crew, I'd be excited to hear 
        from you. I'm currently seeking my next mission—whether it's an internship, a new project, or a full-time role. Don't hesitate 
        to reach out.
    `;

    return (
        <div className="w-full mt-20 relative z-10 border-t border-brand/20 bg-[rgba(5,3,10,0.8)] glass-card">
            <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row justify-between items-center gap-12">
                <div className="flex flex-col gap-6 max-w-2xl text-center lg:text-left">
                    <h3 className="text-4xl font-extrabold uppercase tracking-widest text-white">Let&apos;s connect</h3>
                    <p className="text-zinc-400 text-lg leading-relaxed">{longText}</p>
                    <div className="flex gap-8 justify-center lg:justify-start mt-4">
                        <a href="https://github.com/Arjuna-Ragil" className="text-zinc-500 hover:text-brand transition-colors duration-300" target="_blank" aria-label="GitHub"><Github size={28} /></a>
                        <a href="https://www.linkedin.com/in/arjunaragilputera/" className="text-zinc-500 hover:text-brand transition-colors duration-300" target="_blank" aria-label="LinkedIn"><Linkedin size={28} /></a>
                        <a href="https://www.instagram.com/arjuna_ragill/" className="text-zinc-500 hover:text-brand transition-colors duration-300" target="_blank" aria-label="Instagram"><Instagram size={28} /></a>
                        <a href="mailto:arjunaragilputera@gmail.com" className="text-zinc-500 hover:text-brand transition-colors duration-300" target="_blank" aria-label="Email"><Mail size={28} /></a>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="h-40 w-40 relative rounded-full overflow-hidden border-2 border-brand/30 shadow-[0_0_15px_rgba(171,138,255,0.2)] mb-6">
                        <Image src={"/Shamy.svg"} alt="Shamy" fill className="object-cover" />
                    </div>
                </div>
            </div>
            <div className="bg-brand/5 py-6 text-center border-t border-brand/10">
                <p className="text-[10px] text-zinc-600 uppercase tracking-widest">© 2026 Arjuna Ragil Putera. Exploring the digital cosmos.</p>
            </div>
        </div>
    )
}