import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import aboutBg from "@/assets/about.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="h-4 w-4" />,
      url: 'https://github.com/Userride'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-4 w-4" />,
      url: 'https://www.linkedin.com/in/prince-singh-891a1b279/'
    },
    {
      name: 'Email',
      icon: <Mail className="h-4 w-4" />,
      url: 'mailto:singhprince131074@gmail.com'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="border-t border-border bg-background/80 backdrop-blur-sm relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${aboutBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">Prince Kumar</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Computer Science student passionate about building scalable full-stack applications 
              and integrating AI solutions with modern web technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all hover-glow"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Samastipur, Bihar</p>
              <p>India</p>
              <a 
                href="mailto:singhprince131074@gmail.com"
                className="hover:text-primary transition-colors"
              >
                singhprince131074@gmail.com
              </a>
              <a 
                href="tel:+916206920880"
                className="hover:text-primary transition-colors block"
              >
                +91-6206920880
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
       {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm text-muted-foreground flex items-center">
            © 2025 Prince Kumar-portfolio. Made with using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
