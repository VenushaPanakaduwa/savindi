import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Highlights from './components/Highlights';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div id="home" className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <WorkExperience />
      <Skills />
      <Highlights />
      <Contact />
      <Footer />
    </div>
  );
}
