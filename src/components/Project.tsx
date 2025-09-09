import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const Project = () => {
  const projects = [
    {
      title: 'Bank Management System',
      description: 'A comprehensive console-based banking application built in C, featuring account management, transaction processing, and secure data handling.',
      technologies: ['C', 'File Handling', 'Data Structures'],
      category: 'Console Application',
      features: ['Account Creation', 'Transaction Management', 'Balance Inquiry', 'Secure Authentication'],
      status: 'Completed'
    },
    {
      title: 'Tic-Tac-Toe Game',
      description: 'Interactive game implementation with both two-player and single-player modes, featuring AI opponent and intuitive user interface.',
      technologies: ['C', 'Algorithm Design', 'Game Logic'],
      category: 'Game Development',
      features: ['Two-Player Mode', 'AI Opponent', 'Score Tracking', 'Clean Interface'],
      status: 'Completed'
    },
    {
      title: 'Portfolio Website (Django)',
      description: 'Professional portfolio website built with Django framework, featuring a stunning goldenrod and black theme with smooth animations.',
      technologies: ['Django', 'HTML', 'CSS', 'JavaScript', 'SQLite'],
      category: 'Web Development',
      features: ['Responsive Design', 'Smooth Animations', 'Contact Form', 'Admin Panel'],
      status: 'Completed'
    },
    {
      title: 'React Portfolio (Current)',
      description: 'Modern, responsive portfolio built with React, Vite, and Tailwind CSS, showcasing contemporary web development practices.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'],
      category: 'Web Development',
      features: ['Modern Stack', 'Component Architecture', 'Dark Theme', 'Mobile Responsive'],
      status: 'In Progress'
    },
    {
      title: 'Doctor Appointment System',
      description: 'Mobile application for healthcare appointment management, built with React Native and MongoDB for seamless user experience.',
      technologies: ['React Native', 'MongoDB', 'Node.js', 'Express.js'],
      category: 'Mobile Development',
      features: ['Appointment Booking', 'Doctor Profiles', 'User Authentication', 'Real-time Updates'],
      status: 'Planned'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Progress':
        return 'bg-gold/20 text-gold border-gold/30';
      case 'Planned':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">My</span>{' '}
            <span className="text-gold">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my journey and expertise in 
            software development, from console applications to modern web and mobile solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="bg-background border-border hover-glow transition-smooth overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Code2 className="w-5 h-5 text-gold" />
                    <span className="text-sm text-muted-foreground">{project.category}</span>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`${getStatusColor(project.status)} px-2 py-1 text-xs`}
                  >
                    {project.status}
                  </Badge>
                </div>

                {/* Project Title & Description */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gold transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gold mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <div className="w-1 h-1 bg-gold rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-dark-elevated text-muted-foreground text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.status === 'Completed' && (
                    <>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-gold text-gold hover:bg-gold hover:text-background transition-smooth"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-primary text-background hover:shadow-gold transition-smooth"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button>
                    </>
                  )}
                  {project.status === 'In Progress' && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-gold text-gold hover:bg-gold hover:text-background transition-smooth"
                    >
                      <Github size={16} className="mr-2" />
                      View Progress
                    </Button>
                  )}
                  {project.status === 'Planned' && (
                    <Button
                      size="sm"
                      variant="outline"
                      disabled
                      className="w-full"
                    >
                      Coming Soon
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work or collaborating on a project?
          </p>
          <Button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-primary text-background hover:shadow-gold transition-smooth px-8 py-3"
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Project;