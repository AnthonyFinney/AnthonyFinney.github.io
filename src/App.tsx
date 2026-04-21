import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutMe from "./components/aboutMe";
import Beams from "./components/blocks/Backgrounds/Beams/Beams";
import Hero from "./components/hero";
import Nav from "./components/nav";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
    const mainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const sections = gsap.utils.toArray<HTMLElement>(".reveal-section");

            sections.forEach((section) => {
                gsap.fromTo(
                    section,
                    { autoAlpha: 0, y: 20 },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power1.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 92%",
                            end: "bottom 8%",
                            toggleActions: "play reverse play reverse",
                            // Using scrub: false but keeping it light
                            invalidateOnRefresh: true,
                        },
                    }
                );
            });
        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative w-full min-h-screen overflow-x-hidden dark" ref={mainRef}>
            <div className="fixed inset-0 z-10 pointer-events-none">
                <Beams
                    beamWidth={2}
                    beamHeight={15}
                    beamNumber={12}
                    lightColor="#ffffff"
                    speed={2}
                    noiseIntensity={1.75}
                    scale={0.2}
                    rotation={0}
                />
            </div>

            <header className="relative z-10">
                <Nav className="bg-transparent" />
            </header>

            <main className="relative z-10 mt-4 merienda">
                <div className="reveal-section">
                    <Hero imageSrc="/assets/profile_pic_2.png" />
                </div>
                <div className="reveal-section">
                    <Skills />
                </div>
                <div className="reveal-section">
                    <AboutMe />
                </div>
                <div className="reveal-section">
                    <Projects />
                </div>
                <div className="reveal-section">
                    <Contact />
                </div>
                <div className="reveal-section">
                    <Footer />
                </div>
            </main>
        </div>
    );
}
