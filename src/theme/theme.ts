import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: 'hsl(231, 69%, 60%)',
    accent: 'hsl(0, 94%, 66%)',
    neutral: {
      100: 'hsl(0, 0%, 100%)',
      200: 'hsl(0, 0%, 95%)',
      600: 'hsl(229, 8%, 60%)',
      618: 'hsl(229, 8%, 60%, .18)',
      900: 'hsl(229, 31%, 21%)',
      995: 'hsla(229, 31%, 21%, .95)',
    },
  },
  shadows: {
    primary: '0px 4px 4px 0 hsla(231, 69%, 60%, .12)',
  },
  typography: {
    family: {
      sans: 'Rubik, sans-serif',
    },
    letterSpacing: {
      normal: '0em',
      wide: '0.03em',
      wider: '0.15em',
      widest: '0.35em',
    },
    lineHeight: {
      none: 1,
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.8,
    },
    size: {
      '2xs': '.6875rem',
      xs: '.8125rem',
      sm: '.875rem',
      md: '1rem',
      base: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '1.875rem',
      '3xl': '2rem',
      '4xl': '3rem',
    },
    weight: {
      regular: 400,
      bold: 500,
    },
  },
  sizes: {
    maxWidth: '70rem',
  },
  padding: {
    default: '2rem',
  },
  breakPoints: {
    large: 'min-width: 70em',
  },
};

export default theme;
