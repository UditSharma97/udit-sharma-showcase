
import React, { useEffect, useRef } from 'react';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const animatedElements = aboutRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section alt-bg" ref={aboutRef}>
      <div className="container mx-auto px-6">
        <h2 style={{ color: 'var(--primary-color)' }}>About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="about-image animate-on-scroll fade-in-up relative">
            <div className="relative z-10 mx-auto max-w-sm">
              <img 
                src="/placeholder.svg" 
                alt="Udit Sharma"
                className="profile-pic w-full rounded-lg border-4 border-opacity-20"
                style={{ borderColor: 'var(--border-color)' }}
              />
              <div 
                className="absolute -top-4 -left-4 w-11/12 h-11/12 border-2 border-dashed rounded-lg opacity-50 transition-transform duration-300 hover:rotate-[-5deg] hover:scale-105"
                style={{ borderColor: 'var(--primary-color)' }}
              ></div>
            </div>
          </div>

          <div className="about-text animate-on-scroll slide-in-right">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                I'm a passionate Computer Science student with a drive for innovation and excellence. 
                My journey in technology spans from fundamental programming concepts to cutting-edge 
                AI applications, always with a focus on creating meaningful impact through code.
              </p>
              
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                With expertise in <span className="accent">front-end development</span>, 
                <span className="accent"> machine learning</span>, and 
                <span className="accent"> AI technologies</span>, I bring a unique perspective 
                to every project. I'm particularly passionate about creating intuitive user 
                experiences while leveraging the power of artificial intelligence.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                When I'm not coding, you'll find me exploring the latest developments in AI, 
                contributing to open-source projects, or working on innovative solutions 
                that bridge the gap between technology and real-world applications.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--surface-color)' }}>
                  <div className="text-3xl font-bold" style={{ color: 'var(--primary-color)' }}>15+</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Projects Completed</div>
                </div>
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--surface-color)' }}>
                  <div className="text-3xl font-bold" style={{ color: 'var(--primary-color)' }}>5+</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
