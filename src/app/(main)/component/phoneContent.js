'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

export default function PhoneContent() {
	const [time, setTime] = useState(new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}))
	const [battery, setBattery] = useState("")

	useEffect(() => {
		const clock = setInterval(() => {
			setTime(new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}))
		},1000)
		return () => clearInterval(clock)
	}, [])

  useEffect(() => {
    navigator.getBattery().then(batt => {
      setBattery(batt.level * 100);

      const updateLevel = () => setBattery(batt.level * 100);
      batt.addEventListener('levelchange', updateLevel);

      return () => batt.removeEventListener('levelchange', updateLevel);
    });
  }, []);

  const techStack = [
    { id:1, image: "/techstack/cssLogo.svg", name: "CSS" },
    { id:2, image: "/techstack/firebaseLogo.svg", name: "Firebase" },
    { id:3, image: "/techstack/htmlLogo.svg", name: "HTML" },
    { id:4, image: "/techstack/jsLogo.svg", name: "JS" },
    { id:5, image: "/techstack/kotlinLogo.svg", name: "Kotlin" },
    { id:6, image: "/techstack/nodeLogo.svg", name: "Node.js" },
    { id:7, image: "/techstack/reactLogo.svg", name: "React" },
    { id:8, image: "/techstack/tailwindLogo.svg", name: "Tailwind" },
  ]

    return(
        <div className="h-full w-full flex flex-col justify-between bg-black/10 rounded-2xl text-white">
          <div className="w-full bg-gray-600/50 rounded-t-2xl p-1 px-3 flex flex-row justify-between">
            <p>{time}</p>
            <p>{battery}%</p>
          </div>
          <div className="h-full w-full p-5">
            <div className="h-full w-full bg-gray-700/50 rounded-2xl p-5 flex flex-col gap-5">
              <h2 className="lg:text-3xl font-semibold text-center">TechStack</h2>
              <div className="grid grid-cols-3 gap-3">
                {techStack.map((tech) => (
                  <div key={tech.id} className="aspect-square flex flex-col items-center justify-center">
                    <Image src={tech.image} alt="techStacks" width={70} height={70}/>
                    <p className="lg:text-base text-xs">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full p-2 bg-gray-600/50 rounded-b-2xl flex flex-row justify-evenly items-center">
            <Image src={"/menuIcon.svg"} alt="menu" height={30} width={30} className="invert"/>
            <Image src={"/homeIcon.svg"} alt="home" height={30} width={30} className="invert"/>
            <Image src={"/backIcon.svg"} alt="back" height={30} width={30} className="invert"/>
        	</div>
        </div>
    )
}