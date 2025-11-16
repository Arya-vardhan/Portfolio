import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ScrollAnimationWrapper } from "@/components/shared/scroll-animation-wrapper";
import { BookOpen, Podcast } from "lucide-react";

const hobbies = [
  {
    name: "Reading Fiction",
    icon: <BookOpen className="w-12 h-12 text-primary" />,
  },
  {
    name: "Listening to Podcasts",
    icon: <Podcast className="w-12 h-12 text-primary" />,
  },
];

const HobbiesSection = () => {
  return (
    <SectionWrapper id="hobbies" className="bg-background">
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <ScrollAnimationWrapper>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold">Hobbies</h2>
          <p className="max-w-2xl text-muted-foreground md:text-xl">What I do in my free time.</p>
        </ScrollAnimationWrapper>
      </div>
      <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
        {hobbies.map((hobby, index) => (
          <ScrollAnimationWrapper key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex flex-col items-center text-center gap-4 p-6 rounded-lg glassmorphism transition-transform duration-300 hover:-translate-y-2">
              {hobby.icon}
              <h3 className="font-headline font-semibold text-lg">{hobby.name}</h3>
            </div>
          </ScrollAnimationWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default HobbiesSection;
