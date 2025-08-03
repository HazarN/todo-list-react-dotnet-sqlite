import { createContext } from 'react';

type ModalContextType = {
  openModal: (initialNote: string) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);
export default ModalContext;
