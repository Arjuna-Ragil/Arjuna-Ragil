"use client"
import { useState, useEffect } from "react";
import axios from "axios";

export default function Exp() {
    const [experiences, setExperiences] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const response = await axios.get(`/api/v1/open/exp`);
                let data = response.data.data || response.data || [];
                // Sort by ID descending (newer at the top)
                data.sort((a, b) => b.id - a.id);
                setExperiences(data);
            } catch (err) {
                console.error("Failed to fetch experiences:", err);
                setError("Failed to load experiences");
            } finally {
                setLoading(false);
            }
        };

        fetchExperiences();
    }, []);

    return (
        <section className="min-h-screen h-full w-full flex flex-col items-center justify-center p-4 py-16" id="jupiter">
            <h2 className="text-3xl lg:text-4xl font-bold text-center tracking-widest uppercase text-white mb-12">My Experience</h2>

            <div className="max-w-4xl w-full flex flex-col gap-10">
                {loading ? (
                    <div className="flex justify-center items-center py-20 w-full">
                        <div className="size-10 border-4 border-brand/30 border-t-brand rounded-full animate-spin"></div>
                    </div>
                ) : error ? (
                    <div className="text-center text-red-400 py-20 bg-[#0f0a19]/50 border border-red-500/20 rounded-2xl glass-card">
                        {error}
                    </div>
                ) : experiences.length === 0 ? (
                    <div className="text-center text-zinc-400 py-20 bg-[#0f0a19]/50 border border-brand/10 rounded-2xl glass-card">
                        No experiences found.
                    </div>
                ) : (
                    experiences.map((exp) => (
                        <div key={exp.id} className="w-full flex text-zinc-300 flex-col gap-6 items-center justify-center glass-card rounded-custom p-8 md:p-12 shadow-[0_0_30px_rgba(171,138,255,0.05)] border-brand/10 hover:border-brand/30 transition-colors duration-500">
                            <div className="w-full flex flex-col items-center justify-evenly text-center gap-6">
                                {exp.image && (
                                    <div className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 relative group rounded-xl overflow-hidden shadow-lg shadow-brand/10 bg-white/5 border border-white/10 p-2">
                                        <img src={exp.image} alt={exp.company || exp.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg" />
                                    </div>
                                )}
                                <div className="flex flex-col gap-3 items-center w-full">
                                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wider text-center">
                                        {exp.title}
                                    </h2>
                                    {exp.period && (
                                        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm md:text-base font-medium tracking-wide">
                                            {exp.period}
                                        </div>
                                    )}
                                    {exp.company && <h3 className="text-xl font-bold text-[#c084fc] uppercase tracking-widest text-center">{exp.company}</h3>}
                                </div>

                                {exp.description && (
                                    <p className="px-4 md:px-12 text-center text-lg leading-relaxed opacity-90 mx-auto max-w-3xl mt-2 italic text-slate-400">
                                        &quot;{exp.description}&quot;
                                    </p>
                                )}

                                {exp.tasks && exp.tasks.length > 0 && (
                                    <ul className="list-disc px-4 md:px-12 text-justify space-y-3 text-lg leading-relaxed opacity-90 mx-auto max-w-3xl w-full mt-4">
                                        {exp.tasks.map(task => (
                                            <li key={task.id}>{task.description}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    )
}