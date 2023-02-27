/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    colors: {
      'primary-red': 'hsl(0, 100%, 67%)',
      'primary-yellow': 'hsl(39, 100%, 56%)',
      'primary-green': 'hsl(166, 100%, 37%)',
      'primary-blue': 'hsl(234, 85%, 45%)',
      'neutral-100': 'hsl(0, 0%, 100%)',
      'neutral-300': 'hsl(221, 100%, 96%)',
      'neutral-600': 'hsl(241, 100%, 89%)',
      'neutral-800': 'hsl(224, 30%, 27%)',
      'slate-blue': 'hsl(252, 100%, 67%)',
      'royal-blue': 'hsl(241, 81%, 54%)',
      'violet-blue': 'hsla(256, 72%, 46%, 1)',
      'persian-blue': 'hsla(241, 72%, 46%, 0)',
    },
    fontSize: {
      xs: ['.6875rem', '1.3'],
      sm: ['1rem', '1'],
      base: ['1.125rem', '1'],
      lg: ['1.5rem', '1'],
      xl: ['2rem', '1'],
      '2xl': ['3.5rem', '1'],
      '3xl': ['4.5rem', '1'],
    },
    extend: {
      letterSpacing: {
        wide: '0.01em',
      },
      lineHeight: {
        tight: '1.3',
      },
      fontFamily: {
        sans: ['Hanken Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
