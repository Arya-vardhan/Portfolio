import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimationWrapper } from "@/components/shared/scroll-animation-wrapper";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="bg-background">
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <ScrollAnimationWrapper>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold">About Me</h2>
          <p className="max-w-2xl text-muted-foreground md:text-xl">My journey in tech, education, and professional life.</p>
        </ScrollAnimationWrapper>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ScrollAnimationWrapper className="lg:col-span-2">
          <Card className="glassmorphism h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="text-primary" />
                My Bio
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                I am a Junior Design Engineer at Apex Group, where I am involved in OSP design, leveraging tools like Aramis-DT for terminal address verification and creating work prints. My professional journey began with a strong foundation in Electronics and Communication Engineering, holding both a Diploma and a B.Tech degree.
              </p>
              <p>
                My passion lies at the intersection of hardware and software. I am deeply interested in cybersecurity, embedded systems, robotics, and networking. I enjoy building innovative projects and developing animation-based web applications that are both functional and visually appealing.
              </p>
            </CardContent>
          </Card>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationClassName="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col gap-8 h-full">
            <Card className="glassmorphism">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Diploma + B.Tech in Electronics & Communication Engineering</p>
              </CardContent>
            </Card>
            <Card className="glassmorphism">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="text-primary" />
                  Interests
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-disc list-inside">
                  <li>Cybersecurity</li>
                  <li>Embedded Systems</li>
                  <li>Robotics & Networking</li>
                  <li>Animated Web Apps</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
