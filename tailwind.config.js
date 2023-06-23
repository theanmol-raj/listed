/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    'bg-[#EFDADA]',
    'bg-[#DEE0EF]',
  ] ,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily : {
        monty : ['var(--font-monty)'] ,
        lato : ['var(--font-lato)']
      } ,
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
