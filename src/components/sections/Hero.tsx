import { useEffect, useState } from 'react';

const WORD = 'Junior';
const TYPING_SPEED = 100;
const DELETING_SPEED = 70;
const PAUSE = 2000;

function useTypingLoop() {
    const [displayed, setDisplayed] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        if (!isDeleting && displayed === WORD) {
            timeout = setTimeout(() => setIsDeleting(true), PAUSE);
        } else if (isDeleting && displayed === '') {
            timeout = setTimeout(() => setIsDeleting(false), 400);
        } else {
            timeout = setTimeout(() => {
                setDisplayed(isDeleting
                    ? WORD.slice(0, displayed.length - 1)
                    : WORD.slice(0, displayed.length + 1)
                );
            }, isDeleting ? DELETING_SPEED : TYPING_SPEED);
        }

        return () => clearTimeout(timeout);
    }, [displayed, isDeleting]);

    return displayed;
}

export default function Hero() {
    const typedWord = useTypingLoop();

    return (
        <main>
            <section id="hero" className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

                {/* Left: Text */}
                <div className="w-full md:w-1/2 mb-10 md:mb-0 fade-in visible text-center md:text-left">
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 font-magilo">
                        Développeur Web Full Stack<br />
                        <span className="text-amber-400">{typedWord}<span className="animate-pulse">|</span></span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 font-montserrat">
                        Je conçois des applications modernes, performantes et centrées sur l'utilisateur, en transformant des idées en solutions concrètes.
                    </p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                        <a
                            href="#projects"
                            className="bg-amber-400 text-black font-bold font-magilo px-8 py-3.5 rounded-full hover:bg-amber-300 transition-colors duration-300">
                            Voir mes projets →
                        </a>
                        <a
                            href="#contact"
                            className="bg-white/10 backdrop-blur-md text-white font-bold font-magilo px-8 py-3.5 rounded-full border border-white/20 hover:border-amber-400 hover:text-amber-400 transition-all duration-300">
                            Me contacter
                        </a>
                        <a
                            href="https://github.com/teizred"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-5 h-5 invert" />
                        </a>
                        <a
                            href="https://linkedin.com/in/jathurshan-suventhiran"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Right: Photo */}
                <div className="w-48 h-48 md:w-96 md:h-96 shrink-0 md:ml-40 self-center">
                    <img
                        src="/me.JPG"
                        alt="Jathurshan Suventhiran"
                        className="w-full h-full object-cover rounded-full border-4 border-amber-400/70 shadow-2xl shadow-amber-400/20"
                    />
                </div>

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