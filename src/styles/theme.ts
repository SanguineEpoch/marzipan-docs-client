// src/styles/theme.ts
import type { ThemeDefinition } from "vuetify";

// Common
const marzipanYellow = "#FFDF86";

export const marzipanLight: ThemeDefinition = {
  dark: false,
  colors: {
    // Base
    background: "#F3F4F6",
    surface: "#E9EBF0",
    "surface-variant": "#D5DAE4",
    "surface-inverse": "#B9BFCB",
    "input-bg": "#F9FAFB",
    "code-bg": "#F9FAFB",

    // Text
    primary: "#1E2025",
    "primary-variant": "#151619",
    secondary: "#5F6B7A",
    muted: "#A0A9B7",

    // Accent
    accent: marzipanYellow,
    marzipan: marzipanYellow,
    "accent-underlay": "#F0E4D1", // Light version of #3C302B (very subtle beige-brown)

    // Borders
    border: "#D5DAE4",
    divider: "#D5DAE4",
    warning: "#f77f00",
    info: "#457b9d",
    default: "#5F6B7A",
  },
};

export const marzipanDark: ThemeDefinition = {
  dark: true,
  colors: {
    // Base
    background: "#252931",
    surface: "#2A2F37",
    "surface-variant": "#313640",
    "surface-inverse": "#1E1F25",
    "input-bg": "#3B414E",
    "code-bg": "#1C1F26",

    // Text
    primary: "#ECEEF1",
    "primary-variant": "#F0F1F3",
    secondary: "#AEB3BB",
    muted: "#6E7480",

    // Accent
    accent: marzipanYellow,
    marzipan: marzipanYellow,

    // Borders
    border: "#3A404C",
    divider: "#3A404C",
    warning: "#f77f00",
    info: "#60A4D8",
    default: "#5F6B7A",
  },
};
