import { Badge, IconButton } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

interface MessagesProps {
  /* Total number of unread messages */
  total: number;
}

export const Messages = ({ total }: MessagesProps) => (
  <IconButton size="large" aria-label={`show ${total} new messages`} color="inherit">
    <Badge badgeContent={total} color="error">
      <MailIcon />
    </Badge>
  </IconButton>
);
