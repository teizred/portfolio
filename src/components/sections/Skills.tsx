import { TECHNOLOGIES, type TechItem } from "@/data/technologies";
import { motion } from "framer-motion";
import { slowContainerVariants, itemVariants, badgeVariants, defaultViewport } from "../../animations";

interface SkillCategory {
  title: string;
  description: string;
  technologies: TechItem[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      description: 'Création d\'interfaces utilisateur modernes et réactives',
      technologies: [
        TECHNOLOGIES.html,
        TECHNOLOGIES.css,
        TECHNOLOGIES.javascript,
        TECHNOLOGIES.react,
        TECHNOLOGIES.typescript,
        TECHNOLOGIES.nextjs,
        TECHNOLOGIES.tailwindcss
      ]
    },
    {
      title: 'Backend',
      description: 'APIs REST et gestion de bases de données',
      technologies: [
        TECHNOLOGIES.nodejs,
        TECHNOLOGIES.expressjs,
        TECHNOLOGIES.postgresql,
        TECHNOLOGIES.supabase,
      ]
    },
    {
      title: 'Outils & Workflow',
      description: 'Versionning et collaboration en équipe',
      technologies: [
        TECHNOLOGIES.git,
        TECHNOLOGIES.github,
        TECHNOLOGIES.vscode,
        TECHNOLOGIES.figma,
        TECHNOLOGIES.docker,
        TECHNOLOGIES.railway
      ]
    },
    {
      title: 'Soft Skills',
      description: 'Compétences transversales essentielles',
      technologies: [
        TECHNOLOGIES.teamwork,
        TECHNOLOGIES.problem_solving,
        TECHNOLOGIES.learning,
        TECHNOLOGIES.communication
      ]
    }
  ]

  return (
    <section id="skills" className="relative min-h-screen w-full px-8 py-20 text-white">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={slowContainerVariants}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold font-magilo text-amber-400 text-center mb-12"
        >
          Mes Compétences
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8 transition-colors hover:border-amber-400/50"
            >
              <h3 className="text-4xl md:text-5xl text-center font-bold font-magilo text-white mb-3 tracking-tight">{category.title}</h3>
              <p className="text-xl md:text-2xl text-white/80 font-medium text-center mb-8 font-montserrat leading-tight">{category.description}</p>
              
              <motion.div 
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.2
                    }
                  }
                }}
                className="flex flex-wrap gap-3 justify-center"
              >
                {category.technologies.map((tech, i) => {
                  const IconComponent = tech.component;
                  return (
                    <motion.span 
                      key={i}
                      variants={badgeVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold border border-amber-400/40 text-amber-300 bg-amber-400/5 font-montserrat hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300 cursor-default group"
                    >
                      {tech.icon && (
                        <img 
                          src={tech.icon} 
                          alt={tech.name} 
                          className={`w-4 h-4 md:w-5 md:h-5 object-contain group-hover:scale-110 transition-transform ${tech.invert ? 'invert' : ''}`}
                        />
                      )}
                      {IconComponent && (
                        <IconComponent size={20} weight="duotone" className="group-hover:scale-110 transition-transform" />
                      )}
                      {tech.name}
                    </motion.span>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}