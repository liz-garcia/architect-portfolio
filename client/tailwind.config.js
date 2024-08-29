/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  // * Set up to work with Vite
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // ! Extend Tailwind CSS default theme configuration
      fontFamily: {
        // --> Extend/change the default fonts for our project
        // --> Extending the `sans` font family: by default Tailwind CSS sets the font family on the html element to match your configured sans font. So customizing `sans` will change the default font for your project.
        sans: ["Jura", "sans-serif", ...defaultTheme.fontFamily.sans],
        serif: ["Judson", "serif", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   theme: {
//     fontFamily: {
//       'sans': ['ui-sans-serif', 'system-ui', ...],
//       'serif': ['ui-serif', 'Georgia', ...],
//       'mono': ['ui-monospace', 'SFMono-Regular', ...],
//       'display': ['Oswald', ...],
//       'body': ['"Open Sans"', ...],
//     }
//   }
// }
