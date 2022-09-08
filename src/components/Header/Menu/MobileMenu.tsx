import React, { useContext } from 'react';
import { Box, Menu, MenuItem } from '@mui/material';

import { Messages, Notifications, SignOut, Settings } from '../../Actions';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { ThemeModeContext } from '../../../contexts';

interface MobileMenuProps {
	isMenuOpen: boolean;
	handleMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
	handleMenuClose: () => void;
	anchorEl: HTMLElement | null;
}

export const MobileMenu = ({ isMenuOpen, handleMenuOpen, handleMenuClose, anchorEl }: MobileMenuProps) => {
	const { toggleThemeMode } = useContext(ThemeModeContext);

	return (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id='primary-search-account-menu-mobile'
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<Box sx={{ textAlign: 'center' }}>
				<MenuItem onClick={toggleThemeMode}>
					<ThemeSwitcher disableTooltip />
					Toggle Theme
				</MenuItem>
				<MenuItem onClick={handleMenuClose}>
					<Messages total={15} disableTooltip />
					Messages
				</MenuItem>
				<MenuItem onClick={handleMenuClose}>
					<Notifications total={20} disableTooltip />
					Notifications
				</MenuItem>
				<MenuItem onClick={handleMenuClose}>
					<Settings disableTooltip />
					Settings
				</MenuItem>
				<MenuItem onClick={handleMenuClose}>
					<SignOut disableTooltip onClick={() => alert('Signing out...')} />
					Sign Out
				</MenuItem>
			</Box>
		</Menu>
	);
};
