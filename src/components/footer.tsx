import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
    return (
        <footer className=" text-gray-400 py-8">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left text-sm mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} Soshie Finney. All rights
                    reserved.
                </div>

                <div className="flex space-x-6 mb-4 md:mb-0">
                    <a
                        href="https://github.com/AnthonyFinney"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        <SiGithub size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/soshie-finney-557361233/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        <SiLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
