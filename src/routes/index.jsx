import { Outlet, Route } from "react-router-dom";

import AuthGaurd from "./AuthGuard.jsx";
import { HistoryRouter } from "./HistoryRouter.jsx";

import {
  DashboardIcon,
  ReportsIcon,
  ServicesIcon,
  SetupIcon,
  SendGridIcon,
  CustomerInfoIcon,
  LicenseIcon,
  ServerGroupsIcon,
  ServerInfoIcon,
  UserSettingsIcon,
  FbcMasterIcon,
  GeocodingIcon,
} from "../assets";
import {
  Dashboard,
  Reports,
  CustomerInfo,
  Licence,
  SendGrid,
  ServerGroups,
  ServerInfo,
  UserSettings,
  Login,
  FBCMaster,
  GeoCoding,
  UserAccount,
} from "../pages";

export const ROUTES_MENU = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: DashboardIcon,
    pages: [
      {
        path: "",
        component: <Dashboard />,
      },
    ],
  },
  {
    name: "Services",
    icon: ServicesIcon,
    pages: [
      {
        name: "GeoCoding",
        path: "GeoCoding",
        component: <GeoCoding />,
        icon: GeocodingIcon,
      },
      {
        name: "FBC Master",
        path: "FBCMaster",
        component: <FBCMaster />,
        icon: FbcMasterIcon,
      },
    ],
  },
  {
    name: "Reports",
    path: "Reports",
    icon: ReportsIcon,
    pages: [
      {
        path: "",
        component: <Reports />,
      },
    ],
  },

  {
    name: "Setup",
    icon: SetupIcon,
    pages: [
      {
        name: "Licence Management",
        path: "Licence",
        component: <Licence />,
        icon: LicenseIcon,
      },
      {
        name: "Server Groups",
        path: "ServerGroups",
        component: <ServerGroups />,
        icon: ServerGroupsIcon,
      },
      {
        name: "Server Info",
        path: "ServerInfo",
        component: <ServerInfo />,
        icon: ServerInfoIcon,
      },
      {
        name: "Send Grid",
        path: "SendGrid",
        component: <SendGrid />,
        icon: SendGridIcon,
      },
      {
        name: "Customer Info",
        path: "CustomerInfo",
        component: <CustomerInfo />,
        icon: CustomerInfoIcon,
      },
      {
        name: "User Settings",
        path: "UserSettings",
        component: <UserSettings />,
        icon: UserSettingsIcon,
      },
    ],
  },
];

const Routes = () => {
  return (
    <HistoryRouter>
      <Route path="/" element={<Login />} />

      <Route path="/" element={<AuthGaurd />}>
        {ROUTES_MENU?.filter((item) => !item.hidden)?.map((item, i) => (
          <Route key={i} path={item.path} element={<Outlet />}>
            {item.pages.map((page) =>
              Array.isArray(page.path) ? (
                page.path.map((subPath) => (
                  <Route
                    key={`${item.path}-${subPath}`}
                    path={subPath}
                    element={page.component}
                  />
                ))
              ) : (
                <Route
                  key={`${item.path}-${page.path || "index"}`}
                  path={page.path}
                  index={!!page.path}
                  element={page.component}
                />
              )
            )}
          </Route>
        ))}
        <Route path="UserAccount" element={<UserAccount />} />
      </Route>
    </HistoryRouter>
  );
};

export default Routes;
