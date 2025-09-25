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
            className="flex items-center justify-center h-[calc(100vh-4rem)] px-6 lg:pb-12"
        >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                <div className="place-self-center md:place-self-start lg:ml-auto">
                    <div className="w-72 h-72 mt-7 rounded-full overflow-hidden border-4 border-white">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="max-w-2xl text-center md:text-left">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                        Hi, I&apos;m <span> </span>
                        <span className="inline-block align-baseline lg:min-w-[8ch] font-fallback">
                            {"{"}
                            <TextType
                                text={[
                                    "Soshie",
                                    "শশী",
                                    "シャシ",
                                    "شاشي",
                                    "शशि",
                                ]}
                                typingSpeed={95}
                                pauseDuration={1500}
                                showCursor={false}
                            />
                            {"}"}
                        </span>
                    </h1>

                    <p className="mt-4 text-lg md:text-2xl text-gray-200">
                        Full-Stack Developer
                    </p>
                    <p className="mt-4 text-sm md:text-base text-gray-200">
                        Trying to make everything
                    </p>
                    <a
                        href="https://github.com/AnthonyFinney"
                        className="mt-8 inline-block px-5"
                    >
                        <SiGithub size={48} className="text-white" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/soshie-finney-557361233/"
                        className="mt-8 inline-block px-5"
                    >
                        <SiLinkedin size={48} className="text-white" />
                    </a>
                </div>
            </div>
        </section>
    );
}
