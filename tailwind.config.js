/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-light": "#F67841",
        "brand-mid": "#F3541C",
        "brand-dark": "##E43A12",
        "surface-primary": "#FFFFFF",
        "surface-secondary": "#FEE7D6",
        "surface-disabled": "#E7E5E4",
        "semantic-error": "#DC2626",
        supporting: "#F9A474",
        yellow: "#FEDF6F",
        green: "#C7D78D",
        blue: "#B8CEDC",
        violet: "#C3B2E7",
        pink: "#F682A5",
      },
      textColor: {
        primary: "#292524",
        secondary: "#57534E",
        tertiary: "#8F8881",
        highlight: "#E43A12",
      },
      stroke: {
        default: "#D6D3D1",
        highlight: "#F3541C",
      },
    },
  },
  plugins: [],
};
