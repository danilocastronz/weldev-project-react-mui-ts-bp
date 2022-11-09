/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
	Icon,
	IconButton,
	lighten,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Tooltip,
	useTheme,
} from '@mui/material';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { Route } from '../../../../types';

interface RouteItemProps {
	route: Route;
	nested?: boolean;
	hasChildren?: boolean;
	handleMenuClick?: (route: Route) => void;
}

export const RouteItem = ({
	route,
	nested = false,
	hasChildren = false,
	handleMenuClick = () => {},
}: RouteItemProps) => {
	const location = useLocation();
	const theme = useTheme();

	const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		if (!route.isEnabled || hasChildren) e.preventDefault();
	};

	const isSelected =
		location.pathname === route.path || (hasChildren && route.subRoutes?.some((e) => location.pathname === e.path));

	const item = (
		<ListItemButton
			css={css`
				pl: ${nested ? 3 : 1};
				cursor: ${!route.isEnabled ? 'not-allowed' : 'auto'};
				color: ${!route.isEnabled ? theme.palette.text.secondary : 'auto'};
			`}
			onClick={() => handleMenuClick(route)}
		>
			<ListItemIcon>
				<IconButton
					size='small'
					css={css`
						box-shadow: ${isSelected ? `0 0 0 2px ${lighten(theme.palette.primary.main, 0.6)}` : 'default'};
						transition: 'box-shadow 0.1s';
					`}
				>
					{route.icon && (
						<Icon
							component={route.icon}
							css={css`
								color: ${isSelected && theme.palette.primary.main};
							`}
						/>
					)}
				</IconButton>
			</ListItemIcon>
			<ListItemText primary={route.title} />
			{hasChildren && (route.expanded ? <ExpandLess /> : <ExpandMore />)}
		</ListItemButton>
	);

	return (
		<NavLink
			to={`${route.path}`}
			key={route.key}
			onClick={handleNavigate}
			css={css`
				text-decoration: none;
				color: inherit;
			`}
		>
			{route.description ? (
				<Tooltip title={`${route.description}${!route.isEnabled ? ' (Not Allowed)' : ''}`} placement='right'>
					{item}
				</Tooltip>
			) : (
				item
			)}
		</NavLink>
	);
};
