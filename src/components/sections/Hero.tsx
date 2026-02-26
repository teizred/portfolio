import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'phosphor-react';
import { containerVariants, itemVariants } from '../../animations';
import Header from '../Header';
import FloatingNav from '../FloatingNav';

const WORD = 'Junior';
const TYPING_SPEED = 100;
const DELETING_SPEED = 70;
const PAUSE = 2000;

const sections = [
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
    const [hasEntered, setHasEntered] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setHasEntered(true), 1500);
        return () => clearTimeout(timeout);
    }, []);

    // Calcul simple de la progression : index de la section / nombre total
    const activeIndex = sections.findIndex(s => s.id === activeId);
    const progress = (activeIndex + 1) / sections.length;

    // Détecteur de section active (Scroll Spy)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                        setNavVisible(entry.target.id !== 'hero');
                    }
                });
            },
            { threshold: 0, rootMargin: "-40% 0px -40% 0px" }
        );

        const timeoutId = setTimeout(() => {
            sections.forEach(({ id }) => {
                const el = document.getElementById(id);
                if (el) observer.observe(el);
            });
            const heroEl = document.getElementById('hero');
            if (heroEl) observer.observe(heroEl);
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, []);

    return (
        <main>
            <Header activeId={activeId} />

            <section id="hero" className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden pt-28 pb-36 md:py-0">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col-reverse md:flex-row items-center gap-6 md:gap-16"
                >
                    {/* Left: Text */}
                    <div className="w-full md:w-1/2 mb-4 md:mb-0 text-center md:text-left">
                        <motion.h1 
                            variants={itemVariants}
                            className="text-5xl md:text-8xl font-bold mb-6 font-magilo"
                        >
                            Full Stack Web Developer<br />
                            <span className="text-amber-400 inline-block mt-2">{typedWord}<span className="animate-pulse">|</span></span>
                        </motion.h1>
                        
                        <motion.p 
                            variants={itemVariants}
                            className="text-xl md:text-2xl mb-10 font-montserrat"
                        >
                            Je conçois des applications modernes, performantes et centrées sur l'utilisateur, en transformant des idées en solutions concrètes.
                        </motion.p>
                        
                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-wrap items-center justify-center md:justify-start gap-4"
                        >
                            <a
                                href="#projects"
                                className="group bg-amber-400 text-black font-bold font-dm-serif px-8 py-3.5 rounded-full hover:bg-amber-300 transition-colors duration-300 flex items-center gap-2">
                                Voir mes projets <span className="group-hover:translate-x-1.5 transition-transform duration-300"><ArrowRight size={20} weight="bold" /></span>
                            </a>
                            <a
                                href="#contact"
                                className="bg-white/10 backdrop-blur-md text-white font-bold font-dm-serif px-8 py-3.5 rounded-full border border-white/20 hover:border-amber-400 hover:text-amber-400 transition-all duration-300">
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
                        </motion.div>
                    </div>

                    {/* Right: Photo */}
                    <motion.div 
                        variants={itemVariants}
                        className="w-40 h-40 md:w-96 md:h-96 shrink-0 md:ml-40 self-center"
                    >
                        <img
                            src="/me.JPG"
                            alt="Jathurshan Suventhiran"
                            className="w-full h-full object-cover rounded-full border-amber-400/70 shadow-2xl shadow-amber-400/20"
                        />
                    </motion.div>
                </motion.div>

                <FloatingNav 
                    sections={sections} 
                    activeId={activeId} 
                    progress={progress} 
                    navVisible={navVisible} 
                    hasEntered={hasEntered} 
                />
            </section>
        </main>
    );
}