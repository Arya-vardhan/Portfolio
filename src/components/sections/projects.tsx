import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ScrollAnimationWrapper } from "@/components/shared/scroll-animation-wrapper";
import ProjectCard from "@/components/shared/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const softwareProjects = [
  { title: "Real-time Text-to-Speech", description: "Using Raspberry Pi for instant text to voice conversion.", tags: ["Raspberry Pi", "Python", "TTS"], imageSeed: "text-to-speech" },
  { title: "Google Bard Voice Assistant", description: "A voice-controlled assistant built with Python and Google Bard API.", tags: ["Python", "API", "Voice AI"], imageSeed: "voice-assistant" },
  { title: "Image Encryption System", description: "A system to securely encrypt and decrypt images.", tags: ["Python", "Cryptography"], imageSeed: "image-encryption" },
];

const hardwareProjects = [
  { title: "Health & Vitals Monitoring", description: "A system for real-time monitoring of health vitals.", tags: ["IoT", "Sensors"], imageSeed: "health-monitor" },
  { title: "IoT Weather Monitoring System", description: "An ESP32-based weather station that reports data online.", tags: ["ESP32", "IoT", "Sensors"], imageSeed: "weather-monitor" },
  { title: "Reverse Vending Machine", description: "A Raspberry Pi-powered machine for recycling paper cups with a reward system.", tags: ["Raspberry Pi", "Hardware", "Python"], imageSeed: "vending-machine" },
];

const websiteProjects = [
  { title: "Personal Portfolio", description: "My main portfolio website showcasing my work.", link: "https://arya-vardhan.github.io/Portfolio/", tags: ["HTML", "CSS", "JS"], imageSeed: "portfolio" },
  { title: "Mini-Games-Mania", description: "A collection of simple web-based mini-games.", link: "https://mini-game-mania-ten.vercel.app/", tags: ["React", "Vercel"], imageSeed: "mini-games" },
  { title: "Confession Website", description: "An anonymous confession platform.", link: "https://arya-vardhan.github.io/Confession/", tags: ["HTML", "JS", "Github Pages"], imageSeed: "confession-website" },
];

const ProjectsSection = () => {
    return (
        <SectionWrapper id="projects">
            <div className="flex flex-col items-center text-center gap-4 mb-12">
                <ScrollAnimationWrapper>
                    <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold">Projects</h2>
                    <p className="max-w-2xl text-muted-foreground md:text-xl">A collection of my software, hardware, and web projects.</p>
                </ScrollAnimationWrapper>
            </div>
            <Tabs defaultValue="software" className="w-full">
                <ScrollAnimationWrapper>
                    <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto glassmorphism">
                        <TabsTrigger value="software">Software</TabsTrigger>
                        <TabsTrigger value="hardware">Hardware</TabsTrigger>
                        <TabsTrigger value="websites">Websites</TabsTrigger>
                    </TabsList>
                </ScrollAnimationWrapper>
                <TabsContent value="software" className="mt-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {softwareProjects.map((p, i) => (
                           <ScrollAnimationWrapper key={p.title} style={{ animationDelay: `${i * 0.1}s` }}>
                            <ProjectCard {...p} />
                          </ScrollAnimationWrapper>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="hardware" className="mt-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {hardwareProjects.map((p, i) => (
                           <ScrollAnimationWrapper key={p.title} style={{ animationDelay: `${i * 0.1}s` }}>
                            <ProjectCard {...p} />
                          </ScrollAnimationWrapper>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="websites" className="mt-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {websiteProjects.map((p, i) => (
                           <ScrollAnimationWrapper key={p.title} style={{ animationDelay: `${i * 0.1}s` }}>
                            <ProjectCard {...p} />
                          </ScrollAnimationWrapper>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </SectionWrapper>
    );
};

export default ProjectsSection;
