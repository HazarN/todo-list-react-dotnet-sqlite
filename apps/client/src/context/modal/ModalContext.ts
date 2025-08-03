import { createContext } from 'react';

type ModalContextType = {
  openModal: (initialNote: string) => void;
  closeModal: () => void;
  isOpen: boolean;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);
export default ModalContext;
