"use client";

import { useEffect, useRef, useState } from "react";
import PhoneContent from "./phoneContent";

export default function TechStack() {
  const [turnOn, setTurnOn] = useState(true)
  const timeoutRef = useRef()

  function sleep(timer) {
    clearTimeout(timeoutRef.current)
    
    timeoutRef.current = setTimeout(() => {
      setTurnOn(!timer)
    }, 5000);
  }

  useEffect(() => {
    sleep(true)
    return () => clearTimeout(timeoutRef.current);
  }, [])

  return (
    <div className="h-fit w-fit rounded-3xl border-2 bg-blue-200 p-3">
      <div
        className={`h-full w-full ${turnOn ? "bg-[url(/phoneWallpaper.svg)]" : "bg-gray-900"} rounded-2xl border-1 bg-cover bg-center relative`}
        onClick={() => setTurnOn(true)}
        onMouseLeave={() => {
          if (turnOn) sleep(true);
        }}
        onMouseEnter={() => {
          if (turnOn) sleep(false);
        }}
      >
        <div className="aspect-square w-5 mt-4 h-auto bg-black/70 border-2 border-black rounded-full flex self-start justify-self-center absolute"></div>
        <div className={`h-full w-full bg-black text-center flex flex-col absolute justify-center text-white z-10 ${turnOn ? "hidden" : ""} rounded-xl`}>
            <h2 className="text-2xl font-bold animate-pulse">Sleep Mode</h2>
            <p className="animate-pulse">Press to Open</p>
        </div> 
        <PhoneContent/>
      </div>
    </div>
  );
}
