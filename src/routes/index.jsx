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
  Services,
  CustomerInfo,
  Licence,
  SendGrid,
  ServerGroups,
  ServerInfo,
  UserSettings,
  Login,
  FBCMaster,
  GeoCoding,
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
    path: "Services",
    icon: ServicesIcon,
    pages: [
      {
        path: "",
        component: <Services />,
      },
    ],
  },
  {
    name: "Reports",
    icon: ReportsIcon,
    pages: [
      {
        path: "GeoCoding",
        component: <GeoCoding />,
        icon: GeocodingIcon,
      },
      {
        path: "FBCMaster",
        component: <FBCMaster />,
        icon: FbcMasterIcon,
      },
    ],
  },

  {
    name: "Setup",
    icon: SetupIcon,
    pages: [
      {
        path: "CustomerInfo",
        component: <CustomerInfo />,
        icon: CustomerInfoIcon,
      },
      {
        path: "Licence",
        component: <Licence />,
        icon: LicenseIcon,
      },
      {
        path: "SendGrid",
        component: <SendGrid />,
        icon: SendGridIcon,
      },
      {
        path: "ServerGroups",
        component: <ServerGroups />,
        icon: ServerGroupsIcon,
      },
      {
        path: "ServerInfo",
        component: <ServerInfo />,
        icon: ServerInfoIcon,
      },
      {
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

      {/* Private Routes */}
      <Route path="/" element={<AuthGaurd />}>
        {ROUTES_MENU?.filter((item) => !item.hidden)?.map((item) => (
          <Route key={item.path} path={item.path} element={<Outlet />}>
            {item.pages.map((page) =>
              Array.isArray(page.path) ? (
                page.path.map((subPath) => (
                  <Route
                    key={subPath}
                    path={subPath}
                    element={page.component}
                  />
                ))
              ) : (
                <Route
                  key={page.path}
                  path={page.path}
                  index={!!page.path}
                  element={page.component}
                />
              )
            )}
          </Route>
        ))}
      </Route>
    </HistoryRouter>
  );
};

export default Routes;
