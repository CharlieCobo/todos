import { Theme, Global, css } from '@emotion/react';

export const darkTheme: Theme = {
  colors: {
    primary: '#f27a54',
  },
  gradients: {
    button: 'linear-gradient(90deg, #F27A54 0%, #A154F2 100%)',
  },
};

export const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

      * {
        margin: 0;
        padding: 0;
      }

      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }

      html {
        font-size: 62.5%;
        box-sizing: border-box;
      }

      body {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        line-height: 1.6;

        min-height: 100vh;
      }
    `}
  />
);
