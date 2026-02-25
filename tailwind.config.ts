/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#00D4FF',
          dark: '#0099BB',
          light: '#7EEDFF',
        },
        surface: {
          0: '#060810',
          1: '#0D1117',
          2: '#161B22',
          3: '#1E2530',
          4: '#252D3A',
        },
        text: {
          primary: '#F0F6FF',
          secondary: '#8B949E',
          muted: '#484F58',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-gradient': `
          radial-gradient(at 40% 20%, hsla(195, 100%, 50%, 0.15) 0px, transparent 50%),
          radial-gradient(at 80% 0%, hsla(210, 100%, 56%, 0.1) 0px, transparent 50%),
          radial-gradient(at 0% 50%, hsla(195, 100%, 50%, 0.08) 0px, transparent 50%),
          radial-gradient(at 80% 50%, hsla(240, 100%, 70%, 0.05) 0px, transparent 50%),
          radial-gradient(at 0% 100%, hsla(195, 100%, 50%, 0.12) 0px, transparent 50%)
        `,
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      boxShadow: {
        'glow': '0 0 30px rgba(0, 212, 255, 0.15)',
        'glow-lg': '0 0 60px rgba(0, 212, 255, 0.2)',
        'card': '0 4px 32px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
