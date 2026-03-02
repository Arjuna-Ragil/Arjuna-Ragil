import TechStackAdmin from "./components/TechStackAdmin";
import ExperienceAdmin from "./components/ExperienceAdmin";
import ProjectAdmin from "./components/ProjectAdmin";

export const metadata = {
    title: "Mission Control | Ad Astra",
    description: "Manage portfolio entities dynamically via mission logs.",
};

export default function AdminPage() {
    return (
        <div className="min-h-screen bg-[#0f0a19] text-slate-300 font-sans leading-relaxed selection:bg-[#a855f7]/30 selection:text-white pb-20">
            {/* Background Grid Pattern */}
            <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

            {/* Glowing Orbs */}
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#c084fc]/10 blur-[120px] pointer-events-none z-0"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-[#3b82f6]/10 blur-[100px] pointer-events-none z-0"></div>

            <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12">
                <header className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
                        Mission <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#3b82f6]">Control</span>
                    </h1>
                    <p className="text-[#c084fc]/80 font-medium text-lg">Manage your portfolio entities and trajectory logs.</p>
                </header>

                <div className="space-y-16">
                    <TechStackAdmin />
                    <ExperienceAdmin />
                    <ProjectAdmin />
                </div>
            </main>
        </div>
    );
}
