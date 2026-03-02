import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Profile() {
    const desc = `Crafting High Performance and Scalable Backend with clear CI/CD and Infrastructure setup.`;

    const buttonClass = "text-white bg-brand/10 border border-brand/30 hover:bg-brand/20 hover:border-brand hover:shadow-[0_0_15px_rgba(171,138,255,0.3)] transition-all duration-300 rounded-full py-3 px-8 flex flex-row gap-3 items-center text-sm uppercase tracking-widest font-bold justify-center";

    return (
        <section className="min-h-screen w-full flex items-center justify-center p-6 md:p-12 relative z-10" id="mercury">
            <div className="max-w-6xl w-full flex flex-col gap-3">

                {/* Top Row: Profile & About */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column: Profile Avatar & Name */}
                    <div className="lg:col-span-5 flex flex-col items-center justify-center glass-card rounded-custom p-10 shadow-[0_0_30px_rgba(171,138,255,0.05)] border-brand/20 hover:border-brand/40 transition-all duration-500 group">
                        <div className="h-48 w-48 md:h-64 md:w-64 relative rounded-full overflow-hidden border-2 border-brand/40 shadow-[0_0_20px_rgba(171,138,255,0.2)] mb-8 group-hover:scale-105 transition-transform duration-500">
                            <Image src={"/selfPic.svg"} alt="Arjuna Ragil Putera" fill className="object-cover" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-white tracking-widest uppercase mb-2">Arjuna Ragil Putera</h2>
                        <h3 className="text-brand text-sm tracking-widest uppercase font-semibold text-center mb-6">Backend Developer | DevOps</h3>

                        {/* Social Links under profile */}
                        <div className="flex flex-row gap-4">
                            <a href="https://github.com/Arjuna-Ragil" className="text-zinc-400 hover:text-white transition-colors p-3 glass-card border border-brand/20 hover:border-brand rounded-full" target="_blank"><Github size={20} /></a>
                            <a href="https://www.linkedin.com/in/arjunaragilputera/" className="text-zinc-400 hover:text-white transition-colors p-3 glass-card border border-brand/20 hover:border-brand rounded-full" target="_blank"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Right Column: About Details */}
                    <div className="lg:col-span-7 flex flex-col justify-center glass-card rounded-custom p-8 md:p-12 shadow-[0_0_30px_rgba(171,138,255,0.05)] border-brand/10 hover:border-brand/30 transition-all duration-500">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-12 h-[1px] bg-brand"></span>
                            <h2 className="text-2xl font-bold text-white tracking-widest uppercase">The Mission</h2>
                        </div>

                        <p className="text-zinc-300 leading-relaxed text-lg md:text-xl mb-6 font-light">
                            {desc}
                        </p>
                        <p className="text-zinc-500 text-base md:text-lg leading-relaxed mb-10">
                            Equipped with a passion for automated deployments and infrastructure, I navigate through complex architecture to deliver robust and high-performance solutions ready for the digital cosmos.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <a href="/document/Portfolio.pdf" download className={buttonClass}>View Portfolio</a>
                            <a href="/document/CV.pdf" download className={buttonClass}>Download CV</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Contact Info */}
                <div className="glass-card rounded-custom p-6 md:p-8 shadow-[0_0_30px_rgba(171,138,255,0.05)] border-brand/10 hover:border-brand/30 transition-all duration-500">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-zinc-300">
                        <div className="flex flex-col items-center justify-center p-4 gap-4 group">
                            <div className="p-4 rounded-full bg-brand/5 group-hover:bg-brand/20 transition-colors border border-brand/10 group-hover:border-brand/50">
                                <MapPin className="text-brand group-hover:scale-110 transition-transform" size={24} />
                            </div>
                            <span className="text-sm font-medium tracking-wider text-center">Jakarta, Indonesia</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 gap-4 group">
                            <div className="p-4 rounded-full bg-brand/5 group-hover:bg-brand/20 transition-colors border border-brand/10 group-hover:border-brand/50">
                                <Phone className="text-brand group-hover:scale-110 transition-transform" size={24} />
                            </div>
                            <span className="text-sm font-medium tracking-wider text-center">+62 812-1794-2843</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 gap-4 group">
                            <div className="p-4 rounded-full bg-brand/5 group-hover:bg-brand/20 transition-colors border border-brand/10 group-hover:border-brand/50">
                                <Mail className="text-brand group-hover:scale-110 transition-transform" size={24} />
                            </div>
                            <span className="text-sm font-medium tracking-wider text-center">arjunaragilputera@gmail.com</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}