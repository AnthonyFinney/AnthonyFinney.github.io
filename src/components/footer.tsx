import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className=" text-gray-400 py-8">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                {/* Copyright */}
                <div className="text-center md:text-left text-sm mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} Niloy Finney. All rights
                    reserved.
                </div>

                {/* Social Links */}
                <div className="flex space-x-6 mb-4 md:mb-0">
                    <a
                        href="https://github.com/username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="https://linkedin.com/in/username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="https://twitter.com/username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        <Twitter size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
