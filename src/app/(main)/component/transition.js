import HeroBg from "./3js/heroBg";
import TransitionBg from "./3js/transitionBg";

export default function Transition(){
    return(
        <div className="h-screen w-full flex flex-col">
            <TransitionBg/>
            <div className="h-1/20 bg-black w-full z-10"></div>
            <div className="h-full w-full grid grid-cols-5 z-10">
                <div className="h-full w-full bg-black z-10"></div>
                <div className="h-full w-full rounded-4xl outline-15 outline-black"></div>
                <div className="h-full w-full bg-black z-10"></div>
                <div className="h-full w-full rounded-4xl outline-15 outline-black"></div>
                <div className="h-full w-full bg-black z-10"></div>
            </div>
            <div className="h-1/20 bg-black w-full z-10"></div>
        </div>
    )
}