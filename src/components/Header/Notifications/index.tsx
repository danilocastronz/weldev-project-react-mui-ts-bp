import { Badge, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

interface NotificationsProps {
  /* Total number of notifications */
  total: number;
}

export const Notifications = ({ total }: NotificationsProps) => (
  <IconButton size="large" aria-label={`show ${total} new notifications`} color="inherit">
    <Badge badgeContent={total} color="error">
      <NotificationsIcon />
    </Badge>
  </IconButton>
);
