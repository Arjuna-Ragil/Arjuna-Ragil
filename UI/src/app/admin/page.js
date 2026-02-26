"use client";

import { Rocket, Briefcase, Code2, PlusCircle, Edit, Eye, Trash2 } from "lucide-react";

export default function AdminPage() {
    return (
        <main className="flex-1 flex flex-col h-full overflow-y-auto">
            {/* Header */}
            <header className="px-4 md:px-8 py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-100 tracking-tight">Mission Control</h2>
                    <p className="text-[#c084fc]/80 text-sm mt-2">Manage your cosmic portfolio and mission logs across the galaxy.</p>
                </div>
            </header>

            <div className="px-4 md:px-8 flex flex-col gap-12 pb-16">

                {/* Tech Stack Section */}
                <section>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="size-10 rounded-lg bg-[#a855f7]/20 flex items-center justify-center text-[#a855f7]">
                                <Code2 size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-100">Tech Stack</h3>
                        </div>
                        <button className="bg-[#a855f7] hover:bg-[#a855f7]/90 text-white px-5 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#a855f7]/40 text-sm">
                            <PlusCircle size={18} />
                            Add Tech
                        </button>
                    </div>

                    <div className="glass-card rounded-xl overflow-hidden bg-[#0f0a19]/60 backdrop-blur-md border border-[#c084fc]/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[500px]">
                                <thead>
                                    <tr className="border-b border-[#1e1b4b]/50 bg-white/5">
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#c084fc]">Technology</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#c084fc]">Category</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#c084fc] text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#1e1b4b]/30">
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-5 font-bold text-slate-100">React</td>
                                        <td className="px-6 py-5 text-slate-300 text-sm">Frontend</td>
                                        <td className="px-6 py-5 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="p-2 hover:bg-white/10 rounded-lg text-[#c084fc] transition-all" title="Edit"><Edit size={18} /></button>
                                                <button className="p-2 hover:bg-red-500/10 rounded-lg text-red-400 transition-all" title="Delete"><Trash2 size={18} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-5 font-bold text-slate-100">Node.js</td>
                                        <td className="px-6 py-5 text-slate-300 text-sm">Backend</td>
                                        <td className="px-6 py-5 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="p-2 hover:bg-white/10 rounded-lg text-[#c084fc] transition-all" title="Edit"><Edit size={18} /></button>
                                                <button className="p-2 hover:bg-red-500/10 rounded-lg text-red-400 transition-all" title="Delete"><Trash2 size={18} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="size-10 rounded-lg bg-[#a855f7]/20 flex items-center justify-center text-[#a855f7]">
                                <Briefcase size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-100">Experience</h3>
                        </div>
                        <button className="bg-[#a855f7] hover:bg-[#a855f7]/90 text-white px-5 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#a855f7]/40 text-sm">
                            <PlusCircle size={18} />
                            Add Experience
                        </button>
                    </div>

                    <div className="glass-card rounded-xl overflow-hidden bg-[#0f0a19]/60 backdrop-blur-md border border-[#c084fc]/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[500px]">
                                <thead>
                                    <tr className="border-b border-[#1e1b4b]/50 bg-white/5">
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#c084fc]">Role / Company</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#c084fc]">Duration</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#c084fc] text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#1e1b4b]/30">
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-5">
                                            <p className="font-bold text-slate-100">Backend System Engineer</p>
                                            <p className="text-xs text-[#c084fc]/60 mt-1">Freelance</p>
                                        </td>
                                        <td className="px-6 py-5 text-sm text-slate-300">2023 - Present</td>
                                        <td className="px-6 py-5 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="p-2 hover:bg-white/10 rounded-lg text-[#c084fc] transition-all" title="Edit"><Edit size={18} /></button>
                                                <button className="p-2 hover:bg-red-500/10 rounded-lg text-red-400 transition-all" title="Delete"><Trash2 size={18} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="size-10 rounded-lg bg-[#a855f7]/20 flex items-center justify-center text-[#a855f7]">
                                <Rocket size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-100">Project Constellations</h3>
                        </div>
                        <button className="bg-[#a855f7] hover:bg-[#a855f7]/90 text-white px-5 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#a855f7]/40 text-sm">
                            <PlusCircle size={18} />
                            Add Project
                        </button>
                    </div>

                    <div className="glass-card rounded-xl overflow-hidden bg-[#0f0a19]/60 backdrop-blur-md border border-[#c084fc]/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[700px]">
                                <thead>
                                    <tr className="border-b border-[#1e1b4b]/50 bg-white/5">
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#c084fc]">Project Detail</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#c084fc]">Status</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#c084fc]">Tech Stack</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#c084fc] text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#1e1b4b]/30">
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="size-10 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center text-white font-black text-xs shrink-0">DEM</div>
                                                <div>
                                                    <p className="font-bold text-slate-100">Demokratos</p>
                                                    <p className="text-xs text-[#c084fc]/60 mt-1">Updated 2 days ago</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Active</span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex gap-2 flex-wrap">
                                                <span className="px-2 py-1 rounded bg-[#1e1b4b]/20 text-[10px] font-bold text-[#c084fc] border border-[#c084fc]/10">REACT</span>
                                                <span className="px-2 py-1 rounded bg-[#1e1b4b]/20 text-[10px] font-bold text-[#c084fc] border border-[#c084fc]/10">FIREBASE</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="p-2 hover:bg-white/10 rounded-lg text-[#c084fc] transition-all" title="Edit"><Edit size={18} /></button>
                                                <button className="p-2 hover:bg-white/10 rounded-lg text-[#c084fc] transition-all" title="View"><Eye size={18} /></button>
                                                <button className="p-2 hover:bg-red-500/10 rounded-lg text-red-400 transition-all" title="Delete"><Trash2 size={18} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="size-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-white font-black text-xs shrink-0">PLN</div>
                                                <div>
                                                    <p className="font-bold text-slate-100">Planix</p>
                                                    <p className="text-xs text-[#c084fc]/60 mt-1">Updated 1 week ago</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Active</span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex gap-2 flex-wrap max-w-[150px]">
                                                <span className="px-2 py-1 rounded bg-[#1e1b4b]/20 text-[10px] font-bold text-[#c084fc] border border-[#c084fc]/10">REACT</span>
                                                <span className="px-2 py-1 rounded bg-[#1e1b4b]/20 text-[10px] font-bold text-[#c084fc] border border-[#c084fc]/10">LEAFLET</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="p-2 hover:bg-white/10 rounded-lg text-[#c084fc] transition-all" title="Edit"><Edit size={18} /></button>
                                                <button className="p-2 hover:bg-white/10 rounded-lg text-[#c084fc] transition-all" title="View"><Eye size={18} /></button>
                                                <button className="p-2 hover:bg-red-500/10 rounded-lg text-red-400 transition-all" title="Delete"><Trash2 size={18} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
