import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      main: ['var(--font-space-grotesk)'],
      sans: ['var(--font-inter)'],
      mono: ['var(--font-space-mono)'],
      serif: ['var(--font-ibm-plex-serif)'],
      pixel: ['var(--font-press-start)'],
      alegre: ['var(--font-alegreya)']
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'main-yellow': '#fbbf24',
        'light-purple': 'var(--light-purple)',
        purple: 'var(--purple)',
        'dark-purple': 'var(--dark-purple)',
        wisteria: 'var(--wisteria)',
        sunbeam: 'var(--sunbeam)',
        amber: {
          main: 'var(--amber)',
          450: 'var(--amber-450)',
          550: 'var(--amber-550)'
        },
        gray: {
          darker: '#0d0d0d',
          dark: '#1c1c1c',
        },
        dark: '#0a0a0a',
      },
      boxShadow: {
        blocks: '8px 8px',
        'blocks-sm': '4px 4px',
        'blocks-md': '6px 6px',
        'footer-btn': '0px 6px',
        'email-btn': '2px 3px'
      },
      screens: {
        xs: '375px'
      },
      fontSize: {
        mxs: '.9rem',
        '15xl': '15rem'
      },
      top: {
        '100vw': '100vw'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '30%' },
          '100%': { opacity: '100%' }
        },
        'fade-out': {
          '0%': { opacity: '100%' },
          '100%': { opacity: '0%' }
        },
        'zoom-in': {
          '0%': { transform: 'scale(.3)' },
          '100%': { transform: 'scale(1)' }
        },
        'zoom-out': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' }
        },
        'bg-flash': {
          '0%': { backgroundColor: '59, 235, 135' },
          '100%': { backgroundColor: 'rgb(3, 111, 252)' }
        },
        'horizontal-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(0px - 50%))' }
        },
        'vertical-scroll': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(calc(0px + 100%))' }
        },
      },
      animation: {
        'fade-in': 'fade-in .5s ease-in-out forwards',
        'fade-out': 'fade-out .5s ease-in-out forwards',
        'zoom-in': 'zoom-in .5s ease-in-out forwards',
        'zoom-out': 'zoom-out .5s ease-in-out forwards',
        'bg-flash': 'bg-flash 1s linear 0s infinite alternate',
        'horizontal-scroll': 'horizontal-scroll 14s linear 0s infinite',
        'horizontal-scroll-reverse': 'horizontal-scroll 14s linear 0s infinite reverse',
        'vertical-scroll': 'vertical-scroll 20s linear 0s infinite',
      },
      textShadow: {
        '2': '-2px 2px 0 var(--tw-shadow-color)',
        DEFAULT: '-4px 4px 0 var(--tw-shadow-color)',
        '6': '-6px 6px 0 var(--tw-shadow-color)',
        '8': '-8px 8px 0 var(--tw-shadow-color)',
      },
      textStroke: {
        sm: '2px black',
        DEFAULT: '4px black',
        lg: '8px black',
      },
    },
    paintOrder: {
      'fsm': { paintOrder: 'fill stroke markers' },
      'fms': { paintOrder: 'fill markers stroke' },
      'sfm': { paintOrder: 'stroke fill markers' },
      'smf': { paintOrder: 'stroke markers fill' },
      'mfs': { paintOrder: 'markers fill stroke' },
      'msf': { paintOrder: 'markers stroke fill' },
    },
  },
  plugins: [],
} satisfies Config;
