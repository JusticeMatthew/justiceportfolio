import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        robotoCondensed: ['Roboto Condensed', 'sans-serif'],
      },
      colors: {
        green: '#15db95',
      },
      backgroundImage: {
        papyrus: "url('/papyrus-dark.webp')",
        contact: "url('/ContactBG.png')",
        contactSmall: "url('/ContactBGsmall.png')",
      },
      width: {
        container: '62.5rem',
      },
      fontSize: {
        label: ['0.625rem', '1.25rem'],
        formError: ['0.45rem', '1.25rem'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
