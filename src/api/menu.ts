'use client';

import * as React from "react";
import useSWR, { mutate } from "swr";

const initialState = {
    isDashboardSidebarOpened: false
};

const endpoints = {
    key: "api/menu",
    master: "master",
    dashboard: "/dashboard"
};

export function useGetMenuMaster() {
    const { data, isLoading } = useSWR(endpoints.key + endpoints.master, () => initialState, {
        fallbackData: initialState,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    const memoizedValue = React.useMemo(
        () => ({
            menuMaster: data || initialState,
            menuMasterLoading: isLoading
        }),
        [data, isLoading]
    )

    return memoizedValue;
}

export function handlerSidebarOpen(isDashboardSidebarOpened: boolean) {
    mutate(
        endpoints.key + endpoints.master,
        (currentMenuMaster) => {
            return { ...currentMenuMaster, isDashboardSidebarOpened };
        },
        false
    );
}
