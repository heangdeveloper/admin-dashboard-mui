"use client"

import * as React from "react"
import Link from "next/link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";

import { useTranslations } from 'next-intl';
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form";
import * as z from "zod"

import { loginSchema } from "@/schema/login";

export default function Page() {
    const t = useTranslations('loginPage');
    const formSchema = React.useMemo(() => loginSchema(t), [t]);
    const { control, handleSubmit, reset, formState: { isSubmitting } } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    });

    async function onSubmit(data: z.infer<typeof formSchema>) {

    }

    return (
        <Box
            sx={{
                minHeight: "100vh"
            }}
        >
            <Stack
                sx={{
                    justifyContent: "center",
                    minHeight: "100vh"
                }}
            >
                <Box>
                    <Stack
                        sx={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Card
                            sx={(theme) => ({
                                [theme.breakpoints.up("md")]: {
                                    margin: "calc(3 * var(--template-spacing))",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    maxWidth: "475px"
                                },
                                [theme.breakpoints.up("xs")]: {
                                    maxWidth: "400px",
                                    margin: "calc(2.5 * var(--template-spacing))",
                                },
                            })}
                        >
                            <Box
                                sx={(theme) => ({
                                    [theme.breakpoints.up("md")]: {
                                        padding: "calc(4 * var(--template-spacing))"
                                    },
                                    [theme.breakpoints.up("sm")]: {
                                        padding: "calc(3 * var(--template-spacing))"
                                    },
                                    [theme.breakpoints.up("xs")]: {
                                        padding: "calc(2 * var(--template-spacing))"
                                    }
                                })}
                            >
                                <Grid container spacing={{ xs: 3 }}>
                                    <Grid>
                                        <Stack
                                            direction="row"
                                            sx={{
                                                justifyContent: "space-between",
                                                alignItems: "baseline"
                                            }}
                                        >
                                            <Typography variant="h3">{t('login')}</Typography>
                                            <Typography
                                                variant="body1"
                                                component={Link}
                                                href="/register"
                                                sx={{
                                                    fontSize: "14px",
                                                    color: "var(--template-palette-primary-main)",
                                                    textDecoration: "none"
                                                }}
                                            >{t('dont_have_account')}</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid>
                                        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                                            <Grid container spacing={{ xs: 3 }}>
                                                <Grid>
                                                    <Stack
                                                        sx={{
                                                            gap: "var(--template-spacing)"
                                                        }}
                                                    >
                                                        <FormLabel id="username">{t('form.username.label')}</FormLabel>
                                                        <OutlinedInput id="username" required type="text" placeholder={t('form.username.placeholder')} />
                                                    </Stack>
                                                </Grid>
                                                <Grid>
                                                    <Stack
                                                        sx={{
                                                            gap: "var(--template-spacing)"
                                                        }}
                                                    >
                                                        <FormLabel>{t('form.password.label')}</FormLabel>
                                                        <OutlinedInput required type="password" placeholder={t('form.password.placeholder')} />
                                                    </Stack>
                                                </Grid>
                                                <Grid>
                                                    <Stack
                                                        direction="row"
                                                        sx={{
                                                            alignItems: "baseline",
                                                            justifyContent: "space-between"
                                                        }}
                                                    >
                                                        <FormControlLabel control={<Checkbox />} label={t('keep_me_sign_in')} />
                                                        <Typography
                                                            variant="h6"
                                                            component={Link}
                                                            href="/forgot-password"
                                                            sx={{
                                                                color: "var(--template-palette-text-primary)",
                                                                textDecoration: "none",
                                                                "&:hover": {
                                                                    textDecoration: "underline"
                                                                }
                                                            }}
                                                        >{t('forgot_password')}</Typography>
                                                    </Stack>
                                                </Grid>
                                                <Grid>
                                                    <Button variant="contained" size="large" color="primary" disableElevation fullWidth disabled={isSubmitting}>{isSubmitting ? t('button.logging') : t('button.login')}</Button>
                                                </Grid>
                                            </Grid>
                                        </form>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Card>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}