import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      title: string;
      text: string;
      background: string;
      divider: string;
      cardHeader: string;
      link: string;
      button: string;
      layoutLine: string;
    };

    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeightLight: number;
      fontWeightRegular: number;
      fontWeightMedium: number;
      fontWeightBold: number;
      article: {
        fontSize: string;
      };
      subtitle1: {
        fontSize: string;
      };
      subtitle2: {
        fontSize: string;
      };
      title1: {
        fontSize: string;
      };
      title2: {
        fontSize: string;
      };
      title3: {
        fontSize: string;
      };
      title4: {
        fontSize: string;
      };
      title5: {
        fontSize: string;
      };
    };
  }
}
