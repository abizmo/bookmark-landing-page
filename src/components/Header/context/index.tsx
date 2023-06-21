import { PropsWithChildren, createContext, useContext, useState } from 'react';

interface HeaderContextType {
  isOpen: boolean;
  closeMenu: () => void;
  toggleMenu: () => void;
}

const HeaderContext = createContext<HeaderContextType | null>(null);

export default function HeaderProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const value = { isOpen, closeMenu, toggleMenu };

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useHeader() {
  const context = useContext(HeaderContext);

  if (!context) throw new Error('must be used within a HeaderProvider');

  return context;
}
