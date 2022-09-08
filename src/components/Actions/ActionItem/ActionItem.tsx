import React, { ComponentType } from 'react';
import { IconButton, Tooltip } from '@mui/material';

import { ActionIcon } from '../ActionIcon';

interface ActionItemProps {
	title: string;
	icon: ComponentType;
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
	badgeContent?: number;
	disableTooltip?: boolean;
}

export const ActionItem = ({ title, icon, onClick, badgeContent, disableTooltip = false }: ActionItemProps) => {
	const buttonIcon = (
		<IconButton size='large' color='inherit' onClick={onClick}>
			<ActionIcon badgeContent={badgeContent} icon={icon} />
		</IconButton>
	);

	return disableTooltip ? (
		buttonIcon
	) : (
		<Tooltip title={title} placement='bottom' arrow>
			{buttonIcon}
		</Tooltip>
	);
};
