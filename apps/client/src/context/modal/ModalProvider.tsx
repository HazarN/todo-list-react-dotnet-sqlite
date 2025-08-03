import { useState, type ReactNode } from 'react';

import AddTodoModal from '@app/features/AddTodoModal';

import ModalContext from './ModalContext';

type Props = {
  children: ReactNode;
};
function ModalProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialNote, setInitialNote] = useState('');

  const openModal = (note: string) => {
    setInitialNote(note);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
      {isOpen && <AddTodoModal initialNote={initialNote} onClose={closeModal} />}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
