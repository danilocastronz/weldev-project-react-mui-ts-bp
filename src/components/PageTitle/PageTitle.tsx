/** @jsxImportSource @emotion/react */
import { Typography } from '@mui/material';
import { css } from '@emotion/react';

export const PageTitle = ({ title }: { title: string }) => (
	<Typography
		css={css`
			text-transform: uppercase;
		`}
		variant='h2'
		component='h3'
		color='textSecondary'
	>
		{title}
	</Typography>
);
