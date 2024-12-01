import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  // preview: {
  //   port: 8080,
  //   open: true
  // },

  plugins: [react(), tsconfigPaths()],
});
