
import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const technologies = [
    { name: "Python", icon: "fab fa-python", color: "#ff6b6b" },
    { name: "C++", icon: "fas fa-code", color: "#ffd93d" },
    { name: "Java", icon: "fab fa-java", color: "#6bcf7f" },
    { name: "HTML", icon: "fab fa-html5", color: "#ff6b6b" },
    { name: "CSS", icon: "fab fa-css3-alt", color: "#4ecdc4" },
    { name: "JavaScript", icon: "fab fa-js", color: "#ffd93d" },
    { name: "React.js", icon: "fab fa-react", color: "#6bcf7f" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#a8e6cf" },
    { name: "MySQL", icon: "fas fa-database", color: "#ff6b6b" },
    { name: "Azure Cloud", icon: "fas fa-cloud", color: "#4ecdc4" },
    { name: "UI/UX Design", icon: "fas fa-palette", color: "#ffd93d" },
    { name: "Git/GitHub", icon: "fab fa-git-alt", color: "#6bcf7f" },
    // { name: "Render", icon: "fas fa-server", color: "#a8e6cf" }
  ];

  const certifications = ['Java', 'SQL', 'C++', 'Generative AI', 'Robotics'];

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

    const animatedElements = skillsRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section" ref={skillsRef} style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="container mx-auto px-6">
        <h2 style={{ color: 'var(--primary-color)' }}>Skills & Technologies</h2>
        
        {/* Vertical Grid Layout */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="animate-on-scroll scale-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="tech-card p-6 rounded-xl text-center transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer focus:outline-none focus:ring-0 focus:border-0"
                  style={{ 
                    background: 'rgba(30, 30, 30, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                    outline: 'none'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = 'rgba(40, 40, 40, 0.9)';
                    target.style.boxShadow = `0 8px 25px ${tech.color}40`;
                    target.style.borderColor = tech.color;
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = 'rgba(30, 30, 30, 0.8)';
                    target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                    target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                  tabIndex={-1}
                >
                  <i 
                    className={`${tech.icon} text-4xl mb-4 transition-all duration-300 group-hover:scale-110`}
                    style={{ color: tech.color, outline: 'none' }}
                  ></i>
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--text-color)', outline: 'none' }}>
                    {tech.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center animate-on-scroll fade-in-up">
          <h3 className="text-2xl font-bold font-roboto-mono mb-8" style={{ color: 'var(--text-color)' }}>
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold cursor-pointer focus:outline-none focus:ring-0"
                style={{
                  background: 'linear-gradient(135deg, #ff6b6b, #ffd93d)',
                  color: '#1a1a1a',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                  outline: 'none'
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.boxShadow = '0 8px 25px #ff6b6b80';
                  target.style.transform = 'scale(1.05) translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                  target.style.transform = 'scale(1) translateY(0)';
                }}
                tabIndex={-1}
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
