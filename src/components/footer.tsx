import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 border-t border-white/5 bg-[#0a0a0a] relative z-10">
            <div className="container max-w-5xl mx-auto">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
                    
                    {/* Brand Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tighter">Soshie A. Finney</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Full-stack developer passionate about web development, building robust systems and creating modern minimal digital experiences.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-base font-bold text-foreground mb-6">Navigation</h4>
                        <nav className="flex flex-col gap-3 text-sm text-muted-foreground font-medium">
                            <a href="#hero" className="hover:text-foreground w-fit transition-colors">Home</a>
                            <a href="#about" className="hover:text-foreground w-fit transition-colors">About</a>
                            <a href="#projects" className="hover:text-foreground w-fit transition-colors">Projects</a>
                            <a href="#contact" className="hover:text-foreground w-fit transition-colors">Contact</a>
                        </nav>
                    </div>

                    {/* Contact & Networks */}
                    <div>
                        <h4 className="text-base font-bold text-foreground mb-6">Contact & Networks</h4>
                        <div className="space-y-3 text-sm text-muted-foreground">
                            <a href="mailto:anthonyrockfinnie0@gmail.com" className="flex items-center gap-3 hover:text-foreground transition-colors w-fit">
                                <span className="w-5 text-center">@</span> anthonyrockfinnie0@gmail.com
                            </a>
                            <p className="flex items-center gap-3">
                                <span className="w-5 text-center">📍</span> Dhaka, Bangladesh
                            </p>
                        </div>

                        <div className="mt-8">
                            <p className="text-sm font-bold text-foreground mb-3">Follow me:</p>
                            <div className="flex items-center gap-4">
                                <a href="https://www.linkedin.com/in/soshie-finney-557361233/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                    <SiLinkedin size={20} />
                                </a>
                                <a href="https://github.com/AnthonyFinney" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                    <SiGithub size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-muted-foreground">
                    <p>&copy; {currentYear} Soshie A. Finney. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-foreground transition-colors">Legal Notice</a>
                        <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
