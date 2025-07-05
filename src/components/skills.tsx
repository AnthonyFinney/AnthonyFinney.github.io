import {
    Code,
    Braces,
    Layers,
    Package,
    Wind,
    Server,
    Database,
    Zap,
} from "lucide-react";

export default function Skills() {
    const stacks = [
        { name: "JavaScript", icon: <Code size={48} /> },
        { name: "TypeScript", icon: <Braces size={48} /> },
        { name: "React", icon: <Layers size={48} /> },
        { name: "Next.js", icon: <Package size={48} /> },
        { name: "Tailwind CSS", icon: <Wind size={48} /> },
        { name: "Node.js", icon: <Server size={48} /> },
        { name: "MongoDB", icon: <Database size={48} /> },
        { name: "GSAP", icon: <Zap size={48} /> },
    ];

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-white text-center mb-12">
                    My Tech Stack
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {stacks.map((tech) => (
                        <div
                            key={tech.name}
                            className="flex flex-col items-center text-gray-300 hover:text-white transition"
                        >
                            {tech.icon}
                            <span className="mt-3 text-lg font-medium">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
