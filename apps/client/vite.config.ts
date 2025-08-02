import { defineConfig, loadEnv } from 'vite';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

import path from 'node:path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const port: number = parseInt(env.VITE_PORT as string) || 3001;

  return {
    plugins: [react(), tailwindcss(), tsconfigPaths()],
    server: { port },
    resolve: {
      alias: {
        '@root': path.resolve(__dirname, '.'),
        '@app': path.resolve(__dirname, 'src'),
      },
    },
  };
});
