import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import projectsBg from '@/assets/projects-bg.jpg';
import eatfitPreview from '@/assets/eatfit.png';
import chatappPreview from '@/assets/chat.png';
import evdPreview from '@/assets/ml.png';
import libraryPreview from '@/assets/library.png';
import socialPreview from '@/assets/social.png'; // <-- add an image for Social Media Task
//
const ProjectsSection = () => {
  const projects = [
    {
      title: 'EatFit',
      description:
        'Food delivery app inspired by Zomato/Swiggy with cart system, real-time tracking, and payment integration',
      previewImage: eatfitPreview,
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
      liveUrl: 'https://eat-fit-flame.vercel.app/',
      githubUrl: 'https://github.com/Userride/Food_App',
    },
    {
      title: 'Library Management System',
      description:
        'Full-fledged MERN stack system with admin and student roles, book issue/return, late reminders via Twilio, and dashboards.',
      previewImage: libraryPreview,
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      liveUrl: 'https://lib-frontend-umber.vercel.app/',
      githubUrl: 'https://github.com/Userride/Library-Management',
    },
    {
      title: 'ChatApp',
      description:
        'Real-time messaging application with Socket.io supporting one-on-one and group chat functionality',
      previewImage: chatappPreview,
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
      liveUrl: 'https://chat-frontend-psi-nine.vercel.app/',
      githubUrl: 'https://github.com/Userride/ChatApp',
    },
    {
      title: 'Emergency Vehicle Detection',
      description:
        'Real-time detection system with 96% accuracy using YOLOv5, featuring event logs and SMS alerts',
      previewImage: evdPreview,
      technologies: ['Python', 'YOLOv5', 'OpenCV', 'Twilio', 'Flask'],
      liveUrl: 'https://majorprojectcse-3rdyear.streamlit.app/',
      githubUrl: 'https://github.com/Userride/Emergency-vehicle-detection',
    },
    {
      title: 'Social Media Task',
      description:
        'Social Media Task allows users to submit their name, social media handle, and upload multiple images. Admin dashboard displays all user submissions with names, handles, and uploaded images.',
      previewImage: socialPreview,
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB','Socket.io', 'Multer'],
      liveUrl: 'https://media-frontend-iota.vercel.app/',
      githubUrl: 'https://github.com/Userride/Social-Media-Task',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${projectsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical skills and innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden text-white bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#1e3c72] transform-gpu transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
              >
                <CardHeader className="pb-4">
                  {/* Project Image */}
                  <img
                    src={project.previewImage}
                    alt={`${project.title} Preview`}
                    className="rounded-md w-full h-40 object-cover mb-4"
                  />

                  {/* Project Title */}
                  <CardTitle className="text-xl mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text font-extrabold">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-white/80">{project.description}</p>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-medium mb-2 text-white">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs font-semibold bg-gradient-to-r from-blue-300 to-cyan-400 text-black shadow"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex space-x-2 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-white bg-gradient-to-br from-[#4e342e] to-[#283593] hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-white bg-gradient-to-br from-[#4e342e] to-[#283593] hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="hover-glow"
              asChild
            >
              <a
                href="https://github.com/Userride"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
