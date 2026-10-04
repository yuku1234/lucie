import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import WhatWeDo from '../components/WhatWeDo'
import Ecosystem from '../components/Ecosystem'
import Programs from '../components/Programs'
import HowItWorks from '../components/HowItWorks'
import Values from '../components/Values'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <WhatWeDo />
        <Ecosystem />
        <Programs />
        <HowItWorks />
        <Values />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
