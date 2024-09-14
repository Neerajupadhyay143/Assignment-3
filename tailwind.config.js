/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        ring: {
          '0%': { transform: 'scale(1) rotate(0)' },
          '50%': { transform: 'scale(1.2) rotate(15deg)' },
          '100%': { transform: 'scale(1) rotate(0)' },
        },
      },
      animation: {
        ring: 'ring 0.5s ease-in-out',
      },
      boxShadow: {
        'custom': '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
 

  plugins: [],

};
