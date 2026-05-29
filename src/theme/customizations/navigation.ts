import { Theme, Components } from '@mui/material/styles';

export const navigationCustomizations: Components<Theme> = {
    MuiDrawer: {
        styleOverrides: {
            root: {
                flexShrink: 0,
                boxSizing: "border-box",
            }
        }
    },
    MuiTablePagination: {
        styleOverrides: {
            toolbar: {
                paddingTop: 0,
                paddingBottom: 0
            },
            select: ({ theme }) => ({
                minWidth: "16px",
                paddingRight: theme.spacing(0.5),
                fontSize: "14px",
                lineHeight: "24px",
            }),
            displayedRows: {
                fontSize: "14px"
            },
            selectLabel: {
                fontSize: "14px"
            },
            selectIcon: {
                top: "calc(50% - 8px)",
                right: "4px",
                width: "16px",
                height: "16px"
            }
        }
    }
}