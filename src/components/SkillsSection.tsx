import { Card, CardContent } from '@/components/ui/card';
import skillsBg from '@/assets/skills-bg.jpg';

// Logo imports
import jsLogo from '@/assets/x6.png';
import pythonLogo from '@/assets/x3.png';
import cppLogo from '@/assets/x4.jpeg';
import reactLogo from '@/assets/x2.jpg';
import htmlcssLogo from '@/assets/x5.png';
import tailwindLogo from '@/assets/x12.jpeg';
import nodeLogo from '@/assets/x7.jpeg';
import expressLogo from '@/assets/x8.png';
import mongoLogo from '@/assets/x9.jpeg';
import sqlLogo from '@/assets/x10.png';
import githubLogo from '@/assets/x11.png';

const SkillsSection = () => {
  const skills = [
    { name: 'JavaScript', logo: jsLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'C/C++', logo: cppLogo },
    { name: 'React', logo: reactLogo },
    { name: 'HTML/CSS', logo: htmlcssLogo },
    { name: 'Tailwind CSS', logo: tailwindLogo },
    { name: 'Node.js', logo: nodeLogo },
    { name: 'Express.js', logo: expressLogo },
    { name: 'MongoDB', logo: mongoLogo },
    { name: 'SQL', logo: sqlLogo },
    { name: 'Git/GitHub', logo: githubLogo },
  ];

  return (
    <section
      id="skills"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${skillsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          {/* Grid with Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center px-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white/5 p-4 rounded-lg shadow-md hover:scale-105 hover:shadow-blue-400/30 transition-all duration-300"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-16 h-16 object-contain mb-2"
                />
                <p className="text-white text-sm font-medium">{skill.name}</p>
              </div>
            ))}
          </div>

          {/* Primary Tech Stack Summary */}
        
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
