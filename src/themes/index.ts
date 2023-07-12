import { Theme } from '@emotion/react';
export * from './GlobalStyles';

export const darkTheme: Theme = {
  colors: {
    white: '#fff',
    dark: '#30363D',
    primary: '#f27a54',
    secondary: '#A154F2',
    tertiary: '#6FCF97',
    warning: '#ff4500',
    success: '#6FCF97',
    'grey-400': '#3C444C',
    'grey-300': '#747D88',
    'grey-200': '#CBCFD4',
    'grey-100': '#F2F4F7',
  },
  gradients: {
    button: 'linear-gradient(90deg, #F27A54 0%, #A154F2 100%)',
  },
};
