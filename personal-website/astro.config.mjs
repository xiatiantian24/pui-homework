import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://xiatiantian24.github.io/pui-homework/personal-website',
  integrations: [tailwind()]
});