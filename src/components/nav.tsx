import { useState } from "react";

interface NavProps {
    className?: string;
}

export default function Nav({ className = "" }: NavProps) {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: "#hero", label: "Home" },
        { href: "#skills", label: "Skills" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    const barStyles = [
        {
            transform: isOpen
                ? "translateY(-50%) rotate(45deg)"
                : "translateY(-50%) translateY(-0.35rem)",
            opacity: 1,
        },
        {
            transform: "translateY(-50%)",
            opacity: isOpen ? 0 : 1,
        },
        {
            transform: isOpen
                ? "translateY(-50%) rotate(-45deg)"
                : "translateY(-50%) translateY(0.35rem)",
            opacity: 1,
        },
    ];

    return (
        <nav
            className={`${className} relative z-20 bg-[#070b13]/80 border-b border-white/10 backdrop-blur-xl`}
        >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9c38c]/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#2e9faa]/50 to-transparent" />

            <div className="container mx-auto px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4 text-[#d9c38c]">
                    <span className="text-sm tracking-[0.65em] uppercase">
                        saf
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-10 tracking-[0.25em] text-xs uppercase">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-gray-200 transition hover:text-[#d9c38c]"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-sm border border-[#d9c38c]/60 text-[#d9c38c]"
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="pointer-events-none relative block h-4 w-5">
                            {barStyles.map((bar, index) => (
                                <span
                                    key={index}
                                    className="absolute left-0 top-1/2 block h-[2px] w-full origin-center bg-current transition-all duration-300 ease-out"
                                    style={{
                                        transform: bar.transform,
                                        opacity: bar.opacity,
                                    }}
                                />
                            ))}
                        </span>
                    </button>
                </div>
            </div>

            <div
                className={`md:hidden border-t bg-[#05060b]/95 px-5 text-xs tracking-[0.3em] uppercase transition-all duration-300 ease-out space-y-3 overflow-hidden ${
                    isOpen
                        ? "max-h-72 border-white/10 pt-4 pb-6 opacity-100 translate-y-0 pointer-events-auto"
                        : "max-h-0 border-transparent pt-0 pb-0 opacity-0 -translate-y-2 pointer-events-none"
                }`}
                aria-hidden={!isOpen}
            >
                {links.map((link, index) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={`block translate-y-2 text-gray-200 transition-all duration-300 ease-out ${
                            isOpen ? "translate-y-0 opacity-100" : "opacity-0"
                        } hover:text-[#2e9faa]`}
                        style={{ transitionDelay: `${index * 60}ms` }}
                        tabIndex={isOpen ? 0 : -1}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}
