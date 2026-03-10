import { Github, Linkedin, Instagram, Youtube, Twitter, Mail } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen bg-[#0f0a19] overflow-x-hidden selection:bg-[#a855f7]/30 selection:text-white pb-20">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(168,85,247,0.05)_100%)]"></div>

                {/* Purple glowing orbs */}
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#c084fc]/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-10000"></div>
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#a855f7]/10 rounded-full blur-[150px] mix-blend-screen"></div>
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center p-10 pt-15">
                <div className="mb-12 text-center w-full max-w-2xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70 tracking-tight uppercase mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#a855f7]">Connect</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl mx-auto opacity-90 italic">
                        &quot;Reach out across the cosmos. Always open to discussing tech, collaborations, or the next big mission.&quot;
                    </p>
                </div>

                {/* Bento Box Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-5xl">

                    {/* LinkedIn (Large - spans 2 cols on mobile, 2 cols/2 rows on larger) */}
                    <a href="https://linkedin.com/in/arjuna-ragil" target="_blank" rel="noopener noreferrer"
                        className="group col-span-2 md:col-span-2 lg:row-span-2 relative h-48 sm:h-56 md:h-auto w-full glass-card rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between overflow-hidden border-[#a855f7]/20 hover:border-[#a855f7]/50 shadow-[0_0_30px_rgba(168,85,247,0.05)] hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-all duration-500 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0A66C2]/10 via-[#0A66C2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="flex justify-between items-start z-10">
                            <div className="p-3 lg:p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-[#0A66C2]/20 group-hover:border-[#0A66C2]/40 transition-colors duration-500">
                                <Linkedin size={32} strokeWidth={1.5} className="text-slate-300 group-hover:text-white transition-colors" />
                            </div>
                            <div className="p-2 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                            </div>
                        </div>
                        <div className="z-10 mt-auto">
                            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-1 lg:mb-2 tracking-wide">LinkedIn</h2>
                            <p className="text-sm lg:text-base text-slate-400 font-medium tracking-wider uppercase">Professional Network</p>
                        </div>
                    </a>

                    {/* GitHub (Large - spans 2 cols) */}
                    <a href="https://github.com/Arjuna-Ragil" target="_blank" rel="noopener noreferrer"
                        className="group col-span-2 lg:col-span-2 relative h-40 sm:h-48 md:h-56 lg:h-auto w-full glass-card rounded-[2rem] p-6 flex flex-col justify-between overflow-hidden border-[#a855f7]/20 hover:border-[#a855f7]/50 shadow-[0_0_30px_rgba(168,85,247,0.05)] hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-all duration-500 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="flex justify-between items-start z-10">
                            <div className="p-3 lg:p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/30 transition-colors duration-500">
                                <Github size={32} strokeWidth={1.5} className="text-slate-300 group-hover:text-white transition-colors" />
                            </div>
                            <div className="p-2 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                            </div>
                        </div>
                        <div className="z-10 pt-5">
                            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-1 tracking-wide">GitHub</h2>
                            <p className="text-sm text-slate-400 font-medium tracking-wider uppercase">Code Repositories</p>
                        </div>
                    </a>

                    {/* Contact Email (Medium) */}
                    <a href="mailto:contact@example.com"
                        className="group col-span-2 md:col-span-1 lg:col-span-2 relative h-40 w-full glass-card rounded-[2rem] p-6 flex items-center justify-between overflow-hidden border-[#a855f7]/20 hover:border-brand/50 shadow-[0_0_30px_rgba(168,85,247,0.05)] hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-all duration-500 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-r from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="z-10 flex items-center gap-4">
                            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-brand/20 group-hover:border-brand/40 transition-colors duration-500">
                                <Mail size={24} strokeWidth={2} className="text-slate-300 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white tracking-wide">Email Me</h2>
                                <p className="text-xs text-slate-400 font-medium tracking-wider uppercase mt-1">Direct Message</p>
                            </div>
                        </div>
                        <div className="p-2 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 z-10">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </div>
                    </a>

                    {/* X / Twitter (Small 1x1) */}
                    <a href="https://x.com/Arjuna_Ragilll" target="_blank" rel="noopener noreferrer"
                        className="group col-span-1 border border-white/5 hover:border-[#1DA1F2]/30 bg-white/[0.02] hover:bg-[#1DA1F2]/5 backdrop-blur-md rounded-[2rem] aspect-square p-5 md:p-6 flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:-translate-y-1">
                        <div className="p-3 md:p-4 rounded-full bg-white/5 group-hover:scale-110 group-hover:bg-[#1DA1F2]/20 transition-all duration-500">
                            <Twitter size={28} strokeWidth={1.5} className="text-slate-400 group-hover:text-[#1DA1F2] transition-colors" />
                        </div>
                        <span className="text-sm font-bold tracking-wider text-slate-300 group-hover:text-white transition-colors">X</span>
                    </a>

                    {/* Instagram (Small 1x1) */}
                    <a href="https://www.instagram.com/arjuna_ragill/" target="_blank" rel="noopener noreferrer"
                        className="group col-span-1 border border-white/5 hover:border-[#a855f7]/30 bg-white/[0.02] hover:bg-[#a855f7]/5 backdrop-blur-md rounded-[2rem] aspect-square p-5 md:p-6 flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:-translate-y-1">
                        <div className="p-3 md:p-4 rounded-full bg-white/5 group-hover:scale-110 group-hover:bg-[#a855f7]/20 transition-all duration-500">
                            <Instagram size={28} strokeWidth={1.5} className="text-slate-400 group-hover:text-[#a855f7] transition-colors" />
                        </div>
                        <span className="text-sm font-bold tracking-wider text-slate-300 group-hover:text-white transition-colors">Instagram</span>
                    </a>

                    {/* YouTube (Small 1x1) */}
                    <a href="https://www.youtube.com/@arjuna_ragill" target="_blank" rel="noopener noreferrer"
                        className="group col-span-1 border border-white/5 hover:border-[#FF0000]/30 bg-white/[0.02] hover:bg-[#FF0000]/5 backdrop-blur-md rounded-[2rem] aspect-square p-5 md:p-6 flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:-translate-y-1">
                        <div className="p-3 md:p-4 rounded-full bg-white/5 group-hover:scale-110 group-hover:bg-[#FF0000]/20 transition-all duration-500">
                            <Youtube size={28} strokeWidth={1.5} className="text-slate-400 group-hover:text-[#FF0000] transition-colors" />
                        </div>
                        <span className="text-sm font-bold tracking-wider text-slate-300 group-hover:text-white transition-colors">YouTube</span>
                    </a>

                    {/* Fiverr (Small 1x1) */}
                    <a href="https://www.fiverr.com/s/o8lNzpx" target="_blank" rel="noopener noreferrer"
                        className="group col-span-1 border border-white/5 hover:border-[#1dbf73]/30 bg-white/[0.02] hover:bg-[#1dbf73]/5 backdrop-blur-md rounded-[2rem] aspect-square p-5 md:p-6 flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:-translate-y-1">
                        <div className="p-3 md:p-4 rounded-full bg-white/5 group-hover:scale-110 group-hover:bg-[#1dbf73]/20 transition-all duration-500 aspect-square text-center">
                            fi
                        </div>
                        <span className="text-sm font-bold tracking-wider text-slate-300 group-hover:text-white transition-colors">Fiverr</span>
                    </a>

                </div>
            </div>
        </div>
    )
}
