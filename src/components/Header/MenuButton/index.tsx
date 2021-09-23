import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

export const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return <Hamburger size={24} onToggle={toggle} toggled={isOpen} />;
};
