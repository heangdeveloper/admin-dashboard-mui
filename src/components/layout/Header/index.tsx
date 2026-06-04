import * as React from "react";

import Box from '@mui/system/Box';
import Stack from "@mui/material/Stack"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import GlobalStyles from '@mui/material/GlobalStyles';

import { Menu } from 'lucide-react';

import { DRAWER_WIDTH, MINI_DRAWER_WIDTH } from '@/constants/config';
import { handlerSidebarOpen, useGetMenuMaster } from '@/api/menu';

import Notification from "@/components/layout/Header/Notification";
import FullScreen from "@/components/layout/Header/FullScreen";
import Profile from "@/components/layout/Header/Profile"

export default function Header() {
    const { menuMaster } = useGetMenuMaster();
    const sidebarOpen = menuMaster.isDashboardSidebarOpened;
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
                sx={{
                    transition: "width 225ms cubic-bezier(0.4, 0, 0.6, 1)",
                    width: { xs: '100%', lg: sidebarOpen ? `calc(100% - ${DRAWER_WIDTH}px)` : `calc(100% - ${MINI_DRAWER_WIDTH}px)` }
                }}
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
                        <IconButton size="medium" color="secondary" edge="start" onClick={() => handlerSidebarOpen(!sidebarOpen)}>
                            <Menu/>
                        </IconButton>
                        <Stack
                            direction="row"
                            sx={(theme) => ({
                                gap: theme.spacing(0.75),
                                alignItems: "center"
                            })}
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