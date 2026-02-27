"use client";

import { Briefcase, Code2, PlusCircle, Edit, Trash2, X } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ExperienceAdmin() {
    const [experiences, setExperiences] = useState([]);
    const [expLoading, setExpLoading] = useState(true);

    // Experience Modal state
    const [isAddExpModalOpen, setIsAddExpModalOpen] = useState(false);
    const [expTitle, setExpTitle] = useState("");
    const [expCompany, setExpCompany] = useState("");
    const [expPeriod, setExpPeriod] = useState("");
    const [expDescription, setExpDescription] = useState("");
    const [expTasks, setExpTasks] = useState([""]); // array of task strings
    const [expImage, setExpImage] = useState(null);
    const [addExpLoading, setAddExpLoading] = useState(false);
    const [addExpError, setAddExpError] = useState("");

    const [isEditExpModalOpen, setIsEditExpModalOpen] = useState(false);
    const [editExpId, setEditExpId] = useState(null);
    const [editExpTitle, setEditExpTitle] = useState("");
    const [editExpCompany, setEditExpCompany] = useState("");
    const [editExpPeriod, setEditExpPeriod] = useState("");
    const [editExpDescription, setEditExpDescription] = useState("");
    const [editExpTasks, setEditExpTasks] = useState([""]); // array of task strings
    const [editExpImage, setEditExpImage] = useState(null);
    const [editExpLoading, setEditExpLoading] = useState(false);
    const [editExpError, setEditExpError] = useState("");

    const [isDeleteExpModalOpen, setIsDeleteExpModalOpen] = useState(false);
    const [deleteExpId, setDeleteExpId] = useState(null);
    const [deleteExpTitle, setDeleteExpTitle] = useState("");
    const [deleteExpCompany, setDeleteExpCompany] = useState("");
    const [deleteExpLoading, setDeleteExpLoading] = useState(false);
    const [deleteExpError, setDeleteExpError] = useState("");

    const [isViewExpModalOpen, setIsViewExpModalOpen] = useState(false);
    const [viewExpData, setViewExpData] = useState(null);
    const [viewExpLoading, setViewExpLoading] = useState(false);
    const [viewExpError, setViewExpError] = useState("");

    const [initialEditExp, setInitialEditExp] = useState(null);

    const fetchExperiences = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/open/exp");
            setExperiences(response.data.data || response.data || []);
        } catch (error) {
            console.error("Failed to fetch experiences:", error);
        } finally {
            setExpLoading(false);
        }
    };

    useEffect(() => {
        fetchExperiences();
    }, []);

    const openEditExpModal = (exp) => {
        setEditExpId(exp.id);
        setEditExpTitle(exp.title);
        setEditExpCompany(exp.company);
        setEditExpPeriod(exp.period);
        setEditExpDescription(exp.description);

        // Populate tasks from exp object if they exist, otherwise default to one empty string
        const tasks = exp.tasks && exp.tasks.length > 0 ? exp.tasks.map(t => t.description) : [""];
        setEditExpTasks(tasks);
        setInitialEditExp({
            title: exp.title,
            company: exp.company,
            period: exp.period,
            description: exp.description,
            tasks: tasks
        });

        setEditExpImage(null);
        setEditExpError("");
        setIsEditExpModalOpen(true);
    };

    const openDeleteExpModal = (exp) => {
        setDeleteExpId(exp.id);
        setDeleteExpTitle(exp.title);
        setDeleteExpCompany(exp.company);
        setDeleteExpError("");
        setIsDeleteExpModalOpen(true);
    };

    const openViewExpModal = async (id) => {
        setIsViewExpModalOpen(true);
        setViewExpLoading(true);
        setViewExpError("");
        setViewExpData(null);

        try {
            const response = await axios.get(`http://localhost:8080/api/v1/protected/exp/${id}`, {
                withCredentials: true
            });
            setViewExpData(response.data.data || response.data);
        } catch (err) {
            console.error("Failed to fetch experience details:", err);
            setViewExpError("Failed to load experience details.");
        } finally {
            setViewExpLoading(false);
        }
    };

    const handleAddExpSubmit = async (e) => {
        e.preventDefault();
        setAddExpLoading(true);
        setAddExpError("");

        try {
            const formData = new FormData();
            formData.append("title", expTitle);
            formData.append("company", expCompany);
            formData.append("period", expPeriod);
            formData.append("description", expDescription);

            expTasks.forEach((task) => {
                if (task.trim() !== "") {
                    formData.append("tasks", task);
                }
            });

            if (expImage) formData.append("image", expImage);

            await axios.post("http://localhost:8080/api/v1/protected/exp/add", formData, {
                withCredentials: true,
                headers: { "Content-Type": "multipart/form-data" }
            });

            setIsAddExpModalOpen(false);
            setExpTitle("");
            setExpCompany("");
            setExpPeriod("");
            setExpDescription("");
            setExpTasks([""]);
            setExpImage(null);
            fetchExperiences();
        } catch (err) {
            console.error("Add experience failed:", err);
            setAddExpError(err.response?.data?.error || err.response?.data?.message || err.message || "Failed to add experience");
        } finally {
            setAddExpLoading(false);
        }
    };

    const handleEditExpSubmit = async (e) => {
        e.preventDefault();
        setEditExpLoading(true);
        setEditExpError("");

        try {
            const formData = new FormData();
            formData.append("id", editExpId);
            formData.append("title", editExpTitle);
            formData.append("company", editExpCompany);
            formData.append("period", editExpPeriod);
            formData.append("description", editExpDescription);

            editExpTasks.forEach((task) => {
                if (task.trim() !== "") {
                    formData.append("tasks", task);
                }
            });

            if (editExpImage) {
                formData.append("image", editExpImage);
            }

            await axios.put("http://localhost:8080/api/v1/protected/exp/update", formData, {
                withCredentials: true,
                headers: { "Content-Type": "multipart/form-data" }
            });

            setIsEditExpModalOpen(false);
            fetchExperiences();
        } catch (err) {
            console.error("Edit experience failed:", err);
            setEditExpError(err.response?.data?.error || err.response?.data?.message || err.message || "Failed to edit experience");
        } finally {
            setEditExpLoading(false);
        }
    };

    const handleDeleteExpSubmit = async (e) => {
        e.preventDefault();
        setDeleteExpLoading(true);
        setDeleteExpError("");

        try {
            await axios.delete(`http://localhost:8080/api/v1/protected/exp/delete/${deleteExpId}`, {
                withCredentials: true,
                headers: { "Content-Type": "application/json" }
            });

            setIsDeleteExpModalOpen(false);
            fetchExperiences();
        } catch (err) {
            console.error("Delete experience failed:", err);
            setDeleteExpError(err.response?.data?.error || err.response?.data?.message || err.message || "Failed to delete experience");
        } finally {
            setDeleteExpLoading(false);
        }
    };

    return (
        <section>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-[#a855f7]/20 flex items-center justify-center text-[#a855f7]">
                        <Briefcase size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100">Experience</h3>
                </div>
                <button
                    onClick={() => setIsAddExpModalOpen(true)}
                    className="bg-[#a855f7] hover:bg-[#a855f7]/90 text-white px-5 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#a855f7]/40 text-sm"
                >
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
                            {expLoading ? (
                                <tr>
                                    <td colSpan="3" className="px-6 py-5 text-center text-[#c084fc]/50 text-sm font-medium">Loading experiences...</td>
                                </tr>
                            ) : experiences.length === 0 ? (
                                <tr>
                                    <td colSpan="3" className="px-6 py-5 text-center text-[#c084fc]/50 text-sm font-medium">No experience logged yet.</td>
                                </tr>
                            ) : (
                                experiences.map((exp) => (
                                    <tr key={exp.id} className="hover:bg-white/5 transition-colors cursor-pointer" onClick={() => openViewExpModal(exp.id)}>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="size-10 relative flex items-center justify-center bg-white/5 rounded-lg border border-white/10 shrink-0 overflow-hidden">
                                                    {exp.image ? (
                                                        <img src={exp.image} alt={exp.company} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <Briefcase size={20} className="text-[#a855f7]" />
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-100">{exp.title}</p>
                                                    <p className="text-xs text-[#c084fc]/60 mt-1">{exp.company}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-sm text-slate-300">{exp.period}</td>
                                        <td className="px-6 py-5 text-right" onClick={(e) => e.stopPropagation()}>
                                            <div className="flex justify-end gap-2">
                                                <button
                                                    onClick={() => openEditExpModal(exp)}
                                                    className="p-2 hover:bg-white/10 rounded-lg text-[#c084fc] transition-all" title="Edit"
                                                >
                                                    <Edit size={18} />
                                                </button>
                                                <button
                                                    onClick={() => openDeleteExpModal(exp)}
                                                    className="p-2 hover:bg-red-500/10 rounded-lg text-red-400 transition-all" title="Delete"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Experience Modal */}
            {isAddExpModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="glass-card w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#0f0a19]/90 border border-[#c084fc]/20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-[#1e1b4b]/50 bg-[#0f0a19]/90 backdrop-blur-md">
                            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                                <Briefcase size={20} className="text-[#a855f7]" /> Add Experience
                            </h3>
                            <button onClick={() => setIsAddExpModalOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6">
                            <form onSubmit={handleAddExpSubmit} className="flex flex-col gap-5">
                                {addExpError && (
                                    <div className="bg-red-500/10 border border-red-500/50 text-red-400 rounded-xl p-3 text-sm text-center">
                                        {addExpError}
                                    </div>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Title *</label>
                                        <input type="text" required value={expTitle} onChange={(e) => setExpTitle(e.target.value)} className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all" placeholder="e.g. Senior Developer" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Company *</label>
                                        <input type="text" required value={expCompany} onChange={(e) => setExpCompany(e.target.value)} className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all" placeholder="e.g. Google" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Period</label>
                                    <input type="text" value={expPeriod} onChange={(e) => setExpPeriod(e.target.value)} className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all" placeholder="e.g. Jan 2022 - Present" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Description</label>
                                    <textarea value={expDescription} onChange={(e) => setExpDescription(e.target.value)} rows="4" className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all resize-none" placeholder="Describe your responsibilities and achievements..." />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Key Responsibilities & Tasks</label>
                                    {expTasks.map((task, index) => (
                                        <div key={index} className="flex gap-2">
                                            <input
                                                type="text"
                                                value={task}
                                                onChange={(e) => {
                                                    const newTasks = [...expTasks];
                                                    newTasks[index] = e.target.value;
                                                    setExpTasks(newTasks);
                                                }}
                                                className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all"
                                                placeholder="e.g. Developed scalable backend services..."
                                            />
                                            {expTasks.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        const newTasks = expTasks.filter((_, i) => i !== index);
                                                        setExpTasks(newTasks);
                                                    }}
                                                    className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl transition-colors border border-red-500/20"
                                                >
                                                    <X size={18} />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => setExpTasks([...expTasks, ""])}
                                        className="text-xs font-bold text-[#a855f7] hover:text-[#c084fc] transition-colors self-start mt-1 flex items-center gap-1"
                                    >
                                        <PlusCircle size={14} /> Add Task
                                    </button>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Company Logo / Image *</label>
                                    <input type="file" required accept=".jpg,.jpeg,.png" onChange={(e) => setExpImage(e.target.files[0])} className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2 px-3 text-slate-100 text-sm file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#a855f7] file:text-white hover:file:bg-[#a855f7]/80 transition-all cursor-pointer" />
                                </div>
                                <button type="submit" disabled={addExpLoading} className="mt-2 bg-[#a855f7] hover:bg-[#a855f7]/90 text-white w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#a855f7]/40 uppercase tracking-widest text-sm disabled:opacity-70 disabled:cursor-not-allowed">
                                    {addExpLoading ? <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : "Add Experience"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Experience Modal */}
            {isEditExpModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="glass-card w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#0f0a19]/90 border border-[#c084fc]/20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-[#1e1b4b]/50 bg-[#0f0a19]/90 backdrop-blur-md">
                            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                                <Briefcase size={20} className="text-[#a855f7]" /> Edit Experience
                            </h3>
                            <button onClick={() => setIsEditExpModalOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6">
                            <form onSubmit={handleEditExpSubmit} className="flex flex-col gap-5">
                                {editExpError && (
                                    <div className="bg-red-500/10 border border-red-500/50 text-red-400 rounded-xl p-3 text-sm text-center">
                                        {editExpError}
                                    </div>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Title *</label>
                                        <input type="text" required value={editExpTitle} onChange={(e) => setEditExpTitle(e.target.value)} className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Company *</label>
                                        <input type="text" required value={editExpCompany} onChange={(e) => setEditExpCompany(e.target.value)} className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Period</label>
                                    <input type="text" value={editExpPeriod} onChange={(e) => setEditExpPeriod(e.target.value)} className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Description</label>
                                    <textarea value={editExpDescription} onChange={(e) => setEditExpDescription(e.target.value)} rows="4" className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all resize-none" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Key Responsibilities & Tasks</label>
                                    {editExpTasks.map((task, index) => (
                                        <div key={index} className="flex gap-2">
                                            <input
                                                type="text"
                                                value={task}
                                                onChange={(e) => {
                                                    const newTasks = [...editExpTasks];
                                                    newTasks[index] = e.target.value;
                                                    setEditExpTasks(newTasks);
                                                }}
                                                className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all"
                                                placeholder="e.g. Developed scalable backend services..."
                                            />
                                            {editExpTasks.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        const newTasks = editExpTasks.filter((_, i) => i !== index);
                                                        setEditExpTasks(newTasks);
                                                    }}
                                                    className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl transition-colors border border-red-500/20"
                                                >
                                                    <X size={18} />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => setEditExpTasks([...editExpTasks, ""])}
                                        className="text-xs font-bold text-[#a855f7] hover:text-[#c084fc] transition-colors self-start mt-1 flex items-center gap-1"
                                    >
                                        <PlusCircle size={14} /> Add Task
                                    </button>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">New Company Logo / Image</label>
                                    <input type="file" accept=".jpg,.jpeg,.png" onChange={(e) => setEditExpImage(e.target.files[0])} className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2 px-3 text-slate-100 text-sm file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#a855f7] file:text-white hover:file:bg-[#a855f7]/80 transition-all cursor-pointer" />
                                </div>
                                <button
                                    type="submit"
                                    disabled={editExpLoading || (editExpTitle === initialEditExp?.title && editExpCompany === initialEditExp?.company && editExpPeriod === initialEditExp?.period && editExpDescription === initialEditExp?.description && JSON.stringify(editExpTasks) === JSON.stringify(initialEditExp?.tasks) && editExpImage === null)}
                                    className="mt-2 bg-[#a855f7] hover:bg-[#a855f7]/90 text-white w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#a855f7]/40 uppercase tracking-widest text-sm disabled:opacity-70 disabled:cursor-not-allowed">
                                    {editExpLoading ? <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : "Save Changes"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Experience Modal */}
            {isDeleteExpModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="glass-card w-full max-w-md bg-[#0f0a19]/90 border border-red-500/30 rounded-2xl shadow-[0_8px_32px_rgba(239,68,68,0.15)] overflow-hidden">
                        <div className="flex items-center justify-between p-6 border-b border-red-500/20 bg-red-500/5">
                            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                                <Trash2 size={20} className="text-red-400" /> Delete Experience
                            </h3>
                            <button onClick={() => setIsDeleteExpModalOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6">
                            <form onSubmit={handleDeleteExpSubmit} className="flex flex-col gap-5">
                                {deleteExpError && (
                                    <div className="bg-red-500/10 border border-red-500/50 text-red-400 rounded-xl p-3 text-sm text-center">
                                        {deleteExpError}
                                    </div>
                                )}

                                <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                                    <p className="text-slate-200 text-sm leading-relaxed text-center">
                                        Are you sure you want to permanently delete <strong className="text-white">"{deleteExpTitle}"</strong> at <strong className="text-white">"{deleteExpCompany}"</strong> from your mission logs? This action cannot be undone.
                                    </p>
                                </div>

                                <div className="flex gap-3 mt-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsDeleteExpModalOpen(false)}
                                        className="flex-1 bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl font-bold transition-all border border-white/10 uppercase tracking-widest text-sm"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit" disabled={deleteExpLoading}
                                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-500/20 uppercase tracking-widest text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {deleteExpLoading ? <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : "Delete"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* View Experience Details Modal */}
            {isViewExpModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setIsViewExpModalOpen(false)}>
                    <div
                        className="glass-card w-full max-w-2xl max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-[#0f0a19]/90 border border-[#c084fc]/20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-[#1e1b4b]/50 bg-[#0f0a19]/90 backdrop-blur-md">
                            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                                <Briefcase size={20} className="text-[#a855f7]" /> Experience Details
                            </h3>
                            <button onClick={() => setIsViewExpModalOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6">
                            {viewExpLoading ? (
                                <div className="flex justify-center items-center py-20">
                                    <div className="size-8 border-2 border-[#a855f7]/30 border-t-[#a855f7] rounded-full animate-spin"></div>
                                </div>
                            ) : viewExpError ? (
                                <div className="p-8 text-center text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl">
                                    {viewExpError}
                                </div>
                            ) : viewExpData ? (
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-start gap-5">
                                        <div className="size-20 relative flex items-center justify-center bg-white/5 rounded-xl border border-white/10 shrink-0 overflow-hidden shadow-lg">
                                            {viewExpData.image ? (
                                                <img src={viewExpData.image} alt={viewExpData.company} className="w-full h-full object-cover" />
                                            ) : (
                                                <Briefcase size={32} className="text-[#a855f7]" />
                                            )}
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-black text-white">{viewExpData.title}</h2>
                                            <p className="text-lg font-bold text-[#c084fc] mt-1">{viewExpData.company}</p>
                                            <p className="text-sm text-slate-400 font-medium mt-1 uppercase tracking-wider">{viewExpData.period}</p>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 shadow-inner">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-[#a855f7] mb-3">Description</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed max-w-none">
                                            {viewExpData.description}
                                        </p>
                                    </div>

                                    {viewExpData.tasks && viewExpData.tasks.length > 0 && (
                                        <div className="bg-white/5 border border-white/10 rounded-xl p-5 shadow-inner">
                                            <h4 className="text-xs font-black uppercase tracking-widest text-[#a855f7] mb-3">Key Responsibilities</h4>
                                            <ul className="space-y-3">
                                                {viewExpData.tasks.map((task) => (
                                                    <li key={task.id} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                                                        <span className="text-[#a855f7] mt-1 shrink-0"><Code2 size={14} /></span>
                                                        <span>{task.description}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
