/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*.{html,js}",
    "./scripts/**/*.{html,js}"
  ],
  theme: {
    colors: {
      'yellow': '#FFD15B',
      'darkGrey': '#1B1B1B',
      'white': '#ffffff',
      'grey': '#7A7A7A',
      'lightGrey': '#C5C5C5',
      'black': '#000000'
    },
    fontFamily: {
      'anton': ['Anton', 'sans-serif'],
      'manrope': ['Manrope', 'sans-serif'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '44px',
    },
    extend: {
      boxShadow: {
        '3xl': '0px 4px 34px 30px #0000000A;',
      },
      spacing: {
        width: {
          '13': '13rem',
          '890': '890px'
        },
        height: {
          '667': '667px',
          '26': '26px'
        },
        top: {
          '51': '51px'
        },
        left: {
          '69': '69px'
        }
      }
    },
  },
  plugins: [],
}

