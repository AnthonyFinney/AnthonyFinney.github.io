import React, { useState, useEffect } from "react";
import { init, send } from "@emailjs/browser";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { Mail, ChevronRight } from "lucide-react";

interface ContactForm {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [form, setForm] = useState<ContactForm>({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    useEffect(() => {
        init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e?: React.FormEvent) => {
        e?.preventDefault();
        setStatus("sending");

        try {
            await send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID!,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
                {
                    user_name: `${form.firstName} ${form.lastName}`,
                    user_email: form.email,
                    message: form.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY!,
            );
            setForm({ firstName: "", lastName: "", email: "", message: "" });
            setStatus("sent");
        } catch (error) {
            console.error("EmailJS error", error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-24 px-6 border-t border-white/5 relative z-10">
            <div className="container max-w-5xl mx-auto">
                
                {/* Section Header */}
                <div className="flex items-center gap-6 mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-foreground">Contact</h2>
                    <div className="h-[1px] flex-grow bg-border" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
                    
                    {/* Left: Profile & Links */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 grayscale">
                                <img src="/assets/profile_pic_2.png" alt="Soshie Finney" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground">Soshie A. Finney</h3>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mt-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Available
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-sm font-medium text-foreground mb-2">Useful links:</p>
                            <div className="flex flex-wrap gap-3">
                                <a href="https://www.linkedin.com/in/soshie-finney-557361233/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground hover:bg-white/10 hover:text-foreground transition-all">
                                    <SiLinkedin className="text-[#0a66c2]" /> LinkedIn
                                </a>
                                <a href="https://github.com/AnthonyFinney" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground hover:bg-white/10 hover:text-foreground transition-all">
                                    <SiGithub className="text-white" /> Github
                                </a>
                                <a href="mailto:anthonyrockfinnie0@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground hover:bg-white/10 hover:text-foreground transition-all w-full justify-center sm:w-auto">
                                    <Mail size={16} /> anthonyrockfinnie0@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div>
                        <h3 className="text-2xl font-bold text-foreground mb-6">Send me a message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <input 
                                        type="text" 
                                        id="firstName" 
                                        name="firstName" 
                                        placeholder="First Name" 
                                        value={form.firstName} 
                                        onChange={handleChange} 
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/20 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <input 
                                        type="text" 
                                        id="lastName" 
                                        name="lastName" 
                                        placeholder="Last Name" 
                                        value={form.lastName} 
                                        onChange={handleChange} 
                                        className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/20 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    value={form.email} 
                                    onChange={handleChange} 
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/20 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    placeholder="Message" 
                                    value={form.message} 
                                    onChange={handleChange} 
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/20 transition-colors resize-none"
                                />
                            </div>

                            <div className="flex items-center gap-4">
                                <button 
                                    type="submit" 
                                    disabled={status === "sending"}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors disabled:opacity-50"
                                >
                                    {status === "sending" ? "Sending..." : "Send"} <ChevronRight size={18} />
                                </button>
                                {status === "sent" && <p className="text-emerald-400 text-sm">Message sent successfully!</p>}
                                {status === "error" && <p className="text-rose-400 text-sm">Failed to send message. Please try again.</p>}
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
