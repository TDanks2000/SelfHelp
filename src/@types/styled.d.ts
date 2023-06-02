import 'styled-components';
import {darkTheme} from '../assets/theme';
type CustomTheme = typeof darkTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {
    colors: {
      RomanRed: string;
      RoseFog: string;
      AnzacYellow: string;
      ShakespeareBlue: string;
      SapphireBlue: string;
    };
    fonts: {
      openSans: {
        light: string;
        regular: string;
        semiBold: string;
        bold: string;
        extraBold: string;
      };
      Inconsolata: {
        light: string;
        regular: string;
        medium: string;
        semiBold: string;
        bold: string;
      };
    };
  }
}
