import { useState } from 'react';
import { Divide as HamburgerMenu } from 'hamburger-react';

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return <HamburgerMenu size={24} onToggle={toggle} toggled={isOpen} />;
};
