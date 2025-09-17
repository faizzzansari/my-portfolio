import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/faiz-profile.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-subtle"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-6 mt-2 flex justify-center">
            <div className="relative">
              <img
                src={profileImage}
                alt="Faiz Ansari"
                className="w-48 h-48 rounded-full object-cover shadow-elevated"
              />
              {/* <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-glow"></div> */}
            </div>
          </div>

          {/* Hero Text */}
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">Faiz</span>{' '}
              <span className="text-gold">Ansari</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gold-muted mb-6 font-medium">
              Creative Developer
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Passionate about designing and developing exceptional digital experiences 
              that are simple, beautiful, and user-friendly. Specializing in creating 
              high-performance websites and applications.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-in-left">
            <Button
              onClick={() => scrollToSection('portfolio')}
              className="bg-gradient-primary text-background hover:shadow-gold transition-smooth px-8 py-3 text-lg font-medium"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-background transition-smooth px-8 py-3 text-lg font-medium"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          {/* <div className="flex justify-center space-x-6 animate-slide-in-right">
            <a
              href="https://github.com/faizzzansari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-smooth hover-scale"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/faiz-ansarii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-smooth hover-scale"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:ansarifaiz7977@gmail.com"
              className="text-muted-foreground hover:text-gold transition-smooth hover-scale"
            >
              <Mail size={28} />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;