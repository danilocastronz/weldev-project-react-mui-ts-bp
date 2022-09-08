import { useState } from 'react';
import { Divide as HamburgerMenu } from 'hamburger-react';

interface HamburgerProps {
	toggleNavigation: () => void;
}

export const Hamburger = ({ toggleNavigation }: HamburgerProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
		toggleNavigation();
	};

	return <HamburgerMenu size={24} onToggle={toggle} toggled={isOpen} />;
};
