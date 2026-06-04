'use client';

import * as React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import ListItemButton from "@mui/material/ListItemButton";

import { useTranslations } from "next-intl";

import { handlerSidebarOpen, useGetMenuMaster } from "@/api/menu";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";

interface NavItemData {
    id?: string | number;
    title: string;
    url: string;
    icon?: React.ElementType;
    target?: boolean;
    disabled?: boolean;
}

interface NavItemProps {
    item: NavItemData;
    level: number;
    isParents?: boolean;
    setSelectedID?: (id: string | number | undefined) => void;
}

export default function NavItem({
    item,
    level,
    isParents = false,
    setSelectedID
}: NavItemProps) {
    const t = useTranslations("sidebar");
    const { menuMaster } = useGetMenuMaster();
    const sidebarOpen = menuMaster.isDashboardSidebarOpened;
    const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    const itemTarget = item.target ? '_blank' : '_self';

    const itemHandler = () => {
        if (downLG) handlerSidebarOpen(false);

        if (isParents && setSelectedID) {
            setSelectedID(item.id);
        }
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

    const pathname = usePathname();
    const isSelected = item.url === pathname || (item.url !== '/' && pathname.startsWith(item.url));
    return (
        <>
            <ListItemButton
                component={Link}
                href={item.url}
                target={itemTarget}
                disabled={item.disabled}
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
                onClick={() => itemHandler()}
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
                                sx={(theme) => ({
                                    color: isSelected ? (theme.vars || theme).palette.primary.main : (theme.vars || theme).palette.text.primary
                                })}
                            >
                                {t(item.title)}
                            </Typography>
                        }
                    >
                    </ListItemText>
                )}
            </ListItemButton>
        </>
    )
}