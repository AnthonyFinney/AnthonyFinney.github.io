export default function AboutMe() {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-6 flex flex-row items-center justify-center">
                <div className="max-w-2xl text-center md:text-left">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        I'm a self-taught developer currently focused on
                        building modern web applications using TypeScript,
                        Next.js, and Tailwind CSS. I also have experience
                        working with ASP.NET Core. While I initially explored
                        game development, 3D modeling, and shaders, my recent
                        work and interests are rooted more in frontend and
                        full-stack web app development.
                    </p>

                    <div className="mt-6">
                        <a
                            href="/assets/Soshie_Finney_Full_Stack_Developer_CV.pdf"
                            download
                            className="inline-block px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
