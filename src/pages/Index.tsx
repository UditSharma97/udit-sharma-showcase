
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Chatbot from '../components/Chatbot';

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-color)' }}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Chatbot />
    </div>
  );
};

export default Index;
