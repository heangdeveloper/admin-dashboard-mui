export const openSidebar = () => {
    if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.setProperty('--Sidebar-width', '260px');
        document.documentElement.style.setProperty('--Header-width', '260px');
    }
};

export const closeSidebar = () => {
    if (typeof document !== 'undefined') {
        document.documentElement.style.setProperty('--Sidebar-width', "0px");
        document.documentElement.style.setProperty('--Header-width', "0px");
        document.body.style.removeProperty('overflow');
    }
};

export const toggleSidebar = () => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const slideIn = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue('--Sidebar-width');
        if (slideIn.trim() === "260px") {
            closeSidebar();
        } else {
            openSidebar();
        }
    }
};