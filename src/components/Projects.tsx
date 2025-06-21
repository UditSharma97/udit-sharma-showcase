
import React, { useEffect, useRef } from 'react';

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Visa Flow - AI-Powered Visa Assistant",
      description: "A full-stack web application using the MERN stack and AI models (Lovable.ai, Claude, and Gemini) to streamline the visa application process. Features intelligent form filling, document verification, and real-time application tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "AI/ML", "REST API"],
      liveDemo: "http://globe-permit-hub-84.lovable.app/",
      github: "#",
      image: "/placeholder.svg"
    }
  ];

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
    <section id="projects" className="section alt-bg" ref={projectsRef}>
      <div className="container mx-auto px-6">
        <h2 style={{ color: 'var(--primary-color)' }}>Featured Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card animate-on-scroll scale-up rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
              style={{
                background: 'var(--bg-alt-color)',
                border: '1px solid var(--border-color)',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 10px 30px var(--glow-color-secondary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
              }}
            >
              <div className="project-image h-56 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="project-content p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 pulse-text" style={{ color: 'var(--primary-color)' }}>
                  {project.title}
                </h3>
                
                <p className="mb-4 flex-grow leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {project.description}
                </p>

                <div className="project-tags flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-xs font-medium font-roboto-mono"
                      style={{
                        backgroundColor: 'var(--surface-color)',
                        color: 'var(--primary-color)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links flex justify-between items-center pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold transition-colors duration-300"
                    style={{ color: 'var(--primary-color)' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--primary-color)'}
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold transition-colors duration-300"
                    style={{ color: 'var(--primary-color)' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--primary-color)'}
                  >
                    <i className="fab fa-github"></i>
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* More Projects Card */}
          <div
            className="project-card more-card animate-on-scroll scale-up rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer flex items-center justify-center text-center"
            style={{
              background: 'var(--surface-color)',
              border: '1px solid var(--border-color)',
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.3)',
              minHeight: '400px'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--bg-alt-color)';
              e.target.style.boxShadow = '0 10px 30px var(--glow-color-primary)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'var(--surface-color)';
              e.target.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
            }}
          >
            <div className="more-content">
              <i className="fas fa-plus-circle text-4xl mb-4" style={{ color: 'var(--primary-color)' }}></i>
              <h3 className="text-2xl font-bold font-roboto-mono pulse-text" style={{ color: 'var(--primary-color)' }}>
                More Projects Coming Soon
              </h3>
              <p className="mt-4" style={{ color: 'var(--text-muted)' }}>
                Stay tuned for exciting new developments!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
