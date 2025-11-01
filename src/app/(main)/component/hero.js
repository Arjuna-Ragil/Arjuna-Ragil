'use client'

import { useWindow } from "../hook/useWindow";
import HeroBg from "./3js/heroBg";

export default function Hero(){
    const { showWindow, showConsole } = useWindow()

    return(
        <div className="min-h-screen h-full w-full flex items-center justify-center" id="hero">
            <HeroBg/>
            <div className={`${showWindow ? "opacity-100 border-y-50 border-x-40" : "opacity-0 border-y-0 border-x-0"} border-black duration-200 min-h-screen min-w-screen h-full w-full backdrop-blur-[2px] flex items-center justify-center`}>
                <div className={`${showConsole ? "" : "hidden"} animate-height origin-center bg-blue-700/70 border border-blue-200 rounded-2xl backdrop-blur-md flex items-center justify-center flex-col p-5 gap-5`}>
                    <h1 className="text-5xl font-bold">Welcome Aboard, Guest</h1>
                    <h2 className="text-3xl">Enjoy your time at Juna Space Port(folio)</h2>
                </div>
            </div>
        </div>
    )
}