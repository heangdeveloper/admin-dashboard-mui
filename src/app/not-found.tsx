"use client"

import Link from 'next/link'

import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import CardMedia from '@mui/material/CardMedia'

export default function NotFound() {
    return (
        <Stack
            sx={{
                justifyContent: "center",
                alignItems: "center",
                gap: "80px",
                minHeight: "100vh",
                paddingTop: "12px",
                paddingBottom: "8px",
                overflow: "hidden"
            }}
        >
            <Stack
                sx={{
                    justifyContent: "center"
                }}
            >
                <Box
                    sx={(theme) => ({
                        [theme.breakpoints.up("sm")]: {
                            minHeight: "64px",
                        },
                    })}
                >
                    <CardMedia
                        component="img"
                        image="https://mantisdashboard.com/assets/Error404-BY9on4wS.png"
                        alt=""
                    />
                </Box>
            </Stack>
            <Stack
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "16px",
                }}
            >
                <Typography variant="h1">Page Not Found</Typography>
                <Typography variant="body1">The page you are looking was moved, removed, renamed, or might never exist!</Typography>
                <Button variant="contained" component={Link} href="/dashboard">Back To Home</Button>
            </Stack>
        </Stack>
    )
}