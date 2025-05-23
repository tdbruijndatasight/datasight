// 'use server'
'use server';

/**
 * @fileOverview An AI tool that generates three potential project proposals based on a client's description of their data-related issues.
 *
 * - generateProjectProposals - A function that handles the project proposal generation process.
 * - GenerateProjectProposalsInput - The input type for the generateProjectProposals function.
 * - GenerateProjectProposalsOutput - The return type for the generateProjectProposals function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectProposalsInputSchema = z.object({
  clientDescription: z
    .string()
    .describe('A description of the client\u2019s data-related issues and pain points.'),
});

export type GenerateProjectProposalsInput = z.infer<
  typeof GenerateProjectProposalsInputSchema
>;

const GenerateProjectProposalsOutputSchema = z.object({
  projectProposals: z
    .array(z.string())
    .length(3)
    .describe('Three actionable project proposals to address the client\u2019s data issues.'),
});

export type GenerateProjectProposalsOutput = z.infer<
  typeof GenerateProjectProposalsOutputSchema
>;

export async function generateProjectProposals(
  input: GenerateProjectProposalsInput
): Promise<GenerateProjectProposalsOutput> {
  return generateProjectProposalsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectProposalsPrompt',
  input: {schema: GenerateProjectProposalsInputSchema},
  output: {schema: GenerateProjectProposalsOutputSchema},
  prompt: `You are an experienced IT consultant specializing in data-related solutions. A client has provided the following description of their data-related issues:

  {{clientDescription}}

  Based on this description, formulate three distinct and actionable project proposals that could help the client address these issues. Each proposal should be a concise and compelling description of a project that would deliver value to the client.

  Return the proposals in the following JSON format:
  {
    "projectProposals": [
      "Project Proposal 1",
      "Project Proposal 2",
      "Project Proposal 3"
    ]
  }`,
});

const generateProjectProposalsFlow = ai.defineFlow(
  {
    name: 'generateProjectProposalsFlow',
    inputSchema: GenerateProjectProposalsInputSchema,
    outputSchema: GenerateProjectProposalsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
