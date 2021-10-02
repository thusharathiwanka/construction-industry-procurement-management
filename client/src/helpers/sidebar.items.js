const sidebar_manager = [
	{
		display_name: "Dashboard",
		route: "/auth/manager/dashboard",
		icon: "bx bx-category-alt",
	},
	{
		display_name: "Inventory",
		route: "/auth/manager/inventory",
		icon: "bx bx-store",
	},
	{
		display_name: "Manage Users",
		route: "/auth/manager/users",
		icon: "bx bx-user",
	},
	{
		display_name: "Manage Sites",
		route: "/auth/manager/users",
		icon: "bx bx-buildings",
	},
	{
		display_name: "Manage Orders",
		route: "/auth/manager/orders",
		icon: "bx bx-bar-chart-square",
	},
	{
		display_name: "Manage Suppliers",
		route: "/auth/manager/users",
		icon: "bx bx-group",
	},
	{
		display_name: "Sign Out",
		route: "",
		icon: "bx bx-log-out",
	},
];

const sidebar_site_manager = [
	{
		display_name: "Dashboard",
		route: "/auth/sitemanager/dashboard",
		icon: "bx bx-category-alt",
	},
	{
		display_name: "Requisitions",
		route: "/auth/sitemanager/requisitions",
		icon: "bx bx-transfer",
	},
	{
		display_name: "Inventory",
		route: "/auth/sitemanager/inventory",
		icon: "bx bx-store",
	},
	{
		display_name: "Sign Out",
		route: "",
		icon: "bx bx-log-out",
	},
];

const sidebar_officer = [
	{
		display_name: "Dashboard",
		route: "/auth/sitemanager/dashboard",
		icon: "bx bx-category-alt",
	},
	{
		display_name: "Manage Orders",
		route: "/auth/manager/orders",
		icon: "bx bx-bar-chart-square",
	},
	{
		display_name: "Inventory",
		route: "/auth/sitemanager/inventory",
		icon: "bx bx-store",
	},
	{
		display_name: "Sign Out",
		route: "",
		icon: "bx bx-log-out",
	},
];

const sidebar_supplier = [
	{
		display_name: "Dashboard",
		route: "/auth/supplier/dashboard",
		icon: "bx bx-category-alt",
	},
	{
		display_name: "Manage Orders",
		route: "/auth/supplier/orders",
		icon: "bx bx-bar-chart-square",
	},
	{
		display_name: "Sign Out",
		route: "",
		icon: "bx bx-log-out",
	},
];
export {
	sidebar_manager,
	sidebar_site_manager,
	sidebar_officer,
	sidebar_supplier,
};
