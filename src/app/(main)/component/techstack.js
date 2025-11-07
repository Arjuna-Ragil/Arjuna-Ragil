import Image from "next/image"

export default function TechStack(){
    const techStack = [
        {
            "name": "JavaScript",
            "image": "/techstack/jsLogo.svg"
        },
        {
            "name": "React",
            "image": "/techstack/reactLogo.svg"
        },
        {
            "name": "Next.js",
            "image": "/techstack/nextLogo.svg"
        },
        {
            "name": "Tailwind",
            "image": "/techstack/tailwindLogo.svg"
        },
        {
            "name": "Three.js",
            "image": "/techstack/threeLogo.svg"
        },
        {
            "name": "Node.js",
            "image": "/techstack/nodeLogo.svg"
        },
        {
            "name": "Express.js",
            "image": "/techstack/expressLogo.svg"
        },
        {
            "name": "Firebase",
            "image": "/techstack/firebaseLogo.svg"
        },
        {
            "name": "Vercel",
            "image": "/techstack/vercelLogo.svg"
        },
    ]

    return(
        <div className="min-h-screen h-full w-full flex items-center justify-center md:grid grid-cols-2 p-10" id="mars">
            <div className="col-start-2 flex text-white flex-col gap-5 self-center items-center justify-center bg-gray-400/10 border border-white backdrop-blur-sm rounded-2xl p-5">
                <h2 className="text-3xl font-medium text-center">My Tech-Stack</h2>
                <div className="h-full w-full grid md:grid-cols-3 grid-cols-2 gap-3 text-black">
                    {techStack.map((tech) => (
                        <div key={tech.name} className="h-full w-full flex flex-col items-center justify-center bg-white/30 rounded-4xl p-3">
                            <div className="h-full w-auto aspect-square relative flex items-center justify-center">
                                <Image src={tech.image} alt={tech.name} width={50} height={50}/>
                            </div>
                            <p>{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}