
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Particles initialization
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer && typeof (window as any).tsParticles !== 'undefined') {
      const initParticles = () => {
        (window as any).tsParticles.load("particles-js", {
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
            color: { value: ["#ff6b6b", "#ffd93d", "#6bcf7f"] },
            shape: { type: "circle" },
            opacity: { value: 0.6, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
            links: { enable: true, distance: 120, color: "#ffffff", opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1.5, direction: "none", random: true, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } },
          },
          detectRetina: true,
        }).then(() => {
          if (particlesContainer) {
            particlesContainer.style.opacity = '1';
          }
        });
      };
      setTimeout(initParticles, 800);
    }

    // Typing effect
    const typingTextElement = heroRef.current?.querySelector('.typing-text') as HTMLElement;
    if (typingTextElement) {
      const textToType = typingTextElement.getAttribute('data-text') || '';
      let index = 0;
      let typingStarted = false;

      const startTyping = () => {
        if (typingStarted) return;
        typingStarted = true;
        typingTextElement.textContent = '';

        const typeChar = () => {
          if (index < textToType.length) {
            typingTextElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeChar, 80 + Math.random() * 50);
          }
        };
        typeChar();
      };

      const heroTitleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !typingStarted) {
            startTyping();
            heroTitleObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.8 });

      const titleParent = typingTextElement.parentElement;
      if (titleParent) {
        heroTitleObserver.observe(titleParent);
      }
    }
  }, []);

  return (
    <section className="hero min-h-screen flex flex-col relative" style={{ backgroundColor: 'var(--bg-color)' }} ref={heroRef}>
      <div id="particles-js" className="absolute inset-0 opacity-0 transition-opacity duration-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col">
        <nav className="flex justify-between items-center py-6 border-b" style={{ borderColor: 'var(--border-color)' }}>
          <div className="text-3xl font-bold font-roboto-mono" style={{ color: 'var(--text-color)' }}>
            Udit Sharma
          </div>
          <ul className="flex space-x-10">
            <li><a href="#about" className="font-semibold tracking-wide transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>About</a></li>
            <li><a href="#skills" className="font-semibold tracking-wide transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>Skills</a></li>
            <li><a href="#projects" className="font-semibold tracking-wide transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>Projects</a></li>
            <li><a href="#contact" className="font-semibold tracking-wide transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>Contact</a></li>
          </ul>
        </nav>

        <div className="hero-content text-center my-auto py-16">
          <div className="text-xl font-normal mb-2 tracking-wider" style={{ color: 'var(--text-muted)' }}>
            Hello, I'm UDIT SHARMA
          </div>
          <h1 className="hero-title text-6xl md:text-8xl mb-4 font-roboto-mono leading-tight">
            <span className="typing-text" data-text="Creative DeveLoper" style={{ color: 'var(--text-color)' }}></span>
            <span className="cursor"></span>
          </h1>
          <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Passionate about leveraging the power of Machine Learning and Generative AI to build innovative web applications.
          </p>
          <div className="hero-buttons flex justify-center flex-wrap gap-4">
            <button 
              className="cta-button inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 "
              style={{
                background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))',
                color: 'var(--bg-color)',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'translateY(-3px) scale(1.03)';
                target.style.boxShadow = '0 8px 25px var(--glow-color-primary)';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'translateY(0) scale(1)';
                target.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
              }}
            >
             View My Work<a href="https://github.com/UditSharma97" ><i className="fas fa-arrow-right 	text-black"></i></a> 
              
            </button>
            <button 
              className="secondary-button inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 border-2"
              style={{
                background: 'transparent',
                color: 'var(--primary-color)',
                borderColor: 'var(--primary-color)'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = 'var(--primary-color)';
                target.style.color = 'var(--bg-color)';
                target.style.transform = 'translateY(-3px) scale(1.03)';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = 'transparent';
                target.style.color = 'var(--primary-color)';
                target.style.transform = 'translateY(0) scale(1)';
              }}
            >
                <a
                href="/resume.pdf"
                download
                // className="inline-flex items-center gap-2 px-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition font-semibold"
                 className="inline-flex items-center gap-2 px-6 py-2 rounded-lg transition font-semibold"
                  style={{ color: '#FF6B6B' }}
                >
                Download CV <i className="fas fa-download"></i>
              </a>
              {/* Download CV <i className="fas fa-download"></i> */}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
