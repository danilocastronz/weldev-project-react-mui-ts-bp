/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { APP_TITLE } from '../../../utils/constants';

export const AppTitle = () => (
	<NavLink
		to='/'
		css={css`
			text-decoration: none;
			color: inherit;
		`}
	>
		<Typography
			variant='h6'
			noWrap
			css={css`
				display: {
					xs: none;
					sm: block;
				}
				cursor: pointer;
			`}
		>
			{APP_TITLE}
		</Typography>
	</NavLink>
);
