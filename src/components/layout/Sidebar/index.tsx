import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/system/Box';
import Drawer from '@mui/material/Drawer';

import useMediaQuery from '@mui/material/useMediaQuery';

import SidebarHeader from "@/components/layout/Sidebar/SidbarHeader/index"
import SidebarContent from "@/components/layout/Sidebar/SidebarContent/index"
import MiniDrawerStyled from "@/components/layout/Sidebar/MiniSidebarStyled"

import { DRAWER_WIDTH } from '@/constants/config';
import { handlerSidebarOpen, useGetMenuMaster } from '@/api/menu';

interface MainDrawerProps {
    window?: () => Window;
}

export default function MainDrawer({ window }: MainDrawerProps) {
    const { menuMaster } = useGetMenuMaster();
    const sidebarOpen = menuMaster.isDashboardSidebarOpened;
    const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

    // responsive drawer container
    const container = window !== undefined ? () => window().document.body : undefined;

    // header content
    const sidebarHeader = React.useMemo(() => <SidebarHeader open={sidebarOpen} />, [sidebarOpen]);
    const sidebarContent = React.useMemo(() => <SidebarContent/>, []);

    return (
        <Box
            component="aside"
            sx={(theme) => ({
                zIndex: "1200",
                [theme.breakpoints.up("md")]: {
                    flexShrink: 0
                },
            })}
        >
            {!downLG ? (
                <MiniDrawerStyled variant="permanent" open={sidebarOpen}>
                    {sidebarHeader}
                    {sidebarContent}
                </MiniDrawerStyled>
            ) : (
                <Drawer
                    container={container}
                    variant="temporary"
                    open={sidebarOpen}
                    onClose={() => handlerSidebarOpen(!sidebarOpen)}
                    ModalProps={{ keepMounted: true }}
                    slotProps={{
                        paper: {
                            sx: {
                                display: { xs: sidebarOpen ? 'block' : 'none', lg: 'none' },
                                boxSizing: 'border-box',
                                width: DRAWER_WIDTH,
                                borderRight: '1px solid',
                                borderRightColor: 'divider',
                                boxShadow: 'inherit'
                            }
                        }
                    }}
                >
                    {sidebarHeader}
                    {sidebarContent}
                </Drawer>
            )}
        </Box>
    )
}

MainDrawer.propTypes = { window: PropTypes.func };