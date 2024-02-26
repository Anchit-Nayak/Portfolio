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
  plugins: [require('tailwind-scrollbar-daisyui'),]
}
