import * as React from "react";

import Box from '@mui/system/Box';
import Stack from "@mui/material/Stack"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button"
import Avatar from "@mui/material/Avatar";
import GlobalStyles from '@mui/material/GlobalStyles';

import {
    Menu
} from 'lucide-react';

import Notification from "@/components/layout/Header/Notification";
import FullScreen from "@/components/layout/Header/FullScreen";
import { toggleSidebar } from "@/theme/sidbar-utils";

export default function Header() {
    return (
        <>
            <GlobalStyles
                styles={{
                    ':root': {
                        '--Header-width': '260px',
                    },
                }}
            />
            <AppBar
                position="fixed"
                color="inherit"
                elevation={0}
                component="header"
                sx={(theme) => ({
                    marginLeft: "var(--Header-width)",
                    transition: "width 225ms cubic-bezier(0.4, 0, 0.6, 1)",
                    [theme.breakpoints.up("md")]: {
                        width: "calc(100% - var(--Header-width))",
                    },
                })}
            >
                <Toolbar>
                    <Stack
                        flexDirection="row"
                        sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%"
                        }}
                    >
                        <IconButton size="medium" color="secondary" edge="start" onClick={toggleSidebar}>
                            <Menu/>
                        </IconButton>
                        <Stack
                            direction="row"
                            sx={{
                                gap: "calc(0.75 * var(--template-spacing))",
                                alignItems: "center"
                            }}
                        >
                            <Box><Notification/></Box>
                            <Box><FullScreen/></Box>
                            <Box
                                sx={{
                                    flexShrink: 0,
                                    marginLeft: "auto"
                                }}
                            >
                                <Button
                                    sx={{
                                        minWidth: "0",
                                        padding: "calc(0.25 * var(--spacing))",
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            width: "34px",
                                            height: "34px"
                                        }}
                                        src="https://keenthemes.com/keen/demo1/assets/media/avatars/300-3.jpg" alt=""
                                    />
                                </Button>
                            </Box>
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    )
}