import AboutMe from "./components/aboutMe";
import Beams from "./components/blocks/Backgrounds/Beams/Beams";
import Hero from "./components/hero";
import Nav from "./components/nav";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function App() {
    return (
        <div className="relative w-full min-h-screen overflow-auto dark">
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

            <main className="relative z-10 mt-4 px-4 merienda">
                <Hero imageSrc="/assets/profile_pic_2.png" />
                <Skills />
                <AboutMe />
                <Projects />
                <Contact />
                <Footer />
            </main>
        </div>
    );
}
