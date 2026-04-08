import { SiGithub, SiLinkedin } from "react-icons/si";

const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative mt-24 overflow-hidden bg-[#03050a] py-16 text-gray-200">
            <div className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,195,140,0.08),_transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(46,159,170,0.08),_transparent_50%)]" />
            </div>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9c38c]/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#2e9faa]/60 to-transparent" />
            <div className="absolute inset-y-10 left-6 hidden w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:block" />
            <div className="absolute inset-y-10 right-6 hidden w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:block" />

            <div className="relative container mx-auto px-6">
                <div className="grid gap-12 md:grid-cols-[1fr_auto_1fr] items-center border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-12 rounded-[32px] shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
                    <div className="space-y-4 text-center md:text-left">
                        <p className="uppercase tracking-[0.6em] text-xs text-[#d9c38c]">
                            Atelier of code
                        </p>
                        <h3 className="text-3xl font-serif text-white tracking-[0.25em]">
                            Soshie A. Finney
                        </h3>
                        <p className="text-sm text-gray-300">
                            A modern code craftsman.
                        </p>
                    </div>

                    <div className="relative mx-auto flex flex-col items-center">
                        <div className="absolute inset-0 -m-6 hidden rounded-[32px] border border-white/20 md:block" />
                        <div className="relative rounded-[28px] border border-[#d9c38c]/60 bg-[#05070f]/70 px-10 py-8 text-center">
                            <p className="uppercase tracking-[0.5em] text-xs text-[#d9c38c]">
                                Connect
                            </p>
                            <div className="mt-6 flex items-center gap-8 text-[#d9c38c]">
                                <span className="h-px w-12 bg-gradient-to-r from-transparent via-[#d9c38c] to-transparent" />
                                <span className="text-sm tracking-[0.4em] text-gray-300">
                                    2024
                                </span>
                                <span className="h-px w-12 bg-gradient-to-r from-transparent via-[#d9c38c] to-transparent" />
                            </div>
                            <div className="mt-8 flex items-center gap-6 text-white">
                                <a
                                    href="https://github.com/AnthonyFinney"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-xl transition hover:border-[#d9c38c] hover:text-[#d9c38c]"
                                    aria-label="Visit GitHub profile"
                                >
                                    <SiGithub />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/soshie-finney-557361233/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-xl transition hover:border-[#2e9faa] hover:text-[#2e9faa]"
                                    aria-label="Visit LinkedIn profile"
                                >
                                    <SiLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 text-center md:text-right">
                        <p className="uppercase tracking-[0.4em] text-xs text-[#2e9faa]">
                            Navigate
                        </p>
                        <nav className="grid grid-cols-2 gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-gray-300 md:justify-items-end">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="transition hover:text-white"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                        <p className="text-sm text-gray-400">
                            Available for collaborations blending experiential design and scalable systems.
                        </p>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center gap-4 text-center text-xs uppercase tracking-[0.4em] text-gray-400">
                    <div className="flex items-center gap-4 text-[#d9c38c]">
                        <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#d9c38c] to-transparent" />
                        <span>crafted with intention</span>
                        <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#d9c38c] to-transparent" />
                    </div>
                    <p className="text-[11px] tracking-[0.25em] text-gray-500">
                        &copy; {currentYear} Soshie Anthony Finney · All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
