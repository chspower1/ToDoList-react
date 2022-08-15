import "styled-components";

// and extend them!
declare module "styled-components" {
    export interface DefaultTheme {
        bgColor: string;
        contentColor: string;
        contentTextColor: string;
        accentColor: string;
        navBgColor: string;
        navTextColor: string;
        btnBgColor: string;
        btnBgWhite: string;
    }
}
