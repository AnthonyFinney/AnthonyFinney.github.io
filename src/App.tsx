import { useRef } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Beams from "./components/blocks/Backgrounds/Beams/Beams";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Home, { CinematicRevealSection } from "./pages/Home";
import AllProjects from "./pages/AllProjects";

export default function App() {
    const mainRef = useRef<HTMLDivElement>(null);

    return (
        <Router>
            <div className="relative w-full min-h-screen" ref={mainRef}>
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
                    className="relative z-50"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
                >
                    <Nav className="bg-transparent" />
                </motion.header>

                <main className="relative z-10 overflow-x-clip">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<AllProjects />} />
                    </Routes>
                    
                    <CinematicRevealSection>
                        <Footer />
                    </CinematicRevealSection>
                </main>
            </div>
        </Router>
    );
}
