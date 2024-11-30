/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
<<<<<<< HEAD
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
=======
    extend: {
      colors: {
        background: "#1B1B1D",
        foreground: "var(--foreground)",
        text_color: '#a0a0a0',
>>>>>>> 06f1533463c125a488ad24c5dcd0930b3243167f
      },
      scaleUp: {
        '0%': { transform: 'scale(0.8)', opacity: '0' },
        '100%': { transform: 'scale(1)', opacity: '1' },
      },
    },
    animation: {
      fadeIn: 'fadeIn 0.3s ease-in-out',
      scaleUp: 'scaleUp 0.3s ease-in-out',
    },
    fontFamily: {
      'Inter' : ["Inter", 'san-serif'],
      'Poppins' : ["Poppins", 'san-serif'],
      'sans': ['ui-sans-serif', 'system-ui', ],
      'serif': ['ui-serif', 'Georgia', ],
      'mono': ['ui-monospace', 'SFMono-Regular', ],
      
    },
    keyframes : {
      'open-menu' : {
        '0%' : { transform: 'scaleY(0)'},
        '100%' : { transform: 'scaleY(1)'},
      },
    },
    animation: {
      'open-menu': 'open-menu 0.4s ease-in-out forwards',
    },
  },
  plugins: [],
};
