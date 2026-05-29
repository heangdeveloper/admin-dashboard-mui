"use client";

import Stack from "@mui/material/Stack"
import Box from '@mui/system/Box';
import Sidebar from "@/components/layout/Sidebar/Sidebar";
import Header from "@/components/layout/Header/Header";

export default function DashboardLayout ({ children }: { children: React.ReactNode }) {
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