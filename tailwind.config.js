/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxl: ["3.75rem", "4.5rem"],
        md2: ["1.25rem", "1.875rem"],
        lg2: ["2.25rem", "2.75rem"],
      },
      colors: {
        primaryColor: "#53389E",
        accentColor: "#7F56D9",
        marbleBlue: "#667085",
        coolGray: "#98A2B3",
        lightPurple: "#E9D7FE",
      },
      boxShadow: {
        nomal: "0px 1px 2px 0px #1018280D",
      },
      container: {
        center: "auto",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
