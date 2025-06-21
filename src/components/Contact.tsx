
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

  const contactOptions = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "udit.sharma@email.com",
      href: "mailto:udit.sharma@email.com"
    },
    {
      icon: "fab fa-linkedin",
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com"
    },
    {
      icon: "fab fa-github",
      label: "GitHub",
      value: "Check my repos",
      href: "https://github.com"
    }
  ];

  return (
    <section id="contact" className="section" ref={contactRef}>
      <div className="container mx-auto px-6">
        <h2 style={{ color: 'var(--primary-color)' }}>Let's Connect</h2>
        
        <div className="contact-subtitle text-center max-w-2xl mx-auto mb-12 animate-on-scroll fade-in-up">
          <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
            Got a project or opportunity? I'd love to hear from you! 
            Reach out through any of the channels below.
          </p>
        </div>

        <div className="contact-options flex justify-center flex-wrap gap-6 mb-16 animate-on-scroll scale-up">
          {contactOptions.map((option, index) => (
            <a
              key={index}
              href={option.href}
              target={option.href.startsWith('http') ? '_blank' : '_self'}
              rel={option.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className="contact-link flex items-center gap-4 px-6 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 min-w-[280px] justify-center"
              style={{
                background: 'var(--surface-color)',
                color: 'var(--text-muted)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--primary-color)';
                e.target.style.color = 'var(--bg-color)';
                e.target.style.boxShadow = '0 5px 15px var(--glow-color-primary)';
                const icon = e.target.querySelector('i');
                if (icon) icon.style.color = 'var(--bg-color)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'var(--surface-color)';
                e.target.style.color = 'var(--text-muted)';
                e.target.style.boxShadow = 'none';
                const icon = e.target.querySelector('i');
                if (icon) icon.style.color = 'var(--primary-color)';
              }}
            >
              <i 
                className={`${option.icon} text-2xl transition-colors duration-300`}
                style={{ color: 'var(--primary-color)' }}
              ></i>
              <div className="text-left">
                <div className="font-semibold">{option.label}</div>
                <div className="text-sm opacity-80">{option.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="footer text-center pt-12 border-t animate-on-scroll fade-in" style={{ borderColor: 'var(--border-color)' }}>
          <p className="mb-2" style={{ color: 'var(--text-muted)' }}>
            Designed & Built by Udit Sharma © 2025
          </p>
          <p style={{ color: 'var(--text-muted)' }}>
            Powered by <span style={{ color: 'var(--primary-color)' }}>Code</span> & 
            <span style={{ color: 'var(--accent-color)' }}> Creativity</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
