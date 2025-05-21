/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6ebf5',
          100: '#ccd7eb',
          200: '#99afdd',
          300: '#6688ce',
          400: '#3360c0',
          500: '#0A2463',
          600: '#091d4f',
          700: '#07163b',
          800: '#050e28',
          900: '#020714',
        },
        secondary: {
          50: '#f5f6f8',
          100: '#ebedf1',
          200: '#d7dbe3',
          300: '#c3c9d5',
          400: '#afb7c7',
          500: '#8D99AE',
          600: '#717a8c',
          700: '#555c69',
          800: '#393d46',
          900: '#1c1e23',
        },
        accent: {
          50: '#fff4e6',
          100: '#ffe9cc',
          200: '#ffd399',
          300: '#ffbe66',
          400: '#ffa833',
          500: '#FF9F1C',
          600: '#cc7f16',
          700: '#995f11',
          800: '#66400b',
          900: '#332006',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'service': '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};