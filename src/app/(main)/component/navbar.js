export default function Navbar(){

    const navs = [
        {
            "name": "Top",
            "id": "/#hero"
        },
        {
            "name": "Profile",
            "id": "/#profile"
        },
        {
            "name": "Experience",
            "id": "/#experience"
        },
        {
            "name": "Projects",
            "id": "/#projects"
        },
    ]

    return(
        <div className={`duration-200 w-full h-fit top-3 fixed px-30 z-50 text-white`}>
            <div className="w-full h-fit bg-gray-800/20 backdrop-blur-sm rounded-full border border-white flex flex-row items-center justify-between p-2 px-10">
                <div className="flex flex-row gap-5">
                    {navs.map((nav) => (
                        <a key={nav.name} href={nav.id} className="hover:border-b border-white">
                            {nav.name}
                        </a>
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