import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardSetting from "./pages/dashboard/DashboardSetting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      {
        // path: "",
        index: true, // 인덱스 라우트
        Component: DashboardHome,
      },
      {
        path: "setting", // dashboard/setting 을 적용하려면 <Outlet/> 설정 필요
        Component: DashboardSetting,
        children: [
          {
            path: "custom", // dashboard/setting/custom
            element: <h1>DashbottardSetting Hoeeme</h1>,
          },
        ],
      },
    ],
  },
]);
export default function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
