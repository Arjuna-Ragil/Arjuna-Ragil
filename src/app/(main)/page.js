import AboutMe from "./component/aboutMe";
import Contact from "./component/contact";
import Polaroid from "./component/polaroid";
import Project from "./component/project";
import ProjectCardPopup from "./component/projectCardPopup";
import TechStack from "./component/techStack";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="fixed z-40 h-10 w-full border-b-2 bg-white"></div>
      <div className="flex h-full w-full flex-col px-5 pb-5">
        <div className="animate-slide1 h-full w-full border-x-2 border-y-2 bg-gradient-to-br from-neutral-200 to-white px-5 py-7 relative">
          <div className="h-full w-full bg-gradient-to-br from-black/40 to-50% to-transparent absolute z-20 pointer-events-none"></div>
          <div className="grid h-full w-full lg:grid-cols-3 grid-cols-5 lg:grid-rows-3 grid-rows-3 border-2 bg-[url(/woodTexture.svg)] bg-cover pt-13 p-5">
            <div className=" bg-green-200 relative w-full lg:row-start-1 row-start-2 z-20 border-1 col-start-1 lg:col-end-2 col-end-3 border-black/20 group animate-slide3 lg:h-full h-2/3 flex self-start">
              <AboutMe />
            </div>
            <div className="lg:col-start-3 lg:col-end-4 col-start-3 col-end-6 lg:row-start-1 row-start-2 animate-slide3 z-10 p-3">
              <Project />
            </div>
            <div className="col-start-2 lg:col-end-3 col-end-5 row-start-1 row-end-2 lg:row-start-2 lg:row-end-3 justify-center items-center flex animate-slide2">
              <Polaroid />
            </div>
            <div className="col-start-1 lg:col-end-2 col-end-4 lg:row-start-2 row-start-3 row-end-4 pr-10 pb-3 lg:pt-10 -rotate-1 animate-slide4 h-full flex items-center">
              <TechStack/>
            </div>
            <div className="lg:col-start-3 lg:col-end-4 col-start-4 col-end-6 lg:row-start-2 row-start-3 row-end-4 lg:pt-60 animate-slide1">
              <Contact/>
            </div>
          </div>
        </div>
      </div>
      <ProjectCardPopup/>
    </div>
  );
}
