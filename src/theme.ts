import { DefaultTheme } from "styled-components/dist/types";

export const lightTheme: DefaultTheme = {
    red: "#E51013",
    black: {
      veryDark: "#141414",
      darker: "#181818",
      lighter: "#2F2F2F",
    },
    white: {
      lighter: "#fff",
      darker: "#e5e5e5",
    },
    bgColor : "#f5f5f5",
    gradient: "linear-gradient(90deg, rgba(255,229,0,1) 0%, rgba(156,253,29,1) 48%, rgba(93,255,0,1) 100%)",
    shadow : "#b5b3b3",
    btnColor : "#070041"

};

export const darkTheme: DefaultTheme = {
    red: "#E51013",
    black: {
      veryDark: "#000",
      darker: "#494949",
      lighter: "#909090",
    },
    white: {
      lighter: "#f5f5f5",
      darker: "#494949",
    },
    bgColor : "#2f2e2e",
    gradient: "linear-gradient(90deg, rgba(121,149,80,1) 0%, rgba(42,107,13,1) 48%, rgba(13,46,1,1) 100%)",
    shadow : "#101010",
    btnColor : "#fff"
};