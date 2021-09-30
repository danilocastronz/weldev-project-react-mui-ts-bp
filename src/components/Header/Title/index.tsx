import { Typography } from '@mui/material';

import { APP_TITLE } from '../../../utils/constants';

export const Title = () => (
  <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
    {APP_TITLE}
  </Typography>
);
