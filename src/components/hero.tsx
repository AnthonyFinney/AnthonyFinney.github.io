import { SiGithub, SiLinkedin, SiMaildotru } from "react-icons/si";

interface HeroProps {
    imageSrc?: string;
}

export default function Hero({}: HeroProps) {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center min-h-screen px-6 overflow-hidden"
        >
            {/* Subtle light effect behind text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-white/5 blur-[120px] rounded-[100%] pointer-events-none" />

            {/* Social Sidebar (Desktop) */}
            <div className="hidden md:flex absolute left-8 lg:left-12 bottom-1/2 translate-y-1/2 flex-col gap-6 text-muted-foreground z-10">
                <a href="https://github.com/AnthonyFinney" className="hover:text-foreground transition-colors p-2">
                    <SiGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/soshie-finney-557361233/" className="hover:text-foreground transition-colors p-2">
                    <SiLinkedin size={20} />
                </a>
                <a href="mailto:anthonyrockfinnie0@gmail.com" className="hover:text-foreground transition-colors p-2">
                    <SiMaildotru size={20} />
                </a>
            </div>

            <div className="relative z-10 text-center w-full max-w-5xl mx-auto flex flex-col items-center">
                
                <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 select-none pb-4">
                    Soshie A. Finney
                </h1>
                
                <p className="mt-6 md:mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-medium tracking-wide">
                    Full-stack developer shaping digital worlds with precision.
                    <br className="hidden md:block" /> Building immersive experiences where code meets design.
                </p>

                {/* Mobile Socials */}
                <div className="md:hidden flex items-center justify-center gap-6 mt-12 text-muted-foreground">
                    <a href="https://github.com/AnthonyFinney" className="hover:text-foreground transition-colors">
                        <SiGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/soshie-finney-557361233/" className="hover:text-foreground transition-colors">
                        <SiLinkedin size={24} />
                    </a>
                    <a href="mailto:anthonyrockfinnie0@gmail.com" className="hover:text-foreground transition-colors">
                        <SiMaildotru size={24} />
                    </a>
                </div>
                
                <div className="absolute bottom-12 animate-bounce opacity-50">
                    <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent" />
                </div>
            </div>
        </section>
    );
}
