/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    fontFamily: {
      spartan: ["League Spartan", "sans-serif"],
    },
    extend: {
      boxShadow: {
        mdd: "0 4px",
      },
      colors: {
        // ==============================Theme1
        // ============backgrounds
        // main background
        veryDarkDesaturatedBlue1: "hsl(222, 26%, 31%)",
        // toggle and keypad background
        veryDarkDesaturatedBlue2: "hsl(223, 31%, 20%)",
        // screen background
        veryDarkDesaturatedBlue3: "hsl(224, 36%, 15%)",

        // =================keys
        // key background blue
        desaturatedBlue1: "hsl(225, 21%, 49%)",
        // key shadow blue
        desaturatedBlue2: "hsl(224, 28%, 35%)",
        // key background red
        desaturatedRed1: "hsl(6, 63%, 50%)",
        // key shadow red
        desaturatedRed2: "hsl(6, 70%, 34%)",
        // key background orange
        desaturatedOrange1: "hsl(30, 25%, 89%)",
        // key shadow orange
        desaturatedOrange2: "hsl(28, 16%, 65%)",

        // ============text
        veryDarkGrayishBlue: "hsl(221, 14%, 31%)",
        White: "hsl(0, 0%, 100%)",

        // =============================================Theme 2
        // ============backgrounds
        // main background
        lightGray: "hsl(0, 0%, 90%)",
        // toggle and keypad background
        grayishRed: "hsl(0, 5%, 81%)",
        // screen background
        veryLightGray: "hsl(0, 0%, 94%)",

        // =================keys
        // key background cyan
        moderateCyan: "hsl(185, 42%, 37%)",
        // key shadow cyan
        veryDarkCyan: "hsl(185, 58%, 25%)",
        // key background orange
        orange: "hsl(25, 98%, 40%)",
        // key shadow orange
        darkOrange: "hsl(25, 99%, 27%)",
        // key background yellow
        lightGrayishYellow: "hsl(45, 7%, 89%)",
        // key shadow orange
        darkGrayishOrange: "hsl(35, 11%, 61%)",

        // ============text
        veryDarkGrayishYello: "hsl(60, 10%, 19%)",
      },
    },
  },
  plugins: [],
};
