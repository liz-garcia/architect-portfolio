/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  // * Set up to work with Vite
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // ! defaultTheme sizes rewritten to work with max-width
      "3xl": "1537px", // Use min-width for bigger screen sizes
      // => @media (min-width: 1536px) { ... }

      "2xl": { max: "1536px" },
      // => @media (max-width: 1536px) { ... }

      xl: { max: "1280px" },
      // => @media (max-width: 1280px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 768px) { ... }

      sm: { max: "640px" },
      // => @media (max-width: 640px) { ... }

      xs: { max: "450px" },
      // => @media (max-width: 450px) { ... }

      "2xs": { max: "360px" },
      // => @media (max-width: 360px) { ... }
    },
    extend: {
      // ! Extend Tailwind CSS default theme configuration
      fontFamily: {
        // --> Extend/change the default fonts for our project
        // --> Extending the `sans` font family: by default Tailwind CSS sets the font family on the html element to match your configured sans font. So customizing `sans` will change the default font for your project.
        sans: ["Inter", "sans-serif", ...defaultTheme.fontFamily.sans],
        serif: ["Judson", "serif", ...defaultTheme.fontFamily.serif],
      },
      // ! Extend to add specific tag for specific screen size (max-values)
      screens: {
        "h-667-w-375": { raw: "(max-height: 667px) and (max-width: 375px)" },
        "h-667-w-375-landscape": { raw: "(max-height: 375px) and (max-width: 667px) and (orientation: landscape)" },
        "h-658-w-320": { raw: "(max-height: 658px) and (max-width: 320px)" },
        "h-658-w-320-landscape": { raw: "(max-height: 320px) and (max-width: 658px) and (orientation: landscape)" },
        "h-568-w-320": { raw: "(max-height: 568px) and (max-width: 320px)" },
        "h-568-w-320-landscape": { raw: "(max-height: 320px) and (max-width: 568px) and (orientation: landscape)" },
        // ! Specific for 'lg' to 'md' screens on portrait orientation
        "lg-md-portrait": {
          raw: "(max-width: 1025px) and (min-height: 1024px) and (max-height: 1368px) and (orientation: portrait)",
        },
        // ! Specific for heights between 1024 and 1480 pixels on large widths
        "h-1180-1550": {
          raw: "(min-width: 1024px) and (min-height: 1180px) and (max-height: 1480px)",
        },
        // ! Specific for 'xs' screens with portrait/landscape orientation
        "xs-portrait": {
          raw: "(max-width: 885px) and (orientation: portrait)",
        },
        "xs-landscape": {
          raw: "(max-height: 450px) and (orientation: landscape)",
        },
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
