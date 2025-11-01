'use client'

import { useEffect, useRef } from "react"
import * as THREE from 'three';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export default function TransitionBg(){
    const canvasRef = useRef(null)

    useEffect(() => {
        let camera, scene, canvas, renderer, animationFrameId, control
        let cameraPivot
        let skyboxTexture = null
        let startPositionZ = 5

        const init = () => {
            scene = new THREE.Scene()
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
            camera.position.set(0, 2, startPositionZ)
            
            canvas = canvasRef.current
            renderer = new THREE.WebGLRenderer({ canvas, antialias: true})
            renderer.setSize(window.innerWidth, window.innerHeight / 2)
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
                skyboxTexture = skybox
                skybox.wrapS = THREE.RepeatWrapping;
                skybox.wrapT = THREE.RepeatWrapping;
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

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [])
    

    return(
        <canvas ref={canvasRef} className="h-screen w-screen absolute"/>
    )
}