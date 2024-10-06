import React from 'react'
import HeroSection from './componets/HeroSection';
import AboutSection from './componets/About-section';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';
import { Analytics } from "@vercel/analytics/react"
import ContactForm from './componets/Contact-form';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black scroll-smooth">
      <Navbar />
      <main className="flex-grow ">
        <HeroSection id='home' />
        <AboutSection id="about" />
        <ContactForm id="contact" />
      </main>
      <Footer />
      <Analytics/>
    </div>
  )
}
