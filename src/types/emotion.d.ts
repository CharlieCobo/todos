import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      white: string;
      dark: string;
      primary: string;
      secondary: string;
      tertiary: string;
      'grey-400': string;
      'grey-300': string;
      'grey-200': string;
      'grey-100': string;
    };
    gradients: {
      button: string;
    };
  }
}
