import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ScrollAnimationWrapper } from "@/components/shared/scroll-animation-wrapper";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {certifications.map((cert, index) => (
          <ScrollAnimationWrapper key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            <Card className="glassmorphism h-full text-center group transition-all duration-300 hover:border-primary/60 hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full transition-colors duration-300 group-hover:bg-primary/20">
                  <ShieldCheck className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110"/>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-headline font-bold text-lg">{cert.name}</h3>
                <p className="text-muted-foreground mt-1">{cert.issuer}</p>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default CertificationsSection;
