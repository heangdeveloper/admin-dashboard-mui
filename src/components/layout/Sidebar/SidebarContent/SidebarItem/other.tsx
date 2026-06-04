import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const other = {
    id: "group-other",
    title: "other.name",
    type: "group",
    children: [
        {
            id: 'report',
            title: 'other.item.report.name',
            type: 'collapse',
            icon: Inventory2OutlinedIcon,
            breadcrumbs: false,
            children: [
                {
                    id: "membership_report",
                    title: "other.item.report.subMenu.membership_report",
                    type: "item",
                    url: "/membership",
                    breadcrumbs: false,
                },
                {
                    id: "revenue_report",
                    title: "other.item.report.subMenu.revenue_report",
                    type: "item",
                    url: "/walkin",
                    breadcrumbs: false,
                },
                {
                    id: "payment_report",
                    title: "other.item.report.subMenu.payment_report",
                    type: "item",
                    url: "/walkin",
                    breadcrumbs: false,
                },
                {
                    id: "expense_report",
                    title: "other.item.report.subMenu.expense_report",
                    type: "item",
                    url: "/walkin",
                    breadcrumbs: false,
                },
            ],
        },
        {
            id: 'setting',
            title: 'other.item.setting.name',
            type: 'item',
            url: '/setting',
            icon: SettingsOutlinedIcon,
            breadcrumbs: false
        }
    ]
}

export default other;