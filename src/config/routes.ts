import {
  Home as HomeIcon,
  BarChartOutlined as DashboardIcon,
  CodeOutlined as CodeIcon,
  GitHub as GitHubIcon,
  Public as PublicIcon,
  PublicOff as PrivateIcon,
  AccountBoxRounded as UserIcon,
  SettingsOutlined as SettingsIcon,
  ListAlt as ListIcon,
  LogoutRounded as LogoutIcon,
} from '@mui/icons-material';

import { Home } from '../pages/Home';

import { Route } from '../types/Route';

// define app routes
const routes: Array<Route> = [
  {
    key: 'router-home',
    title: 'Home',
    description: 'Home',
    component: Home,
    path: '/',
    isEnabled: true,
    icon: HomeIcon,
    appendDivider: true,
  },
  {
    key: 'router-dashboard',
    title: 'Dashboard',
    description: 'Dashboard',
    path: '/dashboard',
    isEnabled: true,
    icon: DashboardIcon,
  },
  {
    key: 'router-gh',
    title: 'GitHub',
    description: 'GitHub',
    isEnabled: true,
    icon: GitHubIcon,
    subRoutes: [
      {
        key: 'router-gh-public',
        title: 'Public Repos',
        description: 'Public Repos',
        path: '/gh/public',
        isEnabled: true,
        icon: PublicIcon,
      },
      {
        key: 'router-gh-private',
        title: 'Private Repos',
        description: 'Private Repos',
        path: '/gh/private',
        isEnabled: false,
        icon: PrivateIcon,
      },
    ],
  },
  {
    key: 'router-code',
    title: 'Code Editor',
    description: 'Code Editor',
    path: '/code-editor',
    isEnabled: true,
    icon: CodeIcon,
    appendDivider: true,
  },
  {
    key: 'router-my-account',
    title: 'My Account',
    description: 'My Account',
    path: '/account',
    isEnabled: true,
    icon: UserIcon,
    subRoutes: [
      {
        key: 'router-settings',
        title: 'Settings',
        description: 'Account Settings',
        path: '/account/settings',
        isEnabled: true,
        icon: SettingsIcon,
      },
      {
        key: 'router-preferences',
        title: 'Preferences',
        description: 'Account Preferences',
        path: '/account/preferences',
        isEnabled: true,
        icon: ListIcon,
      },
      {
        key: 'router-logout',
        title: 'Sign Out',
        description: 'Sign Out',
        path: '/account/sign-out',
        isEnabled: true,
        icon: LogoutIcon,
      },
    ],
  },
];

export default routes;
