import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Skills from "./components/sections/Skills"
import Projets from "./components/sections/Projets"
import Contact from "./components/sections/Contact"
import Footer from "./components/layout/Footer"
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
    <div className="min-h-screen bg-linear-to-r from-[#b6764e] via-[#3a465a] to-[#0b1220]">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projets />
    <Contact />
    <Footer />
    <Analytics />
    </div>
    </>
  )
}

export default App
