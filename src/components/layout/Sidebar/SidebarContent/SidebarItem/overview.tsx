import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

const overview = {
    id: "group-overview",
    title: "overview.name",
    type: "group",
    children: [
        {
            id: 'dashboard',
            title: 'overview.item.dashboard',
            type: 'item',
            url: '/dashboard',
            icon: DashboardOutlinedIcon,
            breadcrumbs: false
        }
    ]
}

export default overview;