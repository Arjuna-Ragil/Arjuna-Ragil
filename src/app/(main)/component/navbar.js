'use client'

import gsap from "gsap";

export default function Navbar({ timeline }){
    const navs = [
        {
            "name": "Home",
            "id": "content"
        },
        {
            "name": "Profile",
            "id": "mercury"
        },
        {
            "name": "TechStack",
            "id": "mars"
        },
        {
            "name": "Experience",
            "id": "jupiter"
        },
        {
            "name": "Projects",
            "id": "saturn"
        },
    ]

    const handleNavClick = (targetLabel) => {
        if (!timeline?.scrollTrigger) {
            console.warn("Timeline GSAP belum siap.");
            return;
        }

        const scrollTrigger = timeline.scrollTrigger;

        if (timeline.labels[targetLabel] === undefined) {
            console.warn("Label GSAP tidak ditemukan:", targetLabel);
            return;
        }

        const scrollPosition = scrollTrigger.labelToScroll(targetLabel);

        gsap.to(window, {
            scrollTo: scrollPosition,
            duration: 0,
            ease: "power2.inOut"
        });
    };

    return(
        <div className={`duration-200 h-fit top-3 fixed flex self-center justify-self-center px-30 z-40 text-white`}>
            <div className="w-full h-fit bg-gray-800/20 backdrop-blur-sm rounded-full border border-white flex flex-row gap-10 items-center justify-between p-2 px-5">
                <div className="flex flex-row gap-5">
                    {navs.map((nav) => (
                        <button onClick={() => handleNavClick(nav.id)} key={nav.name} className="hover:border-b border-white">
                            {nav.name}
                        </button>
                    ))}
                </div>
                <div className="flex flex-row gap-3">
                    <a href="/document/Portfolio.pdf" download className="bg-gray-500/50 rounded-full p-2 px-5 border border-white hover:bg-gray-600 duration-200">Portfolio</a>
                    <a href="/document/CV.pdf" download className="bg-gray-500/50 rounded-full p-2 px-5 border border-white hover:bg-gray-600 duration-200">CV</a>
                </div>
            </div>
        </div>
    )
}