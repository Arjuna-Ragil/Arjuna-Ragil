'use client'

import { useProjectData } from "@/app/hooks/useProjectData";
import Image from "next/image";

export default function JobQuestDetail(){
  const { showDetail } = useProjectData()

  if (showDetail !== "JobQues") return 

    return(
        <div className="w-full h-full flex items-center justify-center col-span-2 lg:px-10 md:px-5 animate-dropDown origin-top">
          <div className="h-fit w-full flex justify-center flex-col gap-5 bg-blue-200/10 md:rotate-z-1 md:-rotate-x-5 md:-rotate-y-15 scale-y-120 p-5 md:py-25 pb-10 pt-30 text-center text-white">
            <h3 className="text-2xl font-bold shadow-2xl">Project Details</h3>
            <div className="flex flex-row justify-evenly items-center">
              <Image src={"/project/jqDoc1.svg"} alt="picprice doc 1" width={300} height={300} className="aspect-video border-1 border-white"/>
              <Image src={"/project/jqDoc2.svg"} alt="picprice doc 2" width={300} height={300} className="aspect-video border-1 border-white hidden lg:flex"/>
            </div>
            <p>
              JobQues is a prototype website to help people finding jobs in an era where finding a job 
              is hard
            </p>
            <h4 className="text-xl font-semibold">Features</h4>
            <div className="sm:grid sm:grid-cols-2 flex flex-col gap-3">
              <p className="col-span-2 bg-orange-500/50 hover:bg-orange-500/80 duration-200 border-1 p-2">
                🔍 Easy Job Search<br></br>
                Just search for the company name or job role, and all the job based on that search will appear
              </p>
              <p className="bg-orange-500/50 hover:bg-orange-500/80 duration-200 border-1 p-2">
                🧠 Login System <br></br>
                The web is secured with a login system with Passport.Js
              </p>
              <p className="bg-orange-500/50 hover:bg-orange-500/80 duration-200 border-1 p-2">
                💾 Post your Job hiring <br></br>
                Don&apos;t just find a job, create jobs for people too
              </p>
              <p className="bg-orange-500/50 hover:bg-orange-500/80 duration-200 border-1 p-2">
                ❤️ Send your Resume instantly <br></br>
                Fill the form and your resume will be send
              </p>
              <p className="bg-orange-500/50 hover:bg-orange-500/80 duration-200 border-1 p-2">
                👤 Change your Profile <br></br>
                Pick the best photo of yourself
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xl font-semibold">Check It Out</h4>
              <div className="flex flex-row justify-evenly items-center">
                <a href="https://github.com/Arjuna-Ragil/JobQues.git" target="_blank" rel="noopener noreferrer">
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