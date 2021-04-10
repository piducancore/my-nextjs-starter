import { tosh as light, deep as dark } from "@theme-ui/presets";
import { merge } from "theme-ui";
import { lighten } from "@theme-ui/color";
import prismPreset from "@theme-ui/prism/presets/night-owl.json";

import "@fontsource/raleway/700.css";
import "@fontsource/bitter/700.css";

const theme = merge(light, {
  initialColorModeName: "light",
  useColorSchemeMediaQuery: true,
  useRootStyles: true,
  useBodyStyles: false,
  colors: {
    text: "#1E212B",
    primary: "#D90368",
    secondary: "#FFD400",
    background: "#FFFFFF",
    modes: {
      dark: {
        ...dark.colors,
      },
    },
  },
  sizes: {
    container: 768,
  },
  fonts: {
    body: "'Raleway', sans-serif",
    heading: "'Bitter', sans-serif",
  },
  fontSizes: [12, 14, 18, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 700,
    heading: 700,
    bold: 700,
  },
  buttons: {
    primary: {
      border: (theme) => `1px solid ${theme.colors.primary}`,
      borderRadius: 4,
      cursor: "pointer",
      bg: "primary",
      color: "background",
      "&:hover": {
        bg: "background",
        color: "primary",
      },
    },
  },
  cards: {
    primary: {
      padding: 3,
      borderRadius: 4,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
      mb: 3,
    },
  },
  forms: {
    input: {
      fontFamily: "monospace",
    },
  },
  styles: {
    root: {
      body: {
        margin: "0px",
      },
      scrollbarWidth: "thin" /* "auto" or "thin" */,
      scrollbarColor: (theme) => `${theme.colors.primary} #ffffff00` /* scroll thumb and track */,
      overflowY: "scroll",
      "*::-webkit-scrollbar": {
        width: "8px",
        height: "8px",
      },
      "*::-webkit-scrollbar-track": {
        bg: "#00000000",
      },
      "*::-webkit-scrollbar-thumb": {
        bg: "primary",
      },
      "*:focus": {
        outline: "none",
      },
      "*::selection": {
        backgroundColor: "secondary",
        color: "text",
      },
      "*": {
        scrollbarWidth: "thin" /* "auto" or "thin" */,
        scrollbarColor: (theme) => `${theme.colors.primary} #ffffff00` /* scroll thumb and track */,
      },
    },
    a: {
      color: "primary",
      textDecoration: "none",
      "&:hover": {
        color: "secondary",
      },
      cursor: "pointer",
    },
    code: {
      border: 0,
      ...prismPreset,
    },
    inlineCode: {
      bg: `secondary`,
      px: 1,
      borderRadius: 4,
      color: "text",
    },
    em: {
      color: lighten("text", 0.32),
      overflowWrap: "break-word",
    },
    img: {
      width: "100%",
    },
    input: {
      fontFamily: "body",
    },
  },
});

export default theme;
