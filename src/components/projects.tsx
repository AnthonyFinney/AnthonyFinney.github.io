import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import projectsData from "../projects.json";

interface Project {
    title: string;
    description: string;
    imageSrc: string;
    tech: string[];
    codeLink: string;
    liveLink?: string;
    date?: string;
}

const projects: Project[] = projectsData;

interface ProjectsProps {
    limit?: number;
}

export default function Projects({ limit }: ProjectsProps) {
    const displayProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <section id="projects" className="py-24 px-6 border-t border-white/5 relative z-10 bg-black/20">
            <div className="container max-w-5xl mx-auto">
                
                {/* Section Header */}
                <div className="flex items-center gap-6 mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-foreground">Projects</h2>
                    <div className="h-[1px] flex-grow bg-border" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {displayProjects.map((proj, idx) => (
                        <div key={idx} className="group flex flex-col bg-card/40 border border-white/5 rounded-2xl overflow-hidden hover:border-white/15 transition-colors">
                            
                            {/* Project Image */}
                            <div className="relative aspect-video overflow-hidden bg-secondary/20">
                                {proj.imageSrc ? (
                                    <img 
                                        src={proj.imageSrc} 
                                        alt={proj.title} 
                                        className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm font-medium">
                                        {proj.title}
                                    </div>
                                )}
                            </div>

                            {/* Project Details */}
                            <div className="flex flex-col flex-grow p-6">
                                <h3 className="text-xl font-bold text-foreground mb-2">
                                    <a href={proj.liveLink || proj.codeLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        {proj.title}
                                    </a>
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                                    {proj.description}
                                </p>
                                
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                                    <span className="text-xs font-medium text-muted-foreground">
                                        {proj.date || "2024"}
                                    </span>
                                    
                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-2 mr-2">
                                            {proj.tech.slice(0, 3).map((t) => (
                                                <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-medium text-muted-foreground">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        {proj.codeLink && (
                                            <a href={proj.codeLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                                <Github size={16} />
                                            </a>
                                        )}
                                        {proj.liveLink && (
                                            <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors bg-white/10 p-1.5 rounded-full">
                                                <ExternalLink size={14} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {limit && projects.length > limit && (
                    <div className="mt-16 flex justify-center">
                        <Link 
                            to="/projects" 
                            className="px-8 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
                        >
                            View All Projects
                        </Link>
                    </div>
                )}

            </div>
        </section>
    );
}
