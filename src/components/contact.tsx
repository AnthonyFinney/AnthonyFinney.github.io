import React, { useState, useEffect } from "react";
import { init, send } from "@emailjs/browser";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function Contact() {
    const [form, setForm] = useState<ContactForm>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
        "idle",
    );

    useEffect(() => {
        init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
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
                    user_name: form.name,
                    user_email: form.email,
                    subject: form.subject,
                    message: form.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY!,
            );
            setForm({ name: "", email: "", subject: "", message: "" });
            setStatus("sent");
        } catch (error: any) {
            console.error("EmailJS error status:", error.status);
            console.error("EmailJS error text:", error.text);
            setStatus("error");
        }
    };

    const contactDetails = [
        {
            icon: MapPin,
            label: "Studio",
            value: "Dhaka, Bangladesh",
        },
        {
            icon: Mail,
            label: "Email",
            value: "anthonyrockfinnie0@gmail.com",
            href: "mailto:anthonyrockfinnie0@gmail.com",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+8801792487087",
            href: "tel:+8801792487087",
        },
    ];

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-transparent py-16 text-slate-100"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,213,143,0.1),_transparent_55%)]" />
            <div className="container relative z-10 mx-auto px-6">
                <div className="mb-10 space-y-3 text-center">
                    <div className="flex items-center justify-center gap-4 text-[0.65rem] font-semibold uppercase tracking-[0.8em] text-amber-200/70">
                        <span className="h-px w-12 bg-amber-200/40" />
                        <span>Contact</span>
                        <span className="h-px w-12 bg-amber-200/40" />
                    </div>
                    <h2 className="font-serif text-3xl leading-tight text-amber-50 sm:text-4xl">
                        Let&apos;s Build Something Iconic
                    </h2>
                    <p className="mx-auto max-w-2xl text-sm text-slate-300">
                        Collaborations, new contracts, or a visionary idea—drop
                        me a line. I blend engineering precision with Art to
                        craft bold digital experiences.
                    </p>
                </div>

                <Card className="relative overflow-hidden border border-amber-400/30 bg-gradient-to-b from-[#19161e] via-[#0f0d13] to-[#08060a] text-slate-100 shadow-[0_20px_80px_rgba(5,4,9,0.8)] backdrop-blur-sm">
                    <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-amber-200/10">
                        {/* Left Side: Atelier Coordinates */}
                        <div className="md:col-span-2 p-6 md:p-8 space-y-6">
                            <div className="space-y-2">
                                <CardTitle className="font-serif text-2xl text-amber-50">
                                    Atelier Coordinates
                                </CardTitle>
                                <CardDescription className="text-sm text-slate-300">
                                    Expect a thoughtful response within one
                                    business day.
                                </CardDescription>
                            </div>

                            <ul className="space-y-4">
                                {contactDetails.map(
                                    ({ icon: Icon, label, value, href }) => (
                                        <li
                                            key={label}
                                            className="flex items-start gap-4"
                                        >
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-amber-200/40 bg-black/30">
                                                <Icon className="h-4 w-4 text-amber-200" />
                                            </div>
                                            <div>
                                                <p className="text-[0.6rem] uppercase tracking-[0.4em] text-amber-200/70">
                                                    {label}
                                                </p>
                                                {href ? (
                                                    <a
                                                        href={href}
                                                        className="text-base font-semibold text-amber-50 underline-offset-4 hover:text-amber-200 hover:underline"
                                                    >
                                                        {value}
                                                    </a>
                                                ) : (
                                                    <p className="text-base font-semibold text-amber-50">
                                                        {value}
                                                    </p>
                                                )}
                                            </div>
                                        </li>
                                    ),
                                )}
                            </ul>

                            <div className="grid grid-cols-2 gap-4 pt-2 text-center text-[0.6rem] uppercase tracking-[0.3em] text-amber-200/70">
                                <div className="border-t border-amber-200/20 pt-4">
                                    <p className="font-serif text-2xl text-amber-50">
                                        24h
                                    </p>
                                    <p>Response</p>
                                </div>
                                <div className="border-t border-amber-200/20 pt-4">
                                    <p className="font-serif text-2xl text-amber-50">
                                        Global
                                    </p>
                                    <p>Projects</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Send a Message */}
                        <div className="md:col-span-3 p-6 md:p-8">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="space-y-1">
                                        <Label
                                            htmlFor="name"
                                            className="text-[0.65rem] uppercase tracking-[0.3em] text-amber-100"
                                        >
                                            Name
                                        </Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Your Name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            className="h-9 rounded-none border-amber-100/30 bg-black/30 text-amber-50 placeholder:text-amber-50/40 focus-visible:border-amber-200 focus-visible:ring-amber-200/40"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <Label
                                            htmlFor="email"
                                            className="text-[0.65rem] uppercase tracking-[0.3em] text-amber-100"
                                        >
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="name@email.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            className="h-9 rounded-none border-amber-100/30 bg-black/30 text-amber-50 placeholder:text-amber-50/40 focus-visible:border-amber-200 focus-visible:ring-amber-200/40"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <Label
                                        htmlFor="subject"
                                        className="text-[0.65rem] uppercase tracking-[0.3em] text-amber-100"
                                    >
                                        Subject
                                    </Label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        placeholder="Project topic"
                                        value={form.subject}
                                        onChange={handleChange}
                                        className="h-9 rounded-none border-amber-100/30 bg-black/30 text-amber-50 placeholder:text-amber-50/40 focus-visible:border-amber-200 focus-visible:ring-amber-200/40"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <Label
                                        htmlFor="message"
                                        className="text-[0.65rem] uppercase tracking-[0.3em] text-amber-100"
                                    >
                                        Message
                                    </Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Share your vision..."
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={4}
                                        required
                                        className="min-h-[100px] rounded-none border-amber-100/30 bg-black/30 text-amber-50 placeholder:text-amber-50/40 focus-visible:border-amber-200 focus-visible:ring-amber-200/40"
                                    />
                                </div>

                                <div className="flex items-center justify-between gap-4 pt-2">
                                    <div
                                        className="min-h-4 text-xs"
                                        aria-live="polite"
                                    >
                                        {status === "error" && (
                                            <p className="text-rose-300">
                                                Error. Try again.
                                            </p>
                                        )}
                                        {status === "sent" && (
                                            <p className="text-emerald-300">
                                                Message sent!
                                            </p>
                                        )}
                                    </div>
                                    <Button
                                        type="submit"
                                        disabled={status === "sending"}
                                        className="h-9 rounded-none border border-amber-200/50 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 text-black px-8 text-xs font-bold uppercase tracking-[0.2em] shadow-[0_5px_15px_rgba(255,193,7,0.2)] hover:translate-y-[-1px]"
                                    >
                                        {status === "sending"
                                            ? "Sending..."
                                            : "Send"}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}
