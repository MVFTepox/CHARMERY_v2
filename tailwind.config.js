/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    // "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {

      fontFamily: {
        'DMsans': ['DmSans', 'sans-serif'],
        'elmessiri': ['elMessiri', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui', '@tailwindcss/forms'),
  ],
  daisyui: {
    themes: ["light"],
    // Configura DaisyUI para usar el tema claro
  },
}
