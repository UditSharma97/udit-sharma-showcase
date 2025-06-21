
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

declare global {
  interface Window {
    tsParticles: any;
  }
}

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);

  const fullText = "Udit Sharma";

  useEffect(() => {
    // Initialize particles
    const initParticles = () => {
      if (window.tsParticles && particlesRef.current) {
        window.tsParticles.load("particles-js", {
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              grab: { distance: 140, line_linked: { opacity: 1 } },
              bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
              repulse: { distance: 100, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: ["#38bdf8", "#a78bfa", "#ec4899"] },
            shape: { type: "circle" },
            opacity: { value: 0.6, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
            links: { enable: true, distance: 120, color: "#ffffff", opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1.5, direction: "none", random: true, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } },
          },
          detectRetina: true,
        }).then(() => {
          if (particlesRef.current) {
            particlesRef.current.style.opacity = '1';
          }
        });
      }
    };

    setTimeout(initParticles, 800);

    // Typing effect
    let index = 0;
    const typeChar = () => {
      if (index < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(index));
        index++;
        setTimeout(typeChar, 80 + Math.random() * 50);
      } else {
        setTypingComplete(true);
        setShowCursor(false);
      }
    };

    const typingTimeout = setTimeout(typeChar, 1000);

    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero min-h-screen flex flex-col relative" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div
        ref={particlesRef}
        id="particles-js"
        className="absolute inset-0 z-1"
        style={{ opacity: 0 }}
      />
      
      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col">
        {/* Navigation */}
        <nav className="flex justify-between items-center py-6 border-b" style={{ borderColor: 'var(--border-color)' }}>
          <div className="text-2xl font-bold font-roboto-mono" style={{ color: 'var(--text-color)' }}>
            Udit Sharma
          </div>
          <ul className="hidden md:flex space-x-10">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="font-semibold tracking-wide transition-all duration-300 hover:text-shadow-glow"
                  style={{ 
                    color: 'var(--text-muted)',
                    transition: 'color var(--transition-speed) ease, text-shadow var(--transition-speed) ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--primary-color)';
                    e.target.style.textShadow = '0 0 8px var(--glow-color-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'var(--text-muted)';
                    e.target.style.textShadow = 'none';
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hero Content */}
        <div className="hero-content text-center m-auto py-16">
          <p className="text-lg font-normal tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
            Hello, I'm
          </p>
          <h1 className="font-bold font-roboto-mono leading-tight mb-4 min-h-[1.2em]" 
              style={{ 
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                color: 'var(--text-color)',
                lineHeight: '1.2'
              }}>
            <span className="typing-text">{typedText}</span>
            {showCursor && <span className="cursor">|</span>}
          </h1>
          <p className="text-xl mb-2" style={{ color: 'var(--primary-color)' }}>
            Software Developer & Aspiring AI Developer
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            A driven developer with a strong foundation in front-end technologies, 
            complemented by expertise in programming languages like C++, Java, and Python. 
            Passionate about leveraging the power of Machine Learning and Generative AI 
            to build innovative web applications.
          </p>
          
          <div className="hero-buttons flex justify-center flex-wrap gap-4 mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="cta-button inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
              style={{
                background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))',
                color: 'var(--bg-color)',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.03)';
                e.target.style.boxShadow = '0 8px 25px var(--glow-color-primary), 0 0 20px var(--glow-color-accent)';
                e.target.style.color = 'var(--text-color)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                e.target.style.color = 'var(--bg-color)';
              }}
            >
              View My Work <i className="fas fa-arrow-right"></i>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="secondary-button inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 border-2"
              style={{
                background: 'transparent',
                color: 'var(--primary-color)',
                borderColor: 'var(--primary-color)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--primary-color)';
                e.target.style.color = 'var(--bg-color)';
                e.target.style.transform = 'translateY(-3px) scale(1.03)';
                e.target.style.boxShadow = '0 8px 25px var(--glow-color-primary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = 'var(--primary-color)';
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Get In Touch <i className="fas fa-envelope"></i>
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              style={{ backgroundColor: 'var(--surface-color)' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--primary-color)';
                e.target.style.boxShadow = '0 5px 15px var(--glow-color-primary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--surface-color)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <Github size={24} style={{ color: 'var(--text-color)' }} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              style={{ backgroundColor: 'var(--surface-color)' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--primary-color)';
                e.target.style.boxShadow = '0 5px 15px var(--glow-color-primary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--surface-color)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <Linkedin size={24} style={{ color: 'var(--text-color)' }} />
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              style={{ backgroundColor: 'var(--surface-color)' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--primary-color)';
                e.target.style.boxShadow = '0 5px 15px var(--glow-color-primary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--surface-color)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <Mail size={24} style={{ color: 'var(--text-color)' }} />
            </button>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce transition-colors duration-300"
            style={{ color: 'var(--text-color)' }}
            onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-color)'}
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
