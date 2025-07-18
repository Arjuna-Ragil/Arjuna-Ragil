"use client";

import { useProjectData } from "@/app/hooks/useProjectData";
import Image from "next/image";
import PicPriceDetail from "./picPriceDetail";
import LevelingDetail from "./levelingDetail";
import JobQuestDetail from "./jobQuestDetail";

export default function ProjectCardPopup() {
  const { data, setShow, setData, setSelector, showDetail } = useProjectData();

  if (!data) return null

  return (
    <div className={`fixed z-50 h-full w-full`}>
      <div
        className="-z-10 h-full overflow-scroll w-full bg-black/50 backdrop-blur-md md:grid md:grid-cols-3 flex flex-col"
        onClick={() => {setShow(false), setData(null), setSelector("")}}
      >
        <div className={`z-50 md:max-2xl:pl-5 md:-rotate-z-6 md:rotate-x-10 md:rotate-y-12 flex h-full w-full items-center justify-center md:animate-cardSpin max-md:p-5`}>
          <div
            className={`flex h-fit w-fit flex-col rounded-2xl border-2 border-black text-white ${data.color} shadow-2xl max-md:animate-cardSpin`}
          >
            <div className="flex flex-col items-center text-center border-b-1 border-black py-3 px-2">
              <h2 className="text-2xl font-bold">{data.title}</h2>
              <p>{data.shortDescription}</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-3 p-5">
              <Image
                src={data.image_URL}
                alt="project logo"
                width={100}
                height={100}
                className="border-1 border-black"
              />
              <div className="flex flex-col justify-center p-3">
                <h3>TechStack: </h3>
                <ul className={`ml-4 grid list-disc space-x-5 ${(showDetail === "Leveling") ? "lg:grid-cols-1" : "lg:grid-cols-2"} grid-cols-1`}>
                  {data.techStack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <PicPriceDetail/>
        <LevelingDetail/>
        <JobQuestDetail/>
      </div>
    </div>
  );
}
