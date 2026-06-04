'use client';

import * as React from 'react';

import Stack from "@mui/material/Stack"
import Box from '@mui/system/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

import Sidebar from "@/components/layout/Sidebar/index";
import Header from "@/components/layout/Header/index";

import { handlerSidebarOpen, useGetMenuMaster } from "@/api/menu";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { menuMasterLoading } = useGetMenuMaster();
    const downXL = useMediaQuery((theme) => theme.breakpoints.down('xl'));

    React.useEffect(() => {
        handlerSidebarOpen(!downXL);
    }, [downXL]);

    return (
        <Stack
            direction="row"
            sx={{
                width: "100%"
            }}
        >
            <Header/>
            <Sidebar/>
            <Box
                component="main"
                sx={(theme) => ({
                    flexGrow: 1,
                    width: "calc(100% - 260px)",
                    paddingTop: theme.spacing(7.5),
                    [theme.breakpoints.up("xs")]: {
                        paddingX: theme.spacing(2),
                    },
                    [theme.breakpoints.up("sm")]: {
                        paddingX: theme.spacing(3),
                    },
                })}
            >
                {children}
            </Box>
        </Stack>
    )
}