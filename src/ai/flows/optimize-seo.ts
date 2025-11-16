'use server';

/**
 * @fileOverview Optimizes SEO metadata for the portfolio website using GenAI.
 *
 * - optimizeSEO - A function that takes a list of keywords and content description, and returns enhanced SEO metadata.
 * - OptimizeSEOInput - The input type for the optimizeSEO function.
 * - OptimizeSEOOutput - The return type for the optimizeSEO function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeSEOInputSchema = z.object({
  keywords: z.string().describe('A comma-separated list of existing keywords for the portfolio.'),
  contentDescription: z.string().describe('A description of the portfolio website content.'),
});
export type OptimizeSEOInput = z.infer<typeof OptimizeSEOInputSchema>;

const OptimizeSEOOutputSchema = z.object({
  enhancedKeywords: z.string().describe('An enhanced comma-separated list of keywords for SEO.'),
  enhancedDescription: z.string().describe('An enhanced description of the portfolio website content for SEO.'),
});
export type OptimizeSEOOutput = z.infer<typeof OptimizeSEOOutputSchema>;

export async function optimizeSEO(input: OptimizeSEOInput): Promise<OptimizeSEOOutput> {
  return optimizeSEOFlow(input);
}

const optimizeSEOPrompt = ai.definePrompt({
  name: 'optimizeSEOPrompt',
  input: {schema: OptimizeSEOInputSchema},
  output: {schema: OptimizeSEOOutputSchema},
  prompt: `You are an SEO expert tasked with optimizing the SEO metadata for a personal portfolio website.

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

const optimizeSEOFlow = ai.defineFlow(
  {
    name: 'optimizeSEOFlow',
    inputSchema: OptimizeSEOInputSchema,
    outputSchema: OptimizeSEOOutputSchema,
  },
  async input => {
    const {output} = await optimizeSEOPrompt(input);
    return output!;
  }
);
