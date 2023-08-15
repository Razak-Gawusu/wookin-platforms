import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "900px",
  slg: "980px",
  lg: "1200px",
  xl: "1441px",
};

const colors = {
  brand: {
    primary: {
      50: "#EFF8EC",
      200: "#C0E4B5",
      400: "#A1D690",
      500: "#81C96B",
      600: "#62BB46",
      700: "#3C7C28",
      100: "#E0F1DA",
    },
    blue: "#175cd3",
    black: "#1A1A1A",
    pending: "",
    error: "#D92D20",
    green: "#62BB46",
    bg: "#0C1C08",
    grey: {
      text: "",
      50: "#E5E6EB",
      100: "#D3D5DA",
      150: "#9EA3AE",
      500: "#6C727F",
      700: "#333333",
    },
  },
};

const styles = {
  global: {
    html: {
      fontSize: "62.5%",
      boxSizing: "border-box",
    },
    body: {
      fontSize: "1.5rem",
      backgroundColor: "#FCFCFC",
      fontFamily: "Plus Jakarta Sans, sans-serif",
      color: "#1A1A1A",
    },
    a: {
      color: "#1A1A1A",
    },
    input: {
      fontSize: "1.4rem",
    },
    "::placeholder": {
      color: "rgba(0, 0, 0, 0.54)",
    },
  },
};

const fonts = {
  heading: "Plus Jakarta Sans, sans-serif",
  body: "Plus Jakarta Sans, sans-serif",
};

const theme = extendTheme({
  breakpoints,
  colors,
  styles,
  fonts,
});

export { theme };
