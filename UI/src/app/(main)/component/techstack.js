import Image from "next/image"

export default function TechStack() {
    const techStack = [
        {
            "name": "JavaScript",
            "image": "/techstack/jsLogo.svg"
        },
        {
            "name": "React",
            "image": "/techstack/reactLogo.svg"
        },
        {
            "name": "Next.js",
            "image": "/techstack/nextLogo.svg"
        },
        {
            "name": "Tailwind",
            "image": "/techstack/tailwindLogo.svg"
        },
        {
            "name": "Three.js",
            "image": "/techstack/threeLogo.svg"
        },
        {
            "name": "Node.js",
            "image": "/techstack/nodeLogo.svg"
        },
        {
            "name": "Express.js",
            "image": "/techstack/expressLogo.svg"
        },
        {
            "name": "Firebase",
            "image": "/techstack/firebaseLogo.svg"
        },
        {
            "name": "Vercel",
            "image": "/techstack/vercelLogo.svg"
        },
    ]

    return (
        <section className="w-full relative z-10 flex items-center justify-center p-6" id="mars">
            <div className="w-full max-w-6xl flex text-zinc-300 flex-col gap-8 items-center justify-center glass-card rounded-custom p-8 md:p-12 shadow-[0_0_30px_rgba(171,138,255,0.05)] border-brand/10 hover:border-brand/30 transition-all duration-500">
                <h2 className="text-3xl lg:text-4xl font-bold text-center tracking-widest uppercase mb-4 text-white">My Tech-Stack</h2>

                <div className="flex flex-row flex-wrap items-center justify-center gap-4 md:gap-6 mt-2">
                    {techStack.map((tech) => (
                        <div key={tech.name} className="flex flex-col items-center justify-center glass-card rounded-custom py-4 px-6 md:px-8 w-[100px] md:w-[130px] aspect-square group hover:bg-brand/10 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(171,138,255,0.15)] hover:border-brand/50 transition-all duration-300 cursor-pointer border border-brand/10">
                            <div className="w-10 h-10 md:w-12 md:h-12 relative flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                <Image src={tech.image} alt={tech.name} fill className="object-contain" />
                            </div>
                            <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-zinc-400 group-hover:text-white transition-colors text-center">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}