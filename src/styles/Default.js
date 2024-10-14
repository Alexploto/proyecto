

const Default = {
    // COLORS
    primary: "#D98504",
    white: '#ffffff',
    black:'#000000',
    succes:'#57ACD0',
    danger: '#eb455f',

    // FONTS-SIZE (LA IDEA DE USAR REM ES PARA NO CAMBIAR CUANDO USEMOS QUERY, SOLO PONEMOS EL FONT SIZE DE HTML PADRE, les dejo el calculo)
    h1: {
        fontSize: "2rem", /* 28px en mobiles, 32px en tablets, 36px en desktops */
    },
    h2: {
        fontSize: "1.75rem", /* 24.5px en mobiles, 28px en tablets, 31.5px en desktops */
    },
    h3: {
        fontSize: "1.5rem", /* 21px en mobiles, 24px en tablets, 27px en desktops */
    },
    h4: {
        fontSize: "1.25rem", /* 17.5px en mobiles, 20px en tablets, 22.5px en desktops */
    },
    h5: {
        fontSize: "1.125rem", /* 15.75px en mobiles, 18px en tablets, 20.25px en desktops */
    },
    h6: {
        fontSize: "1rem", /* 14px en mobiles, 16px en tablets, 18px en desktops */
    },

    
    // SPACING
    spacing_xxxl: "5rem",
    button_radius: "0.375rem", /* 8 px en mobile */

    // BORDER RADIUS
    rounded: "0.5rem",
};
export default Default;

// @media (min-width: 768px) {
//     html {
//       font-size: 16px; /* recordar esta acordamos tablets */
//     }
//   }
  
//   @media (min-width: 1024px) {
//     html {
//       font-size: 18px; /* recordar esta acordamos desktops */
//     }
//   }
