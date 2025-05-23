
'use server';
/**
 * @fileOverview An AI tool that generates Splunk SPL queries and explanations.
 *
 * - generateSplQuery - A function that handles SPL query generation.
 * - GenerateSplQueryInput - The input type for the generateSplQuery function.
 * - GenerateSplQueryOutput - The return type for the generateSplQuery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSplQueryInputSchema = z.object({
  userQuery: z
    .string()
    .min(10, { message: 'Query must be at least 10 characters.'})
    .describe("User's question about Splunk or a description of the desired search."),
});
export type GenerateSplQueryInput = z.infer<typeof GenerateSplQueryInputSchema>;

const GenerateSplQueryOutputSchema = z.object({
  splQuery: z.string().describe('The generated SPL query.'),
  explanation: z.string().describe('An explanation of the generated SPL query, including how it works and what it achieves.'),
});
export type GenerateSplQueryOutput = z.infer<typeof GenerateSplQueryOutputSchema>;

export async function generateSplQuery(input: GenerateSplQueryInput): Promise<GenerateSplQueryOutput> {
  return generateSplQueryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSplQueryPrompt',
  input: {schema: GenerateSplQueryInputSchema},
  output: {schema: GenerateSplQueryOutputSchema},
  prompt: `You are an expert Splunk Search Processing Language (SPL) assistant.
The user will provide a question about Splunk or a description of a search they want to perform.
Your task is to:
1. Generate an accurate and efficient SPL query based on the user's input. The query should be directly usable in Splunk.
2. Provide a clear, concise explanation of how the generated SPL query works and what it achieves. The explanation should be easy to understand for someone familiar with Splunk concepts.

User's input: {{{userQuery}}}

Return ONLY the JSON object containing the splQuery and explanation. Do not add any other text before or after the JSON object.
Example of expected output format:
{
  "splQuery": "index=_internal | stats count by sourcetype",
  "explanation": "This query searches the '_internal' index and counts the number of events for each sourcetype."
}
`,
});

const generateSplQueryFlow = ai.defineFlow(
  {
    name: 'generateSplQueryFlow',
    inputSchema: GenerateSplQueryInputSchema,
    outputSchema: GenerateSplQueryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to get a response from the AI model.');
    }
    return output;
  }
);
