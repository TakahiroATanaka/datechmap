import { createContext } from 'react';

export const MenuContext = createContext(
  {} as {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  },
);
