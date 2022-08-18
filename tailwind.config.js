module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        heroD: "url('/public/assets/images/bg-hero-d.png')",
        hero2: "url('/public/assets/images/bg-hero-2.png')",
        hero2M: "url('/public/assets/images/bg-hero-2-sm.png')",
        layerOne: "url('/public/assets/images/bg-layer-1.png')",
        layerTwo: "url('/public/assets/images/bg-layer-2.png')",
        layerThree: "url('/public/assets/images/bg-layer-3.png')",
        title: "url('/public/assets/images/bg-title.svg')",
      },
      colors: {
        primary: {
          DEFAULT: '#1A83AD',
          50: '#90D3EE',
          100: '#7FCCEC',
          200: '#5BBFE6',
          300: '#38B1E1',
          400: '#1F9ED0',
          500: '#1A83AD',
          600: '#135E7C',
          700: '#0B394B',
          800: '#04141B',
          900: '#000000',
        },
        secondary: {
          DEFAULT: '#ABD202',
          50: '#E9FE8E',
          100: '#E5FE79',
          200: '#DDFD51',
          300: '#D5FD29',
          400: '#CCFA02',
          500: '#ABD202',
          600: '#7E9A01',
          700: '#506301',
          800: '#232B00',
          900: '#000000',
        },
        gray: {
          DEFAULT: '#868686',
          50: '#E2E2E2',
          100: '#D8D8D8',
          200: '#C3C3C3',
          300: '#AFAFAF',
          400: '#9A9A9A',
          500: '#868686',
          600: '#6A6A6A',
          700: '#4E4E4E',
          800: '#323232',
          900: '#161616',
        },
        prizeBoxTop: '#E8FAED',
        prizeBoxBlue: '#E4E9F9',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')],
};
