import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DownloadSimple } from 'phosphor-react';

const STATUS_WORDS = [
  "Disponible en alternance",
  "Curieux & créatif",
  "Open to work",
]

interface HeaderProps {
    activeId: string;
}

export default function Header({ activeId }: HeaderProps) {
    const [statusIndex, setStatusIndex] = useState(0);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setStatusIndex(prev => (prev + 1) % STATUS_WORDS.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const getStatus = (date: Date) => {
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const totalMinutes = hour * 60 + minutes;

        if (totalMinutes >= 7 * 60 && totalMinutes < 9 * 60) return { emoji: "☕", text: "npm start day" };
        if (totalMinutes >= 9 * 60 && totalMinutes < 12 * 60) return { emoji: "💻", text: "Git commit mode" };
        if (totalMinutes >= 12 * 60 && totalMinutes < 14 * 60) return { emoji: "🍽️", text: "Lunch break" };
        if (totalMinutes >= 14 * 60 && totalMinutes < 16 * 60 + 30) return { emoji: "⚡", text: "Feature building" };
        if (totalMinutes >= 16 * 60 + 30 && totalMinutes < 18 * 60) return { emoji: "🧘", text: "Ctrl+R refresh" };
        if (totalMinutes >= 18 * 60 && totalMinutes < 20 * 60) return { emoji: "📚", text: "Stack learning" };
        if (totalMinutes >= 20 * 60 && totalMinutes < 21 * 60) return { emoji: "🍕", text: "Food break" };
        if (totalMinutes >= 21 * 60 && totalMinutes < 22 * 60) return { emoji: "🔍", text: "Tech scouting" };
        if (totalMinutes >= 22 * 60 && totalMinutes < 23 * 60) return { emoji: "🎯", text: "Night coding" };
        return { emoji: "😴", text: "System sleep" };
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-6 md:py-6 flex justify-between items-center pointer-events-none">
            <div className="flex items-center gap-2 pointer-events-auto overflow-hidden">
                <motion.a 
                    onClick={(e) => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={`text-xl md:text-2xl font-bold font-magilo tracking-tighter transition-colors cursor-pointer ${
                        activeId === 'hero' ? 'text-white' : 'text-white hover:text-amber-400'
                    }`}
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
                className="flex items-center gap-3 pointer-events-auto"
            >
                <div className="hidden md:flex items-center gap-3 text-[10px] md:text-xs font-montserrat text-white/50 uppercase tracking-widest">
                    <span className="hidden lg:inline">Paris, FR</span>
                    <span className="text-white font-mono border-l border-white/20 pl-3">
                        {time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                    </span>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={getStatus(time).text}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="flex items-center gap-1.5"
                        >
                            <motion.span
                                animate={{ rotate: [-10, 10, -10] }}
                                transition={{ 
                                    repeat: Infinity, 
                                    duration: 0.5, 
                                    ease: "easeInOut" 
                                }}
                                className="inline-block origin-center text-white text-base"
                            >
                                {getStatus(time).emoji}
                            </motion.span>
                            <span className="text-amber-400 font-montserrat">
                                {getStatus(time).text}
                            </span>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-amber-400 text-black font-bold font-dm-serif px-6 py-2 md:px-8 md:py-2.5 rounded-full hover:bg-amber-300 transition-colors duration-300 text-sm md:text-base shadow-lg"
                >
                    Mon CV
                    <DownloadSimple size={20} weight="bold" />
                </a>
            </motion.div>
        </div>
    );
}
