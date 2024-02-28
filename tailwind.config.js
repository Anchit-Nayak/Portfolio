import { BufferGeometryLoader } from 'three'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      extend: {
        display: ["group-hover"],
        animation: {
          shimmer: "shimmer 2s linear infinite",
        },
        keyframes: {
          shimmer: {
            from: {
              backgroundPosition: "0 0",
            },
            to: {
              backgroundPosition: "-200% 0",
            },
          },
        },
        fontFamily: {
          sans: ['Roboto', 'sans-serif'],
          inter: ['__Inter_a64ecd', 'sans-serif'],
        },
        fontSize: {
          big: "clamp(40px, 8vw, 80px)"
        }
      },
  },
  plugins: [
    function({ addUtilities }){
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(55, 65, 81) black"
        },
        ".scrollbar-webkit":{
          "&::-webkit-scrollbar": {
            width: "8px",
            height: "5px"
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "rgb(0, 0, 0)"
          }, 
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(55, 65, 81)",
            borderRadius: "20px",
            border: `3px solid rgb(55, 65, 81)`
          }
        } 
      }

      addUtilities(newUtilities, ["responsive", "hover"]);
    }
  ]
}
