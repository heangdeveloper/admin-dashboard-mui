import { Theme, Components } from '@mui/material/styles';

export const layoutCustomizations: Components<Theme> = {
    MuiGrid: {
        styleOverrides: {
            root: {
                flexGrow: 0,
                flexBasis: "auto",
                width: "calc(100% * 12 / var(--Grid-parent-columns) - (var(--Grid-parent-columns) - 12) * (var(--Grid-parent-columnSpacing) / var(--Grid-parent-columns)))"
            }
        }
    }
}