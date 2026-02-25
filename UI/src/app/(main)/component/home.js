export default function Home() {
    const tagline = "Ready to GO Backend and Infrastructure";
    const sub = "Creating High Performance and scalable backend with powerful infrastructure setup"

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden" id="content">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
            >
                <source src="/blackholeBg.mp4" type="video/mp4" />
            </video>

            {/* Overlay Layer: Blurs the video + adds a purplish tint for text readability */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#120b24]/50 backdrop-blur-[6px] z-0"></div>

            <div className="z-10 text-center flex flex-col items-center justify-center gap-6 relative">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[0.1em] uppercase text-white mb-4 max-w-5xl text-center leading-tight">
                    {tagline}
                </h1>
                <p className="text-brand text-sm md:text-base tracking-[0.2em] md:tracking-[0.3em] uppercase font-light opacity-80 mt-4">
                    {sub}
                </p>
            </div>
            <div className="absolute bottom-12 animate-bounce opacity-30 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
            </div>
        </section>
    )
}