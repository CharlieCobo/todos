/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/todos',
  test: {
    environment: 'happy-dom',
    globals: true,
  },
});
