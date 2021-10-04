import React from 'react';
import {
  More as MoreIcon,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  Fingerprint as FingerprintIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
  List as PreferencesIcon,
} from '@mui/icons-material';

import { ActionItem } from './ActionItem';

interface ActionProps {
  total?: number;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Messages = ({ total, onClick }: ActionProps) => (
  <ActionItem title="My Messages" icon={MailIcon} onClick={onClick} badgeContent={total} />
);

export const More = ({ onClick }: ActionProps) => <ActionItem title="More" icon={MoreIcon} onClick={onClick} />;

export const Notifications = ({ total, onClick }: ActionProps) => (
  <ActionItem title="Notifications" icon={NotificationsIcon} onClick={onClick} badgeContent={total} />
);

export const UserAccount = ({ onClick }: ActionProps) => (
  <ActionItem title="My Account" icon={FingerprintIcon} onClick={onClick} />
);

export const SignOut = ({ onClick }: ActionProps) => (
  <ActionItem title="Sign Out" icon={LogoutIcon} onClick={onClick} />
);

export const Settings = ({ onClick }: ActionProps) => (
  <ActionItem title="Settings" icon={SettingsIcon} onClick={onClick} />
);

export const Preferences = ({ onClick }: ActionProps) => (
  <ActionItem title="Preferences" icon={PreferencesIcon} onClick={onClick} />
);
