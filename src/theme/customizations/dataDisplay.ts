import { Theme, Components } from '@mui/material'

export const dataDisplayCustomizations: Components<Theme> = {
    MuiList: {
        styleOverrides: {
            root: {
                padding: "0px"
            }
        }
    },
    MuiListItemButton: {
        styleOverrides: {
            root: ({ theme }) => ({
                width: "100%",
                paddingLeft: "28px",
                "&.MuiBox-root .MuiSvgIcon-root": {
                    width: "18px",
                    height: "18px",
                },
                "&.Mui-selected": {
                    color: (theme.vars || theme).palette.primary.main,
                    borderRightWidth: "2px",
                    borderRightStyle: "solid",
                    borderRightColor: (theme.vars || theme).palette.primary.main,
                    backgroundColor: (theme.vars || theme).palette.action.selected
                },
                "&.Mui-selected:hover": {
                    backgroundColor: (theme.vars || theme).palette.action.hover
                },
                '&.Mui-selected .MuiSvgIcon-root': {
                    color: (theme.vars || theme).palette.primary.main,
                }
            }),
        }
    },
    MuiListItemIcon: {
        styleOverrides: {
            root: {
                minWidth: "28px",
                "svg": {
                    width: "18px",
                    height: "18px",
                    color: "var(--palette-text-primary)",
                }
            },
        }
    },
    MuiAvatar: {
        styleOverrides: {
            root: ({ theme }) => ({
                fontSize: "16px",
                color: (theme.vars || theme).palette.primary.main,
                backgroundColor: (theme.vars || theme).palette.primary.lightest,
            }),
        }
    },
    MuiChip: {
        styleOverrides: {
            root: ({ theme }) => ({
                fontSize: "13px",
                lineHeight: "initial",
                borderRadius: (theme.vars || theme).shape.borderRadius,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "transparent",
                "& .MuiChip-label": {
                    padding: 0
                },
                variants: [
                    {
                        props: {
                            color: "primary"
                        },
                        style: {
                            color: (theme.vars || theme).palette.primary.main,
                            backgroundColor: (theme.vars || theme).palette.primary.lightest,
                            borderColor: (theme.vars || theme).palette.primary.light
                        }
                    },
                    {
                        props: {
                            color: "secondary"
                        },
                        style: {
                            color: (theme.vars || theme).palette.secondary.main,
                            backgroundColor: (theme.vars || theme).palette.secondary.lightest,
                        }
                    }
                ],
                "&:hover":{
                    backgroundColor: (theme.vars || theme).palette.primary.lightest,
                }
            }),
            avatar: ({ theme }) => ({
                width: "20px",
                height: "20px",
                marginLeft: theme.spacing(-0.5),
                marginRight: theme.spacing(0.5),
                fontSize: "12px",
            }),
        },
    },
    MuiBadge: {
        styleOverrides: {
            badge: ({ theme }) => ({
                minWidth: theme.spacing(2),
                height: theme.spacing(2),
                padding: theme.spacing(0.5),
                fontSize: "12px",
            }),
        }
    },
    MuiTableHead: {
        styleOverrides: {
            root: ({ theme }) => ({
                borderTopWidth: "1px",
                borderTopStyle: "solid",
                borderTopColor: (theme.vars || theme).palette.divider,
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                borderBottomColor: (theme.vars || theme).palette.divider,
                backgroundColor: (theme.vars || theme).palette.background.default
            })
        }
    },
    MuiTableCell: {
        styleOverrides: {
            root: ({ theme }) => ({
                fontWeight: 700,
                lineHeight: "1.5rem",
                textTransform: "uppercase",
                padding: "12px",
                borderBottom: "none"
            })
        }
    }
}