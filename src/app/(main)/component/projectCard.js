'use client'

import { useProjectData } from "@/app/hooks/useProjectData"
import { useEffect, useState } from "react"

export default function ProjectCard({title, desc, color, selector}) {
    const { setSelector, setShow, show } = useProjectData()
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        if (!show) {
            setHidden(false)
        }
    }, [show])

    return (
        <div className={`group/card flex h-full w-full translate-y-5 flex-col duration-200 hover:translate-y-0 ${hidden ? "opacity-0" : "opacity-100"}`} onClick={() => {setSelector(selector), setShow(true), setHidden(true)}}>
            <p className={`rounded-t-2xl ${color}`}>
                {title}
            </p>
            <p className={`origin-top scale-y-0 ${color} duration-200 group-hover/card:scale-y-100`}>
                {desc}
            </p>
        </div>
    )
}