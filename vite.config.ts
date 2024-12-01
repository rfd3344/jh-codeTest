import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  server: {
    // refer to https://vitejs.dev/config/server-options.html
    host: '0.0.0.0',
    port: 3000,
    open: true,
  },
  preview: {
    port: 3000,
  },

  plugins: [react(), tsconfigPaths()],
});
