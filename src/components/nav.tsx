import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavProps {
    className?: string;
}

export default function Nav({ className = "" }: NavProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: "smooth" });
        }
        
        setIsOpen(false);
    };

    const links = [
        { href: "#hero", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-4" : "py-6"} ${className}`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                
                {/* Logo */}
                <a 
                    href="#hero" 
                    onClick={(e) => handleScrollTo(e, "#hero")}
                    className="text-xl font-bold tracking-tighter text-foreground z-50"
                >
                    SAF
                </a>

                {/* Desktop Links (Pill) */}
                <div className="hidden md:flex items-center gap-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleScrollTo(e, link.href)}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu */}
                <div className="flex items-center gap-4 z-50">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-foreground"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl md:hidden"
                    >
                        <div className="flex flex-col items-center py-8 gap-6">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleScrollTo(e, link.href)}
                                    className="text-lg font-medium text-muted-foreground hover:text-foreground"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
