/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
          prompt: ['prompt', 'sans-serif'],
      },
      colors: {
        "black": "rgb(0 0 0)",
        "white": "rgb(255 255 255)",
        "red": "rgba(200, 36, 56, 1)",
        "base": "rgba(243, 244, 246, 1)",
        "blue-100": "rgb(219 234 254)",
        "blue-200": "rgb(210, 223, 252)",
        "blue-300": "rgb(166, 191, 250)",
        "blue-400": "rgb(121, 159, 247)",
        "blue-500": "rgb(59 130 246)",
        "blue-600": "rgb(37 99 235)",
        "blue-700": "rgb(29 78 216)",
        "blue-800": "rgb(30 64 175)",
        "blue-900": "rgb(2, 43, 135)",
        "blue-950": "rgb(0, 28, 89)",
        "gray-100": "rgb(239, 239, 242)",
        "gray-200": "rgb(230, 231, 235)",
        "gray-300": "rgb(204, 208, 215)",
        "gray-400": "rgb(179, 184, 196)",
        "gray-500": "rgb(154, 161, 176)",
        "gray-600": "rgb(128, 137, 156)",
        "gray-700": "rgb(100, 108, 128)",
        "gray-800": "rgb(75, 81, 96)",
        "gray-900": "rgb(50, 54, 64)",
        "gray-950": "rgb(35, 38, 48)",
        "purple-100": "rgb(236, 230, 255)",
        "purple-900": "rgb(69, 18, 180)",
        "yellow-100": "rgb(255, 243, 212)",
        "yellow-900": "rgb(110, 80, 0)",
        "green-100": "rgb(223, 249, 246)",
        "green-900": "rgb(0, 89, 108)",
      },
      screens: {
        "width": "1440px"
      }
    },
  },
  plugins: [],
};
