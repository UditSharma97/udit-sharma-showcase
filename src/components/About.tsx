
import React from 'react';
import { Award, BookOpen, Code, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient in modern web technologies including React, Node.js, and MERN stack"
    },
    {
      icon: Lightbulb,
      title: "AI & Machine Learning",
      description: "Passionate about leveraging AI and ML to create innovative solutions"
    },
    {
      icon: Award,
      title: "Certified Professional",
      description: "Multiple certifications in Java, SQL, C++, and Generative AI"
    },
    {
      icon: BookOpen,
      title: "Research Focused",
      description: "Active researcher in big data security and cloud computing technologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-lato leading-relaxed">
            I'm a passionate Computer Science student with a drive for innovation and excellence. 
            My journey in technology spans from fundamental programming concepts to cutting-edge 
            AI applications, always with a focus on creating meaningful impact through code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition-colors duration-300 hover:scale-105 transform transition-transform"
            >
              <div className="flex flex-col items-center text-center">
                <item.icon size={48} className="text-blue-400 mb-4" />
                <h3 className="text-xl font-bold font-montserrat text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 font-lato">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-slate-700 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold font-montserrat text-white mb-4">
            My Mission
          </h3>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto font-lato">
            To bridge the gap between innovative technology and real-world applications, 
            creating solutions that not only showcase technical expertise but also 
            deliver genuine value to users and society.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
