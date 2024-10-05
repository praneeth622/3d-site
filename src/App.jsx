import React from 'react'
import HeroSection from './componets/HeroSection';
import AboutSection from './componets/About-section';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection id='#about' />
      </main>
      <Footer />
      <Analytics/>
    </div>
  )
}
