export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 px-6 md:px-16 border-t border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Name / Logo */}
        <div className="text-xl font-magilo text-white tracking-wider">
          Teizred
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm font-montserrat text-center">
          © {currentYear} Jathurshan Suventhiran — Tous droits réservés.
        </div>

        {/* Discrete Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/teizred"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-5 h-5 invert opacity-70 hover:opacity-100" />
          </a>
          <a
            href="https://linkedin.com/in/jathurshan-suventhiran"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-5 h-5 opacity-70 hover:opacity-100" />
          </a>
        </div>

      </div>
    </footer>
  );
}
