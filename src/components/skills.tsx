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
        {
            name: "C#",
            icon: <SiSharp size={44} />,
            category: "Language",
            description: "Enterprise-grade backbone I lean on for strongly typed service layers.",
        },
        {
            name: "JavaScript",
            icon: <SiJavascript size={44} />,
            category: "Language",
            description: "Universal glue for browser ergonomics, prototypes, and micro-interactions.",
        },
        {
            name: "TypeScript",
            icon: <SiTypescript size={44} />,
            category: "Language",
            description: "Type-safe iteration that keeps sprawling UI work predictable.",
        },
        {
            name: "ASP.NET Core",
            icon: <SiDotnet size={44} />,
            category: "Framework",
            description: "High-performance web host I pair with C# for APIs and background workers.",
        },
        {
            name: "React",
            icon: <SiReact size={44} />,
            category: "Framework",
            description: "Component model I use to sculpt interactive layouts and state flows.",
        },
        {
            name: "Next.js",
            icon: <SiNextdotjs size={44} />,
            category: "Framework",
            description: "Hybrid rendering stack for polished, SEO-friendly web applications.",
        },
        {
            name: "Node.js",
            icon: <SiNodedotjs size={44} />,
            category: "Runtime",
            description: "Event-driven runtime powering orchestration layers and build tooling.",
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss size={44} />,
            category: "Styling",
            description: "Utility-first palette that keeps typography, spacing, and motion cohesive.",
        },
        {
            name: "MongoDB",
            icon: <SiMongodb size={44} />,
            category: "Database",
            description: "Document store I reach for when schemas need to stay flexible yet fast.",
        },
        {
            name: "Github",
            icon: <SiGithub size={44} />,
            category: "Collaboration",
            description: "Collaboration nerve center for code reviews, automation, and releases.",
        },
    ];

    return (
        <section
            id="skills"
            className="relative overflow-hidden py-24 bg-transparent text-white"
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(217,195,140,0.18),_transparent_55%)]" />
                <div className="absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 bg-gradient-to-b from-[#2e9faa]/30 via-transparent to-transparent blur-3xl" />
                <div className="absolute inset-y-12 left-1/3 w-px bg-gradient-to-b from-transparent via-[#d9c38c]/40 to-transparent" />
                <div className="absolute inset-y-12 right-1/4 w-px bg-gradient-to-b from-transparent via-[#2e9faa]/35 to-transparent" />
            </div>

            <div className="relative container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-xs uppercase tracking-[0.6em] text-[#d9c38c]">
                        Crafted disciplines
                    </p>
                    <div className="mt-5 flex items-center justify-center gap-4">
                        <span className="w-16 h-px bg-gradient-to-r from-transparent via-[#d9c38c]/70 to-transparent" />
                        <h2 className="text-4xl md:text-5xl font-serif tracking-[0.08em]">
                            My Tech Stack
                        </h2>
                        <span className="w-16 h-px bg-gradient-to-r from-transparent via-[#2e9faa]/70 to-transparent" />
                    </div>
                    <p className="mt-5 text-base md:text-lg text-gray-300">
                        Geometry, rhythm, and precision blend into the tools I reach for
                        every day. Each icon below anchors the systems I
                        craft across front-end, back-end, and experience layers.
                    </p>
                </div>

                <div className="relative mt-16">
                    <div className="absolute -inset-6 rounded-[36px] border border-[#d9c38c]/25 opacity-60" />
                    <div className="absolute -inset-[3px] rounded-[34px] border border-[#2e9faa]/20 opacity-40" />
                    <div className="relative rounded-[32px] border border-white/10 bg-transparent px-6 py-10 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {stacks.map((tech) => (
                                <div
                                    key={tech.name}
                                    className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-[#1b2336]/70 via-[#111726] to-[#080b13] px-8 py-10 text-center shadow-[0_15px_40px_rgba(0,0,0,0.35)] transition duration-300 hover:border-[#d9c38c]/50"
                                >
                                    <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-80 bg-[radial-gradient(circle_at_top,_rgba(217,195,140,0.35),_transparent_65%)]" />
                                    <div className="relative flex flex-col items-center gap-4">
                                        <div className="text-[#d9c38c] drop-shadow-[0_0_12px_rgba(217,195,140,0.35)]">
                                            {tech.icon}
                                        </div>
                                        <span className="text-sm uppercase tracking-[0.5em] text-[#2e9faa]/80">
                                            {tech.category}
                                        </span>
                                        <p className="text-2xl font-serif">{tech.name}</p>
                                        <span className="w-12 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                                        <p className="text-sm text-gray-300">
                                            {tech.description ?? "Craft refined through geometric rigor."}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative mt-16">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d9c38c]/15 via-transparent to-[#2e9faa]/15 blur-xl" />
                    <div className="relative overflow-hidden rounded-full border border-white/10 bg-[#080b13]/90 px-6 py-6">
                        <div className="absolute inset-x-10 top-1 h-px bg-gradient-to-r from-transparent via-[#d9c38c]/40 to-transparent" />
                        <div className="absolute inset-x-10 bottom-1 h-px bg-gradient-to-r from-transparent via-[#2e9faa]/40 to-transparent" />
                        <LogoLoop
                            logos={techLogos}
                            speed={130}
                            direction="left"
                            logoHeight={48}
                            gap={48}
                            pauseOnHover
                            scaleOnHover
                            fadeOut
                            fadeOutColor="#05060b"
                            ariaLabel="Technology partners"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
