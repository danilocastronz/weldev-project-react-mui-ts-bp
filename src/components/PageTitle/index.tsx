import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps) => (
  <StyledPageTitle variant="h4" color="textSecondary">
    {title}
  </StyledPageTitle>
);

const StyledPageTitle = styled(Typography)`
  text-transform: uppercase;
`;
