import { SiGithub, SiLinkedin } from "react-icons/si";
import TextType from "../components/textType";

interface HeroProps {
    imageSrc: string;
    imageAlt?: string;
}

export default function Hero({
    imageSrc,
    imageAlt = "My profile picture",
}: HeroProps) {
    return (
        <section
            id="hero"
            className="relative overflow-hidden flex items-center justify-center min-h-[calc(85vh-4rem)] px-6 py-12 text-white bg-transparent"
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-y-0 left-1/4 w-px bg-gradient-to-b from-transparent via-[#d9c38c]/40 to-transparent" />
                <div className="absolute inset-y-0 right-1/4 w-px bg-gradient-to-b from-transparent via-[#2e9faa]/40 to-transparent" />
                <div className="absolute inset-x-12 top-10 h-px bg-gradient-to-r from-transparent via-[#d9c38c]/60 to-transparent" />
                <div className="absolute inset-x-12 bottom-10 h-px bg-gradient-to-r from-transparent via-[#2e9faa]/60 to-transparent" />
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(217,195,140,0.18),_transparent_55%)]" />
            </div>

            <div className="relative container mx-auto border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_60px_rgba(0,0,0,0.45)] p-6 md:p-8 lg:p-10 rounded-[32px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="order-2 md:order-1 text-center md:text-left">
                        <p className="uppercase tracking-[0.5em] text-xs text-[#d9c38c]">
                            Crafted in code
                        </p>
                        <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
                            <span className="text-[#d9c38c]">Hi, I&apos;m</span>
                            <br />
                            <span className="inline-block lg:min-w-[10ch] font-serif">
                                {"{"}
                                <TextType
                                    text={["Soshie", "শশী", "シャシ", "شاشي", "শশি"]}
                                    typingSpeed={95}
                                    pauseDuration={1500}
                                    showCursor={false}
                                />
                                {"}"}
                            </span>
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-gray-200">
                            Full-stack developer shaping digital worlds with precision.
                        </p>
                        <p className="mt-2 text-sm text-gray-300 max-w-xl md:max-w-none">
                            Passionate about building immersive experiences where geometry, motion, and storytelling intersect.
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                            <a
                                href="https://github.com/AnthonyFinney"
                                className="inline-flex items-center gap-2.5 border border-[#d9c38c] px-5 py-2.5 uppercase tracking-[0.3em] text-[10px] text-[#d9c38c] hover:bg-[#d9c38c]/10 transition"
                            >
                                <SiGithub size={20} /> GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/soshie-finney-557361233/"
                                className="inline-flex items-center gap-2.5 border border-[#2e9faa] px-5 py-2.5 uppercase tracking-[0.3em] text-[10px] text-[#2e9faa] hover:bg-[#2e9faa]/10 transition"
                            >
                                <SiLinkedin size={20} /> LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto">
                            <div className="absolute -inset-4 border-2 border-[#d9c38c]/70 rounded-[32px]" />
                            <div className="absolute -inset-8 border border-[#2e9faa]/50 rounded-[42px] rotate-3" />
                            <div className="relative w-full h-full rounded-[28px] overflow-hidden border-4 border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.65)] bg-gradient-to-br from-[#141d2c] via-[#101725] to-[#090c15]">
                                <img
                                    src={imageSrc}
                                    alt={imageAlt}
                                    className="w-full h-full object-cover mix-blend-luminosity"
                                />
                                <div className="absolute inset-x-6 bottom-6 h-px bg-gradient-to-r from-[#d9c38c]/0 via-[#d9c38c]/70 to-[#d9c38c]/0" />
                            </div>
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 text-xs tracking-[0.35em] text-[#d9c38c] uppercase">
                                <span className="w-10 h-px bg-[#d9c38c]" />
                                2001
                                <span className="w-10 h-px bg-[#d9c38c]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
