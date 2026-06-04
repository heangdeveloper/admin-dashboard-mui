import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const management = {
    id: "group-management",
    title: "management.name",
    type: "group",
    children: [
        {
            id: 'customers',
            title: 'management.item.customers.name',
            type: 'collapse',
            icon: PeopleAltOutlinedIcon,
            breadcrumbs: false,
            children: [
                {
                    id: "membership",
                    title: "management.item.customers.subMenu.membership",
                    type: "item",
                    url: "/membership",
                    breadcrumbs: false,
                },
                {
                    id: "walkin",
                    title: "management.item.customers.subMenu.walkin",
                    type: "item",
                    url: "/walkin",
                    breadcrumbs: false,
                },
            ],
        },
        {
            id: 'e-commerce',
            title: 'management.item.e-commerce.name',
            type: 'collapse',
            icon: ShoppingCartOutlinedIcon,
            breadcrumbs: false,
            children: [
                {
                    id: "category",
                    title: "management.item.e-commerce.subMenu.categorie",
                    type: "item",
                    url: "/category",
                    breadcrumbs: false,
                },
                {
                    id: "product",
                    title: "management.item.e-commerce.subMenu.product",
                    type: "item",
                    url: "/product",
                    breadcrumbs: false,
                },
            ],
        },
        {
            id: 'gym',
            title: 'management.item.gym.name',
            type: 'collapse',
            icon: FitnessCenterOutlinedIcon,
            breadcrumbs: false,
            children: [
                {
                    id: "package",
                    title: "management.item.gym.subMenu.package",
                    type: "item",
                    url: "/package",
                    breadcrumbs: false,
                },
                {
                    id: "trainer",
                    title: "management.item.gym.subMenu.trainer",
                    type: "item",
                    url: "/trainer",
                    breadcrumbs: false,
                },
                {
                    id: "class",
                    title: "management.item.gym.subMenu.classe",
                    type: "item",
                    url: "/class",
                    breadcrumbs: false,
                },
                {
                    id: "branch",
                    title: "management.item.gym.subMenu.branch",
                    type: "item",
                    url: "/branch",
                    breadcrumbs: false,
                }
            ],
        },
        {
            id: 'authentication',
            title: 'management.item.authentication.name',
            type: 'collapse',
            icon: PersonOutlinedIcon,
            breadcrumbs: false,
            children: [
                {
                    id: "user",
                    title: "management.item.authentication.subMenu.user",
                    type: "item",
                    url: "/user",
                    breadcrumbs: false,
                },
                {
                    id: "role",
                    title: "management.item.authentication.subMenu.role",
                    type: "item",
                    url: "/role",
                    breadcrumbs: false,
                },
                {
                    id: "permission",
                    title: "management.item.authentication.subMenu.permission",
                    type: "item",
                    url: "/permission",
                    breadcrumbs: false,
                }
            ],
        }
    ]
}

export default management;
