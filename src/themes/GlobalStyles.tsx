import { Global, css, useTheme } from '@emotion/react';

export const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Zilla+Slab:wght@300;400;500;600;700&display=swap');

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
          background-color: ${theme.colors.dark};
          color: ${theme.colors.white};

          min-height: 100vh;
        }
      `}
    />
  );
};
