"use client";

import PropTypes from 'prop-types';

import DashboardLayout from "@/components/layout/index";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>
    )
}

Layout.propTypes = { children: PropTypes.node };