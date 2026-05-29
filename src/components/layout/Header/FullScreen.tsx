import * as React from "react";

import IconButton from '@mui/material/IconButton';

import {
    Shrink
} from 'lucide-react';

export default function FullScreen() {
    return (
        <>
            <IconButton size="medium" color="secondary">
                <Shrink/>
            </IconButton>
        </>
    )
}