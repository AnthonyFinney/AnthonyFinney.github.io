import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: implement submission logic (e.g., send to API or email service)
        console.log("Contact form submitted:", form);
        setForm({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <section id="contact" className="py-20 ">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-2">
                    Get In Touch
                </h2>
                <p className="text-center text-gray-400 mb-12">
                    Feel free to reach out for collaborations or just a friendly
                    hello 👋
                </p>

                <div className="flex flex-col md:flex-row md:space-x-12">
                    {/* Contact Info */}
                    <div className="mb-12 md:mb-0 md:w-1/2 space-y-6">
                        <div className="flex items-center text-gray-200">
                            <MapPin className="h-6 w-6  mr-4" />
                            <span>Dhaka, Bangladesh</span>
                        </div>
                        <div className="flex items-center text-gray-200">
                            <Mail className="h-6 w-6  mr-4" />
                            <a
                                href="mailto:your.email@example.com"
                                className="hover:text-white"
                            >
                                your.email@example.com
                            </a>
                        </div>
                        <div className="flex items-center text-gray-200">
                            <Phone className="h-6 w-6  mr-4" />
                            <a
                                href="tel:+880123456789"
                                className="hover:text-white"
                            >
                                +880 1234-56789
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="md:w-1/2 space-y-6"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-gray-800 text-gray-200 placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-gray-800 text-gray-200 placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={form.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-gray-800 text-gray-200 placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                        <textarea
                            name="message"
                            rows={5}
                            placeholder="Message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-800 text-gray-200 placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                        <button
                            type="submit"
                            className="inline-block  hover:bg-white hover:text-black text-white font-medium px-6 py-3 rounded-md transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
