/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        plaster: {
          DEFAULT: '#EFEAE1', // base background
          dim: '#E4DDCF',      // alternate section background
        },
        ink: {
          DEFAULT: '#201D19', // primary text / near-black warm
          soft: '#59534A',     // secondary text
        },
        line: '#D2C7B4',       // hairline borders / rules
        taupe: {
          DEFAULT: '#8A7A62',  // quiet primary accent
          dark: '#6B5D48',
        },
        rust: '#9C4A31',        // signature accent — used sparingly, once per section max
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      transitionTimingFunction: {
        studio: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
