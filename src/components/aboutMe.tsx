const highlights = [
    {
        title: "Core Focus",
        detail: "TypeScript-first experiences across Next.js frontends and ASP.NET Core services with a strong eye on motion and tactility.",
    },
    {
        title: "Design Ethos",
        detail: "Angular geometry, cinematic lighting, and bold typography that feels like a lobby mural from 1930, rendered with modern code.",
    },
    {
        title: "Current Exploration",
        detail: "Fusing WebGL and shader-driven visuals with UX narratives so interfaces feel architectural and alive.",
    },
    {
        title: "Collaboration",
        detail: "Lead with clarity, document intent, and leave space for daring iterations that still ship on time.",
    },
];

export default function AboutMe() {
    return (
        <section id="about" className="relative overflow-hidden py-16 text-white">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-y-0 left-12 w-px bg-gradient-to-b from-transparent via-[#d9c38c]/40 to-transparent" />
                <div className="absolute inset-y-0 right-12 w-px bg-gradient-to-b from-transparent via-[#2e9faa]/40 to-transparent" />
                <div className="absolute inset-x-0 top-12 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-12 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(20,29,44,0.65),_transparent_65%)]" />
            </div>

            <div className="relative container mx-auto max-w-5xl px-6">
                <div className="relative rounded-[32px] border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5 sm:p-6 md:p-8 lg:p-10 backdrop-blur-xl">
                    <div
                        className="pointer-events-none absolute -inset-2 md:-inset-4 rounded-[40px] border border-[#d9c38c]/30"
                        aria-hidden="true"
                    />
                    <div
                        className="pointer-events-none absolute -inset-3 md:-inset-6 rounded-[46px] border border-[#2e9faa]/20 rotate-1"
                        aria-hidden="true"
                    />
                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
                            {/* Left Column: Main Text */}
                            <div className="md:col-span-3">
                                <p className="text-xs uppercase tracking-[0.6em] text-[#d9c38c]">Modernist profile</p>
                                <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white">About Me</h2>
                                <p className="mt-4 text-sm md:text-base text-gray-200 leading-relaxed">
                                    I&apos;m a self-taught developer crafting full-stack products with the precision and drama
                                    of Art architecture. Every component is treated like metalwork shaped by TypeScript, lit
                                    by thoughtful gradients, and aligned to strict geometry.
                                </p>
                                <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
                                    Today I thread together Next.js interfaces, ASP.NET Core APIs, and Tailwind systems so teams
                                    can move fast without sacrificing ambience. I also prototype shader-driven visuals to bring
                                    depth and narrative into utilitarian surfaces.
                                </p>

                                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-white/5 pt-6">
                                    <a
                                        href="/assets/Soshie_Finney_Full_Stack_Developer_CV.pdf"
                                        download
                                        className="inline-flex items-center justify-center gap-3 rounded-full border border-[#d9c38c] px-6 py-2.5 text-xs uppercase tracking-[0.3em] text-[#d9c38c] transition hover:bg-[#d9c38c]/10"
                                    >
                                        Resume
                                        <span className="text-[10px] text-white/70">PDF</span>
                                    </a>
                                    <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400">
                                        Dhaka, <span className="text-[#d9c38c]">Bangladesh</span>
                                    </p>
                                </div>
                            </div>

                            {/* Right Column: Dense Highlights */}
                            <div className="md:col-span-2 space-y-4">
                                <p className="text-[11px] uppercase tracking-[0.4em] text-[#2e9faa]/70 mb-2">Core disciplines</p>
                                {highlights.map((item) => (
                                    <div key={item.title} className="group relative">
                                        <p className="text-xs uppercase tracking-[0.2em] text-[#2e9faa] font-medium mb-1">{item.title}</p>
                                        <p className="text-[11px] text-gray-300 leading-snug border-l border-white/10 pl-3">
                                            {item.detail}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
