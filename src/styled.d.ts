import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme{
    black: {
      veryDark: string;
      darker: string;
      lighter: string;
    };
    white: {
      darker: string;
      lighter: string;
    };
    mapColor: string;
    bgColor : string;
    gradient: string;
    shadow : string;
    btnColor : string;
    textColor : string;
  }
}