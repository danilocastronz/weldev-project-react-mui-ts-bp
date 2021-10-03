import NotificationsIcon from '@mui/icons-material/Notifications';

import { ActionItem } from '../ActionItem';

interface NotificationsProps {
  /* Total number of notifications */
  total: number;
}

export const Notifications = ({ total }: NotificationsProps) => (
  <ActionItem title="Notifications" icon={NotificationsIcon} onClick={() => {}} badgeContent={total} />
);
