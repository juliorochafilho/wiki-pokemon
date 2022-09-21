import { createStitches } from "@stitches/react";
import { gray, blue, cyan, teal } from "@radix-ui/colors";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: "white",
      secondary: "black",

      ...gray,
      ...blue,
      ...cyan,
      ...teal,
    },
  },
  media: {
    bp1: "(min-width: 480px)",
  },
  utils: {
    marginX: (value: Number) => ({ marginLeft: value, marginRight: value }),
  },
});

export const darkTheme = createTheme({
  colors: {
    primary: gray.gray12,
    secondary: "white",

    ...gray,
    ...blue,
    ...cyan,
    ...teal,
  },
});


// const GlobalStyles = globalCss({
//   body: {
//     //we can call the color token values with the
//     //$ prefix in a string
//     background: "$primary",
//     color: "$secondary"
//   }
// })

// GlobalStyles();
