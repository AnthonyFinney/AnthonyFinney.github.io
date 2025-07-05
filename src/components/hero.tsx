export default function Hero() {
    return (
        <section
            id="hero"
            className="flex flex-col items-center justify-center text-center h-[calc(100vh-4rem)] px-6"
        >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                Hi, I'm Soshie
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl">
                Web Developer working with Next.js & ASP.NET
            </p>
            <a
                href="#skills"
                className="mt-8 inline-block px-8 py-3 bg-white text-gray-800 rounded-lg shadow-lg hover:bg-gray-200 transition-shadow duration-200"
            >
                Get Started
            </a>
        </section>
    );
}
