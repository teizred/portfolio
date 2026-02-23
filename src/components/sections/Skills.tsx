import { 
  UsersThree, 
  Lightbulb, 
  GraduationCap, 
  ChatCircleText 
} from "phosphor-react";

interface TechItem {
  name: string;
  icon?: string;
  invert?: boolean;
  component?: React.ElementType;
}

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
        { name: 'HTML', icon: 'https://svgl.app/library/html5.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://svgl.app/library/javascript.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'TypeScript', icon: 'https://svgl.app/library/typescript.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invert: true },
        { name: 'Tailwind CSS', icon: 'https://svgl.app/library/tailwindcss.svg' }
      ]
    },
    {
      title: 'Backend',
      description: 'APIs REST et gestion de bases de données',
      technologies: [
        { name: 'Node.js', icon: 'https://svgl.app/library/nodejs.svg' },
        { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true },
        { name: 'PostgreSQL', icon: 'https://svgl.app/library/postgresql.svg' },
        { name: 'Supabase', icon: 'https://svgl.app/library/supabase.svg' }
      ]
    },
    {
      title: 'Outils & Workflow',
      description: 'Versionning et collaboration en équipe',
      technologies: [
        { name: 'Git', icon: 'https://svgl.app/library/git.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Figma', icon: 'https://svgl.app/library/figma.svg' },
        { name: 'Docker', icon: 'https://svgl.app/library/docker.svg' }
      ]
    },
    {
      title: 'Soft Skills',
      description: 'Compétences transversales essentielles',
      technologies: [
        { name: 'Travail d\'équipe', component: UsersThree },
        { name: 'Résolution de problèmes', component: Lightbulb },
        { name: 'Apprentissage continu', component: GraduationCap },
        { name: 'Communication', component: ChatCircleText }
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