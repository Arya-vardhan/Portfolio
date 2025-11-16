import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ScrollAnimationWrapper } from "@/components/shared/scroll-animation-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users } from "lucide-react";

const achievements = [
  {
    title: "2nd Place in Robo Soccer",
    icon: <Trophy className="w-8 h-8 text-primary" />,
  },
  {
    title: "Co-organizer of Major College Project Expo",
    icon: <Users className="w-8 h-8 text-primary" />,
  },
];

const AchievementsSection = () => {
  return (
    <SectionWrapper id="achievements">
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <ScrollAnimationWrapper>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold">Achievements</h2>
          <p className="max-w-2xl text-muted-foreground md:text-xl">Moments of pride and accomplishment.</p>
        </ScrollAnimationWrapper>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {achievements.map((item, index) => (
          <ScrollAnimationWrapper key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex items-center gap-6 p-6 rounded-lg glassmorphism h-full">
                {item.icon}
                <h3 className="font-headline font-semibold text-lg text-left">{item.title}</h3>
            </div>
          </ScrollAnimationWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default AchievementsSection;
