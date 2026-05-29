import { common } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";
import { error, info, neutral, success, warning, primary, secondary } from "./colors";

export function createPalette() {
    return {
        error,
        warning,
        info,
        success,
        primary,
        secondary,
        divider: "#F2F4F7",
        background: {
            paper: common.white,
            default: "#fafafb"
        },
        action: {
            active: neutral[500],
            disabled: alpha(neutral[900], 0.38),
            disabledBackground: alpha(neutral[900], 0.12),
            focus: alpha(neutral[900], 0.16),
            hover: primary.lightest,
            selected: primary.lightest,
        }
    }
}