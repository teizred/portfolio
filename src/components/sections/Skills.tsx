

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      description: 'Création d\'interfaces utilisateur modernes et réactives',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      description: 'APIs REST et gestion de bases de données',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Supabase']
    },
    {
      title: 'Outils & Workflow',
      description: 'Versionning et collaboration en équipe',
      technologies: ['Git', 'GitHub', 'VS Code', 'Figma', 'Docker']
    },
    {
      title: 'Soft Skills',
      description: 'Compétences transversales essentielles',
      technologies: ['Travail d\'équipe', 'Résolution de problèmes', 'Apprentissage continu', 'Communication']
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
              <div className="flex flex-wrap gap-2 justify-center">
                {category.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="bg-sky-400/10 text-amber-400 px-4 py-2 rounded-full text-sm border border-amber-400/30"
                  >
                    {tech}
                  </span>
                ))}
                
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}