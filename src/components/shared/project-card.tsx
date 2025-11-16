import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { PlaceholderImages } from "@/lib/placeholder-images";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  imageSeed: string;
}

const ProjectCard = ({ title, description, tags, link, imageSeed }: ProjectCardProps) => {
  const placeholder = PlaceholderImages.find(p => p.id === imageSeed);

  return (
    <Card className="glassmorphism group overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-2">
      <div className="overflow-hidden aspect-video">
        {placeholder ? (
            <Image
            src={placeholder.imageUrl}
            alt={title}
            width={600}
            height={400}
            data-ai-hint={placeholder.imageHint}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
        ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Image not found</p>
            </div>
        )}
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <CardDescription className="flex-grow">{description}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
        </div>
        {link && (
          <Link href={link} target="_blank" rel="noopener noreferrer" className="mt-4 text-primary inline-flex items-center gap-1 font-semibold group-hover:text-accent transition-colors">
            View Project <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
