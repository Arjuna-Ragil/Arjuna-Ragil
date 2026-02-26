"use client";

import { Rocket, Briefcase, Code2, PlusCircle, Edit, Eye, Trash2, X } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AdminPage() {
    const [techStacks, setTechStacks] = useState({});
    const [techLoading, setTechLoading] = useState(true);

    const [experiences, setExperiences] = useState([]);
    const [expLoading, setExpLoading] = useState(true);

    const [projects, setProjects] = useState([]);
    const [pjLoading, setPjLoading] = useState(true);

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
    const [editTechLoading, setEditTechLoading] = useState(false);
    const [editTechError, setEditTechError] = useState("");

    const [isDeleteTechModalOpen, setIsDeleteTechModalOpen] = useState(false);
    const [deleteTechId, setDeleteTechId] = useState(null);
    const [deleteTechName, setDeleteTechName] = useState("");
    const [deleteTechLoading, setDeleteTechLoading] = useState(false);
    const [deleteTechError, setDeleteTechError] = useState("");

    // Experience Modal state
    const [isAddExpModalOpen, setIsAddExpModalOpen] = useState(false);
    const [expTitle, setExpTitle] = useState("");
    const [expCompany, setExpCompany] = useState("");
    const [expPeriod, setExpPeriod] = useState("");
    const [expDescription, setExpDescription] = useState("");
    const [expImage, setExpImage] = useState(null);
    const [addExpLoading, setAddExpLoading] = useState(false);
    const [addExpError, setAddExpError] = useState("");

    const [isEditExpModalOpen, setIsEditExpModalOpen] = useState(false);
    const [editExpId, setEditExpId] = useState(null);
    const [editExpTitle, setEditExpTitle] = useState("");
    const [editExpCompany, setEditExpCompany] = useState("");
    const [editExpPeriod, setEditExpPeriod] = useState("");
    const [editExpDescription, setEditExpDescription] = useState("");
    const [editExpLoading, setEditExpLoading] = useState(false);
    const [editExpError, setEditExpError] = useState("");

    const [isDeleteExpModalOpen, setIsDeleteExpModalOpen] = useState(false);
    const [deleteExpId, setDeleteExpId] = useState(null);
    const [deleteExpTitle, setDeleteExpTitle] = useState("");
    const [deleteExpCompany, setDeleteExpCompany] = useState("");
    const [deleteExpLoading, setDeleteExpLoading] = useState(false);
    const [deleteExpError, setDeleteExpError] = useState("");

    // Project Modal state
    const [isAddPjModalOpen, setIsAddPjModalOpen] = useState(false);
    const [pjTitle, setPjTitle] = useState("");
    const [pjDescription, setPjDescription] = useState("");
    const [pjDemo, setPjDemo] = useState("");
    const [pjGithub, setPjGithub] = useState("");
    const [pjImage, setPjImage] = useState(null);
    const [pjTechStacks, setPjTechStacks] = useState([]); // array of IDs
    const [addPjLoading, setAddPjLoading] = useState(false);
    const [addPjError, setAddPjError] = useState("");

    const [isEditPjModalOpen, setIsEditPjModalOpen] = useState(false);
    const [editPjId, setEditPjId] = useState(null);
    const [editPjTitle, setEditPjTitle] = useState("");
    const [editPjDescription, setEditPjDescription] = useState("");
    const [editPjDemo, setEditPjDemo] = useState("");
    const [editPjGithub, setEditPjGithub] = useState("");
    const [editPjTechStacks, setEditPjTechStacks] = useState([]); // array of IDs
    const [editPjImage, setEditPjImage] = useState(null);
    const [editPjLoading, setEditPjLoading] = useState(false);
    const [editPjError, setEditPjError] = useState("");

    const [isDeletePjModalOpen, setIsDeletePjModalOpen] = useState(false);
    const [deletePjId, setDeletePjId] = useState(null);
    const [deletePjTitle, setDeletePjTitle] = useState("");
    const [deletePjLoading, setDeletePjLoading] = useState(false);
    const [deletePjError, setDeletePjError] = useState("");

    const [isViewPjModalOpen, setIsViewPjModalOpen] = useState(false);
    const [viewPjData, setViewPjData] = useState(null);
    const [viewPjLoading, setViewPjLoading] = useState(false);
    const [viewPjError, setViewPjError] = useState("");

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

    const fetchProjects = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/open/pj");
            setProjects(response.data.data || response.data || []);
        } catch (error) {
            console.error("Failed to fetch projects:", error);
        } finally {
            setPjLoading(false);
        }
    };

    useEffect(() => {
        fetchTechStacks();
        fetchExperiences();
        fetchProjects();
    }, []);

    const openEditTechModal = (tech, categoryKey) => {
        setEditTechId(tech.id);
        setEditTechName(tech.name);
        setEditTechCategory(categoryKey === "Others" ? (tech.category || "") : tech.category);
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
            await axios.put("http://localhost:8080/api/v1/protected/ts/update", {
                id: editTechId,
                name: editTechName,
                category: editTechCategory
            }, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
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

    const openEditExpModal = (exp) => {
        setEditExpId(exp.id);
        setEditExpTitle(exp.title);
        setEditExpCompany(exp.company);
        setEditExpPeriod(exp.period);
        setEditExpDescription(exp.description);
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
            await axios.put("http://localhost:8080/api/v1/protected/exp/update", {
                id: editExpId,
                title: editExpTitle,
                company: editExpCompany,
                period: editExpPeriod,
                description: editExpDescription
            }, {
                withCredentials: true,
                headers: { "Content-Type": "application/json" }
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

    const toggleTechStackSelection = (id, isEdit = false) => {
        if (isEdit) {
            setEditPjTechStacks(prev =>
                prev.includes(id) ? prev.filter(techId => techId !== id) : [...prev, id]
            );
        } else {
            setPjTechStacks(prev =>
                prev.includes(id) ? prev.filter(techId => techId !== id) : [...prev, id]
            );
        }
    };

    const handleAddPjSubmit = async (e) => {
        e.preventDefault();
        setAddPjLoading(true);
        setAddPjError("");

        try {
            const formData = new FormData();
            formData.append("title", pjTitle);
            formData.append("description", pjDescription);
            formData.append("demo", pjDemo);
            formData.append("github", pjGithub);

            // Append array of techstacks
            pjTechStacks.forEach((tsId) => {
                formData.append("tech_stacks", tsId);
            });

            if (pjImage) formData.append("image", pjImage);

            await axios.post("http://localhost:8080/api/v1/protected/pj/add", formData, {
                withCredentials: true,
                headers: { "Content-Type": "multipart/form-data" }
            });

            setIsAddPjModalOpen(false);
            setPjTitle("");
            setPjDescription("");
            setPjDemo("");
            setPjGithub("");
            setPjImage(null);
            setPjTechStacks([]);
            fetchProjects();
        } catch (err) {
            console.error("Add project failed:", err);
            setAddPjError(err.response?.data?.error || err.response?.data?.message || err.message || "Failed to add project");
        } finally {
            setAddPjLoading(false);
        }
    };

    const openEditPjModal = (pj) => {
        setEditPjId(pj.id);
        setEditPjTitle(pj.title);
        setEditPjDescription(pj.description);
        setEditPjDemo(pj.demo || "");
        setEditPjGithub(pj.github || "");
        setEditPjImage(null); // Force them to pick a new image or let backend ignore if empty (if you implement that)
        setEditPjError("");
        // Pre-fill tech stacks
        if (pj.tech_stacks) {
            setEditPjTechStacks(pj.tech_stacks.map(ts => ts.id));
        } else {
            setEditPjTechStacks([]);
        }
        setIsEditPjModalOpen(true);
    };

    const openDeletePjModal = (pj) => {
        setDeletePjId(pj.id);
        setDeletePjTitle(pj.title);
        setDeletePjError("");
        setIsDeletePjModalOpen(true);
    };

    const openViewPjModal = async (id) => {
        setIsViewPjModalOpen(true);
        setViewPjLoading(true);
        setViewPjError("");
        setViewPjData(null);

        try {
            const response = await axios.get(`http://localhost:8080/api/v1/protected/pj/${id}`, {
                withCredentials: true
            });
            setViewPjData(response.data.data || response.data);
        } catch (err) {
            console.error("Failed to fetch project details:", err);
            setViewPjError("Failed to load project details.");
        } finally {
            setViewPjLoading(false);
        }
    };

    const handleEditPjSubmit = async (e) => {
        e.preventDefault();
        setEditPjLoading(true);
        setEditPjError("");

        try {
            const formData = new FormData();
            formData.append("id", editPjId);
            formData.append("title", editPjTitle);
            formData.append("description", editPjDescription);
            formData.append("demo", editPjDemo);
            formData.append("github", editPjGithub);

            editPjTechStacks.forEach((tsId) => {
                formData.append("tech_stacks", tsId);
            });

            // If user selects a new image, send it. If not, maybe backend requires it, so enforce!
            if (editPjImage) {
                formData.append("image", editPjImage);
            }

            await axios.put("http://localhost:8080/api/v1/protected/pj/update", formData, {
                withCredentials: true,
                headers: { "Content-Type": "multipart/form-data" }
            });

            setIsEditPjModalOpen(false);
            fetchProjects();
        } catch (err) {
            console.error("Edit project failed:", err);
            setEditPjError(err.response?.data?.error || err.response?.data?.message || err.message || "Failed to edit project");
        } finally {
            setEditPjLoading(false);
        }
    };

    const handleDeletePjSubmit = async (e) => {
        e.preventDefault();
        setDeletePjLoading(true);
        setDeletePjError("");

        try {
            await axios.delete(`http://localhost:8080/api/v1/protected/pj/delete/${deletePjId}`, {
                withCredentials: true
            });

            setIsDeletePjModalOpen(false);
            fetchProjects();
        } catch (err) {
            console.error("Delete project failed:", err);
            setDeletePjError(err.response?.data?.error || err.response?.data?.message || err.message || "Failed to delete project");
        } finally {
            setDeletePjLoading(false);
        }
    };

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
                                            <tr key={exp.id} className="hover:bg-white/5 transition-colors">
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
                                                <td className="px-6 py-5 text-right">
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
                        <button
                            onClick={() => setIsAddPjModalOpen(true)}
                            className="bg-[#a855f7] hover:bg-[#a855f7]/90 text-white px-5 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#a855f7]/40 text-sm"
                        >
                            <PlusCircle size={18} />
                            Add Project
                        </button>
                    </div>

                    <div className="glass-card rounded-xl overflow-hidden bg-[#0f0a19]/60 backdrop-blur-md border border-[#c084fc]/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[700px]">
                                <thead>
                                    <tr className="border-b border-[#1e1b4b]/50 bg-white/5">
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#c084fc]">Project Title</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#c084fc]">Tech Stack</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#c084fc] text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#1e1b4b]/30">
                                    {pjLoading ? (
                                        <tr>
                                            <td colSpan="3" className="px-6 py-5 text-center text-[#c084fc]/50 text-sm font-medium">Loading projects...</td>
                                        </tr>
                                    ) : projects.length === 0 ? (
                                        <tr>
                                            <td colSpan="3" className="px-6 py-5 text-center text-[#c084fc]/50 text-sm font-medium">No projects launched yet.</td>
                                        </tr>
                                    ) : (
                                        projects.map((pj) => (
                                            <tr key={pj.id} className="hover:bg-white/5 transition-colors cursor-pointer" onClick={() => openViewPjModal(pj.id)}>
                                                <td className="px-6 py-5">
                                                    <div className="flex items-center gap-4">
                                                        <div className="size-10 relative flex items-center justify-center bg-white/5 rounded-lg border border-white/10 shrink-0 overflow-hidden text-white font-black text-xs">
                                                            {pj.image ? (
                                                                <img src={pj.image} alt={pj.title} className="w-full h-full object-cover" />
                                                            ) : (
                                                                <Rocket size={20} className="text-[#a855f7]" />
                                                            )}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-slate-100 transition-colors hover:text-[#c084fc]">{pj.title}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5">
                                                    <div className="flex gap-2 flex-wrap max-w-[250px]">
                                                        {pj.tech_stacks && pj.tech_stacks.length > 0 ? (
                                                            pj.tech_stacks.map(ts => (
                                                                <span key={ts.id} className="px-2 py-1 rounded bg-[#1e1b4b]/20 text-[10px] font-bold text-[#c084fc] border border-[#c084fc]/10 uppercase tracking-wider">
                                                                    {ts.name}
                                                                </span>
                                                            ))
                                                        ) : (
                                                            <span className="text-xs text-slate-500 italic">None</span>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5 text-right" onClick={(e) => e.stopPropagation()}>
                                                    <div className="flex justify-end gap-2">
                                                        <button
                                                            onClick={() => openEditPjModal(pj)}
                                                            className="p-2 hover:bg-white/10 rounded-lg text-[#c084fc] transition-all" title="Edit"
                                                        >
                                                            <Edit size={18} />
                                                        </button>
                                                        <button
                                                            onClick={() => openDeletePjModal(pj)}
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
                </section>

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
                                <button
                                    type="submit" disabled={editTechLoading}
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
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Period *</label>
                                    <input type="text" required value={expPeriod} onChange={(e) => setExpPeriod(e.target.value)} className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all" placeholder="e.g. Jan 2022 - Present" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Description *</label>
                                    <textarea required value={expDescription} onChange={(e) => setExpDescription(e.target.value)} rows="4" className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all resize-none" placeholder="Describe your responsibilities and achievements..." />
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
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Period *</label>
                                    <input type="text" required value={editExpPeriod} onChange={(e) => setEditExpPeriod(e.target.value)} className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Description *</label>
                                    <textarea required value={editExpDescription} onChange={(e) => setEditExpDescription(e.target.value)} rows="4" className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all resize-none" />
                                </div>
                                <button type="submit" disabled={editExpLoading} className="mt-2 bg-[#a855f7] hover:bg-[#a855f7]/90 text-white w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#a855f7]/40 uppercase tracking-widest text-sm disabled:opacity-70 disabled:cursor-not-allowed">
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

            {/* Add Project Modal */}
            {isAddPjModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="glass-card w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0f0a19]/90 border border-[#c084fc]/20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-[#1e1b4b]/50 bg-[#0f0a19]/90 backdrop-blur-md">
                            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                                <Rocket size={20} className="text-[#a855f7]" /> Launch Project
                            </h3>
                            <button onClick={() => setIsAddPjModalOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6">
                            <form onSubmit={handleAddPjSubmit} className="flex flex-col gap-6">
                                {addPjError && (
                                    <div className="bg-red-500/10 border border-red-500/50 text-red-400 rounded-xl p-3 text-sm text-center">
                                        {addPjError}
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Project Title *</label>
                                        <input type="text" required value={pjTitle} onChange={(e) => setPjTitle(e.target.value)} className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all" placeholder="e.g. Ad Astra Framework" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Project Thumbnail *</label>
                                        <input type="file" required accept=".jpg,.jpeg,.png,.webp" onChange={(e) => setPjImage(e.target.files[0])} className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2 px-3 text-slate-100 text-sm file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#a855f7] file:text-white hover:file:bg-[#a855f7]/80 transition-all cursor-pointer" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Description</label>
                                    <textarea value={pjDescription} onChange={(e) => setPjDescription(e.target.value)} rows="3" className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all resize-none" placeholder="Provide a brief overview of the project..." />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Live Demo URL</label>
                                        <input type="url" value={pjDemo} onChange={(e) => setPjDemo(e.target.value)} className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all" placeholder="https://" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">GitHub Repository</label>
                                        <input type="url" value={pjGithub} onChange={(e) => setPjGithub(e.target.value)} className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all" placeholder="https://github.com/..." />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Tech Stack Utilized</label>
                                    <div className="bg-white/5 border border-[#1e1b4b] rounded-xl p-4 max-h-[200px] overflow-y-auto">
                                        {Object.keys(techStacks).length === 0 ? (
                                            <p className="text-sm text-slate-500 italic text-center py-4">No tech stacks available. Please add some first.</p>
                                        ) : (
                                            Object.keys(techStacks).map((category, catIdx) => (
                                                <div key={catIdx} className="mb-4 last:mb-0">
                                                    <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">{category}</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {techStacks[category].map((ts) => {
                                                            const isSelected = pjTechStacks.includes(ts.id);
                                                            return (
                                                                <button
                                                                    key={ts.id}
                                                                    type="button"
                                                                    onClick={() => toggleTechStackSelection(ts.id)}
                                                                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border flex items-center gap-2 ${isSelected
                                                                        ? "bg-[#a855f7]/20 border-[#a855f7] text-[#c084fc]"
                                                                        : "bg-[#1e1b4b]/30 border-[#1e1b4b] text-slate-400 hover:border-[#c084fc]/50 hover:text-slate-200"
                                                                        }`}
                                                                >
                                                                    {ts.icon && <img src={ts.icon} alt="" className="size-3 object-contain" />}
                                                                    {ts.name}
                                                                </button>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                    <p className="text-[10px] text-slate-500 italic mt-1 ml-1">* Select the technologies used in this specific project.</p>
                                </div>

                                <button type="submit" disabled={addPjLoading} className="mt-4 bg-[#a855f7] hover:bg-[#a855f7]/90 text-white w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#a855f7]/40 uppercase tracking-widest text-sm disabled:opacity-70 disabled:cursor-not-allowed">
                                    {addPjLoading ? <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : "Add Project"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Project Modal */}
            {isEditPjModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="glass-card w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0f0a19]/90 border border-[#c084fc]/20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-[#1e1b4b]/50 bg-[#0f0a19]/90 backdrop-blur-md">
                            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                                <Rocket size={20} className="text-[#a855f7]" /> Edit Project
                            </h3>
                            <button onClick={() => setIsEditPjModalOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6">
                            <form onSubmit={handleEditPjSubmit} className="flex flex-col gap-6">
                                {editPjError && (
                                    <div className="bg-red-500/10 border border-red-500/50 text-red-400 rounded-xl p-3 text-sm text-center">
                                        {editPjError}
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Project Title *</label>
                                        <input type="text" required value={editPjTitle} onChange={(e) => setEditPjTitle(e.target.value)} className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Project Thumbnail</label>
                                        <input type="file" accept=".jpg,.jpeg,.png,.webp" onChange={(e) => setEditPjImage(e.target.files[0])} className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2 px-3 text-slate-100 text-sm file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#a855f7] file:text-white hover:file:bg-[#a855f7]/80 transition-all cursor-pointer" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Description</label>
                                    <textarea value={editPjDescription} onChange={(e) => setEditPjDescription(e.target.value)} rows="3" className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all resize-none" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Live Demo URL</label>
                                        <input type="url" value={editPjDemo} onChange={(e) => setEditPjDemo(e.target.value)} className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">GitHub Repository</label>
                                        <input type="url" value={editPjGithub} onChange={(e) => setEditPjGithub(e.target.value)} className="w-full bg-white/5 border border-[#1e1b4b] rounded-xl py-2.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">Tech Stack Utilized</label>
                                    <div className="bg-white/5 border border-[#1e1b4b] rounded-xl p-4 max-h-[200px] overflow-y-auto">
                                        {Object.keys(techStacks).length === 0 ? (
                                            <p className="text-sm text-slate-500 italic text-center py-4">No tech stacks available.</p>
                                        ) : (
                                            Object.keys(techStacks).map((category, catIdx) => (
                                                <div key={catIdx} className="mb-4 last:mb-0">
                                                    <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">{category}</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {techStacks[category].map((ts) => {
                                                            const isSelected = editPjTechStacks.includes(ts.id);
                                                            return (
                                                                <button
                                                                    key={ts.id}
                                                                    type="button"
                                                                    onClick={() => toggleTechStackSelection(ts.id, true)}
                                                                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border flex items-center gap-2 ${isSelected
                                                                        ? "bg-[#a855f7]/20 border-[#a855f7] text-[#c084fc]"
                                                                        : "bg-[#1e1b4b]/30 border-[#1e1b4b] text-slate-400 hover:border-[#c084fc]/50 hover:text-slate-200"
                                                                        }`}
                                                                >
                                                                    {ts.icon && <img src={ts.icon} alt="" className="size-3 object-contain" />}
                                                                    {ts.name}
                                                                </button>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>

                                <button type="submit" disabled={editPjLoading} className="mt-4 bg-[#a855f7] hover:bg-[#a855f7]/90 text-white w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#a855f7]/40 uppercase tracking-widest text-sm disabled:opacity-70 disabled:cursor-not-allowed">
                                    {editPjLoading ? <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : "Save Changes"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Project Modal */}
            {isDeletePjModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="glass-card w-full max-w-md bg-[#0f0a19]/90 border border-red-500/30 rounded-2xl shadow-[0_8px_32px_rgba(239,68,68,0.15)] overflow-hidden">
                        <div className="flex items-center justify-between p-6 border-b border-red-500/20 bg-red-500/5">
                            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                                <Trash2 size={20} className="text-red-400" /> Delete Project
                            </h3>
                            <button onClick={() => setIsDeletePjModalOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6">
                            <form onSubmit={handleDeletePjSubmit} className="flex flex-col gap-5">
                                {deletePjError && (
                                    <div className="bg-red-500/10 border border-red-500/50 text-red-400 rounded-xl p-3 text-sm text-center">
                                        {deletePjError}
                                    </div>
                                )}

                                <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                                    <p className="text-slate-200 text-sm leading-relaxed text-center">
                                        Are you sure you want to permanently delete the constellation <strong className="text-white">"{deletePjTitle}"</strong>? This action cannot be undone.
                                    </p>
                                </div>

                                <div className="flex gap-3 mt-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsDeletePjModalOpen(false)}
                                        className="flex-1 bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl font-bold transition-all border border-white/10 uppercase tracking-widest text-sm"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit" disabled={deletePjLoading}
                                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-500/20 uppercase tracking-widest text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {deletePjLoading ? <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : "Delete"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            {/* View Project Details Modal */}
            {isViewPjModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setIsViewPjModalOpen(false)}>
                    <div
                        className="glass-card w-full max-w-2xl max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-[#0f0a19]/90 border border-[#c084fc]/20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-[#1e1b4b]/50 bg-[#0f0a19]/90 backdrop-blur-md">
                            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                                <Rocket size={20} className="text-[#a855f7]" /> Project Details
                            </h3>
                            <button onClick={() => setIsViewPjModalOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6">
                            {viewPjLoading ? (
                                <div className="flex justify-center items-center py-20">
                                    <div className="size-8 border-2 border-[#a855f7]/30 border-t-[#a855f7] rounded-full animate-spin"></div>
                                </div>
                            ) : viewPjError ? (
                                <div className="bg-red-500/10 border border-red-500/50 text-red-400 rounded-xl p-4 text-center">
                                    {viewPjError}
                                </div>
                            ) : viewPjData ? (
                                <div className="flex flex-col gap-6">
                                    {viewPjData.image && (
                                        <div className="w-full aspect-video rounded-xl border border-white/10 overflow-hidden bg-white/5">
                                            <img src={viewPjData.image} alt={viewPjData.title} className="w-full h-full object-cover" />
                                        </div>
                                    )}

                                    <div>
                                        <h2 className="text-2xl font-black text-white">{viewPjData.title}</h2>
                                        <div className="flex flex-wrap gap-3 mt-4">
                                            {viewPjData.demo && (
                                                <a href={viewPjData.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold bg-[#a855f7]/20 text-[#c084fc] hover:bg-[#a855f7]/30 border border-[#a855f7]/50 px-3 py-1.5 rounded-lg transition-colors">
                                                    <Eye size={14} /> Live Demo
                                                </a>
                                            )}
                                            {viewPjData.github && (
                                                <a href={viewPjData.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold bg-white/10 text-white hover:bg-white/20 border border-white/20 px-3 py-1.5 rounded-lg transition-colors">
                                                    <Code2 size={14} /> GitHub
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#c084fc] mb-2">Description</h4>
                                        <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">
                                            {viewPjData.description || "No description provided."}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#c084fc] mb-3">Tech Stacks Used</h4>
                                        {viewPjData.tech_stacks && viewPjData.tech_stacks.length > 0 ? (
                                            <div className="flex flex-wrap gap-2">
                                                {viewPjData.tech_stacks.map(ts => (
                                                    <div key={ts.id} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1e1b4b]/30 border border-[#c084fc]/20 text-xs font-bold text-slate-200">
                                                        {ts.icon && <img src={ts.icon} alt="" className="size-3 object-contain" />}
                                                        {ts.name}
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-sm text-slate-500 italic">No technologies linked.</p>
                                        )}
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
