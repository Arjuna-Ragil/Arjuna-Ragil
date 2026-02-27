"use client";

import { Code2, PlusCircle, Edit, Trash2, X } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function TechStackAdmin() {
    const [techStacks, setTechStacks] = useState({});
    const [techLoading, setTechLoading] = useState(true);

    // Modal state
    const [isAddTechModalOpen, setIsAddTechModalOpen] = useState(false);
    const [techName, setTechName] = useState("");
    const [techCategory, setTechCategory] = useState("");
    const [techIcon, setTechIcon] = useState(null);
    const [addTechLoading, setAddTechLoading] = useState(false);
    const [addTechError, setAddTechError] = useState("");

    const [isEditTechModalOpen, setIsEditTechModalOpen] = useState(false);
    const [editTechId, setEditTechId] = useState(null);
    const [editTechName, setEditTechName] = useState("");
    const [editTechCategory, setEditTechCategory] = useState("");
    const [editTechIcon, setEditTechIcon] = useState(null);
    const [editTechLoading, setEditTechLoading] = useState(false);
    const [editTechError, setEditTechError] = useState("");

    const [isDeleteTechModalOpen, setIsDeleteTechModalOpen] = useState(false);
    const [deleteTechId, setDeleteTechId] = useState(null);
    const [deleteTechName, setDeleteTechName] = useState("");
    const [deleteTechLoading, setDeleteTechLoading] = useState(false);
    const [deleteTechError, setDeleteTechError] = useState("");

    const [initialEditTech, setInitialEditTech] = useState(null);

    const fetchTechStacks = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/open/ts");
            const data = response.data.data || response.data || [];

            const grouped = data.reduce((acc, curr) => {
                const category = curr.category ? curr.category.trim() : "Others";
                const key = category === "" ? "Others" : category;
                if (!acc[key]) {
                    acc[key] = [];
                }
                acc[key].push(curr);
                return acc;
            }, {});

            setTechStacks(grouped);
        } catch (error) {
            console.error("Failed to fetch tech stacks:", error);
        } finally {
            setTechLoading(false);
        }
    };

    useEffect(() => {
        fetchTechStacks();
    }, []);

    const openEditTechModal = (tech, categoryKey) => {
        setEditTechId(tech.id);
        const cat = categoryKey === "Others" ? (tech.category || "") : tech.category;
        setEditTechName(tech.name);
        setEditTechCategory(cat);
        setInitialEditTech({ name: tech.name, category: cat });
        setEditTechIcon(null);
        setEditTechError("");
        setIsEditTechModalOpen(true);
    };

    const openDeleteTechModal = (tech) => {
        setDeleteTechId(tech.id);
        setDeleteTechName(tech.name);
        setDeleteTechError("");
        setIsDeleteTechModalOpen(true);
    };

    const handleEditTechSubmit = async (e) => {
        e.preventDefault();
        setEditTechLoading(true);
        setEditTechError("");

        try {
            const formData = new FormData();
            formData.append("id", editTechId);
            formData.append("name", editTechName);
            formData.append("category", editTechCategory);
            if (editTechIcon) {
                formData.append("icon", editTechIcon);
            }

            await axios.put("http://localhost:8080/api/v1/protected/ts/update", formData, {
                withCredentials: true,
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });

            setIsEditTechModalOpen(false);
            fetchTechStacks();
        } catch (err) {
            console.error("Edit tech failed:", err);
            setEditTechError(err.response?.data?.error || err.response?.data?.message || err.message || "Failed to edit tech stack");
        } finally {
            setEditTechLoading(false);
        }
    };

    const handleDeleteTechSubmit = async (e) => {
        e.preventDefault();
        setDeleteTechLoading(true);
        setDeleteTechError("");

        try {
            await axios.delete(`http://localhost:8080/api/v1/protected/ts/delete/${deleteTechId}`, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                }
            });

            setIsDeleteTechModalOpen(false);
            fetchTechStacks();
        } catch (err) {
            console.error("Delete tech failed:", err);
            setDeleteTechError(err.response?.data?.error || err.response?.data?.message || err.message || "Failed to delete tech stack");
        } finally {
            setDeleteTechLoading(false);
        }
    };

    const handleAddTechSubmit = async (e) => {
        e.preventDefault();
        setAddTechLoading(true);
        setAddTechError("");

        try {
            const formData = new FormData();
            formData.append("name", techName);
            formData.append("category", techCategory);
            if (techIcon) {
                formData.append("icon", techIcon);
            }

            await axios.post("http://localhost:8080/api/v1/protected/ts/add", formData, {
                withCredentials: true,
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });

            setIsAddTechModalOpen(false);
            setTechName("");
            setTechCategory("");
            setTechIcon(null);
            fetchTechStacks();
        } catch (err) {
            console.error("Add tech failed:", err);
            setAddTechError(err.response?.data?.error || err.response?.data?.message || err.message || "Failed to add tech stack");
        } finally {
            setAddTechLoading(false);
        }
    };

    return (
        <section>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-[#a855f7]/20 flex items-center justify-center text-[#a855f7]">
                        <Code2 size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100">Tech Stack</h3>
                </div>
                <button
                    onClick={() => setIsAddTechModalOpen(true)}
                    className="bg-[#a855f7] hover:bg-[#a855f7]/90 text-white px-5 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#a855f7]/40 text-sm"
                >
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
                            {techLoading ? (
                                <tr>
                                    <td colSpan="3" className="px-6 py-5 text-center text-[#c084fc]/50 text-sm font-medium">Loading technologies...</td>
                                </tr>
                            ) : Object.keys(techStacks).length === 0 ? (
                                <tr>
                                    <td colSpan="3" className="px-6 py-5 text-center text-[#c084fc]/50 text-sm font-medium">No technologies logged yet.</td>
                                </tr>
                            ) : (
                                Object.entries(techStacks).map(([category, items]) => (
                                    items.map((tech) => (
                                        <tr key={tech.id} className="hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-4">
                                                    <div className="size-10 relative flex items-center justify-center bg-white/5 rounded-lg border border-white/10 shrink-0">
                                                        {tech.icon ? (
                                                            <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
                                                        ) : (
                                                            <Code2 size={20} className="text-[#a855f7]" />
                                                        )}
                                                    </div>
                                                    <span className="font-bold text-slate-100">{tech.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-slate-300 text-sm">{category}</td>
                                            <td className="px-6 py-5 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button
                                                        onClick={() => openEditTechModal(tech, category)}
                                                        className="p-2 hover:bg-white/10 rounded-lg text-[#c084fc] transition-all" title="Edit"
                                                    >
                                                        <Edit size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => openDeleteTechModal(tech)}
                                                        className="p-2 hover:bg-red-500/10 rounded-lg text-red-400 transition-all" title="Delete"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Tech Modal */}
            {isAddTechModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="glass-card w-full max-w-md bg-[#0f0a19]/90 border border-[#c084fc]/20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden">
                        <div className="flex items-center justify-between p-6 border-b border-[#1e1b4b]/50 bg-white/5">
                            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                                <Code2 size={20} className="text-[#a855f7]" /> Add Tech Stack
                            </h3>
                            <button onClick={() => setIsAddTechModalOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6">
                            <form onSubmit={handleAddTechSubmit} className="flex flex-col gap-5">
                                {addTechError && (
                                    <div className="bg-red-500/10 border border-red-500/50 text-red-400 rounded-xl p-3 text-sm text-center">
                                        {addTechError}
                                    </div>
                                )}
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Name *</label>
                                    <input
                                        type="text" required value={techName} onChange={(e) => setTechName(e.target.value)}
                                        className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all"
                                        placeholder="e.g. React"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Category</label>
                                    <input
                                        type="text" value={techCategory} onChange={(e) => setTechCategory(e.target.value)}
                                        className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all"
                                        placeholder="e.g. Frontend"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Icon Image</label>
                                    <input
                                        type="file" accept=".jpg,.jpeg,.png" onChange={(e) => setTechIcon(e.target.files[0])}
                                        className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2 px-3 text-slate-100 text-sm file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#a855f7] file:text-white hover:file:bg-[#a855f7]/80 transition-all cursor-pointer"
                                    />
                                </div>
                                <button
                                    type="submit" disabled={addTechLoading}
                                    className="mt-2 bg-[#a855f7] hover:bg-[#a855f7]/90 text-white w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#a855f7]/40 uppercase tracking-widest text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {addTechLoading ? <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : "Add Technology"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Tech Modal */}
            {isEditTechModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="glass-card w-full max-w-md bg-[#0f0a19]/90 border border-[#c084fc]/20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden">
                        <div className="flex items-center justify-between p-6 border-b border-[#1e1b4b]/50 bg-white/5">
                            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                                <Code2 size={20} className="text-[#a855f7]" /> Edit Tech Stack
                            </h3>
                            <button onClick={() => setIsEditTechModalOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6">
                            <form onSubmit={handleEditTechSubmit} className="flex flex-col gap-5">
                                {editTechError && (
                                    <div className="bg-red-500/10 border border-red-500/50 text-red-400 rounded-xl p-3 text-sm text-center">
                                        {editTechError}
                                    </div>
                                )}
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Name *</label>
                                    <input
                                        type="text" required value={editTechName} onChange={(e) => setEditTechName(e.target.value)}
                                        className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all"
                                        placeholder="e.g. React"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Category</label>
                                    <input
                                        type="text" value={editTechCategory} onChange={(e) => setEditTechCategory(e.target.value)}
                                        className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all"
                                        placeholder="e.g. Frontend"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">New Icon Image</label>
                                    <input
                                        type="file" accept=".jpg,.jpeg,.png,.webp,.svg" onChange={(e) => setEditTechIcon(e.target.files[0])}
                                        className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2 px-3 text-slate-100 text-sm file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#a855f7] file:text-white hover:file:bg-[#a855f7]/80 transition-all cursor-pointer"
                                    />
                                </div>
                                <button
                                    type="submit" disabled={editTechLoading || (editTechName === initialEditTech?.name && editTechCategory === initialEditTech?.category && editTechIcon === null)}
                                    className="mt-2 bg-[#a855f7] hover:bg-[#a855f7]/90 text-white w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#a855f7]/40 uppercase tracking-widest text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {editTechLoading ? <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : "Save Changes"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Tech Modal */}
            {isDeleteTechModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="glass-card w-full max-w-md bg-[#0f0a19]/90 border border-red-500/30 rounded-2xl shadow-[0_8px_32px_rgba(239,68,68,0.15)] overflow-hidden">
                        <div className="flex items-center justify-between p-6 border-b border-red-500/20 bg-red-500/5">
                            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                                <Trash2 size={20} className="text-red-400" /> Delete Subject
                            </h3>
                            <button onClick={() => setIsDeleteTechModalOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6">
                            <form onSubmit={handleDeleteTechSubmit} className="flex flex-col gap-5">
                                {deleteTechError && (
                                    <div className="bg-red-500/10 border border-red-500/50 text-red-400 rounded-xl p-3 text-sm text-center">
                                        {deleteTechError}
                                    </div>
                                )}

                                <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                                    <p className="text-slate-200 text-sm leading-relaxed text-center">
                                        Are you sure you want to permanently delete <strong className="text-white">"{deleteTechName}"</strong> from your mission logs? This action cannot be undone.
                                    </p>
                                </div>

                                <div className="flex gap-3 mt-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsDeleteTechModalOpen(false)}
                                        className="flex-1 bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl font-bold transition-all border border-white/10 uppercase tracking-widest text-sm"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit" disabled={deleteTechLoading}
                                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-500/20 uppercase tracking-widest text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {deleteTechLoading ? <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : "Delete"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
