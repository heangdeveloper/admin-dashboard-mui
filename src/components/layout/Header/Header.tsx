import * as React from "react";

import Box from '@mui/system/Box';
import Stack from "@mui/material/Stack"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import GlobalStyles from '@mui/material/GlobalStyles';

import {
    Menu
} from 'lucide-react';

import Notification from "@/components/layout/Header/Notification";
import FullScreen from "@/components/layout/Header/FullScreen";
import Profile from "@/components/layout/Header/Profile"
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
                                <Profile/>
                            </Box>
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    )
}