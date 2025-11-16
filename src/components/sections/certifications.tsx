import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ScrollAnimationWrapper } from "@/components/shared/scroll-animation-wrapper";
import { ShieldCheck } from "lucide-react";
import React from 'react';

const certifications = [
  { name: "Networking Basics", issuer: "Cisco NetAcad" },
  { name: "IT Essentials", issuer: "Cisco" },
  { name: "Junior Cybersecurity Analyst", issuer: "Cisco" },
  { name: "Ethical Hacking", issuer: "Udemy" },
];

const CertificationsSection = () => {
  return (
    <SectionWrapper id="certifications" className="bg-background">
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <ScrollAnimationWrapper>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold">Certifications</h2>
          <p className="max-w-2xl text-muted-foreground md:text-xl">Recognitions of my skills and knowledge.</p>
        </ScrollAnimationWrapper>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {certifications.map((cert, index) => (
          <ScrollAnimationWrapper key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex flex-col items-center text-center p-6 rounded-lg glassmorphism transition-transform duration-300 hover:-translate-y-2 hover:shadow-primary/20 hover:shadow-lg h-full">
              <div className="p-4 bg-primary/20 rounded-full mb-4">
                <ShieldCheck className="w-8 h-8 text-accent"/>
              </div>
              <h3 className="font-headline font-semibold text-lg flex-grow">{cert.name}</h3>
              <p className="text-muted-foreground text-sm mt-2">{cert.issuer}</p>
            </div>
          </ScrollAnimationWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default CertificationsSection;
