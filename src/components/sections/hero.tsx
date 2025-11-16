import { Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/shared/animated-text";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-24 md:pt-0 flex items-center relative overflow-hidden">
      <div className="container px-8 md:px-6 flex items-center justify-center md:justify-start z-10 text-center md:text-left">
        <div className="flex flex-col gap-4">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Hi, I&rsquo;m <span className="text-primary text-glow">Arya Vardhan Gelli</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
            Junior Design Engineer | Electronics & Communication | Cybersecurity & Embedded Systems
          </p>
          <div className="h-12 md:h-14 flex items-center justify-center md:justify-start">
            <AnimatedText />
          </div>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <Button asChild variant="outline" size="icon" className="rounded-full w-12 h-12 border-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110">
              <a href="https://github.com/Arya-vardhan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="rounded-full w-12 h-12 border-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110">
              <a href="https://www.linkedin.com/in/gelli-arya-vardhan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="rounded-full w-12 h-12 border-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110">
              <a href="https://www.instagram.com/arya_vardhan_gelli" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent -z-10" />
    </section>
  );
};

export default HeroSection;
