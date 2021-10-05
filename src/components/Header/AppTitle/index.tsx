import { styled, Typography } from '@mui/material';

import { APP_TITLE } from '../../../utils/constants';

export const AppTitle = () => (
  <StyledAppTitle variant="h6" noWrap>
    {APP_TITLE}
  </StyledAppTitle>
);

const StyledAppTitle = styled(Typography)`
  display: {
    xs: none;
    sm: block;
  }
  cursor: default;
`;
