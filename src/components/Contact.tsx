
import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background particles effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-blue-400 mb-4">
            Let's Connect
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-lato">
            Got a project or opportunity? Reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
            <a
              href="mailto:udit.sharma@email.com"
              className="flex items-center justify-center w-80 h-16 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 group border border-slate-700 hover:border-blue-400"
            >
              <Mail size={20} className="text-blue-400 mr-3" />
              <span className="text-white font-lato">udit.sharma@email.com</span>
            </a>
            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-80 h-16 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 group border border-slate-700 hover:border-blue-400"
            >
              <Linkedin size={20} className="text-blue-400 mr-3" />
              <span className="text-white font-lato">LinkedIn</span>
            </a>
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-80 h-16 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 group border border-slate-700 hover:border-blue-400"
            >
              <Github size={20} className="text-blue-400 mr-3" />
              <span className="text-white font-lato">GitHub</span>
            </a>
          </div>

          {/* Footer */}
          <div className="text-center pt-12 border-t border-slate-800">
            <p className="text-gray-400 font-lato mb-2">
              Designed & Built by Udit Sharma © 2025
            </p>
            <p className="text-gray-500 font-lato">
              Powered by <span className="text-blue-400">Code</span> & <span className="text-purple-400">Creativity</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
