import "@mui/material/styles";

declare module "@mui/material/styles" {
    interface PaletteColor {
        lightest?: string;
    }

    interface SimplePaletteColorOptions {
        lightest?: string;
    }
}