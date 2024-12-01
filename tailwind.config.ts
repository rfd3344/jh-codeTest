import type { Config } from 'tailwindcss';
import flowbite from 'flowbite-react/tailwind';

import { theme } from './src/core/tailwind/theme';

const config: any = {
  content: [
    flowbite.content(),
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [flowbite.plugin()],
  theme,
};
export default config;
