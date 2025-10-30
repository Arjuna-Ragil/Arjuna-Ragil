import Exp from "./exp";
import Hero from "./hero";
import Profile from "./profile";
import Project from "./project";
import TechStack from "./techStack";
import Transition from "./transition";

export default function Content(){
    return(
        <div className="h-full w-full text-white flex flex-col items-center justify-center">
            <Hero/>
            <Transition/>
            <Profile/>
            <Transition/>
            <Exp/>
            <Transition/>
            <Project/>
            <Transition/>
            <TechStack/>
        </div>
    )
}