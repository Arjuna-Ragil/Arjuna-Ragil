export default function Navbar() {
    const navs = [
        {
            "name": "Home",
            "id": "#content"
        },
        {
            "name": "Profile",
            "id": "#mercury"
        },
        {
            "name": "TechStack",
            "id": "#mars"
        },
        {
            "name": "Experience",
            "id": "#jupiter"
        },
        {
            "name": "Projects",
            "id": "#saturn"
        },
    ]

    return (
        <div className={`duration-200 h-fit top-3 fixed flex w-full justify-center px-4 md:px-30 z-40 text-white`}>
            <div className="w-full h-fit glass-card rounded-full flex flex-row gap-10 items-center justify-between p-3 px-6 shadow-[0_0_15px_rgba(171,138,255,0.05)]">
                <div className="flex flex-row md:gap-6 gap-3 text-xs md:text-sm uppercase tracking-widest text-zinc-300">
                    {navs.map((nav) => (
                        <a href={nav.id} key={nav.name} className="hover:text-brand transition-colors duration-300">
                            {nav.name}
                        </a>
                    ))}
                </div>
                <div className="max-md:hidden flex flex-row gap-4 text-xs uppercase tracking-widest font-semibold flex-wrap">
                    <a href="/document/Portfolio.pdf" download className="text-zinc-300 border border-brand/30 hover:border-brand hover:text-brand hover:bg-brand/10 transition-all duration-300 rounded-full py-2 px-6">Portfolio</a>
                    <a href="/document/CV.pdf" download className="text-zinc-300 border border-brand/30 hover:border-brand hover:text-brand hover:bg-brand/10 transition-all duration-300 rounded-full py-2 px-6">CV</a>
                </div>
            </div>
        </div>
    )
}