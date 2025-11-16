import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimationWrapper } from "@/components/shared/scroll-animation-wrapper";
import SkillProgress from "@/components/shared/skill-progress";
import { Cpu, HardDrive, ShieldCheck } from "lucide-react";

const skills = {
  hardware: [
    { name: "Arduino", level: 90 },
    { name: "ESP32", level: 85 },
    { name: "Raspberry Pi", level: 80 },
  ],
  software: [
    { name: "Python", level: 85 },
    { name: "Kali Linux", level: 75 },
    { name: "Linux", level: 80 },
    { name: "Aramis-DT", level: 95 },
    { name: "Work Prints", level: 90 },
  ],
  cybersecurity: [
    { name: "Networking Fundamentals", level: 90 },
    { name: "Protocols", level: 80 },
    { name: "Troubleshooting", level: 85 },
    { name: "Vulnerability Analysis (Cisco)", level: 70 },
  ],
};

const SkillsSection = () => {
    return (
        <SectionWrapper id="skills">
            <div className="flex flex-col items-center text-center gap-4 mb-12">
                <ScrollAnimationWrapper>
                    <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold">Skills</h2>
                    <p className="max-w-2xl text-muted-foreground md:text-xl">A showcase of my technical abilities and tools I work with.</p>
                </ScrollAnimationWrapper>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ScrollAnimationWrapper>
                    <Card className="glassmorphism h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3">
                                <Cpu className="text-primary" /> Hardware & Embedded
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {skills.hardware.map((skill) => <SkillProgress key={skill.name} skill={skill.name} percentage={skill.level} />)}
                        </CardContent>
                    </Card>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper animationClassName="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    <Card className="glassmorphism h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3">
                                <HardDrive className="text-primary" /> Software & Tools
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {skills.software.map((skill) => <SkillProgress key={skill.name} skill={skill.name} percentage={skill.level} />)}
                        </CardContent>
                    </Card>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper animationClassName="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                     <Card className="glassmorphism h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3">
                                <ShieldCheck className="text-primary" /> Network & Cybersecurity
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {skills.cybersecurity.map((skill) => <SkillProgress key={skill.name} skill={skill.name} percentage={skill.level} />)}
                        </CardContent>
                    </Card>
                </ScrollAnimationWrapper>
            </div>
        </SectionWrapper>
    );
};

export default SkillsSection;
