
import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML/CSS", icon: "fab fa-html5" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "React.js", icon: "fab fa-react" },
        { name: "Bootstrap", icon: "fab fa-bootstrap" },
        { name: "Tailwind CSS", icon: "fas fa-palette" }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", icon: "fas fa-code" },
        { name: "Java", icon: "fab fa-java" },
        { name: "Python", icon: "fab fa-python" },
        { name: "SQL", icon: "fas fa-database" }
      ]
    },
    {
      title: "AI & Tools",
      skills: [
        { name: "Machine Learning", icon: "fas fa-brain" },
        { name: "Generative AI", icon: "fas fa-robot" },
        { name: "Jupyter", icon: "fas fa-file-code" },
        { name: "Git/GitHub", icon: "fab fa-git-alt" },
        { name: "VS Code", icon: "fas fa-laptop-code" }
      ]
    }
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
    <section id="skills" className="section" ref={skillsRef}>
      <div className="container mx-auto px-6">
        <h2 style={{ color: 'var(--primary-color)' }}>Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="animate-on-scroll scale-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div 
                className="p-8 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                style={{ 
                  background: 'rgba(55, 65, 81, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(55, 65, 81, 0.8)';
                  e.target.style.boxShadow = '0 8px 25px var(--glow-color-primary)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(55, 65, 81, 0.6)';
                  e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                }}
              >
                <h3 className="text-2xl font-bold font-roboto-mono text-center mb-6" style={{ color: 'var(--text-color)' }}>
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="skill-item flex items-center gap-4 p-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                      style={{ 
                        background: 'rgba(55, 65, 81, 0.6)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                      onMouseEnter={(e) => {
                        const icon = e.target.querySelector('i');
                        if (icon) icon.style.color = 'var(--accent-color)';
                      }}
                      onMouseLeave={(e) => {
                        const icon = e.target.querySelector('i');
                        if (icon) icon.style.color = 'var(--primary-color)';
                      }}
                    >
                      <i 
                        className={`${skill.icon} text-2xl transition-colors duration-300`}
                        style={{ color: 'var(--primary-color)' }}
                      ></i>
                      <span className="font-semibold" style={{ color: 'var(--text-color)' }}>
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-on-scroll fade-in-up">
          <h3 className="text-2xl font-bold font-roboto-mono mb-8" style={{ color: 'var(--text-color)' }}>
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold"
                style={{
                  background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                  color: 'var(--bg-color)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 8px 25px var(--glow-color-primary)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                }}
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
