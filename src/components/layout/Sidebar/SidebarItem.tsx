"use client"

import * as React from 'react'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

export const SideBarItem = [
    {
        group: "overview.name",
        items: [
            {
                label: "overview.item.dashboard",
                icon: <DashboardOutlinedIcon />,
                link: "/dashboard",
            }
        ]
    },
    {
        group: "management.name",
        items: [
            {
                label: "management.item.customers.name",
                icon: <PeopleAltOutlinedIcon />,
                submenu: [
                    {
                        label: "management.item.customers.subMenu.membership",
                        link: "/membership"
                    },
                    {
                        label: "management.item.customers.subMenu.walkin",
                        link: "/walkin"
                    }
                ]
            },
            {
                label: "management.item.e-commerce.name",
                icon: <ShoppingCartOutlinedIcon />,
                submenu: [
                    {
                        label: "management.item.e-commerce.subMenu.categorie",
                        link: "/category"
                    },
                    {
                        label: "management.item.e-commerce.subMenu.product",
                        link: "/product"
                    }
                ]
            },
            {
                label: "management.item.gym.name",
                icon: <FitnessCenterOutlinedIcon />,
                submenu: [
                    {
                        label: "management.item.gym.subMenu.package",
                        link: "/package"
                    },
                    {
                        label: "management.item.gym.subMenu.trainer",
                        link: "/trainer"
                    },
                    {
                        label: "management.item.gym.subMenu.classe",
                        link: "/class"
                    },
                    {
                        label: "management.item.gym.subMenu.branch",
                        link: "/branch"
                    }
                ]
            },
            {
                label: "management.item.authentication.name",
                icon: <PersonOutlinedIcon />,
                submenu: [
                    {
                        label: "management.item.authentication.subMenu.user",
                        link: "/user"
                    },
                    {
                        label: "management.item.authentication.subMenu.role",
                        link: "/role"
                    },
                    {
                        label: "management.item.authentication.subMenu.permission",
                        link: "/permission"
                    }
                ]
            }
        ]
    }
]