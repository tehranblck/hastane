export interface NavLink {
    id: number;
    title: string;
    path: string;
}

export const navLinks: NavLink[] = [
    {
        id: 1,
        title: "Hakkımızda",
        path: "/about"
    },
    {
        id: 2,
        title: "Hizmetler",
        path: "/services"
    },
    {
        id: 3,
        title: "Hastanelerimiz",
        path: "/hospitals"
    },
    {
        id: 4,
        title: "İletişim",
        path: "/contact"
    }
]; 