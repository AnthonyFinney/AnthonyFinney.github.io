import React, { useState, useEffect } from "react";
import { init, send } from "@emailjs/browser";
import { Mail, Phone, MapPin } from "lucide-react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
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
        "idle"
    );

    useEffect(() => {
        init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
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
            className="relative overflow-hidden bg-[#060508] py-24 text-slate-100"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,213,143,0.1),_transparent_55%)]" />
            <div className="container relative z-10 mx-auto px-6">
                <div className="mb-16 space-y-4 text-center">
                    <div className="flex items-center justify-center gap-4 text-[0.65rem] font-semibold uppercase tracking-[0.8em] text-amber-200/70">
                        <span className="h-px w-12 bg-amber-200/40" />
                        <span>Contact</span>
                        <span className="h-px w-12 bg-amber-200/40" />
                    </div>
                    <h2 className="font-serif text-4xl leading-tight text-amber-50 sm:text-5xl">
                        Let&apos;s Build Something Iconic
                    </h2>
                    <p className="mx-auto max-w-2xl text-base text-slate-300">
                        Collaborations, new contracts, or a visionary idea—drop
                        me a line. I blend engineering precision with Art to craft bold digital experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_1fr]">
                    <Card className="relative overflow-hidden border border-amber-400/30 bg-gradient-to-b from-[#19161e] via-[#0f0d13] to-[#08060a] text-slate-100 shadow-[0_20px_80px_rgba(5,4,9,0.8)]">
                        <div className="pointer-events-none absolute inset-x-10 top-8 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent" />
                        <div className="pointer-events-none absolute inset-y-8 left-8 w-px bg-amber-200/20" />
                        <div className="pointer-events-none absolute inset-y-8 right-8 w-px bg-amber-200/20" />
                        <div className="pointer-events-none absolute inset-x-8 bottom-8 h-px bg-gradient-to-r from-transparent via-amber-200/40 to-transparent" />

                        <CardHeader className="relative z-10 space-y-3 px-12 pt-12">
                            <CardTitle className="font-serif text-3xl text-amber-50">
                                Atelier Coordinates
                            </CardTitle>
                            <CardDescription className="text-base text-slate-300">
                                A curated set of touchpoints to reach me. Expect
                                a thoughtful response within one business day.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="relative z-10 space-y-6 px-10 pb-12">
                            <ul className="space-y-6">
                                {contactDetails.map(
                                    ({ icon: Icon, label, value, href }) => (
                                        <li
                                            key={label}
                                            className="flex items-start gap-4"
                                        >
                                            <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-amber-200/40 bg-black/30">
                                                <Icon className="h-5 w-5 text-amber-200" />
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-[0.5em] text-amber-200/70">
                                                    {label}
                                                </p>
                                                {href ? (
                                                    <a
                                                        href={href}
                                                        className="text-lg font-semibold text-amber-50 underline-offset-4 hover:text-amber-200 hover:underline"
                                                    >
                                                        {value}
                                                    </a>
                                                ) : (
                                                    <p className="text-lg font-semibold text-amber-50">
                                                        {value}
                                                    </p>
                                                )}
                                            </div>
                                        </li>
                                    )
                                )}
                            </ul>

                            <div className="grid grid-cols-2 gap-6 pt-4 text-center text-[0.65rem] uppercase tracking-[0.35em] text-amber-200/70">
                                <div className="border-t border-amber-200/40 pt-4">
                                    <p className="font-serif text-3xl text-amber-50">
                                        24h
                                    </p>
                                    <p>Response</p>
                                </div>
                                <div className="border-t border-amber-200/40 pt-4">
                                    <p className="font-serif text-3xl text-amber-50">
                                        Global
                                    </p>
                                    <p>Projects</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border border-amber-100/20 bg-[#0b0a0f]/80 shadow-[0_15px_60px_rgba(0,0,0,0.6)] backdrop-blur">
                        <CardHeader className="space-y-3 px-10">
                            <CardTitle className="font-serif text-3xl text-amber-50">
                                Send a Message
                            </CardTitle>
                            <CardDescription className="text-slate-300">
                                Share project requirements, timelines, or just
                                say hello. I read every note with care.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="px-10 pb-10">
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="space-y-1.5">
                                        <Label
                                            htmlFor="name"
                                            className="text-xs uppercase tracking-[0.4em] text-amber-100"
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
                                            className="rounded-none border-amber-100/30 bg-black/30 text-amber-50 placeholder:text-amber-50/40 focus-visible:border-amber-200 focus-visible:ring-amber-200/40"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label
                                            htmlFor="email"
                                            className="text-xs uppercase tracking-[0.4em] text-amber-100"
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
                                            className="rounded-none border-amber-100/30 bg-black/30 text-amber-50 placeholder:text-amber-50/40 focus-visible:border-amber-200 focus-visible:ring-amber-200/40"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <Label
                                        htmlFor="subject"
                                        className="text-xs uppercase tracking-[0.4em] text-amber-100"
                                    >
                                        Subject
                                    </Label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        placeholder="Project, collaboration, or idea"
                                        value={form.subject}
                                        onChange={handleChange}
                                        className="rounded-none border-amber-100/30 bg-black/30 text-amber-50 placeholder:text-amber-50/40 focus-visible:border-amber-200 focus-visible:ring-amber-200/40"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <Label
                                        htmlFor="message"
                                        className="text-xs uppercase tracking-[0.4em] text-amber-100"
                                    >
                                        Message
                                    </Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Share the vision, the scope, or the spark."
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={6}
                                        required
                                        className="rounded-none border-amber-100/30 bg-black/30 text-amber-50 placeholder:text-amber-50/40 focus-visible:border-amber-200 focus-visible:ring-amber-200/40"
                                    />
                                </div>

                                <div
                                    className="min-h-6 text-sm"
                                    aria-live="polite"
                                >
                                    {status === "error" && (
                                        <p className="text-rose-300">
                                            Something went wrong. Please try
                                            again.
                                        </p>
                                    )}
                                    {status === "sent" && (
                                        <p className="text-emerald-300">
                                            Message en route! I&apos;ll get back
                                            soon.
                                        </p>
                                    )}
                                </div>

                                <div className="flex flex-wrap items-center gap-4">
                                    <Button
                                        type="submit"
                                        disabled={status === "sending"}
                                        className="flex-1 rounded-none border border-amber-200/50 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 text-black shadow-[0_10px_35px_rgba(255,193,7,0.3)] hover:translate-y-[-1px] hover:shadow-[0_15px_45px_rgba(255,193,7,0.35)]"
                                    >
                                        {status === "sending"
                                            ? "Sending..."
                                            : "Send Message"}
                                    </Button>
                                    <div className="hidden grow text-[0.6rem] uppercase tracking-[0.5em] text-amber-200/60 md:block">
                                        Crafted with intent
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
