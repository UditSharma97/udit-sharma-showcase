
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Visa Flow - AI-Powered Visa Assistant",
      description: "A full-stack web application using the MERN stack and AI models (Lovable.ai, Claude, and Gemini) to streamline the visa application process. Features intelligent form filling, document verification, and real-time application tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "AI/ML", "REST API"],
      liveDemo: "http://globe-permit-hub-84.lovable.app/",
      github: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-lato">
            Showcasing innovative solutions that combine cutting-edge technology with practical applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-700 rounded-lg overflow-hidden hover:bg-slate-600 transition-all duration-300 hover:scale-105 transform"
            >
              <div className="p-8">
                {project.featured && (
                  <div className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Featured Project
                  </div>
                )}
                
                <h3 className="text-2xl font-bold font-montserrat text-white mb-4">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 font-lato mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-800 text-blue-400 px-3 py-1 rounded-full text-sm font-lato"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-lato"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-slate-600 hover:bg-slate-500 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-lato"
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 font-lato">
            More exciting projects coming soon! Stay tuned for updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
