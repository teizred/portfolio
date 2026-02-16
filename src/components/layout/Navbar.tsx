import { useState, useEffect } from 'react';
import oreoIcon from '../../assets/icons/oreo.svg';
import xIcon from '../../assets/icons/x.svg';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('hero');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
			const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
            // On ajoute 100px pour que la section change un peu avant d'atteindre le haut exact de l'écran
            // Cela rend l'expérience plus fluide pour l'utilisateur
            const scrollPosition = window.scrollY + 100;
  
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    // offsetTop: La distance entre le haut de la page et le début de la section
                    const offsetTop = element.offsetTop;
                    // offsetHeight: La hauteur totale de la section (le "bloc")
                    const offsetHeight = element.offsetHeight;
  
                    // On vérifie si notre position de scroll est À L'INTÉRIEUR de cette section :
                    // 1. scrollPosition >= offsetTop -> On a dépassé le début de la section
                    // 2. scrollPosition < offsetTop + offsetHeight -> On n'a pas encore dépassé la fin de la section
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section);
                    }
                }
            }
        };

        // on dit au navigateur : "Hey, chaque fois que l'utilisateur scrolle, lance ma fonction handleScroll"
        window.addEventListener('scroll', handleScroll);

        // C'est le "nettoyage" (cleanup) : quand le composant est détruit ou mis à jour,
        // on enlève l'écouteur pour éviter des bugs ou des fuites de mémoire.
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { href: '#hero', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 flex justify-between items-center text-2xl bg-white/10 backdrop-blur-md border-b border-white/10 text-white h-16 px-4 font-magilo">
            <div>
                <h1 className="text-2xl">Teizred</h1>
            </div>
            {/* Desktop menu */}
            <div className="hidden md:block">
                <ul className="flex gap-6">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a 
                                href={link.href} 
                                className={`transition-colors ${activeSection === link.href.substring(1) ? 'text-amber-400' : 'hover:text-gray-300'}`}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
                <button 
                    onClick={toggleMenu} 
                    className="focus:outline-none text-white transition-transform duration-300 ease-in-out w-8 h-8 flex items-center justify-center"
                    style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
                >
                    {isMenuOpen ? <img src={xIcon} alt="Close" className="w-8 h-8 invert" /> : <img src={oreoIcon} alt="Menu" className="w-8 h-8 invert" />}
                </button>
            </div>

            {/* Mobile menu dropdown */}
            <div 
                className={`absolute top-16 left-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-white/10 flex flex-col items-center py-8 space-y-6 md:hidden transition-all duration-300 ease-in-out origin-top ${
                    isMenuOpen 
                        ? 'opacity-100 translate-y-0 pointer-events-auto scale-y-100' 
                        : 'opacity-0 -translate-y-4 pointer-events-none scale-y-95'
                }`}
            >
                <ul className="flex flex-col items-center gap-6 text-2xl w-full">
                    {navLinks.map((link) => (
                        <li key={link.label} className="w-full text-center">
                            <a 
                                href={link.href} 
                                onClick={closeMenu}
                                className={`block w-full py-2 transition-colors ${activeSection === link.href.substring(1) ? 'text-amber-400' : 'text-white hover:text-gray-300'}`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}