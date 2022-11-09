/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography } from '@mui/material';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';

import logo from '../logo.svg';

import { AppContext } from '../contexts';
import { APP_TITLE, PAGE_TITLE_HOME } from '../utils/constants';

export const Home = () => {
	const context = useContext(AppContext);

	return (
		<>
			<Helmet>
				<title>
					{PAGE_TITLE_HOME} | {APP_TITLE}
				</title>
			</Helmet>
			<Typography variant='h4'>{`Hello, ${context.user.name}`}</Typography>
			<div
				css={css`
					text-align: center;
					margin-top: 6rem;
				`}
			>
				<img
					css={css`
						height: 40vmin;
						pointer-events: none;
						@media (prefers-reduced-motion: no-preference) {
							animation: App-logo-spin infinite 15s linear;
						}
						@keyframes App-logo-spin {
							from {
								transform: rotate(0deg);
							}
							to {
								transform: rotate(360deg);
							}
						}
					`}
					src={logo}
					alt='logo'
				/>
			</div>
		</>
	);
};
