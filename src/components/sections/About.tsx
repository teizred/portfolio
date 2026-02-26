import { motion, animate, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { slowContainerVariants, itemVariants, defaultViewport } from '../../animations';

const badges = [
  { label: 'Curieux' },
  { label: 'Rigoureux' },
  { label: 'Team player' },
  { label: 'Passionné' },
  { label: 'En amélioration' },
  { label: 'Problem solver' },
];

function Counter({ value }: { value: string }) {
  const numericValue = parseInt(value);
  const suffix = value.replace(/[0-9]/g, '');
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      animate(count, numericValue, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, numericValue, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function About() {
  const stats = [
    { number: '5+', label: 'Projets Complétés' },
    { number: '300+', label: 'Commits GitHub' },
    { number: '5+', label: 'Technologies Maîtrisées' },
  ];

  return (
    <section id="about" className="relative min-h-screen bg-transparent w-full px-6 md:px-16 py-12 md:py-24">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={slowContainerVariants}
        className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center"
      >
        
        {/* Titre */}
        <motion.h2 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-amber-400 mb-6 md:mb-8 font-magilo"
        >
          Qui suis-je
        </motion.h2>

        {/* Bio Texte Staggered */}
        <motion.p 
          variants={itemVariants}
          className="text-white text-lg md:text-2xl font-montserrat leading-relaxed mb-4"
        >
          De la précision de la{' '}
          <span className="text-amber-400 font-semibold underline decoration-amber-400/30 underline-offset-4">
            Maroquinerie
          </span>{' '}
          au leadership en tant que{' '}
          <span className="text-amber-400 font-semibold">Responsable des Ventes</span>,
          mon parcours est guidé par l'exigence et le sens de l'organisation.
        </motion.p>

        <motion.p 
          variants={itemVariants}
          className="text-white text-base md:text-xl font-montserrat leading-relaxed max-w-3xl mx-auto mb-6 md:mb-8"
        >
          Aujourd'hui en formation chez{' '}
          <span className="text-amber-400 font-semibold">Ada Tech School</span>, j'applique cette rigueur au{' '}
          <span className="text-amber-400 font-semibold">développement web full stack</span>. Passionné par la création d'applications utiles,
          je transforme chaque projet en une opportunité de construire des solutions performantes et bien pensées.
        </motion.p>

        {/* Badges de valeurs (Uniform Amber) */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8"
        >
          {badges.map((badge, i) => (
            <span
              key={i}
              className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold border border-amber-400/40 text-amber-300 bg-amber-400/5 font-montserrat hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300 cursor-default"
            >
              {badge.label}
            </span>
          ))}
        </motion.div>

        {/* Stats Cards (Now appearing as a single block) */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full font-montserrat"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-6 md:p-8 text-center hover:border-amber-400 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                <Counter value={stat.number} />
              </div>
              <div className="text-xl md:text-2xl text-white">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}