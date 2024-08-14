import { createContext } from "react";

export const ThemeModeContext = createContext("light");

export const THEME = {
  light: {
    color: "#1E1F2C",
    backgroundColor: "white",
  },
  dark: {
    color: "white",
    backgroundColor: "#1E1F2C",
  },
};
