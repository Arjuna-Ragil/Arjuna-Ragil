'use client'

import { createContext, useContext, useEffect, useState } from "react"

const ProjectDataContext = createContext()

export function ProjectDataProvider({ children }){

    const [show, setShow] = useState(false)
    const [selector, setSelector] = useState("")
    const [data, setData] = useState(null)
    const [showDetail, setShowDetail] = useState("")

    const projectData = [
        {
            title: "PicPrice",
            shortDescription: "A price detector app powered by Gemini AI",
            image_URL: "/project/picPriceLogo.svg",
            color: "bg-blue-300",
            techStack: ["React", "Firebase", "Vite", "TailwindCSS", "CSE", "GEMINI API" ]
        },
        {
            title: "Leveling",
            shortDescription: "An app to gamify your life",
            image_URL: "/project/levelingLogo.png",
            color: "bg-blue-500",
            techStack: ["Kotlin", "Jetpack Compose", "Firebase"]
        },
        {
            title: "JobQues",
            shortDescription: "A single web to find your dream job",
            image_URL: "/project/jobQuesLogo.png",
            color: "bg-orange-500",
            techStack: ["HTML", "CSS", "JS", "EJS", "NodeJS", "ExpressJS"]
        }
    ]

    function selectedData(){
        if (!show || !selector) return 
        const selected = projectData.find(project => project.title.toLowerCase() === selector.toLowerCase())
        setData(selected)
        setShowDetail(selected.title)
    }

    useEffect(() => {
        selectedData()
    }, [selector])
    

    return (
        <ProjectDataContext.Provider value={{ data, setSelector, setShow, setData, show, showDetail }}>
            {children}
        </ProjectDataContext.Provider>
    )
}

export function useProjectData() {
    return useContext(ProjectDataContext)
}