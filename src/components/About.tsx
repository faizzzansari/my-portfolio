import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Database, Palette, Server } from 'lucide-react';

const About = () => {
  const skills = {
    Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'],
    Backend: ['Django', 'Node.js', 'Express.js'],
    Database: ['MySQL', 'MongoDB', 'SQLite'],
    'Programming Languages': ['C', 'C++', 'Python', 'Java', 'JavaScript', 'C#', 'TypeScript'],
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
              <p> I’m a passionate full stack developer who enjoys building real-world applications that solve practical problems. I focus on creating clean, responsive, and user-friendly interfaces backed by efficient and scalable systems. </p>
             <p> I have completed my BSc in Information Technology from Anjuman-I-Islam’s Kalsekar Technical Campus, where I built a strong foundation in programming, software development, and system design. </p>
             <p> I specialize in modern web development using React, TypeScript, Node.js, and FastAPI. I have built multiple real-world projects including an e-commerce platform, a retail billing system, and AI-based applications, focusing on performance and usability. </p>
            <p> My goal is to continuously grow as a developer, work on impactful projects, and build digital products that deliver real value to users and businesses. </p>
            </div>

            {/* Education */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-gold">Education</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">BSc Information Technology (3rd Year)</p>
                    <p className="text-sm text-muted-foreground">Anjuman-I-Islam Kalsekar Technical Campus Panvel (2023 - 2026)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">HSC (12th Grade)</p>
                    <p className="text-sm text-muted-foreground">Swami Ramkrishna Paramhans Junior College (2022 - 2023)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">SSC (10th Grade)</p>
                    <p className="text-sm text-muted-foreground">Daffodils English High School (2020 - 2021)</p>
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
