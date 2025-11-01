'use client'

import gsap from "gsap";
import { useEffect, useRef } from "react"
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { useProfile } from "../../hook/useProfile";

export default function ProfileBg(){
    const canvasRef = useRef(null)
    const { setShowComp, setShowDoc } = useProfile()

    useEffect(() => {
        let canvas, scene, camera, renderer, animationFrameId, control
        let raycaster, mouse

        const init = () => {
            scene = new THREE.Scene()
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
            camera.position.set(0, 1, -0.8)
            camera.lookAt(0, 1, 0)

            canvas = canvasRef.current
            renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha:true })
            renderer.setSize(window.innerWidth, window.innerHeight)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

            //control = new OrbitControls(camera, renderer.domElement)

            raycaster = new THREE.Raycaster();
            mouse = new THREE.Vector2();

            const ambientLight = new THREE.AmbientLight(0xFFFFFF, 10)
            scene.add(ambientLight)

            const gltfLoader = new GLTFLoader()

            gltfLoader.load('/3js/table.glb', (gltf) => {
                const table = gltf.scene
                table.rotateY(Math.PI)
                table.scale.set(0.5, 0.5, 0.5)
                scene.add(table)
            })

            const computerSet = new THREE.Group()
            computerSet.name = "Computer"
            scene.add(computerSet)

            const documentFolder = new THREE.Group()
            documentFolder.name = "Document"
            scene.add(documentFolder)

            gltfLoader.load('/3js/computer.glb', (gltf) => {
                const computer = gltf.scene
                computer.position.set(-1, -10.35, 2.85)
                computer.scale.set(0.5, 0.5, 0.5)
                computer.rotateY(Math.PI / 8)
                computerSet.add(computer)
            })

            gltfLoader.load('/3js/document.glb', (gltf) => {
                const document = gltf.scene
                document.position.set(-0.4, 0.75, -0.2)
                document.scale.set(0.1, 0.1, 0.1)
                documentFolder.add(document)
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
                computerSet.add(screen);
            })
        }

        const onClick = (event) => {
            if (!canvasRef.current || !camera || !scene) return;

            const rect = canvasRef.current.getBoundingClientRect();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(scene.children, true);

            if (intersects.length > 0) {
                let closestHit = intersects[0].object;
                while (closestHit.parent && closestHit.parent !== scene) {
                    closestHit = closestHit.parent
                }
                console.log(closestHit.name)

                if (closestHit.name === "Computer"){
                    setShowComp(true), setShowDoc(false)
                }

                if (closestHit.name === "Document"){
                    setShowDoc(true), setShowComp(false)
                }
            } else {
                setShowComp(false), setShowDoc(false)
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
        
        window.addEventListener("resize", handleResize)
        window.addEventListener("click", onClick)
        init()
        animate()

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener("click", onClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, [])
    


    return(
        <canvas ref={canvasRef} className="h-screen w-screen absolute -z-10"/>
    )
}