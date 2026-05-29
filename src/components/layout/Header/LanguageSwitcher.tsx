"use client";

import IconButton from '@mui/material/IconButton';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import { Locale } from "next-intl";

import {
    Languages
} from 'lucide-react';

type Props = {
    changeLocalAction: (locale: Locale) => Promise<void>;
    currentLocale: Locale;
}

export default function LanguageSwitcher({ changeLocalAction, currentLocale }: Props) {
    return (
        <>
            <PopupState variant="popper">
                {(popupState) => (
                    <>
                        <IconButton size="medium" color="secondary" {...bindToggle(popupState)}>
                            <Languages/>
                        </IconButton>
                        <Popper
                            {...bindPopper(popupState)}
                            transition
                            placement="bottom"
                            sx={(theme) => ({
                                position: "relative",
                                color: (theme.vars || theme).palette.text.primary,
                                borderRadius: (theme.vars || theme).shape.borderRadius,
                                backgroundColor: (theme.vars || theme).palette.background.paper,
                                transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                            })}
                        >
                            {({ TransitionProps }) => (
                                <Fade {...TransitionProps} timeout={350}>
                                    <ClickAwayListener
                                        onClickAway={() => popupState.close()}
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
                                                {["en", "kh"].map((lang) => (
                                                    <ListItemButton
                                                        key={lang}
                                                        onClick={() => {
                                                            changeLocalAction(lang as Locale);
                                                            popupState.close();
                                                        }}
                                                        sx={{
                                                            paddingLeft: "16px"
                                                        }}
                                                    >
                                                        <ListItemText
                                                            sx={{
                                                                flex: "1 1 auto",
                                                                minWidth: "0px",
                                                                marginTop: "4px",
                                                                marginBottom: "4px"
                                                            }}
                                                        >
                                                            <Grid container>
                                                                <Typography variant="body1" component="p">{lang === "en" ? "English" : "Khmer"}</Typography>
                                                                <Typography variant="caption" component="span"
                                                                            sx={(theme) => ({
                                                                                marginLeft: "8px",
                                                                                color: (theme.vars || theme).palette.text.secondary,
                                                                            })}
                                                                >{lang === "en" ? "(UK)" : "(KH)"}</Typography>
                                                            </Grid>
                                                        </ListItemText>
                                                    </ListItemButton>
                                                ))}
                                            </List>
                                        </Paper>
                                    </ClickAwayListener>
                                </Fade>
                            )}
                        </Popper>
                    </>
                )}
            </PopupState>
        </>
    )
}