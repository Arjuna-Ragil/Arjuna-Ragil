"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className={`duration-200 h-fit top-3 fixed flex w-full justify-center px-4 md:px-30 z-50 text-white`}>
                <div className="w-full h-fit glass-card rounded-full flex flex-row gap-4 lg:gap-10 items-center justify-between p-3 px-6 shadow-[0_0_15px_rgba(171,138,255,0.05)] bg-[#120b24]/80 backdrop-blur-md">

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex flex-row md:gap-6 gap-3 text-xs md:text-sm uppercase tracking-widest text-zinc-300">
                        {navs.map((nav) => (
                            <a href={nav.id} key={nav.name} className="hover:text-brand transition-colors duration-300">
                                {nav.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Logo / Title (visible only when menu is closed, to balance the flexbox) */}
                    <div className="lg:hidden font-extrabold tracking-widest uppercase text-brand text-sm">
                        Arjuna Ragil
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden lg:flex flex-row gap-4 text-xs uppercase tracking-widest font-semibold flex-wrap">
                        <a href="/document/Portfolio.pdf" download className="text-zinc-300 border border-brand/30 hover:border-brand hover:text-brand hover:bg-brand/10 transition-all duration-300 rounded-full py-2 px-6">Portfolio</a>
                        <a href="/document/CV.pdf" download className="text-zinc-300 border border-brand/30 hover:border-brand hover:text-brand hover:bg-brand/10 transition-all duration-300 rounded-full py-2 px-6">CV</a>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="lg:hidden text-zinc-300 hover:text-white transition-colors"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Full Screen Dropdown Menu */}
            <div className={`fixed inset-0 z-40 bg-[#0f0a19]/95 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center gap-8 w-full px-6 text-center">
                    <div className="flex flex-col gap-6 w-full">
                        {navs.map((nav) => (
                            <a
                                href={nav.id}
                                key={nav.name}
                                onClick={toggleMenu}
                                className="text-xl sm:text-2xl uppercase tracking-[0.2em] text-zinc-300 hover:text-brand transition-colors duration-300"
                            >
                                {nav.name}
                            </a>
                        ))}
                    </div>

                    <div className="w-16 h-px bg-brand/30 my-4"></div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
                        <a
                            href="/document/Portfolio.pdf"
                            download
                            onClick={toggleMenu}
                            className="text-center text-sm uppercase tracking-widest font-semibold text-zinc-300 border border-brand/30 hover:border-brand hover:text-brand hover:bg-brand/10 transition-all duration-300 rounded-full py-4 sm:py-3 px-8 w-full sm:w-auto"
                        >
                            Download Portfolio
                        </a>
                        <a
                            href="/document/CV.pdf"
                            download
                            onClick={toggleMenu}
                            className="text-center text-sm uppercase tracking-widest font-semibold text-zinc-300 border border-brand/30 hover:border-brand hover:text-brand hover:bg-brand/10 transition-all duration-300 rounded-full py-4 sm:py-3 px-8 w-full sm:w-auto"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}