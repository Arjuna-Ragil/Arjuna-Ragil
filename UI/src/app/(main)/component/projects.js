import { Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {

    const projectData = [
        {
            name: "Demokratos",
            logo: "/project/demoLogo.svg",
            screenshot: "/project/demoDoc.svg",
            description: "A web-based platform powered by Gemini AI that helps governments analyze public needs and aspirations.",
            techStack: [
                { name: "React", image: "/techstack/reactLogo.svg" },
                { name: "Tailwind", image: "/techstack/tailwindLogo.svg" },
                { name: "Firebase", image: "/techstack/firebaseLogo.svg" },
            ],
            github: "https://github.com/s-erzv/demokratos.git",
            demo: "https://demokratos-5b0ce.web.app/welcome"
        },
        {
            name: "Planix",
            logo: "/project/planLogo.svg",
            screenshot: "/project/planDoc.svg",
            description: "A web-based application that leverages AI (Gemini) and real-time spatial data to support urban planning and land-use analysis.",
            techStack: [
                { name: "React", image: "/techstack/reactLogo.svg" },
                { name: "Tailwind", image: "/techstack/tailwindLogo.svg" },
                { name: "Firebase", image: "/techstack/firebaseLogo.svg" },
                { name: "Leaflet", image: "/techstack/leafletLogo.svg" },
            ],
            github: "https://github.com/amdihsann/Planix.git",
            demo: "https://planix-2b1a8.web.app/"
        },
        {
            name: "PicPrice",
            logo: "/project/ppLogo.svg",
            screenshot: "/project/ppDoc.svg",
            description: "AI-powered web application that allows users to upload or take a picture of a product and instantly search for its average price across multiple online platforms.",
            techStack: [
                { name: "React", image: "/techstack/reactLogo.svg" },
                { name: "Tailwind", image: "/techstack/tailwindLogo.svg" },
                { name: "Firebase", image: "/techstack/firebaseLogo.svg" },
                { name: "CSE" }, // No image
            ],
            github: "https://github.com/Arjuna-Ragil/PicPrice.git",
            demo: "https://picprice-73be9.web.app/landingpage"
        }
    ];

    const buttonClass = "text-zinc-300 border border-brand/30 hover:border-brand hover:text-brand hover:bg-brand/10 transition-all duration-300 rounded-full py-2 px-6 flex flex-row gap-3 items-center text-xs uppercase tracking-widest font-semibold justify-center w-full";
    const cardClass = "flex text-zinc-300 flex-col gap-6 items-center justify-between glass-card rounded-custom project-card p-6 md:p-10 transition-all duration-500 w-full h-full";
    const titleClass = "text-3xl font-bold text-center text-white tracking-widest uppercase mb-2";

    return (
        <section className="min-h-screen w-full p-6 md:p-10 py-20 flex flex-col items-center justify-center relative z-10" id="saturn">
            <h2 className="text-4xl font-bold text-center text-white tracking-widest uppercase mb-16">Featured Projects</h2>
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {projectData.map((project, index) => (
                    <div key={index} className={cardClass}>
                        <div className="w-full flex flex-col gap-6">
                            <div className="flex flex-row items-center justify-center gap-4">
                                <h1 className={titleClass}>{project.name}</h1>
                                <Image src={project.logo} alt="Logo" height={40} width={40} className="object-contain" />
                            </div>
                            <div className="w-full lg:h-50 h-30 aspect-video relative flex items-center justify-center rounded-custom overflow-hidden border border-brand/20 group">
                                <Image src={project.screenshot} alt="Screenshot" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none"></div>
                            </div>
                            <p className="text-lg md:text-justify leading-relaxed opacity-90">{project.description}</p>
                            <div className="w-full grid md:grid-cols-3 grid-cols-2 gap-3 mt-2">
                                {project.techStack.map((tech) => (
                                    <div key={tech.name} className="flex flex-row items-center justify-center gap-2 border border-brand/20 rounded-custom p-2 hover:border-brand/50 hover:bg-brand/5 transition-colors">
                                        {tech.image && <Image src={tech.image} alt={tech.name} width={20} height={20} />}
                                        <span className="text-[10px] uppercase tracking-tighter text-zinc-400">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-2 gap-4 mt-auto pt-4">
                            <a href={project.github} className={buttonClass} target="_blank"><Github size={16} /> Github</a>
                            <a href={project.demo} className={buttonClass} target="_blank">Demo</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}