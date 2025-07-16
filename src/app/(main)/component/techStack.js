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
    <div className="h-full w-full rounded-3xl border-2 bg-blue-200 p-3">
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
        {turnOn ? 
        <PhoneContent/>
        :
        <div className="h-full w-full text-center flex flex-col justify-center text-white animate-pulse">
            <h2 className="text-2xl font-bold">Sleep Mode</h2>
            <p>Press to Open</p>
        </div> 
        }
      </div>
    </div>
  );
}
