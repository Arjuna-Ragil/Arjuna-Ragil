import AboutMe from "./component/aboutMe";
import Contact from "./component/contact";
import Polaroid from "./component/polaroid";
import Project from "./component/project";
import ProjectCard from "./component/projectCardPopup";
import TechStack from "./component/techStack";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="fixed z-40 h-10 w-full border-b-2 bg-white"></div>
      <div className="flex h-full w-full flex-col px-5 pb-5">
        <div className="animate-slide1 h-full w-full border-x-2 border-y-2 bg-gradient-to-br from-neutral-200 to-white px-5 py-7 relative">
          <div className="h-full w-full bg-gradient-to-br from-black/40 to-50% to-transparent absolute z-20 pointer-events-none"></div>
          <div className="grid h-full w-full grid-cols-3 grid-rows-3 border-2 bg-[url(/woodTexture.svg)] bg-cover pt-13 p-5">
            <div className=" bg-green-200 relative z-10 border-1 border-black/20 group animate-slide3">
              <AboutMe />
            </div>
            <div className="col-start-3 animate-slide3">
              <Project />
            </div>
            <div className="col-start-2 justify-center items-center flex animate-slide2">
              <Polaroid />
            </div>
            <div className="col-start-1 row-start-2 row-end-4 p-5 pt-10 -rotate-1 animate-slide4">
              <TechStack/>
            </div>
            <div className="col-start-3 row-start-2 row-end-4 pt-60 animate-slide1">
              <Contact/>
            </div>
          </div>
        </div>
      </div>
      <ProjectCard/>
    </div>
  );
}
