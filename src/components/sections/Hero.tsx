
export default function Hero() {
    return (
        <main>
            <section id="hero" className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="md:w-1/2 mb-10 md:mb-0 fade-in visible">
                    <h1 className="text-7xl md:text-8xl font-bold mb-6 font-magilo">
                        Développeur Web Full Stack <span className="text-amber-400">Junior</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 font-montserrat">
                        Je conçois des applications modernes, performantes et centrées sur l’utilisateur, en transformant des idées en solutions concrètes.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="bg-amber-400 text-black font-bold font-magilo px-8 py-3.5 rounded-full hover:bg-amber-300 transition-colors duration-300"
                        >
                            Voir mes projets →
                        </a>
                        <a
                            href="#contact"
                            className="bg-white/10 backdrop-blur-md text-white font-bold font-magilo px-8 py-3.5 rounded-full border border-white/20 hover:border-amber-400 hover:text-amber-400 transition-all duration-300"
                        >
                            Me contacter
                        </a>
                    </div>
                </div>

            </div>

            {/* Image */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
               <img src="../../assets/hero.png" alt="" />
            </div>


            <a
                href="#about"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-amber-400 transition-colors duration-300 z-20">
                <span className="text-xs uppercase tracking-widest font-montserrat">Scroll</span>
                <svg
                    className="w-5 h-5 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </a>
        </section>
        </main>
        
    );
}