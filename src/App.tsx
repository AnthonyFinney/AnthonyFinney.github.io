import { useRef, type ReactNode } from "react";
import { motion } from "framer-motion";
import AboutMe from "./components/aboutMe";
import Beams from "./components/blocks/Backgrounds/Beams/Beams";
import Hero from "./components/hero";
import GithubStatus from "./components/githubStatus";
import Nav from "./components/nav";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function RevealSection({ children }: { children: ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: "some", margin: "-8% 0px -8% 0px" }}
            className="reveal-section"
        >
            {children}
        </motion.div>
    );
}

export default function App() {
    const mainRef = useRef<HTMLDivElement>(null);

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
                <RevealSection>
                    <Hero imageSrc="/assets/profile_pic_2.png" />
                </RevealSection>
                <RevealSection>
                    <GithubStatus />
                </RevealSection>
                <RevealSection>
                    <Skills />
                </RevealSection>
                <RevealSection>
                    <AboutMe />
                </RevealSection>
                <RevealSection>
                    <Projects />
                </RevealSection>
                <RevealSection>
                    <Contact />
                </RevealSection>
                <RevealSection>
                    <Footer />
                </RevealSection>
            </main>
        </div>
    );
}
