import { Calendar, MapPin, Users, Zap, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import experienceBg from '@/assets/projects-bg.jpg';
import experiencePreview from '@/assets/pae.png';

const ExperienceSection = () => {
  const experience = {
    company: 'PaediPrime',
    position: 'Backend Developer',
    duration: 'June 2024',
    location: 'Remote',
    type: 'Internship',
    description: 'Developed an AI-powered pediatric healthcare platform with a team of 7 developers',
    achievements: [
      'Integrated Cloudinary + Multer for secure media upload functionality',
      'Deployed full-stack solution with 99.9% uptime via Render & Vercel',
      'Implemented AI-powered features for pediatric healthcare diagnostics',
      'Collaborated with cross-functional team to deliver scalable solutions'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Cloudinary', 'Vercel', 'BotPress', 'Multer'],
    website: 'https://www.paediprime.tech/'
  };

  const achievements = [
    {
      title: 'Graph Theory Excellence',
      description: "3rd rank in AlgoUniversity's Graph Theory Camp",
      detail: 'Solved 17 advanced problems',
      icon: <Zap className="h-5 w-5" />
    },
    {
      title: 'HP LIFE Certified',
      description: 'Data Science & Analytics Certification',
      detail: 'Professional certification',
      icon: <Users className="h-5 w-5" />
    },
    {
      title: 'Athletics Achievement',
      description: 'Bronze medalist in 400m college athletics',
      detail: 'Sports excellence',
      icon: <MapPin className="h-5 w-5" />
    }
  ];

  const certificateLinks: Record<string, string> = {
    'Graph Theory Excellence': 'https://drive.google.com/file/d/1hZxX-eVEDZv3MVyOruCSBNRWfQU8F05Z/view',
    'HP LIFE Certified': 'https://drive.google.com/file/d/11a97cVjsUi-y8ptoFq6OsUnX_1gUBNJD/view'
  };

  return (
    <section
      id="experience"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${experienceBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Experience & Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional experience and notable accomplishments
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Experience */}
            <div className="lg:col-span-2">
              <Card className="glow-card hover-glow animate-smooth text-white bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#1e3c72] shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">{experience.position}</CardTitle>
                      <div className="flex items-center space-x-4 text-muted-foreground mb-2">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span className="text-sm">{experience.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{experience.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <a
                        href={experience.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-300 hover:text-blue-500 underline flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Website
                      </a>
                      <Badge variant="outline" className="text-primary border-primary">
                        {experience.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <img
                    src={experiencePreview}
                    alt="Experience Preview"
                    className="w-full h-48 object-cover bg-white rounded-md shadow"
                  />

                  <p className="text-white/90">{experience.description}</p>

                  <div>
                    <h4 className="font-medium mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-white/80">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs font-semibold bg-gradient-to-r from-blue-300 to-cyan-400 text-black shadow"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Notable Achievements</h3>
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="glow-card hover-glow animate-smooth bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 shadow-lg"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-blue-400 text-white flex-shrink-0">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm mb-1 text-black">{achievement.title}</h4>
                        <p className="text-xs text-gray-700 mb-1">{achievement.description}</p>
                        <p className="text-xs text-primary font-medium mb-2">{achievement.detail}</p>

                        {certificateLinks[achievement.title] && (
                          <a
                            href={certificateLinks[achievement.title]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 underline hover:text-blue-800"
                          >
                            View Certificate
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Other Highlights */}
              <Card className="glow-card bg-white/10 text-white">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-3">Other Highlights</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">LeetCode Rating</span>
                      <span className="text-primary font-medium">1740</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Problems Solved</span>
                      <span className="text-primary font-medium">700+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Hackathon Volunteer</span>
                      <span className="text-primary font-medium">Status Code 1</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
