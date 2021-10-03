import MailIcon from '@mui/icons-material/Mail';

import { ActionItem } from '../ActionItem';

interface MessagesProps {
  /* Total number of unread messages */
  total: number;
}

export const Messages = ({ total }: MessagesProps) => (
  <ActionItem title="My Messages" icon={MailIcon} onClick={() => {}} badgeContent={total} />
);
