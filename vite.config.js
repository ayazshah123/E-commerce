import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/E-commerce/', // यहां अपनी GitHub रिपॉजिटरी का नाम दें
  plugins: [react()],
  build: {
    outDir: 'build', // यह फोल्डर `npm run build` के बाद बनेगा
  },
});
