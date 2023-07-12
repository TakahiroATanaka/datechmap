import { createContext } from 'react';

export const MenuContext = createContext(
  {} as {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    shouldFocusVisible: boolean;
    setShouldFocusVisible: React.Dispatch<React.SetStateAction<boolean>>;
    scrollYPosition: number;
    setScrollYPosition: React.Dispatch<React.SetStateAction<number>>;
  },
);
