/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gradient-start": "#FDC830", // Amarillo
        "gradient-end": "#F37335",   // Naranja
      },
      animation: {
        "text-gradient": "text-gradient 3s ease infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
      keyframes: {
        "text-gradient": {
          "0%": { color: "#FDC830" },
          "50%": { color: "#F37335" },
          "100%": { color: "#FDC830" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        display: ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
