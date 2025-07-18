'use client'

import { useProjectData } from "@/app/hooks/useProjectData";
import Image from "next/image";

export default function LevelingDetail(){
  const { showDetail } = useProjectData()

  if (showDetail !== "Leveling") return

    return(
        <div className="w-full h-full flex items-center justify-center col-span-2 md:px-10 animate-dropDown origin-top">
          <div className="h-fit w-full justify-center overflow-y-scroll flex flex-col gap-5 bg-blue-400/10 md:rotate-z-1 md:-rotate-x-5 md:-rotate-y-15 scale-y-120 p-5 md:py-25 pb-10 pt-30 text-center text-white">
            <h3 className="text-2xl font-bold shadow-2xl">Project Details</h3>
            <div className="flex flex-row md:gap-3 justify-evenly items-center">
              <Image src={"/project/lvlDoc1.svg"} alt="picprice doc 1" width={150} height={150} className=" border-1 shadow-2xl rounded-3xl"/>
              <Image src={"/project/lvlDoc2.svg"} alt="picprice doc 1" width={150} height={150} className=" border-1 shadow-2xl rounded-3xl"/>
              <Image src={"/project/lvlDoc3.svg"} alt="picprice doc 1" width={150} height={150} className=" border-1 shadow-2xl rounded-3xl hidden md:flex"/>
            </div>
            <div className="md:grid md:grid-cols-2 flex flex-col gap-7">
              <div className="flex flex-col justify-evenly gap-5">
                <p className="p-3 pt-7">
                  Leveling is an app that is use to improve someone lifestyle by making their everyday life into a game. Can be from day to day activity like doing 
                  chores and can also track something to do for a week, a month, and even a year.
                </p>
                <div className="md:flex flex-col gap-3 hidden">
                  <h4 className="text-xl font-semibold">Check It Out</h4>
                  <a href="https://github.com/Arjuna-Ragil/Leveling.git" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <div className="bg-black/20 hover:bg-black/50 duration-200 rounded-2xl flex flex-row gap-2 items-center p-3">
                      <Image src={"/githubLogo.svg"} alt="github" width={50} height={50} />
                      <p>Github Repo</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3 justify-evenly">
                <h4 className="text-xl font-semibold">Features</h4>
                <p className="bg-blue-500/50 hover:bg-blue-500/80 duration-200 border-1 p-2">
                  🧠 Gamify with Quest <br></br>
                  Create quest to gamify your routine
                </p>
                <p className="bg-blue-500/50 hover:bg-blue-500/80 duration-200 border-1 p-2">
                  💾 Track your Level <br></br>
                  Earn exp from quest and try to reach the highest level
                </p>
                <p className="bg-blue-500/50 hover:bg-blue-500/80 duration-200 border-1 p-2">
                  ❤️ Control your Consumer Habit <br></br>
                  Buying only when enough gold from quest is collected
                </p>
              </div>
              <div className="flex flex-col gap-3 md:hidden">
                <h4 className="text-xl font-semibold">Check It Out</h4>
                <a href="https://github.com/Arjuna-Ragil/Leveling.git" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <div className="bg-black/20 hover:bg-black/50 duration-200 rounded-2xl flex flex-row gap-2 items-center p-3">
                    <Image src={"/githubLogo.svg"} alt="github" width={50} height={50} />
                    <p>Github Repo</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
    )
}