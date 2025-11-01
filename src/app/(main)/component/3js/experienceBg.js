'use client'

import { useEffect, useRef } from "react"
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { HueSaturationShader } from 'three/examples/jsm/shaders/HueSaturationShader.js';

export default function ExperienceBg(){
    const canvasRef = useRef(null)
    const sunRef = useRef()

    useEffect(() => {
        let canvas, camera, scene, renderer, animationFrameId, control, composer

        const init = () => {
            scene = new THREE.Scene()
            camera = new THREE.PerspectiveCamera(75, (window.innerWidth / 2) / window.innerHeight, 0.1, 1000)
            camera.position.set(-12, 0, 20)

            canvas = canvasRef.current
            renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
            renderer.setSize(window.innerWidth /2, window.innerHeight)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

            composer = new EffectComposer(renderer)

            const renderPass = new RenderPass(scene, camera)
            composer.addPass(renderPass)

            const colorCorrectionPass = new ShaderPass(HueSaturationShader)
            colorCorrectionPass.uniforms["saturation"].value = -0.3;
            composer.addPass(colorCorrectionPass);

            const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.2, 1, 1)
            composer.addPass(bloomPass)

            const outputPass = new OutputPass()
            composer.addPass(outputPass)

            control = new OrbitControls(camera, renderer.domElement)
            control.minDistance = 10;
            control.maxDistance = 40;

            const gltfLoader = new GLTFLoader()

            gltfLoader.load('/3js/sun.glb', (gltf) => {
                const sun = gltf.scene
                sun.scale.set(0.5, 0.5, 0.5)
                sun.traverse((child) => {
                    if (child.isMesh) {
                        const oldMaterial = child.material;
                        
                        child.material = new THREE.MeshStandardMaterial({
                            map: oldMaterial.map,
                            emissive: 0xffa500,
                            emissiveMap: oldMaterial.map,
                            emissiveIntensity: 5.0
                        });
                    }
                });
                sunRef.current = sun
                scene.add(sun)
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

        const clock = new THREE.Clock()

        const animate = () => {
            const delta = clock.getDelta()
            composer.render(delta)
            animationFrameId = requestAnimationFrame(animate)
            control.update() //orbit control

            if (sunRef.current){
                sunRef.current.rotation.y += 0.1 * delta
            }
        }
        
        window.addEventListener("resize", handleResize)
        init()
        animate()

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    },[])

    return(
        <div className="relative h-screen w-full max-md:hidden z-10">
            <canvas ref={canvasRef} className="h-full w-full"/>
            <div className="absolute bg-white/20 backdrop-blur-[1px] top-0 left-0 h-full w-full z-20 border-[30px] border-black/90 shadow-inner-2xl pointer-events-none"/>
        </div>
    )
}