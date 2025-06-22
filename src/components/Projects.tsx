
import React, { useEffect, useRef } from 'react';

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

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

    const animatedElements = projectsRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section alt-bg" ref={projectsRef} style={{ backgroundColor: 'var(--bg-alt-color)' }}>
      <div className="container mx-auto px-6">
        <h2 style={{ color: 'var(--primary-color)' }}>Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center max-w-7xl mx-auto">
          <div className="animate-on-scroll scale-up">
            <div 
              className="project-card rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex flex-col"
              style={{ 
                background: 'var(--bg-color)',
                border: '1px solid var(--border-color)',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.3)',
                maxWidth: '380px',
                minHeight: '550px',
                width: '100%'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.boxShadow = '0 10px 30px rgba(255, 107, 107, 0.3)';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
              }}
            >
              <div className="project-image h-48 overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Visa Flow Project"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="project-content p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#ff6b6b' }}>
                  Visa Flow - AI-Powered Assistant
                </h3>
                
                <p className="mb-6 leading-relaxed text-sm text-center flex-grow" style={{ color: 'var(--text-muted)' }}>
                  A full-stack web application using the MERN stack and AI models (Lovable.ai, Claude, and Gemini) 
                  to streamline the visa application process with intelligent assistance.
                </p>
                
                <div className="project-tags mb-6 flex flex-wrap gap-2 justify-center">
                  {['MERN Stack', 'AI Integration', 'Full-Stack'].map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ 
                        backgroundColor: '#ff6b6b20',
                        color: '#ff6b6b',
                        border: '1px solid #ff6b6b40'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links border-t pt-4 flex justify-between items-center mt-auto" style={{ borderColor: 'var(--border-color)' }}>
                  <a 
                    href="http://globe-permit-hub-84.lovable.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold transition-colors duration-300 text-sm hover:scale-105"
                    style={{ color: '#ff6b6b' }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.color = '#ffd93d';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.color = '#ff6b6b';
                    }}
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 font-semibold transition-colors duration-300 text-sm hover:scale-105"
                    style={{ color: '#6bcf7f' }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.color = '#ffd93d';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.color = '#6bcf7f';
                    }}
                  >
                    <i className="fab fa-github"></i>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll scale-up">
            <div 
              className="project-card more-card rounded-xl flex items-center justify-center text-center cursor-pointer transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              style={{ 
                background: 'linear-gradient(135deg, #ff6b6b20, #ffd93d20)',
                border: '2px dashed #ff6b6b',
                maxWidth: '380px',
                minHeight: '550px',
                width: '100%'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = 'linear-gradient(135deg, #ff6b6b30, #ffd93d30)';
                target.style.borderColor = '#ffd93d';
                target.style.boxShadow = '0 10px 30px #ff6b6b40';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = 'linear-gradient(135deg, #ff6b6b20, #ffd93d20)';
                target.style.borderColor = '#ff6b6b';
                target.style.boxShadow = 'none';
              }}
            >
              <div className="more-content px-6">
                <i className="fas fa-plus text-5xl mb-6" style={{ color: '#ff6b6b' }}></i>
                <h3 className="text-xl font-bold font-roboto-mono mb-4" style={{ color: '#ff6b6b' }}>
                  More Projects Coming Soon
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  Currently working on exciting new projects that will showcase innovative solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
