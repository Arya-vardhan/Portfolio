import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cognizant: resolve(__dirname, 'pages/cognizant.html'),
        cadsys: resolve(__dirname, 'pages/cadsys.html'),
        rvm: resolve(__dirname, 'pages/rvm.html'),
        cybersecurity: resolve(__dirname, 'pages/cybersecurity.html'),
        hardwareLab: resolve(__dirname, 'pages/hardware-lab.html'),
        mysteryGame: resolve(__dirname, 'pages/mystery-game.html'),
        academics: resolve(__dirname, 'pages/academics.html'),
        resume: resolve(__dirname, 'pages/resume.html'),
      },
    },
  },
});

