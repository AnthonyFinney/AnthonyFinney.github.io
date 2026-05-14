import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiGithub,
    SiNodedotjs,
    SiMongodb,
    SiJavascript,
    SiSharp,
    SiDotnet,
} from "react-icons/si";
import LogoLoop from "./LogoLoop";

const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiGithub />, title: "Github", href: "https://github.com/" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org/" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiSharp />, title: "C#", href: "https://dotnet.microsoft.com/en-us/languages/csharp" },
    { node: <SiDotnet />, title: "ASP.NET Core", href: "https://asp.net/" },
];

export default function Skills() {
    const stacks = [
        { name: "C#", icon: <SiSharp size={28} />, category: "Language" },
        { name: "JavaScript", icon: <SiJavascript size={28} />, category: "Language" },
        { name: "TypeScript", icon: <SiTypescript size={28} />, category: "Language" },
        { name: "ASP.NET Core", icon: <SiDotnet size={28} />, category: "Framework" },
        { name: "React", icon: <SiReact size={28} />, category: "Framework" },
        { name: "Next.js", icon: <SiNextdotjs size={28} />, category: "Framework" },
        { name: "Node.js", icon: <SiNodedotjs size={28} />, category: "Runtime" },
        { name: "Tailwind", icon: <SiTailwindcss size={28} />, category: "Styling" },
        { name: "MongoDB", icon: <SiMongodb size={28} />, category: "Database" },
        { name: "Github", icon: <SiGithub size={28} />, category: "Tools" },
    ];

    return (
        <section id="skills" className="py-24 px-6 border-t border-white/5 relative z-10 bg-[#0a0a0a]">
            <div className="container max-w-5xl mx-auto">
                
                {/* Section Header */}
                <div className="flex items-center gap-6 mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-foreground">Skills</h2>
                    <div className="h-[1px] flex-grow bg-border" />
                </div>

                {/* Tech Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {stacks.map((tech) => (
                        <div
                            key={tech.name}
                            className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                                {tech.icon}
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-bold text-foreground mb-1">{tech.name}</p>
                                <span className="text-[10px] uppercase font-medium tracking-wider text-muted-foreground">
                                    {tech.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Logo Marquee */}
                <div className="mt-16 pt-8 border-t border-white/5 overflow-hidden">
                    <div className="opacity-50 hover:opacity-100 transition-opacity duration-500">
                        <LogoLoop
                            logos={techLogos}
                            speed={130}
                            direction="left"
                            logoHeight={32}
                            gap={48}
                            pauseOnHover
                            scaleOnHover
                            fadeOut
                            fadeOutColor="#0a0a0a"
                            ariaLabel="Technology partners"
                        />
                    </div>
                </div>
                
            </div>
        </section>
    );
}
