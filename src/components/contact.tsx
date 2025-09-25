import React, { useState, useEffect } from "react";
import { init, send } from "@emailjs/browser";
import { Mail, Phone, MapPin } from "lucide-react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
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

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Get In Touch</CardTitle>
                        <CardDescription>
                            Feel free to reach out for collaborations or just a
                            friendly hello 👋
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <MapPin className="h-5 w-5 text-gray-500" />
                            <span>Dhaka, Bangladesh</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Mail className="h-5 w-5 text-gray-500" />
                            <a
                                href="mailto:anthonyrockfinnie0@gmail.com"
                                className="underline-offset-2 hover:underline"
                            >
                                anthonyrockfinnie0@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Phone className="h-5 w-5 text-gray-500" />
                            <a
                                href="tel:+8801792487087"
                                className="underline-offset-2 hover:underline"
                            >
                                +8801792487087
                            </a>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Send a Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col space-y-1">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Your Name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Your Email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col space-y-1">
                                <Label htmlFor="subject">Subject</Label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    placeholder="Subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex flex-col space-y-1">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={5}
                                    required
                                />
                            </div>

                            {status === "error" && (
                                <p className="text-red-500">
                                    Failed to send. Please try again.
                                </p>
                            )}
                            {status === "sent" && (
                                <p className="text-green-600">
                                    Message sent successfully!
                                </p>
                            )}
                        </form>
                    </CardContent>
                    <CardFooter>
                        <Button
                            onClick={handleSubmit}
                            disabled={status === "sending"}
                        >
                            {status === "sending"
                                ? "Sending..."
                                : "Send Message"}
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    );
}
