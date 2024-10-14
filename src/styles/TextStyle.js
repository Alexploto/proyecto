

import Default from "./Default";
const TextStyles = {
  //COLORS
  textPrimary: {
    color: Default.primary,
  },
  textwhite: {
    color: Default.white,
  },
  textblack: {
    color: Default.black,
  },
  textDanger: {
    color: Default.danger,
  },
  textSucces: {
    color: Default.succes,
  },

  // FONTS-SIZE (LA IDEA DE USAR REM ES PARA NO CAMBIAR CUANDO USEMOS QUERY, SOLO PONEMOS EL FONT SIZE DE HTML PADRE, les dejo el calculo)
  h1: {
    fontSize: "2rem" /* 28px en mobiles, 32px en tablets, 36px en desktops */,
  },
  h2: {
    fontSize:
      "1.75rem" /* 24.5px en mobiles, 28px en tablets, 31.5px en desktops */,
  },
  h3: {
    fontSize: "1.5rem" /* 21px en mobiles, 24px en tablets, 27px en desktops */,
  },
  h4: {
    fontSize:
      "1.25rem" /* 17.5px en mobiles, 20px en tablets, 22.5px en desktops */,
  },
  h5: {
    fontSize:
      "1.125rem" /* 15.75px en mobiles, 18px en tablets, 20.25px en desktops */,
  },
  h6: {
    fontSize:
      "1rem" /* 14px en mobiles, 16px en tablets, 18px en desktops USAMOS ESTE EN HTML GLOBALSSTYLES.JSX*/,
  },

  // FONTS tipos
  title: {
    fontWeight: "bold",
    fontSize: Default.h2,
    color: Default.danger,
  },
  subtitle: {
    fontSize: Default.h3,
    lineHeight: "1.3",
    color: "#333",
  },
  paragraph: {
    fontSize: "14px",
    lineHeight: "1.6",
  },
};

export default TextStyles;
