import { useState } from "react";

interface NavProps {
    className?: string;
}

export default function Nav({ className = "" }: NavProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`${className} shadow manufacturing-consent-regular`}>
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-300 ">SOSHIE</div>

                <div className="hidden md:flex space-x-8">
                    <a href="#hero" className="text-white hover:text-gray-300">
                        Home
                    </a>
                    <a
                        href="#skills"
                        className="text-white hover:text-gray-300"
                    >
                        Skills
                    </a>
                    <a href="#about" className="text-white hover:text-gray-300">
                        About
                    </a>
                    <a
                        href="#projects"
                        className="text-white hover:text-gray-300"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="text-white hover:text-gray-300"
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-transparent px-4 pb-4 space-y-2">
                    <a
                        href="#hero"
                        className="block text-white hover:text-gray-300"
                    >
                        Home
                    </a>
                    <a
                        href="#skills"
                        className="block text-white hover:text-gray-300"
                    >
                        Skills
                    </a>
                    <a
                        href="#about"
                        className="block text-white hover:text-gray-300"
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        className="block text-white hover:text-gray-300"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="block text-white hover:text-gray-300"
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
}
