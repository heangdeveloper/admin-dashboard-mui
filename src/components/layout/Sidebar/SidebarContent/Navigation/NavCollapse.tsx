'use client';

import * as React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

import Box from '@mui/system/Box';
import List from '@mui/material/List';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import Collapse from '@mui/material/Collapse';
import useMediaQuery from "@mui/material/useMediaQuery";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { useTranslations } from "next-intl";
import { handlerSidebarOpen, useGetMenuMaster } from "@/api/menu";

interface MenuItem {
    id: string;
    title: string;
    type: 'collapse' | 'item';
    url?: string;
    target?: boolean;
    icon?: React.ElementType;
    children?: MenuItem[];
}

interface NavCollapseProps {
    item: MenuItem;
    isParents?: boolean;
    level: number;
    setSelectedID?: (id: string | number | undefined) => void;
}

export default function NavCollapse({
    item,
    level,
    isParents = false,
    setSelectedID
}: NavCollapseProps) {
    const t = useTranslations("sidebar");
    const { menuMaster } = useGetMenuMaster();
    const sidebarOpen = menuMaster.isDashboardSidebarOpened;
    const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    const itemTarget = item.target ? '_blank' : '_self';
    const pathname = usePathname();
    const [open, setOpen] = React.useState(false);

    const handleToggle = () => {
        setOpen((prev) => !prev);
    };

    const Icon = item.icon;
    const itemIcon = Icon ? (
        <Icon
            style={{
                fontSize: sidebarOpen ? '1rem' : '1.25rem',
                ...(isParents && {
                    fontSize: 20,
                    stroke: '1.5'
                })
            }}
        />
    ) : null;

    React.useEffect(() => {
        const matched = item.children?.some(
            (child) =>
                child.url === pathname ||
                (child.url &&
                    pathname.startsWith(child.url))
        );

        if (matched) {
            setOpen(true);
        }
    }, [pathname, item.children]);

    const isSelected = item.url === pathname || (item.url !== '/' && pathname.startsWith(item.url));

    return (
        <>
            <ListItemButton
                selected={isSelected}
                sx={(theme) => ({
                    zIndex: 1201,
                    pl: sidebarOpen ? `${level * 28}px` : 1.5,
                    py: !sidebarOpen && level === 1 ? 1.25 : 1,
                    ...(sidebarOpen && {
                        "&:hover": {
                            backgroundColor: (theme.vars || theme).palette.primary.lightest
                        },
                        "&.Mui-selected": {
                            color: (theme.vars || theme).palette.primary.main,
                            borderRightWidth: "2px",
                            borderRightStyle: "solid",
                            borderRightColor: (theme.vars || theme).palette.primary.main,
                            backgroundColor: (theme.vars || theme).palette.primary.lightest,
                            "&:hover": {
                                color: (theme.vars || theme).palette.primary.main,
                                backgroundColor: (theme.vars || theme).palette.primary.lightest
                            }
                        },
                    }),
                    ...(!sidebarOpen && {
                        "&:hover": {
                            backgroundColor: "transparent"
                        },
                        "&.Mui-selected": {
                            backgroundColor: "transparent",
                            "&:hover": {
                                backgroundColor: "transparent"
                            }
                        }
                    })
                })}
            >
                {itemIcon && (
                    <ListItemIcon
                        sx={(theme) => ({
                            minWidth: 28,
                            color: isSelected ? (theme.vars || theme).palette.primary.main : (theme.vars || theme).palette.text.primary,
                            ...(!sidebarOpen && {
                                borderRadius: 1.5,
                                width: 36,
                                height: 36,
                                alignItems: 'center',
                                justifyContent: 'center',
                                '&:hover': {
                                    backgroundColor: (theme.vars || theme).palette.secondary.lightest
                                }
                            }),
                            ...(!sidebarOpen &&
                                isSelected && {
                                    backgroundColor: (theme.vars || theme).palette.primary.lightest,
                                    '&:hover': {
                                        backgroundColor: (theme.vars || theme).palette.primary.lightest
                                    }
                                })
                        })}
                    >
                        {itemIcon}
                    </ListItemIcon>
                )}
                {(sidebarOpen || (!sidebarOpen && level !== 1)) && (
                    <ListItemText
                        primary={
                            <Typography
                                variant="h6"
                            >
                                {t(item.title)}
                            </Typography>
                        }
                    >
                    </ListItemText>
                )}
            </ListItemButton>
            <Collapse
                in={open}
                timeout="auto"
                unmountOnExit
            >
                <List>
                    {item.children?.map((child) => {
                        const selected = child.url === pathname;
                        return (
                            <ListItemButton
                                key={child.id}
                                component={Link}
                                href={child.url || '#'}
                                selected={selected}
                                sx={{
                                    paddingTop: "8px",
                                    paddingBottom: "8px",
                                    paddingLeft: "56px",
                                    paddingRight: "16px",
                                }}
                            >
                                <ListItemText
                                    primary={t(child.title)}
                                />
                            </ListItemButton>
                        )
                    })}
                </List>
            </Collapse>
        </>
    )
}