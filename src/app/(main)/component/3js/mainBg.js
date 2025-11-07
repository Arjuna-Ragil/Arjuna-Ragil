'use client'

import { useEffect, useRef, useState } from "react"
import * as THREE from 'three';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Navbar from "../navbar";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function MainBg(){
    const canvasRef = useRef(null)
    const [isLoading, setIsLoading] = useState(true);
    const [loadProgress, setLoadProgress] = useState(0);
    const [timeline, setTimeline] = useState(null)

    useEffect(() => { 
        if (history.scrollRestoration) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);

        let camera, scene, canvas, renderer, animationFrameId, control, tl
        let sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune

        const init = () => {
            const loadingManager = new THREE.LoadingManager();

            loadingManager.onLoad = () => {
                setIsLoading(false);
                tl = gsap.timeline()
                ScrollTrigger.create({ animation: tl, trigger: "body", start: "top top", end: "bottom bottom", scrub: 0.25 });

                tl.to(camera.position, { x: "33", z: "57", y: "0", duration: 5 }) //home
                tl.to(lookAtTarget, { x: "50", z: "0", y: "20", duration: 5 }, "<") 
                tl.to(camera.position, { x: "28", z: "1.5", y: "0", duration: 5 }) //mercury
                tl.to(lookAtTarget, { x: "20", z: "0", y: "0", duration: 5 }, "<")
                tl.to(camera.position, { x: "37", z: "-9", y: "0", duration: 5 }) //venus
                tl.to(camera.position, { x: "51", z: "-22", y: "0", duration: 5 }) // earth
                tl.to(camera.position, { x: "47", z: "24", y: "0", duration: 5 }) // mars
                tl.to(camera.position, { x: "80", z: "-0.5", y: "0", duration: 5 }) // jupiter
                tl.to(camera.position, { x: "100", z: "-13", y: "0", duration: 5 }) // saturn
                tl.to(camera.position, { x: "110", z: "-5", y: "0", duration: 5 }) // uranus
                tl.to(camera.position, { x: "135", z: "13", y: "0", duration: 5 }) // neptune
                tl.to(camera.position, { x: "127", z: "13", y: "0", duration: 5 }) // footer
                setTimeline(tl);
            };

            loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
                const progress = itemsLoaded / itemsTotal;
                setLoadProgress(progress);
            };

            loadingManager.onError = (url) => {
                console.error('Ada error saat me-load:', url);
            };

            scene = new THREE.Scene()
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / innerHeight, 0.1, 1000)
            camera.position.set(-50, 32, 0)
            
            canvas = canvasRef.current
            renderer = new THREE.WebGLRenderer({ canvas, antialias: true})
            renderer.setSize(window.innerWidth, window.innerHeight)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

            const ambientLight = new THREE.AmbientLight(0x404040, 2);
            scene.add(ambientLight);

            const sunLight = new THREE.DirectionalLight(0xffffff, 3.0);

            sunLight.position.set(-1, 0, 0); 
            scene.add(sunLight);

            const hdrLoader = new EXRLoader(loadingManager)
            hdrLoader.load('/3js/skybox.exr', (skybox) => {
                scene.background = skybox
                skybox.mapping = THREE.EquirectangularReflectionMapping
                scene.environment = skybox;
            })

            const gltfLoader = new GLTFLoader(loadingManager)

            gltfLoader.load('/3js/sun.glb', (gltf) => {
                sun = gltf.scene
                scene.add(sun)
            })

            gltfLoader.load('/3js/mercury.glb', (gltf) => {
                mercury = gltf.scene
                scene.add(mercury)
            })

            gltfLoader.load('/3js/venus.glb', (gltf) => {
                venus = gltf.scene
                scene.add(venus)
            })

            gltfLoader.load('/3js/earth.glb', (gltf) => {
                earth = gltf.scene
                scene.add(earth)
            })

            gltfLoader.load('/3js/mars.glb', (gltf) => {
                mars = gltf.scene
                scene.add(mars)
            })

            gltfLoader.load('/3js/jupiter.glb', (gltf) => {
                jupiter = gltf.scene
                scene.add(jupiter)
            })

            gltfLoader.load('/3js/saturn.glb', (gltf) => {
                saturn = gltf.scene
                scene.add(saturn)
            })

            gltfLoader.load('/3js/uranus.glb', (gltf) => {
                uranus = gltf.scene
                scene.add(uranus)
            })

            gltfLoader.load('/3js/neptune.glb', (gltf) => {
                neptune = gltf.scene
                scene.add(neptune)
            })

            function addStar(){
                const starGeometry = new THREE.SphereGeometry(0.1, 24, 24)
                const starMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF })
                const star = new THREE.Mesh(starGeometry, starMaterial)

                const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200))
                star.position.set(x, y, z)
                scene.add(star)
            }

            Array(200).fill().forEach(addStar)
            
            const textureLoader = new THREE.TextureLoader(loadingManager);

        }

        const handleResize = () => {
            if (!camera || !renderer) return;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        const lookAtTarget = new THREE.Vector3(0, 32, 0);

        const animate = () => {
            renderer.render(scene, camera)
            animationFrameId = requestAnimationFrame(animate)
            camera.lookAt(lookAtTarget);

            if (sun) sun.children[0].rotation.z += 0.0009
            if (mercury) mercury.children[0].rotation.z += 0.0005;
            if (venus) venus.children[0].rotation.z += 0.00001;
            if (earth) earth.children[0].rotation.z += 0.001;
            if (mars) mars.children[0].rotation.z += 0.001;
            if (jupiter) jupiter.children[0].rotation.z += 0.002;
            if (saturn) saturn.children[0].rotation.z += 0.0022;
            if (uranus) uranus.children[0].rotation.z += 0.0012;
            if (neptune) neptune.children[0].rotation.z += 0.0013;
        }
        
        window.addEventListener("resize", handleResize)
        init()
        animate()

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            if (tl) {
                if (tl.scrollTrigger) {
                    tl.scrollTrigger.kill();
                }
                tl.kill();
            }
        };
    }, [])
    

    return(
        <>
            {isLoading && (
                <div className="fixed top-0 left-0 h-screen w-full flex flex-col items-center justify-center bg-black z-50">
                    <p className="text-white text-2xl">Loading...</p>
                    <p className="text-white mt-2">{Math.round(loadProgress * 100)}%</p>
                </div>
            )} 

            <Navbar timeline={timeline}/>
            <canvas ref={canvasRef} className={`h-screen w-screen -z-50 fixed ${isLoading ? 'opacity-0' : 'opacity-100'}`}/>
        </>
    )
}