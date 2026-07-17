/** @type {import('tailwindcss').Config} */

export default {

  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {

    extend: {

      colors: {

        background: "#F8F5E8",

        surface: "#FFFDF6",

        primary: "#9A6A43",

        primaryDark: "#6D4C2F",

        accent: "#C8A26A",

        border: "#E9DFC9",

        text: "#6F6258",

        success: "#7E9C59",

      },

      boxShadow: {

        navbar: "0 8px 30px rgba(0,0,0,0.08)",

        dropdown: "0 15px 35px rgba(0,0,0,0.12)",

        button: "0 8px 20px rgba(154,106,67,0.25)",

      },

      borderRadius: {

        navbar: "18px",

        button: "999px",

      },

    },

  },

  plugins: [],

};