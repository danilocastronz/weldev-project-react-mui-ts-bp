import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

export const PageTitle = ({ title }: { title: string }) => (
  <StyledPageTitle variant="h1" component="h2" color="textSecondary">
    {title}
  </StyledPageTitle>
);

const StyledPageTitle = styled(Typography)<{ component: string }>`
  text-transform: uppercase;
`;
