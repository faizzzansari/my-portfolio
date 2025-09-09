import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Database, Palette, Server } from 'lucide-react';

const About = () => {
  const skills = {
    Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'],
    Backend: ['Django', 'Node.js', 'Express.js'],
    Database: ['MySQL', 'MongoDB', 'SQLite'],
    'Programming Languages': ['Python', 'C', 'Java', 'JavaScript', 'TypeScript'],
  };

  const skillIcons = {
    Frontend: Palette,
    Backend: Server,
    Database: Database,
    'Programming Languages': Code2,
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">About</span>{' '}
            <span className="text-gold">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6 text-gold">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate creative developer with a deep love for crafting digital experiences 
                that seamlessly blend form and function. My journey in technology is driven by the 
                belief that great design and robust development go hand in hand.
              </p>
              <p>
                Currently pursuing my BSc IT degree (3rd Year) at Anjuman-I-Islam Kalsekar Technical Campus, 
                I've built a strong foundation in both theoretical concepts and practical application. 
                My educational journey began with completing my 10th and 12th from Maharashtra State Board, 
                where I first discovered my passion for technology.
              </p>
              <p>
                I specialize in creating high-performance websites and applications that are not just 
                visually appealing, but also user-friendly and accessible. Every project I work on 
                is an opportunity to push boundaries and create something meaningful.
              </p>
            </div>

            {/* Education */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-gold">Education</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">BSc Information Technology (3rd Year)</p>
                    <p className="text-sm text-muted-foreground">Anjuman-I-Islam Kalsekar Technical Campus</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">12th Grade</p>
                    <p className="text-sm text-muted-foreground">Maharashtra State Board</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">10th Grade</p>
                    <p className="text-sm text-muted-foreground">Maharashtra State Board</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6 text-gold">Technical Skills</h3>
            <div className="grid gap-6">
              {Object.entries(skills).map(([category, skillList]) => {
                const IconComponent = skillIcons[category as keyof typeof skillIcons];
                return (
                  <Card key={category} className="p-6 bg-dark-surface border-border hover-glow transition-smooth">
                    <div className="flex items-center mb-4">
                      <IconComponent className="w-6 h-6 text-gold mr-3" />
                      <h4 className="text-lg font-semibold text-foreground">{category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-dark-elevated text-muted-foreground hover:text-gold hover:bg-gold/10 transition-smooth"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;