import * as React from "react";
import PropTypes from 'prop-types';

import Box from "@mui/system/Box";

import SidebarHeaderStyled from "./SidebarHeaderStyled"

interface SidebarHeaderProps {
    open: boolean;
}

export default function SidebarHeader({ open }: SidebarHeaderProps) {
    return (
        <SidebarHeaderStyled
            open={open}
            sx={{
                display: "flex",
                flexGrow: "0",
                justifyContent: "center",
                alignItems: "center",
                paddingY: "8px",
                paddingX: "24px",
                minHeight: "56px",
                paddingLeft: open ? '24px' : 0
            }}
        >
            <Box></Box>
        </SidebarHeaderStyled>
    )
}

SidebarHeader.prototype = { open: PropTypes.bool };