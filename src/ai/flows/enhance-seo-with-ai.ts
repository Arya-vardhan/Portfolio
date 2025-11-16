'use server';

/**
 * @fileOverview Enhances SEO metadata for the portfolio website using GenAI.
 *
 * - enhanceSEO - A function that takes a list of keywords and content description, and returns enhanced SEO metadata.
 * - EnhanceSEOInput - The input type for the enhanceSEO function.
 * - EnhanceSEOOutput - The return type for the enhanceSEO function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceSEOInputSchema = z.object({
  keywords: z.string().describe('A comma-separated list of existing keywords for the portfolio.'),
  contentDescription: z.string().describe('A description of the portfolio website content.'),
});
export type EnhanceSEOInput = z.infer<typeof EnhanceSEOInputSchema>;

const EnhanceSEOOutputSchema = z.object({
  enhancedKeywords: z.string().describe('An enhanced comma-separated list of keywords for SEO.'),
  enhancedDescription: z.string().describe('An enhanced description of the portfolio website content for SEO.'),
});
export type EnhanceSEOOutput = z.infer<typeof EnhanceSEOOutputSchema>;

export async function enhanceSEO(input: EnhanceSEOInput): Promise<EnhanceSEOOutput> {
  return enhanceSEOFlow(input);
}

const enhanceSEOPrompt = ai.definePrompt({
  name: 'enhanceSEOPrompt',
  input: {schema: EnhanceSEOInputSchema},
  output: {schema: EnhanceSEOOutputSchema},
  prompt: `You are an SEO expert tasked with enhancing the SEO metadata for a personal portfolio website.

  Given the existing keywords and a description of the website content, generate an enhanced list of keywords and a more compelling description to improve search engine ranking.

  Existing Keywords: {{{keywords}}}
  Content Description: {{{contentDescription}}}

  Instructions:
  1. Analyze the existing keywords and content description to identify areas for improvement.
  2. Generate additional relevant keywords that are not already included in the existing list.
  3. Refine the content description to be more engaging and SEO-friendly.
  4. Ensure that the enhanced keywords are comma-separated.
  5. Return the enhanced keywords and description in the specified JSON format.
`,
});

const enhanceSEOFlow = ai.defineFlow(
  {
    name: 'enhanceSEOFlow',
    inputSchema: EnhanceSEOInputSchema,
    outputSchema: EnhanceSEOOutputSchema,
  },
  async input => {
    const {output} = await enhanceSEOPrompt(input);
    return output!;
  }
);
