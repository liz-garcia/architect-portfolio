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
        // ! Specific for 'Surface Duo' screens on landscape orientation
        "h-540-w-720-landscape": { raw: "(max-height: 540px) and (min-height: 538px) and (max-width: 720px) and (min-width: 718px)" },
        // ! Other screens for custom styles
        "h-430-w-932-landscape": { raw: "(max-height: 430px) and (min-height: 429px) and (max-width: 932px) and (min-width: 931px)" },
        "h-320-w-658-landscape": { raw: "(max-height: 320px) and (min-height: 319px) and (max-width: 658px) and (min-width: 657px)" },
        "h-667-w-375": { raw: "(max-height: 667px) and (max-width: 375px)" },
        "h-667-w-375-landscape": { raw: "(max-height: 375px) and (max-width: 667px) and (orientation: landscape)" },
        "h-658-w-320": { raw: "(max-height: 658px) and (max-width: 320px)" },
        "h-658-w-320-landscape": { raw: "(max-height: 320px) and (max-width: 658px) and (orientation: landscape)" },
        "h-568-w-320": { raw: "(max-height: 568px) and (max-width: 320px)" },
        "h-568-w-320-landscape": { raw: "(max-height: 320px) and (max-width: 568px) and (orientation: landscape)" },
        // ! Specific for 'iPhone 12 Pro' screens on portrait orientation
        "h-844-w-390": { raw: "(max-height: 844px) and (max-width: 390px) and (orientation: portrait)" },
        "h-844-w-390-landscape": { raw: "(max-height: 390px) and (max-width: 844px) and (min-width: 840px) and (orientation: landscape)" },
        // ! Specific for 'Galaxy Z Fold 5' screens on portrait/landscape orientation
        "h-882-w-344": { raw: "(max-height: 882px) and (max-width: 344px) and (orientation: portrait)" },
        "h-882-w-344-landscape": { raw: "(max-height: 344px) and (max-width: 882px) and (orientation: landscape)" },
        // ! Specific for 'iPad Pro' and 'iPad Air' screens on portrait orientation
        "h-1366-w-1024": {
          raw: "(max-width: 1024px) and (min-width: 820px) and (max-height: 1368px) and (orientation: portrait)",
        },
        // ! Specific for 'lg' to 'md' screens on portrait orientation
        "lg-md-portrait": {
          raw: "(max-width: 1025px) and (min-height: 1024px) and (max-height: 1368px) and (orientation: portrait)",
        },
        // ! Specific for heights between 1024 and 1480 pixels on large widths. This screen size affects also iMac Retina  4.5K 24"
        "h-1180-1550": {
          raw: "(min-width: 1024px) and (min-height: 1180px) and (max-height: 1480px)",
        },
        // ! Specific for 'lg' screens, excluding md and smaller
        "lg-portrait": {
          raw: "(max-width: 1024px) and (min-width: 769px) and (orientation: portrait)",
        },
        "lg-portrait-h-1138": {
          raw: "(max-width: 1024px) and (min-width: 712px) and (min-height: 1138px) and (max-height: 1139px) and (orientation: portrait)",
        },
        "lg-landscape": {
          raw: "(max-width: 1024px) and (min-width: 769px) and (max-height: 412px) and (orientation: landscape)",
        },
        "lg-landscape-932": {
          raw: "(max-width: 1024px) and (min-width: 932px) and (max-height: 430px) and (orientation: landscape)",
        },
        // ! Specific for 'md' screens with portrait/landscape orientation, excluding sm and smaller
        "md-portrait": {
          raw: "(max-width: 768px) and (min-width: 641px) and (orientation: portrait)",
        },
        "md-landscape": {
          raw: "(max-width: 768px) and (min-height: 451px) and (max-height: 535px) and (orientation: landscape)",
        },
        // ! Specific for 'xs' (really up until 'md') screens with portrait orientation
        "xs-portrait": {
          raw: "(max-width: 885px) and (orientation: portrait)",
        },
        // ! Specific for 'xs' (really up until 'md') screens with portrait orientation
        "xs-landscape": {
          raw: "(max-width: 932px) and (max-height: 450px) and (orientation: landscape)",
        },
        // ! Specific for 'iPhone XR' screen size
        "h-414-w-896-landscape": {
          raw: "(max-width: 896px) and (min-width: 890px) and (min-height: 412px) and (max-height: 414px) and (orientation: landscape)",
        },
        // ! Specific for 'Facebook on Android' screen size
        "h-412-w-892-landscape": {
          raw: "(max-width: 892px) and (min-width: 892px) and (min-height: 412px) and (max-height: 412px) and (orientation: landscape)",
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
