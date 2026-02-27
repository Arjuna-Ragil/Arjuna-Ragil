"use client"
import { useState, useEffect } from "react"
import { Github, ExternalLink } from "lucide-react"
import axios from "axios"

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/v1/open/pj");
                let data = response.data.data || response.data || [];
                // Sort by ID descending (newer projects first)
                data.sort((a, b) => b.id - a.id);
                setProjects(data);
            } catch (err) {
                console.error("Failed to fetch projects:", err);
                setError("Failed to load projects");
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const buttonClass = "text-zinc-300 border border-brand/30 hover:border-brand hover:text-brand hover:bg-brand/10 transition-all duration-300 rounded-full py-2 px-6 flex flex-row gap-3 items-center text-xs uppercase tracking-widest font-semibold justify-center w-full";
    const cardClass = "flex text-zinc-300 flex-col gap-6 items-center justify-between glass-card rounded-custom project-card p-6 md:p-10 transition-all duration-500 w-full h-full";
    const titleClass = "text-3xl font-bold text-center text-white tracking-widest uppercase mb-2";

    return (
        <section className="min-h-screen w-full p-6 md:p-10 py-20 flex flex-col items-center justify-center relative z-10" id="saturn">
            <h2 className="text-4xl font-bold text-center text-white tracking-widest uppercase mb-16">Featured Projects</h2>

            <div className="w-full max-w-7xl">
                {loading ? (
                    <div className="flex justify-center items-center py-20 w-full">
                        <div className="size-10 border-4 border-brand/30 border-t-brand rounded-full animate-spin"></div>
                    </div>
                ) : error ? (
                    <div className="text-center text-red-400 py-20 bg-[#0f0a19]/50 border border-red-500/20 rounded-2xl glass-card">
                        {error}
                    </div>
                ) : projects.length === 0 ? (
                    <div className="text-center text-zinc-400 py-20 bg-[#0f0a19]/50 border border-brand/10 rounded-2xl glass-card">
                        No projects found.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                        {projects.map((project) => (
                            <div key={project.id} className={cardClass}>
                                <div className="w-full flex flex-col gap-6">
                                    <div className="flex flex-row items-center justify-center gap-4">
                                        <h1 className={titleClass}>{project.title}</h1>
                                    </div>

                                    {project.image && (
                                        <div className="w-full lg:h-50 h-30 aspect-video relative flex items-center justify-center rounded-custom overflow-hidden border border-brand/20 group">
                                            <img src={project.image} alt="Screenshot" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none"></div>
                                        </div>
                                    )}

                                    <p className="text-lg md:text-justify leading-relaxed opacity-90">{project.description}</p>

                                    {project.tech_stacks && project.tech_stacks.length > 0 && (
                                        <div className="w-full grid md:grid-cols-3 grid-cols-2 gap-3 mt-2">
                                            {project.tech_stacks.map((tech) => (
                                                <div key={tech.id} className="flex flex-row items-center gap-2 border border-brand/20 rounded-custom p-2 hover:border-brand/50 hover:bg-brand/5 transition-colors">
                                                    {tech.icon ? (
                                                        <img src={tech.icon} alt={tech.name} className="w-5 h-5 object-contain" />
                                                    ) : (
                                                        <div className="w-5 h-5 bg-brand/10 border border-brand/20 rounded-sm flex items-center justify-center text-brand font-bold text-[8px]">
                                                            {tech.name.substring(0, 1)}
                                                        </div>
                                                    )}
                                                    <span className="text-[10px] uppercase tracking-tighter text-zinc-400 truncate w-full" title={tech.name}>{tech.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="w-full grid grid-cols-2 gap-4 mt-auto pt-4">
                                    {project.github ? (
                                        <a href={project.github} className={buttonClass} target="_blank" rel="noopener noreferrer"><Github size={16} /> Github</a>
                                    ) : (
                                        <button disabled className={`${buttonClass} opacity-50 cursor-not-allowed`}><Github size={16} /> Github</button>
                                    )}

                                    {project.demo ? (
                                        <a href={project.demo} className={buttonClass} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} /> Demo</a>
                                    ) : (
                                        <button disabled className={`${buttonClass} opacity-50 cursor-not-allowed`}><ExternalLink size={16} /> Demo</button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}