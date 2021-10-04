import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

export const PageTitle = ({ title }: { title: string }) => (
  <StyledPageTitle variant="h4" color="textSecondary">
    {title}
  </StyledPageTitle>
);

const StyledPageTitle = styled(Typography)`
  text-transform: uppercase;
`;
