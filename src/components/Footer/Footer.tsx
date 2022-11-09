/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography, useTheme } from '@mui/material';

import { FOOTER_TEXT, FOOTER_HEIGHT } from '../../utils/constants';

export const Footer = () => {
	const theme = useTheme();
	return (
		<div
			css={css`
				flex: 1;
				display: flex;
				justify-content: center;
				background: ${theme.palette.background.paper};
				min-height: ${FOOTER_HEIGHT};
			`}
		>
			<Typography
				css={css`
					word-spacing: 0.1rem;
					text-transform: uppercase;
				`}
				variant='caption'
				color='textSecondary'
			>
				{FOOTER_TEXT}
			</Typography>
		</div>
	);
};
