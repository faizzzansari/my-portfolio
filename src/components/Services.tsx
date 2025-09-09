import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Palette, Code, Smartphone, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces that provide exceptional user experiences across all devices.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design & Branding',
        'Responsive Design Systems',
        'Usability Testing'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision']
    },
    {
      icon: Code,
      title: 'Website Development',
      description: 'Building modern, fast, and scalable websites using cutting-edge technologies and best practices.',
      features: [
        'Responsive Web Development',
        'Custom CMS Solutions',
        'E-commerce Platforms',
        'Performance Optimization',
        'SEO Implementation'
      ],
      technologies: ['React', 'Django', 'Node.js', 'Tailwind CSS']
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Developing cross-platform mobile applications that deliver native-like performance and user experience.',
      features: [
        'Cross-Platform Development',
        'Native Performance',
        'API Integration',
        'Real-time Features',
        'App Store Deployment'
      ],
      technologies: ['React Native', 'MongoDB', 'Express.js', 'Node.js']
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">My</span>{' '}
            <span className="text-gold">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I offer comprehensive digital solutions that combine creative design 
            with robust development to bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title} 
                className="p-8 bg-dark-surface border-border hover-glow transition-smooth group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Service Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-6 group-hover:animate-float transition-smooth">
                  <IconComponent className="w-8 h-8 text-background" />
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-gold transition-smooth">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gold mb-3">What I Offer:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <ArrowRight className="w-3 h-3 text-gold mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-dark-elevated text-muted-foreground text-xs rounded-md border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  variant="outline"
                  className="w-full border-gold text-gold hover:bg-gold hover:text-background transition-smooth group-hover:shadow-gold"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Service Process */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-gold">My Process</h3>
            <p className="text-muted-foreground">
              A streamlined approach to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
              { step: '02', title: 'Planning', description: 'Creating a roadmap for success' },
              { step: '03', title: 'Development', description: 'Building with precision and care' },
              { step: '04', title: 'Delivery', description: 'Launching your project to the world' }
            ].map((phase, index) => (
              <div key={phase.step} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:animate-glow transition-smooth">
                    <span className="text-xl font-bold text-background">{phase.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border transform -translate-y-1/2"></div>
                  )}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-gold transition-smooth">
                  {phase.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;