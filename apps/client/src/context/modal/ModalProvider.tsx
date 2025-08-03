import { useState, type ReactNode } from 'react';

import Modal from '@root/src/features/Modal';

import ModalContext from './ModalContext';
import type { ModalData } from './types';

type Props = {
  children: ReactNode;
};
function ModalProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<ModalData | undefined>(undefined);

  const openModal = (data: ModalData) => {
    setModalData(data);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setModalData(undefined);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
      {isOpen && modalData && (
        <Modal
          mode={modalData.mode}
          todoId={modalData.todo?.id}
          initialNote={modalData.todo?.note || ''}
          onClose={closeModal}
          hasPriority={modalData.todo?.hasPriority || false}
        />
      )}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
