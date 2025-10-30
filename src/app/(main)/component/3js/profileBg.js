'use client'

import { useEffect, useRef } from "react"
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

export default function ProfileBg(){
    const canvasRef = useRef(null)

    useEffect(() => {
        let canvas, scene, camera, renderer, animationFrameId, control

        const init = () => {
            scene = new THREE.Scene()
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
            camera.position.set(0, 1, -0.8)
            camera.lookAt(0, 1, 0)

            canvas = canvasRef.current
            renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
            renderer.setSize(window.innerWidth, window.innerHeight)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

            //control = new OrbitControls(camera, renderer.domElement)

            const gridHelper = new THREE.GridHelper(100, 100)
            scene.add(gridHelper)

            const ambientLight = new THREE.AmbientLight(0xFFFFFF, 10)
            scene.add(ambientLight)

            const gltfLoader = new GLTFLoader()

            gltfLoader.load('/3js/table.glb', (gltf) => {
                const table = gltf.scene
                table.rotateY(Math.PI)
                table.scale.set(0.5, 0.5, 0.5)
                scene.add(table)
            })

            gltfLoader.load('/3js/computer.glb', (gltf) => {
                const computer = gltf.scene
                computer.position.set(-1, -10.35, 2.85)
                computer.scale.set(0.5, 0.5, 0.5)
                computer.rotateY(Math.PI / 8)
                scene.add(computer)
            })

            gltfLoader.load('/3js/document.glb', (gltf) => {
                const document = gltf.scene
                document.position.set(-0.4, 0.75, -0.2)
                document.scale.set(0.1, 0.1, 0.1)
                scene.add(document)
            })

            const textureLoader = new THREE.TextureLoader()
            textureLoader.load('/3js/screen.png', (texture) => {
                const screenWidth = 16;
                const screenHeight = 8.7;
                const screenGeometry = new THREE.PlaneGeometry(screenWidth, screenHeight);
                const screenMaterial = new THREE.MeshBasicMaterial({ map: texture });
                const screen = new THREE.Mesh(screenGeometry, screenMaterial);
                screen.rotateY(Math.PI)
                screen.rotateY(Math.PI / 8)
                screen.scale.set(0.04, 0.04, 0.04)
                screen.position.set(0.42, 1.025, -0.07)
                scene.add(screen);
            })
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
        
        window.addEventListener("resize", handleResize)
        init()
        animate()

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [])
    


    return(
        <canvas ref={canvasRef} className="h-screen w-screen absolute"/>
    )
}