import { styled, Theme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';

import { DRAWER_WIDTH } from '@/constants/config';

const openedMixin = (theme: Theme) => ({
    width: DRAWER_WIDTH,
    borderRight: "1px solid",
    borderRightColor: theme.palette.divider,

    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),

    overflowX: 'hidden',
    boxShadow: 'none'
});

const closedMixin = (theme: Theme) =>({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),

    overflowX: 'hidden',
    width: theme.spacing(7.5),
    borderRight: 'none',
});

const MiniDrawerStyled = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme }) => ({
    width: DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
        {
            props: ({ open }) => open,
            style: { ...openedMixin(theme), '& .MuiDrawer-paper': openedMixin(theme) }
        },
        {
            props: ({ open }) => !open,
            style: { ...closedMixin(theme), '& .MuiDrawer-paper': closedMixin(theme) }
        }
    ]
}));

export default MiniDrawerStyled;