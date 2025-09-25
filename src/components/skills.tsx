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
    {
        node: <SiTypescript />,
        title: "TypeScript",
        href: "https://www.typescriptlang.org",
    },
    {
        node: <SiTailwindcss />,
        title: "Tailwind CSS",
        href: "https://tailwindcss.com",
    },
    {
        node: <SiGithub />,
        title: "Github",
        href: "https://github.com/",
    },
    {
        node: <SiNodedotjs />,
        title: "Node.js",
        href: "https://nodejs.org/",
    },
    {
        node: <SiMongodb />,
        title: "MongoDB",
        href: "https://www.mongodb.com",
    },
    {
        node: <SiJavascript />,
        title: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        node: <SiSharp />,
        title: "C#",
        href: "https://dotnet.microsoft.com/en-us/languages/csharp",
    },
    {
        node: <SiDotnet />,
        title: "ASP.NET Core",
        href: "https://asp.net/",
    },
];

export default function Skills() {
    const stacks = [
        { name: "C#", icon: <SiSharp size={48} /> },
        { name: "JavaScript", icon: <SiJavascript size={48} /> },
        { name: "TypeScript", icon: <SiTypescript size={48} /> },
        { name: "ASP.NET Core", icon: <SiDotnet size={48} /> },
        { name: "React", icon: <SiReact size={48} /> },
        { name: "Next.js", icon: <SiNextdotjs size={48} /> },
        { name: "Node.js", icon: <SiNodedotjs size={48} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={48} /> },
        { name: "MongoDB", icon: <SiMongodb size={48} /> },
        { name: "Github", icon: <SiGithub size={48} /> },
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
                <div className="bg-neutral-300 mt-9">
                    <LogoLoop
                        logos={techLogos}
                        speed={120}
                        direction="left"
                        logoHeight={48}
                        gap={40}
                        pauseOnHover
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#ffffff"
                        ariaLabel="Technology partners"
                    />
                </div>
            </div>
        </section>
    );
}
