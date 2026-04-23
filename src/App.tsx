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

function CinematicRevealSection({ children }: { children: ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, x: -10 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: false, amount: 0.1 }}
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

            <motion.header
                className="relative z-10"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            >
                <Nav className="bg-transparent" />
            </motion.header>

            <main className="relative z-10 mt-4 merienda">
                <CinematicRevealSection>
                    <Hero imageSrc="/assets/profile_pic_2.png" />
                </CinematicRevealSection>
                <CinematicRevealSection>
                    <GithubStatus />
                </CinematicRevealSection>
                <CinematicRevealSection>
                    <Skills />
                </CinematicRevealSection>
                <CinematicRevealSection>
                    <AboutMe />
                </CinematicRevealSection>
                <CinematicRevealSection>
                    <Projects />
                </CinematicRevealSection>
                <CinematicRevealSection>
                    <Contact />
                </CinematicRevealSection>
                <CinematicRevealSection>
                    <Footer />
                </CinematicRevealSection>
            </main>
        </div>
    );
}
