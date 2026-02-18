import image from "/dashboard.png"
import image2 from "/pertes.png"
import image3 from "/hero.png"

export default function Projets() {
    const projetsCatagories = [
        {
            title: 'Adashboard',
            description: 'Adashboard est une application React connectée à un backend ExpressJS permettant d’afficher et de gérer des thèmes et leurs compétences associées. Le projet met en œuvre la récupération de données via une API REST, la manipulation CRUD, ainsi qu’un système de progression dynamique. Il illustre ma capacité à intégrer un frontend React avec un backend Node/Express et une base de données PostgreSQL.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'ExpressJS', 'Node.js'],
            image: image,
            link: 'https://github.com/teizred/ada-dashboard'

        },
        {
            title: 'Pertes (Work in Progress)',
            description: 'Application web de suivi des pertes produits par dictée vocale. L\'IA parse automatiquement le français parlé et enregistre les données en base de données, classées par catégorie avec ajustement manuel des quantités.',
            technologies: ['HTML', 'JavaScript', 'React', 'TypeScript', 'TailwindCSS 4', 'ExpressJS', 'Node.js',],
            image: image2,
            link: 'https://github.com/teizred/web-speech-api'
        },
        {
            title: 'Adapage',
            description: 'AdaPageReact est une application développée en React et TypeScript, mettant en avant une personnalité inspirante à travers plusieurs sections dynamiques (présentation, informations clés, frise chronologique et citations). Le projet intègre React Router pour la navigation et TailwindCSS pour un design moderne et responsive.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'TailwindCSS 4'],
            image: image3,
            link: 'https://github.com/adatechschool/grace-adapage-josh-et-jathu'
        },
    ]
    return (
        <section id="projects" className="relative min-h-screen bg-transparent w-full px-8 py-20">
            <div className="max-w-6xl mx-auto relative z-10">
                <h1 className="text-5xl md:text-6xl font-bold font-magilo text-amber-400 text-center mb-8">
                    Mes Projets</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project cards will go here */}
                    {projetsCatagories.map((projet) => (
                        <div key={projet.title} className="bg-white/10  backdrop-blur-md  rounded-xl p-6 border border-white/10 hover:border-amber-400 transition-colors duration-300">
                            <img src={projet.image} alt={projet.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h2 className="text-2xl font-bold font-magilo text-amber-400 mb-2">{projet.title}</h2>
                            <p className="text-gray-300 mb-4">{projet.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {projet.technologies.map((tech) => (
                                    <span key={tech} className="bg-sky-400/10 text-amber-400 px-4 py-2 rounded-full text-sm border border-amber-400/30">{tech}</span>
                                ))}
                            </div>
                            <a href={projet.link} target="_blank" rel="noopener noreferrer" className="bg-amber-400 text-black px-4 py-2 rounded-full border border-white hover:text-gray-300 transition-colors font-magilo inline-block">
                                Voir le projet
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}