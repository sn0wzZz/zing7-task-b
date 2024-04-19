import { Montserrat } from 'next/font/google';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      transitionProperty: {
        height: 'max-height',
      },
      backgroundImage: {
        heroPattern: "url('/public/hero.png')",
      },
      colors: {
        primary: { 100: '#dd363d', 200: '#aa292e' },
        bgSecondary: '#fafafa',
        tableHead: '#f5f5f5',
        heading: '#323232',
        textPrimary: '#4e4e4e',
        textSecondary: '#b4b4b4',
      },
    },
  },
  plugins: [],
}
export default config;
