import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Preloader from '@/components/shared/preloader';
import CSS3DCube from '@/components/shared/css-3d-cube';
import SEOManager from '@/components/shared/seo-manager';

export const metadata: Metadata = {
  title: "Arya's Cyberfolio | Junior Design Engineer",
  description: "Personal portfolio of Arya Vardhan Gelli, a Junior Design Engineer specializing in electronics, communication, cybersecurity, and embedded systems. Showcasing projects, skills, and experience.",
  keywords: "Junior Design Engineer, Electronics and Communication, OSP Drafting, Cybersecurity, Embedded Systems, Arduino & Raspberry Pi Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background relative">
        <SEOManager />
        <div className="fixed inset-0 flex items-center justify-center -z-20 pointer-events-none opacity-20">
          <CSS3DCube />
        </div>
        <Preloader />
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
