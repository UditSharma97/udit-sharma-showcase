
import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Front-End Development",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 75 }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", level: 85 },
        { name: "Java", level: 80 },
        { name: "Python", level: 85 },
        { name: "SQL", level: 70 }
      ]
    },
    {
      title: "AI & Tools",
      skills: [
        { name: "Machine Learning", level: 75 },
        { name: "Generative AI", level: 80 },
        { name: "Jupyter Notebook", level: 85 },
        { name: "Git/GitHub", level: 80 },
        { name: "VS Code", level: 90 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-lato">
            A comprehensive toolkit built through dedication, practice, and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors duration-300"
            >
              <h3 className="text-2xl font-bold font-montserrat text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-lato">{skill.name}</span>
                      <span className="text-blue-400 font-lato">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold font-montserrat text-white mb-8">
            Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Java', 'SQL', 'C++', 'Generative AI', 'Robotics'].map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-600 to-slate-700 rounded-lg p-4 hover:scale-105 transform transition-transform duration-300"
              >
                <span className="text-white font-lato font-semibold">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
