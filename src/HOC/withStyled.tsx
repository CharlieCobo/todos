import { ComponentType } from 'react';
import { ThemeProvider } from '@emotion/react';

import { GlobalStyles, darkTheme } from '../themes';

const withStyled = <P extends object>(Component: ComponentType<P>) => {
  return (props: P) => (
    <>
      <GlobalStyles />
      <ThemeProvider theme={darkTheme}>
        <Component {...props} />
      </ThemeProvider>
    </>
  );
};

export default withStyled;
