import { motion } from 'framer-motion';
import { ArrowDown } from 'phosphor-react';

interface Section {
    id: string;
    label: string;
}

interface FloatingNavProps {
    sections: Section[];
    activeId: string;
    progress: number;
    navVisible: boolean;
    hasEntered: boolean;
}

export default function FloatingNav({ sections, activeId, progress, navVisible, hasEntered }: FloatingNavProps) {
    return (
        <>
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={hasEntered ? { 
                    opacity: navVisible ? 0 : 1, 
                    y: navVisible ? 20 : 0, 
                    pointerEvents: navVisible ? 'none' : 'auto' 
                } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 border-2 border-amber-400 text-white font-bold font-dm-serif text-xl px-10 py-3.5 rounded-full backdrop-blur-md bg-black/30 z-50 shadow-2xl hover:bg-amber-400/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
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
                animate={hasEntered ? { 
                    opacity: navVisible ? 1 : 0, 
                    y: navVisible ? 0 : 20, 
                    pointerEvents: navVisible ? 'auto' : 'none' 
                } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center px-1.5 py-1.5 md:px-2 md:py-2 rounded-full border-2 border-amber-400 backdrop-blur-md bg-black/30 z-50 overflow-hidden shadow-2xl w-[90%] max-w-[320px] md:max-w-[450px] justify-between"
            >
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <motion.div
                        animate={{ width: `${progress * 100}%` }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="bg-amber-400/20 rounded-full h-full"
                    />
                </div>
                {sections.map(({ id, label }) => (
                    <motion.button
                        key={id}
                        onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                        animate={activeId === id ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                        transition={activeId === id ? { repeat: Infinity, duration: 2, ease: "easeInOut" } : { duration: 0.3 }}
                        className={`flex-1 py-1 md:py-1.5 rounded-full text-[10px] md:text-sm font-bold font-dm-serif cursor-pointer transition-colors duration-300 relative z-10 whitespace-nowrap text-center ${
                            activeId === id 
                                ? 'bg-amber-400 text-black shadow-md' 
                                : 'text-white/70 hover:text-amber-400'
                        }`}
                    >
                        {label}
                    </motion.button>
                ))}
            </motion.div>
        </>
    );
}
