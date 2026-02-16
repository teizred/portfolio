import backgroundImage from '../../assets/images/background_about.jpg';

export default function About() {
  const stats = [
    { number: '5+', label: 'Projets Complétés' },
    { number: '300+', label: 'Commits GitHub' },
    { number: '5+', label: 'Technologies Maîtrisées' },
  ]

  return (
    <section id="about" className="relative min-h-screen w-full px-8 py-20">

            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
            </div>
            
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl  font-bold text-white text-center mb-6 font-magilo">
          À propos de <span className="text-amber-400">moi</span>
        </h2>
        
        <p className="text-gray-300 text-center text-2xl mb-42 max-w-3xl mx-auto font-montserrat">
          Je suis un développeur passionné qui aime transformer des idées en applications concrètes et fonctionnelles grâce à des technologies modernes.
          Toujours en quête d'amélioration, j'aillie créativité, logique et pragmatisme dans chacun de mes projets.
        </p>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 font-montserrat">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white rounded-lg p-8 text-center hover:border-amber-400 transition-colors"
            >
              <div className="text-5xl font-bold text-amber-400 mb-2">{stat.number}</div>
              <div className="text-2xl text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
        
      
      </div>
    </section>
  )
}