import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // South African inspired color palette
        'sa-gold': '#FFD700',
        'sa-green': '#007749',
        'sa-blue': '#002395',
        'sa-red': '#DE3831',
        'sa-orange': '#FF7518',
        'sa-earth': {
          50: '#FAF7F0',
          100: '#F4EDE0',
          200: '#E8D8C0',
          300: '#DCC3A0',
          400: '#D0AE80',
          500: '#C49960',
          600: '#B8844D',
          700: '#8B6339',
          800: '#5E4226',
          900: '#312113',
        },
        'sa-clay': {
          50: '#FDF8F6',
          100: '#F9F0ED',
          200: '#F2E1DA',
          300: '#EBD2C7',
          400: '#E4C3B4',
          500: '#DDB4A1',
          600: '#D6A58E',
          700: '#C18C6A',
          800: '#A36D47',
          900: '#734B30',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

export default config;