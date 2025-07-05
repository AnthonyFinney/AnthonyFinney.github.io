import { Github, ExternalLink } from "lucide-react";

interface Project {
    title: string;
    description: string;
    imageSrc: string;
    tech: string[];
    codeLink: string;
    liveLink?: string;
}

const projects: Project[] = [
    {
        title: "EchoDB",
        description:
            "A full‑stack app that enables users to interact with PostgreSQL through natural language.",
        imageSrc: "/images/echodb.png",
        tech: ["Next.js", "PostgreSQL", "OpenAI GPT‑4o", "+3 more"],
        codeLink: "https://github.com/username/echodb",
        liveLink: "https://echodb.example.com",
    },
    {
        title: "TaskPrism",
        description:
            "A visual resource allocation tool built with graph coloring algorithms.",
        imageSrc: "/images/taskprism.png",
        tech: ["Python", "Streamlit", "NetworkX", "+4 more"],
        codeLink: "https://github.com/username/taskprism",
        liveLink: "https://taskprism.example.com",
    },
    {
        title: "Gas Detection System",
        description:
            "An Arduino‑based LPG/CO alert system with real‑time LCD display.",
        imageSrc: "/images/gas-system.png",
        tech: ["Arduino Nano", "MQ2 Sensor", "I2C LCD", "+4 more"],
        codeLink: "https://github.com/username/gas-detection",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 ">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold  text-center mb-2">
                    Featured Projects
                </h2>
                <p className="text-center text-gray-400 mb-8">
                    A showcase of my recent work, demonstrating my expertise in
                    full‑stack development.
                </p>

                <div className="overflow-x-auto flex space-x-6 snap-x snap-mandatory pb-4 justify-center">
                    {projects.map((proj) => (
                        <div
                            key={proj.title}
                            className="snap-center flex-shrink-0 w-80 bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                        >
                            {/* Image */}
                            <div className="h-48 w-full bg-gray-700">
                                <img
                                    src={proj.imageSrc}
                                    alt={proj.title}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4 flex flex-col h-full justify-between">
                                <div>
                                    <h3 className="text-2xl font-semibold text-white mb-2">
                                        {proj.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                                        {proj.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {proj.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded-full"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons & Details */}
                                <div className="mt-4 border-t border-gray-700 pt-4">
                                    <div className="flex items-center">
                                        <a
                                            href={proj.codeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-gray-200 hover:text-white border border-gray-600 px-3 py-2 rounded-md"
                                        >
                                            <Github className="h-5 w-5 mr-2" />
                                            <span className="text-sm font-medium">
                                                Code
                                            </span>
                                        </a>
                                        {proj.liveLink && (
                                            <a
                                                href={proj.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="ml-4 inline-flex items-center bg-cyan-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-cyan-600 transition"
                                            >
                                                <ExternalLink className="h-5 w-5 mr-2" />
                                                Live Link
                                            </a>
                                        )}
                                    </div>
                                    <div className="mt-3 text-center">
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-gray-200 text-sm"
                                        >
                                            View More Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
