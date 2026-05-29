import * as React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Box from '@mui/system/Box';
import Drawer, {drawerClasses} from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';

import { useTranslations } from "next-intl";

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { SideBarItem } from "./SidebarItem";
import {ListItem} from "@mui/material";

type SubmenuItem = {
    label: string;
    link: string;
};

type SidebarItemType = {
    label: string;
    icon?: React.ReactNode;
    link?: string;
    submenu?: SubmenuItem[];
};

export default function Sidebar() {
    const pathname = usePathname();
    const t = useTranslations("sidebar");
    const [openMenu, setOpenMenu] = React.useState<string | null>(null);
    React.useEffect(() => {
        SideBarItem.forEach((group) => {
            group.items.forEach((item: SidebarItemType) => {
                const matchedChild = item.submenu?.some(
                    (child: SubmenuItem) => child.link === pathname
                );

                if (matchedChild) {
                    setOpenMenu(item.label);
                }
            });
        });
    }, [pathname]);
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
            <GlobalStyles
                styles={{
                    ':root': {
                        '--Sidebar-width': '260px',
                    },
                }}
            />
            <Drawer
                variant="permanent"
                anchor="left"
                sx={(theme) => ({
                    width: "var(--Sidebar-width)",
                    boxSizing: 'border-box',
                    overflowX: "hidden",
                    whiteSpace: "nowrap",
                    transition: "width 195ms cubic-bezier(0.4, 0, 0.6, 1)",
                    [theme.breakpoints.down("md")]: {
                        width: 0,
                    },
                    [`& .${drawerClasses.paper}`]: {
                        width: "var(--Sidebar-width)",
                        overflow: "hidden",
                        boxSizing: 'border-box',
                        transition: "width 195ms cubic-bezier(0.4, 0, 0.6, 1)",
                        [theme.breakpoints.down("md")]: {
                            width: 0,
                        },
                    },
                })}
            >
                <ListItemButton
                    component={Link} href="/dashboard"
                    sx={(theme) => ({
                        display: "flex",
                        flexGrow: "0",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingY: "8px",
                        paddingX: "24px",
                        minHeight: "56px",
                        [theme.breakpoints.up("sm")]: {
                            minHeight: "60px",
                        },
                        ":hover": {
                            backgroundColor: (theme.vars || theme).palette.background.paper,
                        }
                    })}
                >
                    <Box></Box>
                </ListItemButton>
                <Box
                    sx={{
                        flexGrow: 1
                    }}
                >
                    <SimpleBar>
                        <List>
                            <Box sx={{
                                display: "block",
                                paddingTop: "calc(2 * var(--template-spacing))"
                            }}>
                                {SideBarItem.map((group, groupIndex) => (
                                    <Box
                                        key={groupIndex}
                                        sx={{
                                            mt: groupIndex !== 0 ? "calc(1.5 * var(--template-spacing))" : 0,
                                        }}
                                    >
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                marginBottom: "calc(1.5 * var(--template-spacing))",
                                                paddingLeft: "calc(3 * var(--template-spacing))",
                                                color: "var(--template-palette-text-secondary)",
                                            }}
                                        >
                                            {t(group.group)}
                                        </Typography>
                                        {group.items.map((
                                            item: {
                                                label: string;
                                                icon?: React.ReactNode;
                                                link?: string;
                                                submenu?: {
                                                    label: string;
                                                    link: string;
                                                }[];
                                            },
                                            itemIndex: number
                                        ) => {
                                            const hasChildren = item.submenu?.length;
                                            return (
                                                <Box key={itemIndex}>
                                                    <ListItemButton
                                                        component={!hasChildren ? Link : "button"}
                                                        href={!hasChildren ? item.link : undefined}
                                                        onClick={
                                                            hasChildren
                                                                ? () =>
                                                                    setOpenMenu((prev) =>
                                                                        prev === item.label ? null : item.label
                                                                    )
                                                                : undefined
                                                        }
                                                        selected={
                                                            item.link === pathname ||
                                                            item.submenu?.some(
                                                                (child: { label: string; link: string }) =>
                                                                    child.link === pathname
                                                            )
                                                        }
                                                    >
                                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                                        <ListItemText>{t(item.label)}</ListItemText>
                                                        {hasChildren && (
                                                            <Box sx={{ width: 18, height: 18 }}>
                                                                {openMenu === item.label ? (
                                                                    <KeyboardArrowDownIcon
                                                                        sx={{ width: 18, height: 18 }}
                                                                    />
                                                                ) : (
                                                                    <KeyboardArrowUpIcon
                                                                        sx={{ width: 18, height: 18 }}
                                                                    />
                                                                )}
                                                            </Box>
                                                        )}
                                                    </ListItemButton>
                                                    {hasChildren && (
                                                        <Collapse
                                                            in={openMenu === item.label}
                                                            timeout="auto"
                                                            unmountOnExit
                                                        >
                                                            {item.submenu?.map((
                                                                child: {
                                                                    label: string;
                                                                    link: string;
                                                                },
                                                                childIndex: number
                                                            ) => (
                                                                <Box key={childIndex}>
                                                                    <ListItemButton
                                                                        component={Link}
                                                                        href={child.link}
                                                                        selected={pathname === child.link}
                                                                        sx={{
                                                                            paddingTop: "8px",
                                                                            paddingBottom: "8px",
                                                                            paddingLeft: "56px",
                                                                            paddingRight: "16px",
                                                                        }}
                                                                    >
                                                                        <ListItemText>{t(child.label)}</ListItemText>
                                                                    </ListItemButton>
                                                                </Box>
                                                            ))}
                                                        </Collapse>
                                                    )}
                                                </Box>
                                            )
                                        })}
                                    </Box>
                                ))}
                            </Box>
                        </List>
                    </SimpleBar>
                </Box>
                <Box
                    sx={{
                        paddingX: "calc(3 * var(--spacing))",
                        borderTop: "1px solid var(--template-palette-divider)",
                    }}
                >
                    <List>
                        <ListItem
                            sx={{
                                paddingY: "10px",
                                paddingX: "24px"
                            }}
                        >
                            <ListItemAvatar>
                                <Avatar
                                    sx={{
                                        width: "46px",
                                        height: "46px"
                                    }}
                                    src="https://keenthemes.com/keen/demo1/assets/media/avatars/300-3.jpg" alt=""/>
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography variant="body1">Sim Kimheang</Typography>
                                <Typography variant="body2"
                                    sx={{
                                        color: "var(--template-palette-text-secondary)"
                                    }}
                                >Administration</Typography>
                            </ListItemText>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </Box>
    )
}