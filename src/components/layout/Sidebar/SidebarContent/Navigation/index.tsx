import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import NavGroup from "@/components/layout/Sidebar/SidebarContent/Navigation/NavGroup"
import sidebarItem from "@/components/layout/Sidebar/SidebarContent/SidebarItem";

export default function Navigation() {
    const navGroups = sidebarItem.items.map((item) => {
        switch (item.type) {
            case "group":
                return <NavGroup key={item.id} item={item}/>
            default:
                return (
                    <Typography key={item.id} variant="h6" sx={{ color: 'error.main', textAlign: 'center' }}>
                        Fix - Navigation Group
                    </Typography>
                )
        }
    })

    return (
        <Box
            sx={(theme) => ({
                display: "block",
                paddingTop: theme.spacing(2)
            })}
        >
            {navGroups}
        </Box>
    );
}