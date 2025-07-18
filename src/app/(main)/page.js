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
      <div className="flex h-full w-full flex-col px-5 max-sm:px-1 pb-5">
        <div className="animate-slide1 relative h-full w-full border-x-2 border-y-2 bg-gradient-to-br from-neutral-200 to-white px-5 py-7">
          <div className="pointer-events-none absolute z-20 h-full w-full bg-gradient-to-br from-black/40 to-transparent to-50%"></div>
          <div className="grid max-md:flex max-md:flex-col h-full w-full grid-cols-5 grid-rows-3 border-2 bg-[url(/woodTexture.svg)] bg-cover p-5 max-md:p-2 pt-13 lg:grid-cols-3 lg:grid-rows-2 xl:grid-rows-3">
            <div className="animate-slide2 col-start-2 col-end-5 row-start-1 row-end-2 flex xl:items-center lg:items-start items-center justify-center lg:col-end-3 xl:row-start-2 xl:row-end-3">
              <Polaroid />
            </div>
            <div className="group animate-slide3 relative z-20 col-start-1 col-end-3 row-start-2 flex h-2/3 w-full xl:self-start lg:self-center border-1 border-black/20 bg-green-200 lg:col-end-2 lg:row-start-1 xl:h-full">
              <AboutMe />
            </div>
            <div className="animate-slide3 z-10 col-start-3 col-end-6 row-start-2 p-3 lg:col-start-3 lg:col-end-4 lg:row-start-1">
              <Project />
            </div>
            <div className="animate-slide4 col-start-1 col-end-3 row-start-3 row-end-4 flex xl:h-full -rotate-1 xl:items-center items-start max-md:justify-center pr-3 pb-3 lg:col-end-2 lg:row-start-2 xl:pt-10 lg:pr-0 lg:pb-0 xl:justify-center">
              <TechStack />
            </div>
            <div className="animate-slide1 col-start-3 col-end-6 row-start-3 row-end-4 xl:col-start-3 lg:col-start-2 lg:col-end-4 lg:row-start-2 xl:pt-60 lg:pl-5">
              <Contact />
            </div>
          </div>
        </div>
      </div>
      <ProjectCardPopup />
    </div>
  );
}
