
export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 flex justify-between items-center bg-white/10 backdrop-blur-md border-b border-white/10 text-white h-16 px-4 font-magilo">
            <div>
                <h1 className="text-2xl font-bold">Teizred</h1>
            </div>
            <div>
                <ul className="flex gap-6">
                    <li><a href="#hero" className="hover:text-gray-300 transition-colors">Home</a></li>
                    <li><a href="#about" className="hover:text-gray-300 transition-colors">About</a></li>
                    <li><a href="#skills" className="hover:text-gray-300 transition-colors">Skills</a></li>
                    <li><a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a></li>
                    <li><a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}   