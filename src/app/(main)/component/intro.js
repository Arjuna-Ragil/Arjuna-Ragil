'use client'

import { useEffect, useRef, useState } from "react"
import * as THREE from 'three';
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';
import gsap from "gsap";
import { useSwitch } from "../hook/useSwitch";
import IntroBg from "./3js/introBg";

export default function Intro(){
    const { hideIntro } = useSwitch()

    return(
        <div className="h-screen w-full relative">
            <IntroBg/>
            <div className={`${hideIntro ? "opacity-100 z-10" : "opacity-0 -z-10"} h-full w-full bg-black duration-1500 absolute`}></div>
            <div className={`${hideIntro ? "opacity-0" : "opacity-100"} h-full w-full grid grid-cols-2 duration-200`}>
                <h1 className="h-full w-full flex items-center justify-center text-6xl font-bold">JUNA HUB</h1>
                <p className="h-full w-full flex items-center justify-center text-5xl animate-pulse">Click to Enter</p>
            </div>
        </div>
    )
}