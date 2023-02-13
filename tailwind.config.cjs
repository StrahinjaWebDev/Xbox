/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#2f2f2f;',
          800: '#505050;',
        }
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'ml': '860px',

      'devi': '908px',

      'play':'950px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { .. }
      'comm':'1110px',

      'supp':'1210px',

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'csin':'1400px',

      'myxb':'1430px',

      'dev': '1455px',

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
