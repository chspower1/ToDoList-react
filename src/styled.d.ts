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
        navHoverColor: string;
        btnBgColor: string;
        btnHoverColor: string;
        btnBgWhite: string;
        dangerColor: string;
    }
}
