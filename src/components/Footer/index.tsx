import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

import { FOOTER_TEXT, FOOTER_HEIGHT } from '../../utils/constants';

export const Footer = () => (
  <FooterWrapper footerHeight={FOOTER_HEIGHT}>
    <FooterText variant="caption">{FOOTER_TEXT}</FooterText>
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

const FooterText = styled(Typography)`
  word-spacing: 0.1rem;
  text-transform: uppercase;
`;
