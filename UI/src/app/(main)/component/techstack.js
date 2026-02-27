"use client"
import { useState, useEffect } from "react"
import axios from "axios"

export default function TechStack() {
    const [techStacksByCategory, setTechStacksByCategory] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchTechStacks = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/v1/open/ts")
                const data = response.data.data || response.data || []

                const grouped = data.reduce((acc, curr) => {
                    const category = curr.category ? curr.category.trim() : "Others";
                    const key = category === "" ? "Others" : category;
                    if (!acc[key]) {
                        acc[key] = [];
                    }
                    acc[key].push(curr);
                    return acc;
                }, {});

                setTechStacksByCategory(grouped)
            } catch (err) {
                console.error("Failed to fetch tech stacks:", err)
                setError("Failed to load tech stacks")
            } finally {
                setLoading(false)
            }
        }

        fetchTechStacks()
    }, [])

    return (
        < section className="w-full relative z-10 flex items-center justify-center p-6" id="mars" >
            <div className="w-full max-w-6xl flex text-zinc-300 flex-col gap-10 items-center justify-center glass-card rounded-custom p-8 md:p-12 shadow-[0_0_30px_rgba(171,138,255,0.05)] border-brand/10 hover:border-brand/30 transition-all duration-500">
                <h2 className="text-3xl lg:text-4xl font-bold text-center tracking-widest uppercase mb-2 text-white">My Tech-Stack</h2>

                {loading ? (
                    <div className="flex justify-center items-center py-10 w-full">
                        <div className="size-8 border-2 border-brand/30 border-t-brand rounded-full animate-spin"></div>
                    </div>
                ) : error ? (
                    <div className="text-center text-red-400 py-10">{error}</div>
                ) : Object.keys(techStacksByCategory).length === 0 ? (
                    <div className="text-center text-zinc-400 py-10">No tech stacks found.</div>
                ) : (
                    <div className="flex flex-col gap-12 w-full mt-4">
                        {Object.entries(techStacksByCategory).map(([category, techs]) => (
                            <div key={category} className="flex flex-col items-center justify-center w-full">
                                <h3 className="text-lg md:text-xl font-bold text-[#c084fc] uppercase tracking-widest mb-6 opacity-90">{category}</h3>
                                <div className="flex flex-row flex-wrap items-center justify-center gap-4 md:gap-6">
                                    {techs.map((tech) => (
                                        <div key={tech.id} className="flex flex-col items-center justify-center glass-card rounded-custom py-4 px-6 md:px-8 w-[100px] md:w-[130px] aspect-square group hover:bg-brand/10 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(171,138,255,0.15)] hover:border-brand/50 transition-all duration-300 cursor-pointer border border-brand/10">
                                            <div className="w-10 h-10 md:w-12 md:h-12 relative flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                                {tech.icon ? (
                                                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                                                ) : (
                                                    <div className="size-full bg-brand/10 border border-brand/20 rounded-lg flex items-center justify-center text-brand font-bold">
                                                        {tech.name.substring(0, 1)}
                                                    </div>
                                                )}
                                            </div>
                                            <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-zinc-400 group-hover:text-white transition-colors text-center">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section >
    );
}