import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://kanbarudesu.github.io', 
  base: '/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon({
      include: {
        ph: ['*'],
        'simple-icons': ['itchdotio', 'artstation'],
      },
    }),
  ],
});