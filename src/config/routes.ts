import {
  Home as HomeIcon,
  BarChartOutlined as DashboardIcon,
  CodeOutlined as CodeIcon,
  SettingsOutlined as SettingsIcon,
  GitHub as GitHubIcon,
  Public as PublicIcon,
  PublicOff as PrivateIcon,
} from "@mui/icons-material";

import { Home } from "../pages/Home";
import { Dashboard } from "../pages/Dashboard";
import { GitHubPrivate } from "../pages/GitHub/PrivateRepo";
import { GitHubPublic } from "../pages/GitHub/PublicRepo";
import { CodeEditor } from "../pages/CodeEditor";
import { Settings } from "../pages/Settings";

import { Route } from "../types/Route";

// define app routes
const routes: Array<Route> = [
  {
    key: "router-home",
    title: "Home",
    description: "Home",
    path: "/",
    isEnabled: true,
    component: Home,
    icon: HomeIcon,
    appendDivider: true,
  },
  {
    key: "router-dashboard",
    title: "Dashboard",
    description: "Dashboard",
    path: "/dashboard",
    isEnabled: true,
    component: Dashboard,
    icon: DashboardIcon,
  },
  {
    key: "router-gh",
    title: "GitHub",
    description: "GitHub",
    isEnabled: true,
    icon: GitHubIcon,
    subRoutes: [
      {
        key: "router-gh-private",
        title: "Private Repos",
        description: "Private Repos",
        path: "/gh/private",
        isEnabled: true,
        component: GitHubPrivate,
        icon: PrivateIcon,
      },
      {
        key: "router-gh-public",
        title: "Public Repos",
        description: "Public Repos",
        path: "/gh/public",
        isEnabled: false,
        component: GitHubPublic,
        icon: PublicIcon,
      },
    ],
  },
  {
    key: "router-code",
    title: "Code Editor",
    description: "Code Editor",
    path: "/code-editor",
    isEnabled: true,
    component: CodeEditor,
    icon: CodeIcon,
    appendDivider: true,
  },
  {
    key: "router-settings",
    title: "Settings",
    description: "Settings",
    path: "/settings",
    isEnabled: true,
    component: Settings,
    icon: SettingsIcon,
  },
];

export default routes;
