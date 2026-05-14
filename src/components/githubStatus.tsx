import { useEffect, useState } from "react";
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

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                const userRes = await fetch("https://api.github.com/users/AnthonyFinney");
                if (userRes.ok) {
                    const userData = await userRes.json();
                    setUser(userData);
                }
            } catch (err) {
                // Ignore error
            } finally {
                setLoading(false);
            }
        };
        fetchGitHubData();
    }, []);

    if (loading || !user) return null;

    return (
        <section id="github-status" className="py-24 px-6 border-t border-white/5 relative z-10 bg-black/20">
            <div className="container max-w-5xl mx-auto">
                
                {/* Section Header */}
                <div className="flex items-center gap-6 mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-foreground">GitHub Status</h2>
                    <div className="h-[1px] flex-grow bg-border" />
                </div>

                <div className="flex flex-col gap-8 lg:gap-10 items-center w-full">
                    
                    {/* Profile Card */}
                    <div className="flex flex-col items-center justify-center p-8 bg-card/40 border border-white/5 rounded-2xl text-center w-full max-w-xl">
                        <img
                            src={user.avatar_url}
                            alt={user.login}
                            className="w-24 h-24 rounded-full mb-4 grayscale"
                        />
                        <h3 className="text-xl font-bold text-foreground">{user.name || user.login}</h3>
                        <a href={user.html_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mt-2 mb-6">
                            <SiGithub size={16} /> @{user.login}
                        </a>
                        
                        <div className="flex gap-8 text-sm w-full justify-center">
                            <div className="flex flex-col items-center">
                                <span className="text-xl font-bold text-foreground">{user.public_repos}</span>
                                <span className="text-muted-foreground flex items-center gap-1.5 mt-1 text-xs"><BookOpen size={12} /> Repos</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-xl font-bold text-foreground">{user.followers}</span>
                                <span className="text-muted-foreground flex items-center gap-1.5 mt-1 text-xs"><Users size={12} /> Followers</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-xl font-bold text-foreground">{user.following}</span>
                                <span className="text-muted-foreground flex items-center gap-1.5 mt-1 text-xs"><Users size={12} /> Following</span>
                            </div>
                        </div>
                    </div>

                    {/* Calendar */}
                    <div className="w-full p-8 bg-card/40 border border-white/5 rounded-2xl overflow-hidden flex justify-center">
                        <div className="w-full max-w-4xl overflow-x-auto overflow-y-hidden pb-2 scrollbar-hide">
                            <div className="w-max min-w-full flex justify-center scale-90 sm:scale-100 origin-center text-xs">
                                <GitHubCalendar 
                                    username="AnthonyFinney" 
                                    colorScheme="dark"
                                    fontSize={12}
                                    blockSize={12}
                                    blockMargin={4}
                                    theme={{
                                        dark: ['#141414', '#27272a', '#52525b', '#a1a1aa', '#ffffff']
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
