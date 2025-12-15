import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aboutBg from "@/assets/about.jpg";

// Import your logos here
import iiitLogo from "@/assets/ll.png";
import holyMissionLogo from "@/assets/h.png";
import davLogo from "@/assets/d.png";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-muted/50 relative overflow-hidden"
     style={{
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${aboutBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
}}

    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I enjoy creating web apps and solving coding problems using modern
              tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div className="space-y-6 text-white">
              <h3 className="text-2xl font-semibold mb-4">
                Hello! I'm Prince Kumar
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a B.Tech CSE student at IIIT Kalyani. I love building
                full-stack web apps using the MERN stack and solving coding
                problems with C++ and data structures.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I’ve worked on many projects and joined hackathons. Some of my
                key projects are{" "}
                <span className="text-primary font-medium">PaediPrime</span> (an
                AI-based doctor booking app) and a real-time{" "}
                <span className="text-primary font-medium">ChatApp</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I like learning new tools and enjoy working with teams to turn
                ideas into real apps. I'm always excited to grow and improve.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">8.56</div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">700+</div>
                  <div className="text-sm text-muted-foreground">
                    DSA Problems
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">
                    Major Projects
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3rd</div>
                  <div className="text-sm text-muted-foreground">
                    Graph Theory Rank
                  </div>
                </div>
              </div>
            </div>

            {/* Education Cards */}
            <div className="space-y-6">
              {/* B.Tech Card */}
              <Card className="hover-glowPulse animate-smooth bg-gradient-to-br from-blue-200/50 via-teal-100/40 to-green-100/30 border-none shadow-lg text-black">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={iiitLogo}
                      alt="IIIT Kalyani"
                      className="w-12 h-12 rounded-full object-contain"
                    />
                    <div>
                      <h4 className="font-semibold mb-1 text-lg">
                        IIIT Kalyani
                      </h4>
                      <p className="text-sm font-medium text-black">
                        B.Tech in Computer Science & Engineering
                      </p>
                      <p className="text-sm text-black">
                        2022 – 2026 |{" "}
                        <span className="font-bold text-black">CGPA: 8.56</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Class 12 Card */}
              <Card className="hover-glowPulse animate-smooth bg-gradient-to-br from-blue-200/50 via-teal-100/40 to-green-100/30 border-none shadow-lg text-black">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={holyMissionLogo}
                      alt="Holy Mission High School"
                      className="w-12 h-12 rounded-full object-contain"
                    />
                    <div>
                      <h4 className="font-semibold mb-1 text-lg">
                        Holy Mission High School
                      </h4>
                      <p className="text-sm font-medium text-black">
                        CBSE Board - 12th
                      </p>
                      <p className="text-sm text-black">
                        2021 – 2022 |{" "}
                        <span className="font-bold text-black">Grade: 90%</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Class 10 Card */}
              <Card className="hover-glowPulse animate-smooth bg-gradient-to-br from-blue-200/50 via-teal-100/40 to-green-100/30 border-none shadow-lg text-black">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={davLogo}
                      alt="DAV Public School"
                      className="w-12 h-12 rounded-full object-contain"
                    />
                    <div>
                      <h4 className="font-semibold mb-1 text-lg">
                        DAV Public School, Samastipur
                      </h4>
                      <p className="text-sm font-medium text-black">
                        CBSE Board - 10th
                      </p>
                      <p className="text-sm text-black">
                        2019 – 2020 |{" "}
                        <span className="font-bold text-black">
                          Grade: 93.6%
                        </span>
                      </p>
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

export default AboutSection;
