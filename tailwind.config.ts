import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: '#2A2D35',
        background: {
          dark: '#0F1115',
          card: '#1A1D23',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A0A3A9',
        },
        primary: '#4CAF50',
        secondary: '#2196F3',
      },
    },
  },
  plugins: [],
}
export default config 