import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Skills from "./components/sections/Skills"

function App() {

  return (
    <>
    <div className="min-h-screen bg-linear-to-r from-[#8b5a3c] via-[#3a465a] to-[#0b1220]">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    </div>
    </>
  )
}

export default App
