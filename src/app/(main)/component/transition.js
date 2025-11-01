import TransitionBg from "./3js/transitionBg";

export default function Transition(){
    return(
        <div className="h-screen w-screen flex flex-col -z-50">
            <TransitionBg/>
            <div className="h-1/8 bg-black w-full z-10"></div>
            <div className="h-full w-full grid grid-cols-5 z-10">
                <div className="h-full w-full bg-black z-10"></div>
                <div className="h-full w-full rounded-4xl outline-15 outline-black"></div>
                <div className="h-full w-full bg-black z-10"></div>
                <div className="h-full w-full rounded-4xl outline-15 outline-black"></div>
                <div className="h-full w-full bg-black z-10"></div>
            </div>
            <div className="h-1/8 bg-black w-full z-10"></div>
        </div>
    )
}