'use client'

import { useEffect, useRef, useState } from "react"
import * as THREE from 'three';
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';
import gsap from "gsap";
import { useSwitch } from "../../hook/useSwitch";

export default function IntroBg(){
    const canvasRef = useRef(null)
    const { switchContent } = useSwitch()

    useEffect(() => {
        let canvas, scene, camera, renderer, animationFrameId, control
        let doorMesh = null
        let startPositionZ = 5

        const init = () => {
            scene = new THREE.Scene()
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
            camera.position.set(0, 2, 5)
            camera.lookAt(0, 2, 0)
            
            canvas = canvasRef.current
            renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
            renderer.setSize(window.innerWidth, window.innerHeight)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

            //control = new OrbitControls(camera, renderer.domElement)

            const gridHelper = new THREE.GridHelper(100, 10)
            //scene.add(gridHelper)

            const hdrLoader = new HDRLoader()
            hdrLoader.load('/3js/skybox.hdr', (skybox) => {
                scene.background = skybox
                skybox.mapping = THREE.EquirectangularReflectionMapping
                scene.environment = skybox;
            })

            const gltfLoader = new GLTFLoader()

            gltfLoader.load('/3js/door.glb', (gltf) => {
                const door = gltf.scene
                door.position.set(-1, 2, 0)
                door.traverse((child) => {
                    console.log(child.name)
                    if (child.name === 'Cube') { 
                        console.log("Menemukan mesh pintu:", child.name);
                        doorMesh = child;
                    }
                });
                scene.add(door)
            })

            const floorGeometry = new THREE.PlaneGeometry(100, 80)
            const groundMirror = new Reflector(floorGeometry, {
                clipBias: 0.003,
                textureWidth: window.innerWidth * window.devicePixelRatio,
                textureHeight: window.innerHeight * window.devicePixelRatio,
                color: 0x889999
            });
            groundMirror.rotation.x = -Math.PI / 2; 
            groundMirror.position.y = 0;
            scene.add(groundMirror);
        }

        function openDoor(){
            if (doorMesh && camera.position.z === startPositionZ) {
                switchContent()

                gsap.to(doorMesh.rotation, {
                    z: Math.PI / 2,
                    duration: 2,
                    ease: "power2.inOut"
                })

                gsap.to(camera.position, {
                    z: "-= 7",
                    duration: 2,
                    ease: "power2.inOut"
                })
            } else {
                console.log("pintu tidak dapat dibuka");    
            }
        }

        const handleResize = () => {
            if (!camera || !renderer) return;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        const animate = () => {
            renderer.render(scene, camera)
            animationFrameId = requestAnimationFrame(animate)
            //control.update() //orbit control
        }
        
        window.addEventListener("click", openDoor)
        window.addEventListener("resize", handleResize)
        init()
        animate()

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [])

    return(
        <canvas ref={canvasRef} className="h-screen w-screen absolute -z-50"/>
    )
}