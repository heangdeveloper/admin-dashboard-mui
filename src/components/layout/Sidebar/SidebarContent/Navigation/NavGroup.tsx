'use client';

import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import NavItem from "./NavItem";
import NavCollapse from "./NavCollapse";
import { useGetMenuMaster } from "@/api/menu";
import {useTranslations} from "next-intl";

interface MenuItem {
    id: string;
    title: string;
    type: "group" | "collapse" | "item";
    url?: string;
    icon?: React.ElementType;
    children?: MenuItem[];
}

interface NavGroupProps {
    item: MenuItem;
}

export default function NavGroup({ item }: NavGroupProps) {
    const t = useTranslations("sidebar");
    const { menuMaster } = useGetMenuMaster();
    const sidebarOpen = menuMaster.isDashboardSidebarOpened;

    const navCollapse = item.children?.map((sidebarItem) => {
        switch (sidebarItem.type) {
            case "collapse":
                return <NavCollapse key={sidebarItem.id} item={sidebarItem} level={1} />;
            case "item":
                return <NavItem key={sidebarItem.id} item={sidebarItem} level={1} />;
            default:
                return (
                    <Typography key={sidebarItem.id} variant="h6" sx={{ color: 'error.main', textAlign: 'center' }}>
                        Fix - Group Collapse or Items
                    </Typography>
                );
        }
    })

    return (
        <List
            subheader={
                item.title &&
                sidebarOpen && (
                    <Box sx={{ pl: 3, mb: 1.5 }}>
                        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                            {t(item.title)}
                        </Typography>
                    </Box>
                )
            }
            sx={{ mb: sidebarOpen ? 1.5 : 0, py: 0, zIndex: 0 }}
        >
            {navCollapse}
        </List>
    )
}