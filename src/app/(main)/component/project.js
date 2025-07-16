import ProjectCard from "./projectCard";

export default function Project() {

  return (
    <div className="group relative h-full w-full items-center justify-center">
      <div className="absolute ml-20 flex h-full w-full items-center">
        <div className="h-fit w-fit translate-x-0 bg-white p-3 duration-200 group-hover:-translate-x-100">
          Note to self: <br></br>
          Press the card to see the project details
        </div>
      </div>
      <div className="col-span-2 flex h-full w-full rotate-2 flex-col gap-5 rounded-2xl border-2 border-black bg-gradient-to-br from-neutral-800 to-neutral-700 p-5 text-white shadow-2xl">
        <h2 className="text-center">Project Wallet</h2>
        <div className="flex h-full w-full flex-col items-center gap-4 rounded-2xl text-center shadow-2xl">
          <ProjectCard title={"PicPrice"} desc={"A price detector app powered by Gemini AI"} color={"bg-blue-300"} selector={"picPrice"}/>
          <ProjectCard title={"Leveling"} desc={"An app to gamify your life"} color={"bg-blue-500"} selector={"leveling"}/>
          <ProjectCard title={"JobQues"} desc={"A single web to find your dream job"} color={"bg-orange-500"} selector={"jobQues"}/>
        </div>
      </div>
    </div>
  );
}
