import { SiGithub, SiLinkedin, SiMaildotru } from "react-icons/si";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Center, Float, Text } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function MouseFacingText() {
    const textRef = useRef<THREE.Group>(null);
    const target = new THREE.Vector3();

    useFrame((state) => {
        if (textRef.current) {
            // Calculate a gentle target for the text to look at based on mouse
            const x = (state.pointer.x * state.viewport.width) / 4;
            const y = (state.pointer.y * state.viewport.height) / 4;
            
            // The camera is at z=5. We make the target slightly towards the camera but offset by mouse
            target.set(x, y, 5); 
            
            // Smoothly look at target
            const currentRotation = textRef.current.rotation.clone();
            textRef.current.lookAt(target);
            const targetRotation = textRef.current.rotation.clone();
            
            textRef.current.rotation.copy(currentRotation);
            textRef.current.quaternion.slerp(
                new THREE.Quaternion().setFromEuler(targetRotation),
                0.05
            );
        }
    });

    return (
        <group ref={textRef}>
            <Center>            
                <Text3D
                font="/fonts/helvetiker_bold.typeface.json"
                size={0.6}
                height={0.12}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.01}
                bevelSize={0.01}
                bevelOffset={0}
                bevelSegments={3}
                onUpdate={(self) => {
                    self.geometry.computeBoundingBox();
                    self.geometry.center();
                }}
                >
                    Soshie A. Finney
                    <meshStandardMaterial 
                        color="#ffffff" 
                        roughness={0.2} 
                        metalness={0.1} 
                        emissive="#202020"
                        emissiveIntensity={2}
                    />
                </Text3D>
            </Center>
        </group>
    );
}

function Scene() {
    return (
        <Canvas 
            camera={{ position: [0, 0, 5], fov: 45 }} 
            className="w-full h-full cursor-default"
            style={{ background: "transparent" }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <spotLight position={[-5, 5, 5]} intensity={0.5} color="#8888ff" />
            <Suspense fallback={null}>
                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                    <MouseFacingText />
                </Float>
            </Suspense>
        </Canvas>
    );
}

interface HeroProps {
    imageSrc?: string;
}

export default function Hero({}: HeroProps) {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center min-h-screen px-6 overflow-hidden"
        >
            {/* Subtle light effect behind text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-white/5 blur-[120px] rounded-[100%] pointer-events-none" />

            {/* Social Sidebar (Desktop) */}
            <div className="hidden md:flex absolute left-8 lg:left-12 bottom-1/2 translate-y-1/2 flex-col gap-6 text-muted-foreground z-10">
                <a href="https://github.com/AnthonyFinney" className="hover:text-foreground transition-colors p-2">
                    <SiGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/soshie-finney-557361233/" className="hover:text-foreground transition-colors p-2">
                    <SiLinkedin size={20} />
                </a>
                <a href="mailto:anthonyrockfinnie0@gmail.com" className="hover:text-foreground transition-colors p-2">
                    <SiMaildotru size={20} />
                </a>
            </div>

            <div className="relative z-10 text-center w-full max-w-5xl mx-auto flex flex-col items-center">
                
                <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] flex items-center justify-center -my-4 z-20">
                    <Scene />
                </div>
                
                <p className="mt-6 md:mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-medium tracking-wide">
                    Full-stack developer shaping digital worlds with precision.
                    <br className="hidden md:block" /> Building immersive experiences where code meets design.
                </p>

                {/* Mobile Socials */}
                <div className="md:hidden flex items-center justify-center gap-6 mt-12 text-muted-foreground">
                    <a href="https://github.com/AnthonyFinney" className="hover:text-foreground transition-colors">
                        <SiGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/soshie-finney-557361233/" className="hover:text-foreground transition-colors">
                        <SiLinkedin size={24} />
                    </a>
                    <a href="mailto:anthonyrockfinnie0@gmail.com" className="hover:text-foreground transition-colors">
                        <SiMaildotru size={24} />
                    </a>
                </div>
                
                <div className="absolute bottom-12 animate-bounce opacity-50">
                    <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent" />
                </div>
            </div>
        </section>
    );
}
