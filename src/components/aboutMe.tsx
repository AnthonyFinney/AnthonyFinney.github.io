import React from "react";

interface AboutMeProps {
    imageSrc: string;
    imageAlt?: string;
}

export default function AboutMe({
    imageSrc,
    imageAlt = "My profile picture",
}: AboutMeProps) {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
                {/* Image */}
                <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="w-48 h-48 rounded-full object-cover border-4 border-white"
                    />
                </div>

                {/* Text */}
                <div className="max-w-2xl text-center md:text-left">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        Hi! I’m [Your Name], a self-taught full-stack developer
                        based in Dhaka, Bangladesh. I specialize in building
                        responsive web apps using React, Next.js, and Tailwind
                        CSS, with a passion for smooth animations powered by
                        GSAP. When I’m not coding, I love exploring AI-generated
                        graphics, refining my photography prompt engineering,
                        and brewing the perfect cup of coffee.
                    </p>
                </div>
            </div>
        </section>
    );
}
