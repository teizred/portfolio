import { TECHNOLOGIES, type TechItem } from "@/data/technologies";

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
        TECHNOLOGIES.supabase
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
        TECHNOLOGIES.docker
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
      <div className="max-w-6xl mx-auto">
        <div className="relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold font-magilo text-amber-400 text-center mb-8">
            Mes Compétences
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white rounded-lg p-8 hover:border-amber-400 transition-colors"
              >
                <h3 className="text-5xl text-center font-bold font-magilo text-white mb-3">{category.title}</h3>
                <p className="text-2xl text-white font-medium text-center mb-6 font-montserrat">{category.description}</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.technologies.map((tech, i) => {
                    const IconComponent = tech.component;
                    return (
                      <span 
                        key={i}
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
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}