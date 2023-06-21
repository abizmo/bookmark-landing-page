import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakPoints: {
      large: string;
    };
    colors: {
      primary: string;
      accent: string;
      neutral: {
        [key: number]: string;
      };
    };
    shadows: {
      primary: string;
    };
    typography: {
      family: {
        sans: string;
      };
      letterSpacing: {
        normal: string;
        wide: string;
        wider: string;
        widest: string;
      };
      lineHeight: {
        none: number;
        tight: number;
        normal: number;
        relaxed: number;
      };
      size: {
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
      };
      weight: {
        regular: number;
        bold: number;
      };
    };
    sizes: {
      maxWidth: string;
    };
    padding: {
      default: string;
    };
  }
}
