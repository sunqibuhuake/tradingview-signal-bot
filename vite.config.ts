import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    testTimeout: 10000,
    retry: 3,
    setupFiles: 'dotenv/config',
  },
});
