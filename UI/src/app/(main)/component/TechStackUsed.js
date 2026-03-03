"use client"

export default function TechStackUsed() {
    const techStacks = [
        "Chromadb.png", "Cloudflare.png", "Docker.png", "Gin.png",
        "GitHub Actions.png", "Go.png", "Grafana.png", "JavaScript.png",
        "Ollama.png", "Postgres.png", "Prometheus.png", "Python.png",
        "React.png", "Seaweedfs.png", "Tailscale.jpg", "Tailwind.png",
        "Ubuntu.png", "casaos.png", "git.png", "langchain.png", "nextjs.jpg"
    ];

    return (
        <section className="w-full py-10 flex flex-col items-center justify-center relative border-t border-brand/10 z-10 overflow-hidden" id="techstack-used">
            <div className="absolute inset-0 bg-brand/5 backdrop-blur-[2px]"></div>
            <h2 className="text-lg md:text-xl font-bold tracking-widest text-[#a855f7] uppercase mb-8 text-center px-4 relative z-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                Technology use in this overengineered Portfolio
            </h2>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-wrap justify-center items-center gap-6 md:gap-10 opacity-80 relative z-10">
                {techStacks.map((fileName, idx) => (
                    <div key={idx} className="group relative flex items-center justify-center h-8 w-auto md:h-10 grayscale-[70%] hover:grayscale-0 hover:scale-[1.15] hover:-translate-y-1.5 transition-all duration-500 cursor-pointer">
                        <img
                            src={`/techstack/${fileName}`}
                            alt={fileName.split('.')[0]}
                            className="h-full w-auto object-contain drop-shadow-md group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all duration-500"
                        />
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                            <span className="bg-[#0f0a19]/90 text-white text-[10px] sm:text-xs px-3 py-1 rounded-full whitespace-nowrap border border-brand/30 shadow-[0_0_8px_rgba(168,85,247,0.3)] tracking-wide font-medium">
                                {fileName.split('.')[0]}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
