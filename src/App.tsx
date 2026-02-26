import { useEffect } from "react"
import Lenis from "lenis"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Skills from "./components/sections/Skills"
import Projets from "./components/sections/Projets"
import Contact from "./components/sections/Contact"
import { Analytics } from "@vercel/analytics/react"

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <>
    <div className="min-h-screen bg-linear-to-r from-[#b6764e] via-[#3a465a] to-[#0b1220]">
      <Hero />
      <About />
      <Skills />
      <Projets />
      <Contact />
      <Analytics />
    </div>
    </>
  )
}

export default App
