import { type ReactNode } from "react";
import { motion } from "framer-motion";
import AboutMe from "../components/aboutMe";
import Hero from "../components/hero";
import GithubStatus from "../components/githubStatus";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";

export function CinematicRevealSection({ children }: { children: ReactNode }) {
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

export default function Home() {
    return (
        <>
            <CinematicRevealSection>
                <Hero />
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
                <Projects limit={4} />
            </CinematicRevealSection>
            <CinematicRevealSection>
                <Contact />
            </CinematicRevealSection>
        </>
    );
}
