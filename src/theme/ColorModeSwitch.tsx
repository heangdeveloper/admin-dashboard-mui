import * as React from 'react';

import { useColorScheme } from '@mui/material/styles';
import Switch from "@mui/material/Switch";

export default function ColorModeSwitch() {
    const { mode, systemMode, setMode } = useColorScheme();
    const currentMode = mode === "system" ? systemMode : mode;

    if (!mode) {
        return null;
    }

    return (
        <Switch
            checked={currentMode === "dark"}
            onChange={(event) => {
                setMode(event.target.checked ? "dark" : "light");
            }}
        />
    );
}