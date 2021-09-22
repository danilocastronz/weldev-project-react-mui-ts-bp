import styled from "@emotion/styled";
import Link from "@mui/material/Link";

// constants
import { FOOTER_TEXT, FOOTER_HEIGHT } from "../../utils/Constants";

export const Footer = () => (
  <FooterWrapper footerHeight={FOOTER_HEIGHT}>
    <FooterTextLink
      href={`${process.env.REACT_APP_API_URL}`}
      target="_blank"
      rel="noreferrer"
    >
      {FOOTER_TEXT}
    </FooterTextLink>
  </FooterWrapper>
);

const FooterWrapper = styled.div<{ footerHeight: number }>(
  (props) => `
 flex: 1;
      display: flex;
      justify-content: center;
      background: ${props.theme.palette.background.paper};
      minHeight: ${props.footerHeight};
`
);

const FooterTextLink = styled(Link)`
  text-transform: uppercase;
`;
