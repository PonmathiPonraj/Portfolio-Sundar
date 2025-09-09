import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProfessionalExperience from './components/ProfessionalExperience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import SkillsAndProjects from './components/SkillsAndProjects';
import Tools from './components/Tools';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'certifications', 'skills', 'tools', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header activeSection={activeSection} />
        <main>
          <Hero id="home" />
          <About id="about" />
          <ProfessionalExperience id="experience" />
          <Education id="education" />
          <Certifications id="certifications" />
          <SkillsAndProjects id="skills" />
          <Tools id="tools" />
          <Testimonials id="testimonials" />
          <Contact id="contact" />
        </main>
      </div>
    </div>
  );
}

export default App;