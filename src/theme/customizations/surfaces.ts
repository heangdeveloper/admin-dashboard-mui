import { alpha, Theme, Components } from '@mui/material/styles';

export const surfacesCustomizations: Components<Theme> = {
    MuiToolbar: {
        styleOverrides: {
            root: {

            }
        }
    },
    MuiAppBar: {
        styleOverrides: {
            root: ({ theme }) => ({
                ...theme.applyStyles('dark', {
                    backgroundColor: "#333"
                })
            })
        }
    }
}