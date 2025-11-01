'use client'

import { useEffect, useRef } from "react"
import * as THREE from 'three';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import gsap from "gsap";
import { useWindow } from "../../hook/useWindow";

export default function HeroBg(){
    const canvasRef = useRef(null)
    const { setShowWindow, setShowConsole } = useWindow()

    useEffect(() => {
        let camera, scene, canvas, renderer, animationFrameId, control
        let cameraPivot
        let startPositionZ = 5

        const init = () => {
            scene = new THREE.Scene()
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / innerHeight, 0.1, 1000)
            camera.position.set(0, 2, startPositionZ)
            
            canvas = canvasRef.current
            renderer = new THREE.WebGLRenderer({ canvas, antialias: true})
            renderer.setSize(window.innerWidth, window.innerHeight)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

            //control = new OrbitControls(camera, renderer.domElement)

            cameraPivot = new THREE.Group();
            scene.add(cameraPivot);

            cameraPivot.add(camera);

            const hdrLoader = new EXRLoader()
            hdrLoader.load('/3js/heroSkybox.exr', (skybox) => {
                scene.background = skybox
                skybox.mapping = THREE.EquirectangularReflectionMapping
                scene.environment = skybox;
            })

            const gltfLoader = new GLTFLoader()

            gltfLoader.load('/3js/blackHole.glb', (gltf) => {
                const blackhole = gltf.scene
                blackhole.rotateZ(Math.PI / 8)
                scene.add(blackhole)
            })

            function addStar(){
                const starGeometry = new THREE.SphereGeometry(0.1, 24, 24)
                const starMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF })
                const star = new THREE.Mesh(starGeometry, starMaterial)

                const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))
                star.position.set(x, y, z)
                scene.add(star)
            }

            Array(200).fill().forEach(addStar)
            
        }

        const handleResize = () => {
            if (!camera || !renderer) return;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        const zoomOut = () => {
            if(camera.position.z === startPositionZ) {
                const tl = gsap.timeline()

                tl.to(camera.position, {
                    z: "+= 25",
                    y: "-= 2",
                    duration: 3,
                    ease: "power2.inOut",
                    onComplete: () => {
                        setShowConsole(true)
                    }
                })

                tl.add(() => {
                    setShowWindow(true);
                }, "<" + 2.3)
            }
        }

        const clock = new THREE.Clock();

        const animate = () => {
            renderer.render(scene, camera)
            animationFrameId = requestAnimationFrame(animate)
            //control.update() //orbit control

            const delta = clock.getDelta();
            const rotationSpeed = 0.05;
            if (cameraPivot) {
                cameraPivot.rotation.y += rotationSpeed * delta;
            }
        }
        
        window.addEventListener("resize", handleResize)
        init()
        animate()
        zoomOut()

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [])
    

    return(
        <canvas ref={canvasRef} className="h-screen w-screen -z-50 fixed"/>
    )
}