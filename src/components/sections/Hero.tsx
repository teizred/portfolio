import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const WORD = 'Junior';
const TYPING_SPEED = 100;
const DELETING_SPEED = 70;
const PAUSE = 2000;

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

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
    const [activeId, setActiveId] = useState('hero');

    // Calcul simple de la progression : index de la section / nombre total
    const activeIndex = sections.findIndex(s => s.id === activeId);
    const progress = (activeIndex + 1) / sections.length;

    // Détecteur de section active (Scroll Spy)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // On utilise threshold 0 pour que ça s'active dès que la section touche la zone
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            // Zone de détection très large pour mobile : de 2% en haut à 80% en bas.
            // Cela permet de capter la section dès qu'elle entre majoritairement à l'écran.
            { threshold: 0, rootMargin: "-2% 0% -20% 0%" }
        );

        // On observe chaque section définie dans notre tableau
        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <main>
            {/* Minimalist Top Brand Bar */}
            <div className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-6 md:py-6 flex justify-between items-center pointer-events-none">
                <div className="flex items-center gap-4 pointer-events-auto">
                    <h2 className="text-xl md:text-2xl font-bold font-magilo text-white tracking-tighter hover:text-amber-400 transition-colors cursor-default">
                        Teizred
                    </h2>
                </div>
            </div>

            <section id="hero" className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden py-20 md:py-0">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">

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
                    <div className="w-40 h-40 md:w-96 md:h-96 shrink-0 md:ml-40 self-center">
                        <img
                            src="/me.JPG"
                            alt="Jathurshan Suventhiran"
                            className="w-full h-full object-cover rounded-full border-4 border-amber-400/70 shadow-2xl shadow-amber-400/20"
                        />
                    </div>

                </div>

                <motion.div className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center px-1.5 py-1.5 md:px-2 md:py-2 rounded-full border-2 border-amber-400 backdrop-blur-md bg-black/30 z-50 overflow-hidden shadow-2xl w-[95%] max-w-[500px] md:max-w-[600px] justify-between">
                    <motion.div
                        animate={{ scaleX: progress }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        style={{ transformOrigin: 'left' }}
                        className="absolute inset-0 bg-amber-400/20 z-0"
                    />
                    {sections.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                            className={`flex-1 py-1 md:py-1.5 rounded-full text-[10px] md:text-sm font-bold font-montserrat cursor-pointer transition-all duration-300 relative z-10 whitespace-nowrap text-center ${
                                activeId === id 
                                    ? 'bg-amber-400 text-black scale-105 shadow-md' 
                                    : 'text-white/70 hover:text-amber-400'
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </motion.div>

            </section>
        </main>
    );
}