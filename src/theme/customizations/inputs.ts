import { Theme, Components } from '@mui/material'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

export const inputsCustomizations: Components<Theme> = {
    MuiButtonBase: {
        defaultProps: {
            disableTouchRipple: true,
            disableRipple: true,
        }
    },
    MuiOutlinedInput: {
        styleOverrides: {
            input: {
                padding: "10.5px 14px 10.5px 12px"
            },
            root: ({ theme }) => ({
                fontSize: "14px",
                color: (theme.vars || theme).palette.text.primary,
                "&.Mui-focused": {
                    boxShadow: "var(--customShadows-primary, 0 0 0 2px rgba(22, 119, 255, 0.2))",
                    "&.MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--template-palette-light, #69b1ff)",
                        borderWidth: "1px",
                        borderStyle: "solid"
                    }
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "var(--template-palette-light, #69b1ff)",
                },
            }),
            notchedOutline: {
                borderColor: "var(--template-palette-grey-300, #d9d9d9)",
            }
        }
    },
    MuiCheckbox: {
        defaultProps: {
            disableRipple: true
        },
        styleOverrides: {
            root: ({ theme }) => ({
                "svg": {
                    fontSize: "1.15rem"
                }
            }),
        }
    },
    MuiButton: {
        styleOverrides: {
            root: ({ theme }) => ({
                textTransform: "capitalize",
                variants: [
                    {
                        props: {
                            size: "large"
                        },
                        style: {
                            fontSize: "15px",
                            fontWeight: "400",
                        }
                    },
                    {
                        props: {
                            size: "medium"
                        },
                        style: {
                            fontSize: "14px",
                            fontWeight: "400",
                        }
                    },
                    {
                        props: {
                            variant: "text"
                        },
                        style: {
                            fontSize: "12px"
                        }
                    }
                ]
            }),
        }
    },
    MuiIconButton: {
        styleOverrides: {
            root: ({ theme }) => ({
                fontSize: "1rem",
                borderRadius: (theme.vars || theme).shape.borderRadius,
                variants: [
                    {
                        props: {
                            color: "secondary"
                        },
                        style: {
                            color: (theme.vars || theme).palette.text.primary,
                        }
                    }
                ],
                "svg": {
                    width: "20px",
                    height: "20px"
                },
            }),
        }
    },
    MuiSelect: {
        defaultProps: {
            IconComponent: KeyboardArrowDownOutlinedIcon,
        },
    },
    MuiSwitch: {
        styleOverrides: {
            root: {
                  width: 34,
                  height: 20,
                  marginRight: 0,
                  padding: 0,
            },
            switchBase: ({ theme }) => ({
                padding: '2px !important',
                "&.Mui-checked": {
                    transform: "translateX(14px) !important",
                    color: (theme.vars || theme).palette.primary.contrastText,
                    '& + .MuiSwitch-track': {
                        opacity: 1,
                    },
                }
            }),
            thumb: {
                width: 16,
                height: 16
            },
            track: ({ theme }) => ({
                borderRadius: 16,
                backgroundColor: (theme.vars || theme).palette.primary.light
            }),
        }
    }
}