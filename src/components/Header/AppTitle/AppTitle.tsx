import { Button, styled, Typography } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

import { APP_TITLE } from '../../../utils/constants';

export const AppTitle = () => (
	<StyledNavLink to='/'>
		<StyledAppTitle variant='h6' noWrap>
			{APP_TITLE}
		</StyledAppTitle>
	</StyledNavLink>
);

const StyledAppTitle = styled(Typography)`
	display: {
		xs: none;
		sm: block;
	}
	cursor: pointer;
`;

const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	color: inherit;
`;
