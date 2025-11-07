export default function Navbar(){
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

    return(
        <div className={`duration-200 h-fit top-3 fixed flex self-center justify-self-center px-30 z-40 text-white`}>
            <div className="w-full h-fit bg-gray-800/20 backdrop-blur-sm rounded-full border border-white flex flex-row gap-10 items-center justify-between p-2 px-5">
                <div className="flex flex-row md:gap-5 gap-3">
                    {navs.map((nav) => (
                        <a href={nav.id} key={nav.name} className="hover:border-b border-white max-md:text-xs">
                            {nav.name}
                        </a>
                    ))}
                </div>
                <div className="max-md:hidden flex flex-row gap-3">
                    <a href="/document/Portfolio.pdf" download className="bg-gray-500/50 rounded-full p-2 px-5 border border-white hover:bg-gray-600 duration-200">Portfolio</a>
                    <a href="/document/CV.pdf" download className="bg-gray-500/50 rounded-full p-2 px-5 border border-white hover:bg-gray-600 duration-200">CV</a>
                </div>
            </div>
        </div>
    )
}