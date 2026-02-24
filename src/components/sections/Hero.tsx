import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'phosphor-react';

const STATUS_WORDS = [
  "Disponible en alternance",
  "Curieux & créatif",
  "Open to work",
]

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
    const [navVisible, setNavVisible] = useState(false);
    const [statusIndex, setStatusIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStatusIndex(prev => (prev + 1) % STATUS_WORDS.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

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
                        setNavVisible(entry.target.id !== 'hero');
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
                <div className="flex items-center gap-2 pointer-events-auto overflow-hidden">
                    <motion.a 
                        href="/"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-xl md:text-2xl font-bold font-magilo text-white tracking-tighter hover:text-amber-400 transition-colors cursor-pointer"
                    >
                        Teizred
                    </motion.a>

                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-white/40 font-montserrat"
                    >
                        ·
                    </motion.span>

                    <AnimatePresence mode="wait">
                        <motion.span
                            key={statusIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.4, delay: 0.9 }}
                            className="text-sm font-montserrat text-white"
                        >
                            {STATUS_WORDS[statusIndex]}
                        </motion.span>
                    </AnimatePresence>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="pointer-events-auto"
                >
                    <a
                        href="/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-amber-400 text-black font-bold font-magilo px-6 py-2 md:px-8 md:py-2.5 rounded-full hover:bg-amber-300 transition-colors duration-300 text-sm md:text-base shadow-lg"
                    >
                        Mon CV
                    </a>
                </motion.div>
            </div>

            <section id="hero" className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden pt-28 pb-32 md:py-0">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col-reverse md:flex-row items-center gap-6 md:gap-16">

                    {/* Left: Text */}
                    <div className="w-full md:w-1/2 mb-4 md:mb-0 fade-in visible text-center md:text-left">
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
                                className="group bg-amber-400 text-black font-bold font-magilo px-8 py-3.5 rounded-full hover:bg-amber-300 transition-colors duration-300 flex items-center gap-2">
                                Voir mes projets <span className="group-hover:translate-x-1.5 transition-transform duration-300"><ArrowRight size={20} weight="bold" /></span>
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
                            className="w-full h-full object-cover rounded-full border-amber-400/70 shadow-2xl shadow-amber-400/20"
                        />
                    </div>

                </div>

                <motion.button
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: navVisible ? 0 : 1, y: navVisible ? 20 : 0, pointerEvents: navVisible ? 'none' : 'auto' }}
                    transition={{ duration: 0.4 }}
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 py-3 cursor-pointer rounded-full border-2 border-amber-400 backdrop-blur-md bg-black/30 z-50 font-montserrat font-bold text-white shadow-2xl hover:bg-amber-400/10 transition-colors w-[90%] max-w-[320px] md:max-w-[450px] flex justify-center items-center gap-2"
                >
                    Explorer 
                    <span className="group-hover:translate-y-1 transition-transform duration-300">
                        <motion.span 
                            animate={{ y: [0, 3, 0] }} 
                            transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut" }}
                            className="block"
                        >
                            <ArrowDown size={16} weight="bold" />
                        </motion.span>
                    </span>
                </motion.button>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: navVisible ? 1 : 0, y: navVisible ? 0 : 20, pointerEvents: navVisible ? 'auto' : 'none' }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center px-1.5 py-1.5 md:px-2 md:py-2 rounded-full border-2 border-amber-400 backdrop-blur-md bg-black/30 z-50 overflow-hidden shadow-2xl w-[90%] max-w-[320px] md:max-w-[450px] justify-between"
                >
                    <motion.div
                        animate={{ scaleX: progress }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        style={{ transformOrigin: 'left' }}
                        className="absolute inset-0 bg-amber-400/20 z-0"
                    />
                    {sections.map(({ id, label }) => (
                        <motion.button
                            key={id}
                            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                            animate={activeId === id ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                            transition={activeId === id ? { repeat: Infinity, duration: 2, ease: "easeInOut" } : { duration: 0.3 }}
                            className={`flex-1 py-1 md:py-1.5 rounded-full text-[10px] md:text-sm font-bold font-montserrat cursor-pointer transition-colors duration-300 relative z-10 whitespace-nowrap text-center ${
                                activeId === id 
                                    ? 'bg-amber-400 text-black shadow-md' 
                                    : 'text-white/70 hover:text-amber-400'
                            }`}
                        >
                            {label}
                        </motion.button>
                    ))}
                </motion.div>

            </section>
        </main>
    );
}