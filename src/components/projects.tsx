import { Github, ExternalLink } from "lucide-react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import {
    Carousel,
    CarouselItem,
    CarouselContent,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";

interface Project {
    title: string;
    description: string;
    longDescription?: string;
    features?: string[];
    imageSrc: string;
    tech: string[];
    codeLink: string;
    liveLink?: string;
}

const projects: Project[] = [
    {
        title: "Animated Web Landing Page (GSAP & React)",
        description:
            "Built a responsive, animated landing page using GSAP (GreenSock Animation Platform) and React",
        longDescription:
            "Built a responsive, animated landing page using GSAP (GreenSock Animation Platform) and React. Followed best practices in animation timing, scroll triggers, and component structure. Based on the tutorial by JavaScript Mastery, with custom modifications to layout and styling.",
        features: ["Animation"],
        imageSrc: "/assets/Animated Web Landing Page (GSAP & React).png",
        tech: ["TypeScript", "React", "Tailwind CSS"],
        codeLink: "https://github.com/AnthonyFinney/gsap_learn",
        liveLink: "https://gsap-learn-pied.vercel.app/",
    },
    {
        title: "Perfume E-commerce Site",
        description:
            "Built a fully responsive perfume store with filtering, dynamic routing, and SEO optimization",
        longDescription:
            "Built a fully responsive perfume store with filtering, dynamic routing, and SEO optimization. Implemented clean UI/UX inspired by luxury branding. Deployed on Vercel.",
        features: [
            "Authentication",
            "Cart management",
            "User role management",
            "Product browsing",
        ],
        imageSrc: "/assets/Perfume E-commerce Site.png",
        tech: [
            "TypeScript",
            "JavaScript",
            "MongoDB",
            "Zod",
            "Next.js",
            "Tailwind CSS",
        ],
        codeLink: "https://github.com/AnthonyFinney/project_at",
        liveLink: "https://project-at-six.vercel.app/",
    },
    {
        title: "Perfume & Attar Image Prompt Generator",
        description: "Built a professional-grade image prompt generation",
        longDescription:
            "Built a professional-grade image prompt generation tool for luxury perfume and attar visualsusing AI.",
        features: [
            "customizable settings for bottle style",
            "customizable settings for camera angle",
            "customizable settings for lighting, environment",
            "exportable text prompts",
        ],
        imageSrc: "/assets/Perfume & Attar Image Prompt Generator.png",
        tech: ["TypeScript", "Next.js", "Tailwind CSS"],
        codeLink: "https://github.com/AnthonyFinney/project_ad",
        liveLink: "https://project-ad-sepia.vercel.app/",
    },
    {
        title: "E-commerce Store In C#",
        description: "A fully functional ASP.NET Core Razor Pages web app.",
        longDescription:
            "A fully functional ASP.NET Core Razor Pages web app with features like authentication, cart management, product browsing and admin tools.",
        features: [
            "Authentication",
            "Cart management",
            "User role management",
            "Product browsing",
        ],
        imageSrc: "",
        tech: ["C#", "JavaScript", "MySQL", "Entity Framework", "ASP.NET"],
        codeLink: "https://github.com/AnthonyFinney/sportsstore",
        liveLink: "",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative py-24 px-4 sm:px-6 bg-[#08060e] text-[#f8f4e6] overflow-hidden"
        >
            <div className="pointer-events-none absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,166,70,0.22),transparent_55%)]" />
                <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[#c9a646]/40 to-transparent" />
                <div className="absolute inset-8 border border-[#c9a646]/20" />
            </div>
            <div className="container relative mx-auto max-w-6xl">
                <div className="text-center space-y-4 mb-14">
                    <div className="flex items-center justify-center gap-4 text-xs tracking-[0.6em] uppercase text-[#c9a646]">
                        <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9a646]" />
                        Curated Work
                        <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9a646]" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-[0.08em]">
                        Projects Gallery
                    </h2>
                    <p className="max-w-3xl mx-auto text-base text-[#d7c9a3]">
                        A collection of experiences crafted with precision,
                        symmetry, and modern engineering.
                    </p>
                </div>

                <Carousel className="relative">
                    <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 h-12 w-12 border border-[#c9a646]/60 rounded-none bg-[#0b0b14]/80 text-[#f8f4e6] hover:bg-[#c9a646]/20" />
                    <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 h-12 w-12 border border-[#c9a646]/60 rounded-none bg-[#0b0b14]/80 text-[#f8f4e6] hover:bg-[#c9a646]/20" />

                    <CarouselContent className="-ml-3 md:-ml-5">
                        {projects.map((proj) => (
                            <CarouselItem
                                key={proj.title}
                                className="pl-3 md:pl-5 basis-full md:basis-1/2 lg:basis-1/3"
                            >
                                <Card className="group flex h-full flex-col overflow-hidden border border-[#c9a646]/30 bg-gradient-to-b from-[#161527]/95 to-[#08050f]/90 text-[#f8f4e6] shadow-[0_15px_40px_rgba(0,0,0,0.55)]">
                                    <CardHeader className="relative p-0">
                                        <div className="relative h-48 overflow-hidden">
                                            {proj.imageSrc ? (
                                                <img
                                                    src={proj.imageSrc}
                                                    alt={proj.title}
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0e0b22] via-[#201338] to-[#08050f] text-xs uppercase tracking-[0.6em] text-[#c9a646]/70">
                                                    {proj.title
                                                        .slice(0, 6)
                                                        .toUpperCase()}
                                                </div>
                                            )}
                                            <span className="absolute top-4 right-4 border border-[#c9a646]/40 bg-[#05030a]/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.5em] text-[#2e9faa]">
                                                Deco
                                            </span>
                                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05030a]/80 via-transparent to-transparent" />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex flex-1 flex-col gap-5 p-6">
                                        <div className="space-y-3">
                                            <CardTitle className="text-2xl font-semibold tracking-[0.05em]">
                                                {proj.title}
                                            </CardTitle>
                                            <CardDescription className="text-sm text-[#d7c9a3]">
                                                {proj.description}
                                            </CardDescription>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {proj.tech.map((t) => (
                                                <Badge
                                                    key={t}
                                                    className="rounded-none border border-[#c9a646]/40 bg-transparent px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-[#c9a646]"
                                                >
                                                    {t}
                                                </Badge>
                                            ))}
                                        </div>
                                        <div className="mt-auto space-y-3">
                                            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.5em] text-[#a7987a]">
                                                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c9a646]/40 to-[#c9a646]" />
                                                <span className="px-4">
                                                    Featured
                                                </span>
                                                <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#c9a646]/40 to-[#c9a646]" />
                                            </div>
                                            <div className="flex items-center justify-between gap-3">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    asChild
                                                    className="flex-1 rounded-none border border-[#c9a646]/70 bg-transparent text-[#f8f4e6] hover:bg-[#c9a646]/15"
                                                >
                                                    <a
                                                        href={proj.codeLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center justify-center gap-2 text-xs tracking-[0.3em]"
                                                    >
                                                        <Github className="h-4 w-4" />
                                                        Code
                                                    </a>
                                                </Button>
                                                {proj.liveLink && (
                                                    <Button
                                                        size="sm"
                                                        asChild
                                                        className="flex-1 rounded-none border border-transparent bg-[#c9a646]/80 text-[#08060e] hover:bg-[#c9a646]"
                                                    >
                                                        <a
                                                            href={
                                                                proj.liveLink
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center justify-center gap-2 text-xs tracking-[0.3em]"
                                                        >
                                                            <ExternalLink className="h-4 w-4" />
                                                            Live
                                                        </a>
                                                    </Button>
                                                )}
                                            </div>
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button
                                                        variant="link"
                                                        size="sm"
                                                        className="w-full rounded-none text-[#2e9faa] underline-offset-4 transition-colors hover:text-[#f8f4e6]"
                                                    >
                                                        View More Details
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="max-w-2xl border border-[#c9a646]/30 bg-[#0b0b16]/95 text-[#f8f4e6]">
                                                    <DialogHeader>
                                                        <DialogTitle className="text-3xl tracking-[0.08em]">
                                                            {proj.title}
                                                        </DialogTitle>
                                                        <DialogDescription className="text-base text-[#d7c9a3]">
                                                            {proj.longDescription ||
                                                                proj.description}
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    {proj.features && (
                                                        <div className="mt-6 space-y-3 rounded-none border border-[#c9a646]/30 p-4">
                                                            <h4 className="text-sm uppercase tracking-[0.4em] text-[#c9a646]">
                                                                Key Features
                                                            </h4>
                                                            <ul className="space-y-2 text-sm text-[#f8f4e6]/90">
                                                                {proj.features.map(
                                                                    (feat) => (
                                                                        <li
                                                                            key={
                                                                                feat
                                                                            }
                                                                            className="flex items-start gap-3"
                                                                        >
                                                                            <span className="mt-1 h-2 w-2 rounded-full bg-[#c9a646]" />
                                                                            <span>
                                                                                {
                                                                                    feat
                                                                                }
                                                                            </span>
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </div>
                                                    )}
                                                    <div className="mt-6 flex flex-wrap gap-3">
                                                        {proj.tech.map((t) => (
                                                            <Badge
                                                                key={t}
                                                                className="rounded-none border border-[#c9a646]/40 bg-transparent px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[#c9a646]"
                                                            >
                                                                {t}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                    <div className="mt-8 flex flex-wrap gap-4">
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            asChild
                                                            className="flex-1 rounded-none border border-[#c9a646]/80 bg-transparent text-[#f8f4e6] hover:bg-[#c9a646]/15"
                                                        >
                                                            <a
                                                                href={
                                                                    proj.codeLink
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center justify-center gap-2 tracking-[0.3em]"
                                                            >
                                                                <Github className="h-4 w-4" />
                                                                Code
                                                            </a>
                                                        </Button>
                                                        {proj.liveLink && (
                                                            <Button
                                                                size="sm"
                                                                asChild
                                                                className="flex-1 rounded-none border border-transparent bg-[#c9a646]/80 text-[#08060e] hover:bg-[#c9a646]"
                                                            >
                                                                <a
                                                                    href={
                                                                        proj.liveLink
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="flex items-center justify-center gap-2 tracking-[0.3em]"
                                                                >
                                                                    <ExternalLink className="h-4 w-4" />
                                                                    Live Link
                                                                </a>
                                                            </Button>
                                                        )}
                                                    </div>
                                                    <DialogFooter>
                                                        <DialogClose asChild>
                                                            <Button className="mt-4 w-full rounded-none border border-[#c9a646]/40 bg-transparent text-[#f8f4e6] hover:bg-[#c9a646]/15">
                                                                Close
                                                            </Button>
                                                        </DialogClose>
                                                    </DialogFooter>
                                                </DialogContent>
                                            </Dialog>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
}
