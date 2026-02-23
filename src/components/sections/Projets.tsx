import { TECHNOLOGIES } from "@/data/technologies"
import image from "/1.png"
import image2 from "/2.png"
import image3 from "/3.png"
import image4 from "/4.png"
import image5 from "/5.png"

export default function Projets() {
    const projetsCatagories = [
        {
            title: 'Adashboard',
            description: 'Adashboard est une application React connectée à un backend ExpressJS permettant d’afficher et de gérer des thèmes et leurs compétences associées. Le projet met en œuvre la récupération de données via une API REST, la manipulation CRUD, ainsi qu’un système de progression dynamique. Il illustre ma capacité à intégrer un frontend React avec un backend Node/Express et une base de données PostgreSQL.',
            technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript, TECHNOLOGIES.react, TECHNOLOGIES.expressjs, TECHNOLOGIES.nodejs],
            image: image,
            link: 'https://github.com/teizred/Adashboardv2'

        },
        {
            title: 'Pertes (Work in Progress)',
            description: 'Application web de suivi des pertes produits par dictée vocale. L\'IA (GPT-4o-mini) parse automatiquement le français parlé et enregistre les données sur Neon PostgreSQL, avec ajustement manuel des quantités et export PDF / email. Conçue pour un usage terrain en restauration rapide, elle simplifie la saisie des pertes sans interaction clavier.',
            technologies: [ TECHNOLOGIES.javascript, TECHNOLOGIES.react, TECHNOLOGIES.typescript, TECHNOLOGIES.tailwindcss, TECHNOLOGIES.expressjs, TECHNOLOGIES.railway],
            image: image2,
            link: 'https://github.com/teizred/web-speech-api',
            demo: 'https://web-speech-api-ai.vercel.app/'
        },
        {
            title: 'Adapage',
            description: 'AdaPageReact est une application développée en React et TypeScript, mettant en avant une personnalité inspirante à travers plusieurs sections dynamiques (présentation, informations clés, frise chronologique et citations). Le projet intègre React Router pour la navigation et TailwindCSS pour un design moderne et responsive.',
            technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript, TECHNOLOGIES.react, TECHNOLOGIES.typescript, TECHNOLOGIES.tailwindcss],
            image: image3,
            link: 'https://github.com/adatechschool/grace-adapage-josh-et-jathu',
            demo: 'https://grace-adapage-josh-et-jathu.vercel.app'
        },
        {
            title: 'Adataviz - Dashboard Vélib\' en temps réel',
            description: 'Développement d\'une application web en JavaScript Vanilla exploitant l\'API OpenData de Paris. Le site permet de consulter en direct la disponibilité des stations (vélos et bornes) via une interface responsive avec recherche filtrée et pagination. L\'accent a été mis sur la gestion de l\'asynchronisme (fetch) et l\'optimisation de l\'expérience utilisateur.',
            technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript, TECHNOLOGIES.api],
            image: image5,
            link: 'https://github.com/teizred/adataviz_Teizred',
            demo: 'https://adataviz-teizred.vercel.app'
        },
        {
            title: 'Salaire-Calcul',
            description: 'SalaireCalcul est une application web moderne qui vous permet de convertir le prix de n\'importe quel produit en heures de travail, basées sur votre salaire horaire ou le SMIC. Elle inclut également des données d\'inflation en temps réel pour vous donner le "vrai" coût de la vie.',
            technologies: [TECHNOLOGIES.html, TECHNOLOGIES.javascript, TECHNOLOGIES.react, TECHNOLOGIES.typescript, TECHNOLOGIES.tailwindcss, TECHNOLOGIES.expressjs, TECHNOLOGIES.nodejs],
            image: image4,
            link: 'https://github.com/teizred/salaire-calcul',
            demo: 'https://salaire-calculette.vercel.app'
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
                            <p className="text-white mb-4">{projet.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {projet.technologies.map((tech, i) => {
                                    const IconComponent = tech?.component;
                                    return tech ? (
                                      <span 
                                        key={i} 
                                        className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold border border-amber-400/40 text-amber-300 bg-amber-400/5 font-montserrat hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300 cursor-default group"
                                      >
                                          {tech.icon && (
                                              <img 
                                                src={tech.icon} 
                                                alt={tech.name} 
                                                className={`w-3.5 h-3.5 md:w-4 md:h-4 object-contain group-hover:scale-110 transition-transform ${tech.invert ? 'invert' : ''}`}
                                              />
                                          )}
                                          {IconComponent && (
                                              <IconComponent size={16} weight="duotone" className="group-hover:scale-110 transition-transform" />
                                          )}
                                          {tech.name}
                                      </span>
                                    ) : null;
                                })}
                            </div>
                            <div className="flex gap-2">
                                <a href={projet.link} target="_blank" rel="noopener noreferrer" className="bg-amber-400 text-black px-4 py-2 rounded-full hover:text-gray-300 transition-colors font-magilo inline-block">
                                    Voir le projet
                                </a>
                                {projet.demo && (
                                    <a href={projet.demo} target="_blank" rel="noopener noreferrer" className="bg-amber-400 text-black px-4 py-2 rounded-full hover:text-gray-300 transition-colors font-magilo inline-block">
                                        Voir la démo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}