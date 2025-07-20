import { Github, ExternalLink } from "lucide-react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
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
        <section id="projects" className="py-20 bg-transparent text-foreground">
            <div className="container mx-auto px-6 relative">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-2">
                    Featured Projects
                </h2>
                <p className="text-center mb-8 text-muted-foreground">
                    A showcase of my recent work, demonstrating my expertise in
                    full-stack development.
                </p>

                <Carousel>
                    <CarouselPrevious className="absolute -left-14 top-1/2 -translate-y-1/2 z-10" />
                    <CarouselNext className="absolute -right-14 top-1/2 -translate-y-1/2 z-10" />

                    <CarouselContent className="-ml-2 md:-ml-4">
                        {projects.map((proj) => (
                            <CarouselItem
                                key={proj.title}
                                className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                            >
                                <Card className="flex flex-col h-full">
                                    <CardHeader className="p-0">
                                        {!!proj.imageSrc && (
                                            <img
                                                src={proj.imageSrc}
                                                alt={proj.title}
                                                className="object-cover w-full h-40"
                                            />
                                        )}
                                    </CardHeader>
                                    <CardContent className="p-4 flex-1 flex flex-col justify-between">
                                        <div>
                                            <CardTitle className="text-2xl">
                                                {proj.title}
                                            </CardTitle>
                                            <CardDescription className="line-clamp-3 mb-4">
                                                {proj.description}
                                            </CardDescription>
                                            <div className="flex flex-wrap gap-2">
                                                {proj.tech.map((t) => (
                                                    <Badge key={t}>{t}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex flex-col gap-2 pt-2">
                                        <div className="flex justify-between">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                asChild
                                            >
                                                <a
                                                    href={proj.codeLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center"
                                                >
                                                    <Github className="mr-2 h-4 w-4" />{" "}
                                                    Code
                                                </a>
                                            </Button>
                                            {proj.liveLink && (
                                                <Button size="sm" asChild>
                                                    <a
                                                        href={proj.liveLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center"
                                                    >
                                                        <ExternalLink className="mr-2 h-4 w-4" />{" "}
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
                                                >
                                                    View More Details
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="bg-popover text-popover-foreground">
                                                <DialogHeader>
                                                    <DialogTitle>
                                                        {proj.title}
                                                    </DialogTitle>
                                                    <DialogDescription>
                                                        {proj.longDescription ||
                                                            proj.description}
                                                    </DialogDescription>
                                                </DialogHeader>
                                                {proj.features && (
                                                    <div className="mt-4">
                                                        <h4 className="text-sm font-semibold mb-2">
                                                            Key Features
                                                        </h4>
                                                        <ul className="list-disc list-inside text-sm space-y-1">
                                                            {proj.features.map(
                                                                (feat) => (
                                                                    <li
                                                                        key={
                                                                            feat
                                                                        }
                                                                    >
                                                                        {feat}
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                )}
                                                <div className="mt-4 flex flex-wrap gap-2">
                                                    {proj.tech.map((t) => (
                                                        <Badge key={t}>
                                                            {t}
                                                        </Badge>
                                                    ))}
                                                </div>
                                                <div className="mt-6 flex space-x-4">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        asChild
                                                    >
                                                        <a
                                                            href={proj.codeLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center"
                                                        >
                                                            <Github className="mr-2 h-4 w-4" />{" "}
                                                            Code
                                                        </a>
                                                    </Button>
                                                    {proj.liveLink && (
                                                        <Button
                                                            size="sm"
                                                            asChild
                                                        >
                                                            <a
                                                                href={
                                                                    proj.liveLink
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center"
                                                            >
                                                                <ExternalLink className="mr-2 h-4 w-4" />{" "}
                                                                Live Link
                                                            </a>
                                                        </Button>
                                                    )}
                                                </div>
                                                <DialogFooter>
                                                    <DialogClose asChild>
                                                        <Button variant="outline">
                                                            Close
                                                        </Button>
                                                    </DialogClose>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                    </CardFooter>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
}
