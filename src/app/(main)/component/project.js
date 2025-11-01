import ProjectCard from "./subcomponent/projectCard";

export default function Project(){
    const projects = [
        {
            "name": "Demokratos",
            "logo": "/project/demoLogo.svg",
            "doc": "/project/demoDoc.svg",
            "desc": "A web-based platform powered by Gemini AI that helps governments analyze public needs and aspirations.",
            "techstack": "React, tailwind, Firebase",
            "github": "https://github.com/s-erzv/demokratos.git",
            "demo": "https://demokratos-5b0ce.web.app/welcome"
        },
        {
            "name": "Planix",
            "logo": "/project/planLogo.svg",
            "doc": "/project/planDoc.svg",
            "desc": "A web-based application that leverages AI (Gemini) and real-time spatial data to support urban planning and land-use analysis.",
            "techstack": "React, tailwind, Firebase, leaflet",
            "github": "https://github.com/amdihsann/Planix.git",
            "demo": "https://planix-2b1a8.web.app/"
        },
        {
            "name": "Picprice",
            "logo": "/project/ppLogo.svg",
            "doc": "/project/ppDoc.svg",
            "desc": " AI-powered web application that allows users to upload or take a picture of a product and instantly search for its average price across multiple online platforms",
            "techstack": "React, tailwind, Firebase, CSE",
            "github": "https://github.com/Arjuna-Ragil/PicPrice.git",
            "demo": "https://picprice-73be9.web.app/landingpage"
        },
    ]


    return(
        <div className="min-h-screen h-screen w-full flex flex-col bg-black p-5" id="projects">
            <h1 className="text-4xl font=bold text-center">Projects</h1>
            <div className="h-full w-full grid grid-cols-3 px-30 p-15 gap-5">
                {projects.map((project) => (
                    <div key={project.name}>
                        <ProjectCard title={project.name} logo={project.logo} img={project.doc} desc={project.desc} techstack={project.techstack} github={project.github} demo={project.demo}/>
                    </div>
                ))}
            </div>
        </div>
    )
}