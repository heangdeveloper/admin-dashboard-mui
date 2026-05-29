"use client";

import * as React from "react";
import { ThemeProvider, createTheme, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { inputsCustomizations } from '@/theme/customizations/inputs';
import { navigationCustomizations } from './customizations/navigation';
import { dataDisplayCustomizations } from './customizations/dataDisplay';
import { surfacesCustomizations } from './customizations/surfaces';
import { layoutCustomizations } from './customizations/layout';
import { createTypography } from "./createTypography"
import { createShadows } from "@/theme/createShadows";
import { createPalette } from './createPalette';

interface AppThemeProps {
    children: React.ReactNode;
    disableCustomTheme?: boolean;
    locale: string;
}

export default function AppTheme(props: AppThemeProps) {
    const { children, disableCustomTheme, locale } = props
    const typography = createTypography(locale);
    const shadows = createShadows();
    const palette = createPalette();
    const theme = React.useMemo(() => {
        return disableCustomTheme
            ? {}
            : createTheme({
                cssVariables: {
                    colorSchemeSelector: "data-color-scheme",
                    cssVarPrefix: "template",
                },
                breakpoints: {
                    values: {
                        xs: 0,
                        sm: 768,
                        md: 1024,
                        lg: 1266,
                        xl: 1440
                    }
                },
                palette,
                shape: {
                    borderRadius: 4,
                },
                mixins: {
                    toolbar: {
                        minHeight: 60,
                        paddingTop: 8,
                        paddingBottom: 8
                    }
                },
                typography,
                shadows,
                components: {
                    ...inputsCustomizations,
                    ...navigationCustomizations,
                    ...dataDisplayCustomizations,
                    ...surfacesCustomizations,
                    ...layoutCustomizations
                },
            });
    }, [disableCustomTheme, palette, shadows, typography]);
    if (disableCustomTheme) {
        return <React.Fragment>{children}</React.Fragment>
    }
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme} disableTransitionOnChange>
                <CssBaseline enableColorScheme />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    )
}