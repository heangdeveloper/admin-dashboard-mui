"use client";

import * as React from "react";

import Button from "@mui/material/Button"
import Avatar from "@mui/material/Avatar";
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import Popper from '@mui/material/Popper';
import Stack from "@mui/material/Stack";
import Divider from '@mui/material/Divider';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Switch from '@mui/material/Switch';
import Chip from "@mui/material/Chip";

import {useTranslations} from "next-intl";
import { changeLocalAction } from "@/actions/change-locale"
import { LOCALES, type Locale } from "@/constants/locales"

import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function Profile() {
    const t = useTranslations("header");
    const [languageAnchor, setLanguageAnchor] = React.useState<HTMLElement | null>(null);
    const openLanguage = Boolean(languageAnchor);

    const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
        setLanguageAnchor(languageAnchor ? null : event.currentTarget);
    }
    const handleLanguageClose = () => {
        setLanguageAnchor(null);
    };

    const handleChangeLocale = async (locale: Locale) => {
        await changeLocalAction(locale);
    };
    return (
        <>
            <PopupState variant="popper">
                {(popupState) => (
                    <>
                        <Stack>
                            <Button
                                sx={{
                                    minWidth: "0",
                                    padding: "calc(0.25 * var(--spacing))",
                                }}
                                {...bindToggle(popupState)}
                            >
                                <Avatar
                                    sx={{
                                        width: "34px",
                                        height: "34px"
                                    }}
                                    src="https://keenthemes.com/keen/demo1/assets/media/avatars/300-3.jpg" alt=""
                                />
                            </Button>
                        </Stack>
                        <Popper
                            {...bindPopper(popupState)}
                            transition
                            placement="bottom-start"
                            sx={(theme) => ({
                                position: "relative",
                                minWidth: "220px",
                                color: (theme.vars || theme).palette.text.primary,
                                borderRadius: (theme.vars || theme).shape.borderRadius,
                                border: `1px solid ${(theme.vars || theme).palette.divider}`,
                                backgroundColor: (theme.vars || theme).palette.background.paper,
                                transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                                zIndex: 2000,
                            })}
                        >
                            {({ TransitionProps }) => (
                                <Fade {...TransitionProps}>
                                    <Box>
                                        <ClickAwayListener
                                            onClickAway={() => popupState.close()}
                                        >
                                            <Paper>
                                                <Stack>
                                                    <Stack
                                                        sx={(theme) => ({
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                            paddingTop: theme.spacing(1),
                                                            gap: theme.spacing(0.75)
                                                        })}
                                                    >
                                                        <Avatar
                                                            sx={{
                                                                width: "48px",
                                                                height: "48px"
                                                            }}
                                                            src="https://keenthemes.com/keen/demo1/assets/media/avatars/300-3.jpg" alt=""/>
                                                        <Stack
                                                            sx={(theme)=> ({
                                                                alignItems: "center",
                                                                gap: theme.spacing(0.25)
                                                            })}
                                                        >
                                                            <Stack
                                                                sx={(theme)=> ({
                                                                    alignItems: "center",
                                                                    gap: theme.spacing(0.5)
                                                                })}
                                                            >
                                                                <Typography
                                                                    variant="h4"
                                                                    component="h4"
                                                                    sx={(theme)=> ({
                                                                        color: (theme.vars || theme).palette.text.primary,
                                                                    })}
                                                                >
                                                                    Sim Kimheang</Typography>
                                                            </Stack>
                                                            <Typography
                                                                variant="caption"
                                                                component="span"
                                                                sx={(theme)=> ({
                                                                    color: (theme.vars || theme).palette.text.secondary,
                                                                })}
                                                            >
                                                                Super Admin
                                                            </Typography>
                                                        </Stack>
                                                    </Stack>
                                                    <Divider
                                                        sx={(theme)=> ({
                                                            marginTop: theme.spacing(),
                                                            marginBottom: theme.spacing(),
                                                        })}
                                                    />
                                                    <List>
                                                        <ListItem
                                                            sx={(theme)=> ({
                                                                paddingRight: theme.spacing(),
                                                                paddingTop: theme.spacing(),
                                                                paddingBottom: theme.spacing(),
                                                                paddingLeft: theme.spacing(),
                                                            })}
                                                        >
                                                            <ListItemIcon>
                                                                <NightlightOutlinedIcon/>
                                                            </ListItemIcon>
                                                            <ListItemText
                                                                primary={
                                                                    <Typography variant="h4" component="p">{t("profile.dark_mode")}</Typography>
                                                                }
                                                            ></ListItemText>
                                                            <Switch
                                                                size="small"
                                                            />
                                                        </ListItem>
                                                        <PopupState variant="popper">
                                                            {(popupState) => (
                                                                <>
                                                                    <ListItemButton
                                                                        sx={(theme)=> ({
                                                                            padding: theme.spacing(),
                                                                        })}
                                                                        onClick={handleLanguageClick}
                                                                    >
                                                                        <ListItemIcon>
                                                                            <TranslateOutlinedIcon/>
                                                                        </ListItemIcon>
                                                                        <ListItemText>
                                                                            <Typography variant="h4" component="p">{t("profile.language.label")}</Typography>
                                                                        </ListItemText>
                                                                        <Chip
                                                                            label={
                                                                                <Stack
                                                                                    direction="row"
                                                                                    sx={{
                                                                                        justifyContent: "center",
                                                                                        alignItems: "center",
                                                                                    }}
                                                                                >

                                                                                    <ArrowForwardIosOutlinedIcon sx={{
                                                                                        width: "18px",
                                                                                        height: "18px",
                                                                                        fontSize: "10px",
                                                                                        marginRight: "-6px",
                                                                                        padding: "3px"
                                                                                    }}/>
                                                                                </Stack>
                                                                            }
                                                                            sx={(theme)=> ({
                                                                                height: "100%",
                                                                                fontSize: "12px",
                                                                                color: (theme.vars || theme).palette.text.secondary,
                                                                                backgroundColor: "transparent",
                                                                            })}
                                                                        />
                                                                    </ListItemButton>
                                                                    <Popper
                                                                        open={openLanguage}
                                                                        anchorEl={languageAnchor}
                                                                        transition
                                                                        placement="left-start"
                                                                        sx={(theme) => ({
                                                                            position: "relative",
                                                                            color: (theme.vars || theme).palette.text.primary,
                                                                            borderRadius: (theme.vars || theme).shape.borderRadius,
                                                                            backgroundColor: (theme.vars || theme).palette.background.paper,
                                                                            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                                                                            zIndex: 2000
                                                                        })}
                                                                    >
                                                                        {({ TransitionProps }) => (
                                                                            <Fade {...TransitionProps} timeout={350}>
                                                                                <div>
                                                                                    <ClickAwayListener
                                                                                        onClickAway={(event) => {
                                                                                            if (
                                                                                                languageAnchor &&
                                                                                                languageAnchor.contains(event.target as Node)
                                                                                            ) {
                                                                                                return;
                                                                                            }

                                                                                            popupState.close();
                                                                                            handleLanguageClose();
                                                                                        }}
                                                                                    >
                                                                                        <Paper>
                                                                                            <List
                                                                                                sx={(theme) => ({
                                                                                                    width: "100%",
                                                                                                    minWidth: "200px",
                                                                                                    backgroundColor: (theme.vars || theme).palette.background.paper,
                                                                                                    borderRadius: (theme.vars || theme).shape.borderRadius,
                                                                                                    [theme.breakpoints.up("md")]: {
                                                                                                        maxWidth: "290px"
                                                                                                    },
                                                                                                })}
                                                                                            >
                                                                                                {LOCALES.map((item) => (
                                                                                                    <ListItemButton
                                                                                                        key={item.value}
                                                                                                        onClick={async () => {
                                                                                                            await handleChangeLocale(item.value);
                                                                                                            handleLanguageClose();
                                                                                                            popupState.close();
                                                                                                        }}
                                                                                                        sx={(theme) => ({
                                                                                                            paddingLeft: "8px",
                                                                                                            paddingRight: "8px",
                                                                                                            "&.Mui-selected": {
                                                                                                                borderRight: "none",
                                                                                                                backgroundColor: (theme.vars || theme).palette.action.selected,
                                                                                                            },
                                                                                                            "&.Mui-selected:hover": {
                                                                                                                backgroundColor: (theme.vars || theme).palette.action.selected,
                                                                                                            },
                                                                                                        })}
                                                                                                    >
                                                                                                        <ListItemText
                                                                                                            sx={{
                                                                                                                flex: "1 1 auto",
                                                                                                                minWidth: "0px",
                                                                                                                marginTop: "4px",
                                                                                                                marginBottom: "4px"
                                                                                                            }}
                                                                                                        >
                                                                                                            <Typography variant="h4" component="p">{t(item.label)}</Typography>
                                                                                                        </ListItemText>
                                                                                                    </ListItemButton>
                                                                                                ))}
                                                                                            </List>
                                                                                        </Paper>
                                                                                    </ClickAwayListener>
                                                                                </div>
                                                                            </Fade>
                                                                        )}
                                                                    </Popper>
                                                                </>
                                                            )}
                                                        </PopupState>
                                                        <ListItemButton
                                                            sx={(theme)=> ({
                                                                padding: theme.spacing(),
                                                            })}
                                                        >
                                                            <ListItemIcon>
                                                                <SettingsOutlinedIcon/>
                                                            </ListItemIcon>
                                                            <ListItemText>
                                                                <Typography variant="h4" component="p">{t("profile.setting")}</Typography>
                                                            </ListItemText>
                                                        </ListItemButton>
                                                        <Divider/>
                                                        <ListItemButton
                                                            sx={(theme)=> ({
                                                                padding: theme.spacing(),
                                                            })}
                                                        >
                                                            <ListItemIcon>
                                                                <LogoutOutlinedIcon/>
                                                            </ListItemIcon>
                                                            <ListItemText>
                                                                <Typography variant="h4" component="p">{t("profile.logout")}</Typography>
                                                            </ListItemText>
                                                        </ListItemButton>
                                                    </List>
                                                </Stack>
                                            </Paper>
                                        </ClickAwayListener>
                                    </Box>
                                </Fade>
                            )}
                        </Popper>
                    </>
                )}
            </PopupState>
        </>
    )
}