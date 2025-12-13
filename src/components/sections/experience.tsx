import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ScrollAnimationWrapper } from "@/components/shared/scroll-animation-wrapper";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Junior Design Engineer",
    company: "Cadsys (Apex Group)",
    period: "Apr 2025 – Nov 2025",
    tasks: [
      "OSP Design & Drafting",
      "Work Prints",
      "Terminal Address Verification",
      "Designing Fiber Routes using Aramis-DT",
    ],
  },
  {
    role: "Product Development Intern",
    company: "Vishnuspire",
    period: "Internship",
    tasks: [
      "Built a Reverse Vending Machine for paper cups",
      "Integrated reward system via coupons",
      "Managed full product workflow from hardware to software",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience">
      <div className="flex flex-col items-center text-center gap-4 mb-16">
        <ScrollAnimationWrapper>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold">Experience</h2>
          <p className="max-w-2xl text-muted-foreground md:text-xl">My professional journey and roles.</p>
        </ScrollAnimationWrapper>
      </div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2" aria-hidden="true" />
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12 md:pl-0">
              <div className="md:absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                <ScrollAnimationWrapper animationClassName={index % 2 === 0 ? 'md:animate-fade-in-right' : 'md:animate-fade-in-left'}>
                  <div className={`p-6 rounded-lg glassmorphism ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <p className="text-sm text-primary font-semibold">{exp.period}</p>
                    <h3 className="text-xl font-bold mt-1 font-headline">{exp.role}</h3>
                    <p className="text-md text-muted-foreground mb-3">{exp.company}</p>
                    <ul className={`text-sm list-disc list-inside text-left ${index % 2 === 0 ? 'md:text-right md:list-inside' : ''}`}>
                      {exp.tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimationWrapper>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
