/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient-shift': 'gradientShift 20s ease infinite',
        'gradient-pulse': 'gradientPulse 10s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'float-reverse': 'float 10s ease-in-out infinite reverse',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-20px) translateX(10px)' },
          '50%': { transform: 'translateY(0) translateX(20px)' },
          '75%': { transform: 'translateY(20px) translateX(10px)' },
        },
        gradientPulse: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'opacity': '0.9',
          },
          '50%': {
            'background-size': '300% 300%',
            'opacity': '1',
          },
        },
      },
      backgroundImage: {
        'gradient-shift': `linear-gradient(
          135deg, 
          #0a0f1e 0%, 
          #1a1e35 25%, 
          #1e293b 50%, 
          #1a1e35 75%, 
          #0a0f1e 100%
        )`,
      },
    },
  },
  plugins: [],
};
