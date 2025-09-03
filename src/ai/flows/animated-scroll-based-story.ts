'use server';
/**
 * @fileOverview An AI agent to determine how to gradually render images as the user scrolls, focusing on a fast and performant load.
 *
 * - animatedScrollBasedStory - A function that handles the image rendering process based on scroll position.
 * - AnimatedScrollBasedStoryInput - The input type for the animatedScrollBasedStory function.
 * - AnimatedScrollBasedStoryOutput - The return type for the animatedScrollBasedStory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const AnimatedScrollBasedStoryInputSchema = z.object({
  imageUrls: z.array(z.string()).describe('An array of image URLs to be displayed in the visual story.'),
  scrollPosition: z.number().describe('The current scroll position of the user on the page.'),
  viewportHeight: z.number().describe('The height of the user\'s viewport.'),
});
export type AnimatedScrollBasedStoryInput = z.infer<typeof AnimatedScrollBasedStoryInputSchema>;

const AnimatedScrollBasedStoryOutputSchema = z.array(
  z.object({
    imageUrl: z.string().describe('The URL of the image.'),
    opacity: z.number().min(0).max(1).describe('The opacity of the image, ranging from 0 to 1.'),
    isVisible: z.boolean().describe('Whether the image should be visible based on the scroll position.'),
  })
);
export type AnimatedScrollBasedStoryOutput = z.infer<typeof AnimatedScrollBasedStoryOutputSchema>;

export async function animatedScrollBasedStory(input: AnimatedScrollBasedStoryInput): Promise<AnimatedScrollBasedStoryOutput> {
  return animatedScrollBasedStoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'animatedScrollBasedStoryPrompt',
  input: {schema: AnimatedScrollBasedStoryInputSchema},
  output: {schema: AnimatedScrollBasedStoryOutputSchema},
  prompt: `You are an expert in web performance and user experience.
  Given a list of image URLs and the user's current scroll position, determine the optimal opacity for each image to ensure a smooth and engaging browsing experience.
  Prioritize loading and displaying images that are currently in or near the viewport.

  Input:
  Image URLs: {{{imageUrls}}}
  Scroll Position: {{{scrollPosition}}}
  Viewport Height: {{{viewportHeight}}}

  Output:
  An array of objects, where each object contains the image URL, its opacity (0 to 1), and a boolean indicating whether the image should be visible.
  The opacity should be based on the scroll position and the image's proximity to the viewport.
  Images closer to the viewport should have higher opacity, while those far away should have lower opacity or be hidden.
  Consider lazy loading principles to optimize performance.
  isVisible should be true if the image should be rendered at all, and false if it should be skipped entirely.
  `,
});

const animatedScrollBasedStoryFlow = ai.defineFlow(
  {
    name: 'animatedScrollBasedStoryFlow',
    inputSchema: AnimatedScrollBasedStoryInputSchema,
    outputSchema: AnimatedScrollBasedStoryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
