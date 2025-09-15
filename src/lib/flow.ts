
import {adai, mcp} from 'genkitx-mcp';
import {defineFlow} from '@genkit-ai/flow';
import * as z from 'zod';

export const getComponentCode = defineFlow(
  {
    name: 'getComponentCode',
    inputSchema: z.object({ name: z.string(), variant: z.string() }),
    outputSchema: z.string(),
  },
  async (input: { name: string, variant: string }) => {
    const llmResponse = await mcp['Figma Dev Mode MCP'].get_code(
      {
        name: input.name,
        variant: input.variant,
      },
    );
    return llmResponse;
  }
);
