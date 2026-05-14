import { MapPin, ExternalLink } from "lucide-react";

export default function AboutMe() {
    return (
        <section id="about" className="py-24 px-6 border-t border-white/5 relative z-10">
            <div className="container max-w-5xl mx-auto">
                
                {/* Section Header */}
                <div className="flex items-center gap-6 mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-foreground">About</h2>
                    <div className="h-[1px] flex-grow bg-border" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 lg:gap-16 items-start">
                    
                    {/* Left: Image */}
                    <div className="w-full max-w-[300px] mx-auto md:mx-0">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-white/10">
                            <img 
                                src="/assets/profile_pic_2.png" 
                                alt="Soshie Finney" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-10">
                        
                        {/* Header Info */}
                        <div>
                            <p className="text-xl font-medium text-muted-foreground mb-1">Soshie Anthony</p>
                            <h3 className="text-5xl font-bold tracking-tighter text-foreground mb-6">Finney</h3>
                            
                            <div className="flex flex-wrap gap-3">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/50 text-xs font-medium text-muted-foreground border border-white/5">
                                    <MapPin size={12} /> Dhaka
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/50 text-xs font-medium text-muted-foreground border border-white/5">
                                    Full-stack Development
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/50 text-xs font-medium text-muted-foreground border border-white/5">
                                    UI/UX
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/50 text-xs font-medium text-muted-foreground border border-white/5">
                                    WebGL
                                </span>
                            </div>
                        </div>

                        {/* Bio */}
                        <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
                            <p>
                                I am a developer crafting full-stack products with precision and intentionality. Every component is treated as a structural piece of a larger monolith, aligned to strict geometry and high visual contrast.
                            </p>
                            <p>
                                Passionate about web development and minimal design. I aim to merge engineering logic with aesthetic clarity, building modern applications that feel fast, reliable, and visually distinctive.
                            </p>
                        </div>

                        {/* CV Button */}
                        <div className="pt-4">
                            <a 
                                href="/assets/Soshie_Finney_Full_Stack_Developer_CV.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors"
                            >
                                View my CV <ExternalLink size={16} />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
