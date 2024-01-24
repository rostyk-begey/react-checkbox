import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-checkbox-hook/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['react-checkbox-hook'],
  },
});
