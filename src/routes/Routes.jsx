import { createBrowserRouter } from "react-router-dom";

import { DashboardLayout } from "../layouts";
import { DashboardRoutes } from "./DashboardRoutes";

const AppRouteList = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: DashboardRoutes,
  },
];

const AppRouter = createBrowserRouter(AppRouteList);

export { AppRouteList, AppRouter };
