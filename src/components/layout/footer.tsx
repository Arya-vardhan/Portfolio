import { Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t border-border/50">
            <div className="container mx-auto py-8 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Arya Vardhan Gelli. All Rights Reserved.</p>
                <div className="flex gap-4">
                    <Link href="https://github.com/Arya-vardhan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github />
                    </Link>
                    <Link href="https://www.linkedin.com/in/gelli-arya-vardhan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin />
                    </Link>
                    <Link href="https://www.instagram.com/arya_vardhan_gelli" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                        <Instagram />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
