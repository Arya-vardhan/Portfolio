"use client";

import { useEffect } from 'react';
import { enhanceSEO } from '@/ai/flows/enhance-seo-with-ai';

const SEOManager = () => {
  useEffect(() => {
    const updateMetadata = async () => {
      try {
        const initialKeywords = "Junior Design Engineer, Electronics and Communication, OSP Drafting, Cybersecurity, Embedded Systems, Arduino & Raspberry Pi Projects";
        const contentDescription = "Personal portfolio of Arya Vardhan Gelli, a Junior Design Engineer specializing in electronics, communication, cybersecurity, and embedded systems. Showcasing projects, skills, and experience.";

        const seoData = await enhanceSEO({
          keywords: initialKeywords,
          contentDescription: contentDescription,
        });

        if (seoData.enhancedDescription) {
          const descriptionMeta = document.querySelector('meta[name="description"]');
          if (descriptionMeta) {
            descriptionMeta.setAttribute('content', seoData.enhancedDescription);
          }
        }

        if (seoData.enhancedKeywords) {
          const keywordsMeta = document.querySelector('meta[name="keywords"]');
          if (keywordsMeta) {
            keywordsMeta.setAttribute('content', seoData.enhancedKeywords);
          }
        }
      } catch (error) {
        console.error("Failed to enhance SEO on client:", error);
      }
    };

    updateMetadata();
  }, []);

  return null; // This component does not render anything
};

export default SEOManager;
