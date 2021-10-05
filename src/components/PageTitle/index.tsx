import { styled, Typography } from '@mui/material';

export const PageTitle = ({ title }: { title: string }) => (
  <StyledPageTitle variant="h2" component="h3" color="textSecondary">
    {title}
  </StyledPageTitle>
);

const StyledPageTitle = styled(Typography)<{ component: string }>`
  text-transform: uppercase;
`;
