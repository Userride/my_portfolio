import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowDown, Instagram } from "lucide-react";

import { Button } from "@/components/ui/button";
import profileImage from "@/assets/prince.png";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const texts = [
    "Hi, I'm a passionate Full Stack Web Developer with 2+ years of experience and backend expertise.",
  ];

  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  // Typing Effect
  useEffect(() => {
    const currentLine = texts[0];
    const timeout = setTimeout(() => {
      if (charIndex < currentLine.length) {
        setCurrentText((prev) => prev + currentLine[charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        // Looping typing effect
        setTimeout(() => {
          setCurrentText("");
          setCharIndex(0);
        }, 2000);
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [charIndex]);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
     style={{
 backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg})`
,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
}}

    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Profile Image */}
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500/70 shadow-xl animate-glowPulse float">
            <img
              src={profileImage}
              alt="Prince Kumar"
              className="absolute inset-0 w-full h-full object-contain rounded-full"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
          </div>

          {/* Right Section */}
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-2 font-mono">
              Prince Kumar
            </h1>

            <h2 className="text-xl md:text-2xl text-muted-foreground min-h-[3rem] font-mono mb-6 text-blue-400">
              {currentText}
              <span className="ml-1 animate-pulse">|</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              Computer Science undergraduate at{" "}
              <span className="text-blue-400">IIIT Kalyani</span>. Passionate
              about building full-stack products and AI-integrated web apps.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-10">
              <Button
                size="lg"
                className="glow-primary hover-scale animate-bounce-in"
                onClick={scrollToAbout}
              >
                Discover More
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover-glow animate-bounce-in"
                onClick={scrollToContact}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/Userride"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover-glow animate-smooth"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/prince-singh-891a1b279/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover-glow animate-smooth"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:singhprince131074@gmail.com"
                className="p-3 rounded-full border border-border hover:border-primary hover-glow animate-smooth"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/prince__singh__18__?igsh=MWo0bzdtdmFpbWF2bg=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover-glow animate-smooth"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
