'use client';
import * as React from 'react';
import { usePathname } from "next/navigation";

import Box from '@mui/system/Box';
import List from "@mui/material/List";

import { useGetMenuMaster} from "@/api/menu";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import {MenuItem} from "@/components/layout/Sidebar/menuItem";
import {useTranslations} from "next-intl";

import Navigation from "./Navigation/index"

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

export default function SidebarContent() {
    const pathname = usePathname();
    const t = useTranslations("sidebar");
    const [openMenu, setOpenMenu] = React.useState<string | null>(null);

    const { menuMaster } = useGetMenuMaster();
    const sidebarOpen = menuMaster.isDashboardSidebarOpened;

    React.useEffect(() => {
        MenuItem.forEach((group) => {
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
        <>
            <Box
                sx={{
                    flexGrow: 1
                }}
            >
                <SimpleBar>
                    <Navigation/>
                </SimpleBar>
            </Box>
        </>
    )
}