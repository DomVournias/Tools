import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0 ;
    font-family: 'Lato', Arial, sans-serif; 
    width: 100%;
    list-style: none;
    background-color: #EEEEEE;
    color: #000;
    

}
::-webkit-scrollbar {
  width: 10px;
}
/* Track */
::-webkit-scrollbar-track {
  background: rgb(255,255,255, 0);
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}


input:focus::placeholder {
  transition-duration: 200ms;
  color: transparent;
}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active {
-webkit-box-shadow: 0 0 0 30px white inset !important;
}
`;

// /* Switching Themes */
// // Color Modes variables

// export const lightTheme = {
//   body: "#f7f6f3",
//   text: "#000",
//   colsCard: "#fff",
// };

// export const darkTheme = {
//   body: "#252421",
//   text: "#fff",
//   colsCard: "#1d1d1d",
// };

export const specs = {
  colors: {
    white: "#FFFFFF",
    black: "#14121F",
    level1: "#e5e5f1",
    level2: "#ececf6",
    level3: "#f5f5fd",
    level2Hover: "#f0f0f8",
    red: "#ef476f",
    green: "#06d6a0",
    yellow: "#ffd166",
    blue: "#118ab2",
  },
  size: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktopS: "1600px",
    desktop: "1920px",
    desktopL: "2560px",
  },

  rarity: {
    common: "#5a585d",
    uncommon: "#2ec4b6",
    rare: "#008dd5",
    epic: "#9792e3",
    legendary: "#ff9f1c",
    mythic: "#5a585d",
    special: "#514f54",
  },
};

export const device = {
  mobileS: `(min-width: ${specs.size.mobileS})`,
  mobileM: `(min-width: ${specs.size.mobileM})`,
  mobileL: `(min-width: ${specs.size.mobileL})`,
  tablet: `(min-width: ${specs.size.tablet})`,
  laptop: `(min-width: ${specs.size.laptop})`,
  laptopL: `(min-width: ${specs.size.laptopL})`,
  desktopS: `(min-width: ${specs.size.desktopS})`,
  desktop: `(min-width: ${specs.size.desktop})`,
  desktopL: `(min-width: ${specs.size.desktopL})`,
};

export default GlobalStyles;
