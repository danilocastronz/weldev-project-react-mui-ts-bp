import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

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
