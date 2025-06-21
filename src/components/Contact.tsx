
import React, { useEffect, useRef } from 'react';

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);

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

    const animatedElements = contactRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="section" ref={contactRef} style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="container mx-auto px-6">
        <h2 style={{ color: 'var(--primary-color)' }}>Let's Connect</h2>
        
        <div className="contact-subtitle text-center max-w-2xl mx-auto mb-12">
          <p className="text-xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Ready to collaborate on your next project? I'm always excited to work on innovative solutions 
            and bring creative ideas to life. Let's build something amazing together!
          </p>
        </div>

        <div className="animate-on-scroll fade-in-up">
          <div className="contact-options flex flex-wrap justify-center gap-6 mb-16">
            <a 
              href="mailto:sharma2004udit@gmail.com" 
              className="contact-link flex items-center gap-4 px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 min-w-64 justify-center"
              style={{
                background: 'rgba(30, 30, 30, 0.8)',
                color: 'var(--text-muted)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = '#ff6b6b';
                target.style.color = '#1a1a1a';
                target.style.transform = 'translateY(-5px) scale(1.05)';
                target.style.boxShadow = '0 8px 25px #ff6b6b60';
                const icon = target.querySelector('i') as HTMLElement;
                if (icon) icon.style.color = '#1a1a1a';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = 'rgba(30, 30, 30, 0.8)';
                target.style.color = 'var(--text-muted)';
                target.style.transform = 'translateY(0) scale(1)';
                target.style.boxShadow = 'none';
                const icon = target.querySelector('i') as HTMLElement;
                if (icon) icon.style.color = '#ff6b6b';
              }}
            >
              <i className="fas fa-envelope text-2xl" style={{ color: '#ff6b6b' }}></i>
              <span className="font-semibold">Email Me</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/udit-sharma-029879294" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link flex items-center gap-4 px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 min-w-64 justify-center"
              style={{
                background: 'rgba(30, 30, 30, 0.8)',
                color: 'var(--text-muted)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = '#ffd93d';
                target.style.color = '#1a1a1a';
                target.style.transform = 'translateY(-5px) scale(1.05)';
                target.style.boxShadow = '0 8px 25px #ffd93d60';
                const icon = target.querySelector('i') as HTMLElement;
                if (icon) icon.style.color = '#1a1a1a';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = 'rgba(30, 30, 30, 0.8)';
                target.style.color = 'var(--text-muted)';
                target.style.transform = 'translateY(0) scale(1)';
                target.style.boxShadow = 'none';
                const icon = target.querySelector('i') as HTMLElement;
                if (icon) icon.style.color = '#ffd93d';
              }}
            >
              <i className="fab fa-linkedin text-2xl" style={{ color: '#ffd93d' }}></i>
              <span className="font-semibold">LinkedIn</span>
            </a>

            <a 
              href="https://github.com/UditSharma97" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link flex items-center gap-4 px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 min-w-64 justify-center"
              style={{
                background: 'rgba(30, 30, 30, 0.8)',
                color: 'var(--text-muted)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = '#6bcf7f';
                target.style.color = '#1a1a1a';
                target.style.transform = 'translateY(-5px) scale(1.05)';
                target.style.boxShadow = '0 8px 25px #6bcf7f60';
                const icon = target.querySelector('i') as HTMLElement;
                if (icon) icon.style.color = '#1a1a1a';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = 'rgba(30, 30, 30, 0.8)';
                target.style.color = 'var(--text-muted)';
                target.style.transform = 'translateY(0) scale(1)';
                target.style.boxShadow = 'none';
                const icon = target.querySelector('i') as HTMLElement;
                if (icon) icon.style.color = '#6bcf7f';
              }}
            >
              <i className="fab fa-github text-2xl" style={{ color: '#6bcf7f' }}></i>
              <span className="font-semibold">GitHub</span>
            </a>
          </div>
        </div>

        <div className="footer text-center py-8 border-t" style={{ borderColor: 'var(--border-color)' }}>
          <p style={{ color: 'var(--text-muted)' }}>
            © 2024 Udit Sharma. Crafted with passion and code.
          </p>
          <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>
            Building the future, one line of code at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
