import { Theme, Components } from '@mui/material'
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
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
    }
}