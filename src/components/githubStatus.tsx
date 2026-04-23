import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, BookOpen } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { GitHubCalendar } from "react-github-calendar";

interface GitHubUser {
    login: string;
    avatar_url: string;
    html_url: string;
    name: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
}

export default function GithubStatus() {
    const [user, setUser] = useState<GitHubUser | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                const userRes = await fetch("https://api.github.com/users/AnthonyFinney");
                if (!userRes.ok) throw new Error("Failed to fetch user data");
                const userData = await userRes.json();

                setUser(userData);
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchGitHubData();
    }, []);

    if (error) {
        return (
            <section className="relative overflow-hidden flex items-center justify-center min-h-[40vh] px-6 py-12 text-white">
                <div className="text-center text-red-400 border border-red-500/30 bg-red-500/10 p-6 rounded-2xl backdrop-blur-md">
                    <p>Failed to load GitHub status:</p>
                    <p className="text-sm mt-2 opacity-80">{error}</p>
                </div>
            </section>
        );
    }

    return (
        <section
            id="github-status"
            className="relative overflow-hidden flex flex-col items-center justify-center min-h-[70vh] px-6 py-16 text-white"
        >
            <div className="relative container mx-auto max-w-6xl">
                <div className="mb-12 text-center">
                    <p className="uppercase tracking-[0.3em] text-xs text-[#2e9faa] mb-2">Code & Contributions</p>
                    <h2 className="text-3xl md:text-5xl font-semibold">
                        GitHub <span className="text-[#d9c38c]">Status</span>
                    </h2>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="w-12 h-12 border-4 border-[#2e9faa]/20 border-t-[#2e9faa] rounded-full animate-spin"></div>
                    </div>
                ) : user && (
                    <div className="flex flex-col gap-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Profile Card */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.3)] p-8 rounded-[32px] flex flex-col items-center text-center h-full justify-center"
                            >
                                <div className="relative w-32 h-32 mb-6">
                                    <div className="absolute -inset-2 border-2 border-[#d9c38c]/50 rounded-full" />
                                    <img
                                        src={user.avatar_url}
                                        alt={user.login}
                                        className="w-full h-full rounded-full object-cover border-2 border-[#2e9faa]/50"
                                    />
                                </div>
                                <h3 className="text-2xl font-semibold">{user.name || user.login}</h3>
                                <a 
                                    href={user.html_url} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-sm text-[#2e9faa] hover:text-[#d9c38c] transition-colors mt-2 mb-4"
                                >
                                    <SiGithub size={16} /> @{user.login}
                                </a>
                                <p className="text-gray-300 text-sm mb-6 max-w-sm">{user.bio}</p>
                                
                                <div className="flex gap-6 text-sm w-full justify-center">
                                    <div className="flex flex-col items-center">
                                        <span className="text-xl font-semibold text-[#d9c38c]">{user.public_repos}</span>
                                        <span className="text-gray-400 flex items-center gap-1 mt-1"><BookOpen size={14} /> Repos</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-xl font-semibold text-[#2e9faa]">{user.followers}</span>
                                        <span className="text-gray-400 flex items-center gap-1 mt-1"><Users size={14} /> Followers</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-xl font-semibold text-[#d9c38c]">{user.following}</span>
                                        <span className="text-gray-400 flex items-center gap-1 mt-1"><Users size={14} /> Following</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Stats Card */}
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.3)] p-8 rounded-[32px] flex items-center justify-center h-full"
                            >
                                <img 
                                    src="https://github-readme-stats.vercel.app/api?username=AnthonyFinney&show_icons=true&theme=tokyonight&hide_border=true" 
                                    alt="GitHub Stats" 
                                    className="w-full max-w-md object-contain"
                                />
                            </motion.div>
                        </div>

                        {/* Contribution Calendar */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.3)] p-4 md:p-8 rounded-[32px] w-full overflow-hidden"
                        >
                            <div className="w-full overflow-x-auto pb-4">
                                <div className="w-max min-w-full flex justify-center p-2 text-sm md:text-base">
                                    <GitHubCalendar 
                                        username="AnthonyFinney" 
                                        colorScheme="dark"
                                        fontSize={14}
                                        blockSize={14}
                                        blockMargin={5}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
}
