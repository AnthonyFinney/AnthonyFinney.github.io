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
        <section id="about" className="relative overflow-hidden py-24 text-white">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-y-0 left-12 w-px bg-gradient-to-b from-transparent via-[#d9c38c]/40 to-transparent" />
                <div className="absolute inset-y-0 right-12 w-px bg-gradient-to-b from-transparent via-[#2e9faa]/40 to-transparent" />
                <div className="absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-16 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(20,29,44,0.65),_transparent_65%)]" />
            </div>

            <div className="relative container mx-auto max-w-5xl px-6">
                <div className="relative rounded-[32px] border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10 backdrop-blur-xl">
                    <div
                        className="pointer-events-none absolute -inset-6 rounded-[40px] border border-[#d9c38c]/30"
                        aria-hidden="true"
                    />
                    <div
                        className="pointer-events-none absolute -inset-10 rounded-[46px] border border-[#2e9faa]/20 rotate-2"
                        aria-hidden="true"
                    />
                    <div className="relative">
                        <p className="text-xs uppercase tracking-[0.6em] text-[#d9c38c]">Modernist profile</p>
                        <h2 className="mt-4 text-4xl font-semibold text-white">About Me</h2>
                        <p className="mt-6 text-gray-200 leading-relaxed">
                            I&apos;m a self-taught developer crafting full-stack products with the precision and drama
                            of Art architecture. Every component is treated like metalwork shaped by TypeScript, lit
                            by thoughtful gradients, and aligned to strict geometry.
                        </p>
                        <p className="mt-4 text-gray-300 leading-relaxed">
                            Today I thread together Next.js interfaces, ASP.NET Core APIs, and Tailwind systems so teams
                            can move fast without sacrificing ambience. I also prototype shader-driven visuals to bring
                            depth and narrative into utilitarian surfaces.
                        </p>

                        <div className="mt-10 grid gap-6 sm:grid-cols-2">
                            {highlights.map((item) => (
                                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                    <p className="text-sm uppercase tracking-[0.4em] text-[#2e9faa]">{item.title}</p>
                                    <p className="mt-3 text-sm text-gray-200">{item.detail}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <a
                                href="/assets/Soshie_Finney_Full_Stack_Developer_CV.pdf"
                                download
                                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#d9c38c] px-8 py-3 text-sm uppercase tracking-[0.4em] text-[#d9c38c] transition hover:bg-[#d9c38c]/10"
                            >
                                Resume
                                <span className="text-xs text-white/70">PDF</span>
                            </a>
                            <p className="text-xs uppercase tracking-[0.5em] text-gray-400">
                                Based in <span className="text-[#d9c38c]">Dhaka, Bangladesh</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
