
import { configureGenkit } from '@genkit-ai/core';
import { mcp } from 'genkitx-mcp';

export default configureGenkit({
  plugins: [
    mcp({
      configFile: './mcp.json',
    }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});
