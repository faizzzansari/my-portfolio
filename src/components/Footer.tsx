import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/faizzzansari',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/faiz-ansarii',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:ansarifaiz7977@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">Faiz Ansari</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Creative Developer passionate about crafting exceptional digital experiences 
              that are simple, beautiful, and user-friendly.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center justify-center w-10 h-10 bg-dark-surface rounded-lg text-muted-foreground hover:text-gold hover:bg-gold/10 transition-smooth hover-scale"
                    aria-label={link.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About', id: 'about' },
                { label: 'Portfolio', id: 'portfolio' },
                { label: 'Services', id: 'services' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-muted-foreground hover:text-gold transition-smooth"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <a 
                  href="mailto:ansarifaiz7977@gmail.com" 
                  className="hover:text-gold transition-smooth"
                >
                  ansarifaiz7977@gmail.com
                </a>
              </p>
              <p>
                <a 
                  href="https://www.linkedin.com/in/faiz-ansarii" 
                  className="hover:text-gold transition-smooth"
                >
                  LinkedIn
                </a>
              </p>
              <p>Mumbai, Maharashtra, India</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="flex items-center text-muted-foreground mb-4 md:mb-0">
              <span>© {currentYear} Faiz Ansari. Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" />
              <span>and lots of ☕</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-gold transition-smooth flex items-center space-x-2 group"
            >
              <span>Back to Top</span>
              <div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center group-hover:animate-bounce">
                <div className="mt-0.5 mr-0.5 w-2 h-2 border-t-2 border-r-2 border-current rotate-45 transform -translate-y-0.5"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Additional Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            This portfolio is built with React, TypeScript, and Tailwind CSS. 
            Open to new opportunities and exciting projects!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;