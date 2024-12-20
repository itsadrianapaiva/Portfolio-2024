import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
      },
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
      colors: {
        'light-pink': '#FFEDED',
        'medium-pink': '#FFCCD2',
        'dark-pink': '#F78CA2',
        'intense-pink': '#CE5A67',
        'red-pink': '#D80032',
        'burned-orange': '#B3541E',
        'light-brown': '#705C53',
        'medium-brown': '#362222',
        'dark-brown': '#2A221E',
        'black-brown': '#1A120B'
      },
    },
  },
  plugins: [],
};
export default config;
