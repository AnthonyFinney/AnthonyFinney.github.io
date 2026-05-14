import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Projects from "../components/projects";
import { CinematicRevealSection } from "./Home";

export default function AllProjects() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24">
            <div className="container max-w-5xl mx-auto px-6 mb-8 relative z-20">
                <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10">
                    <ArrowLeft size={16} className="mr-2" />
                    Back to Home
                </Link>
            </div>
            <CinematicRevealSection>
                <Projects />
            </CinematicRevealSection>
        </div>
    );
}
