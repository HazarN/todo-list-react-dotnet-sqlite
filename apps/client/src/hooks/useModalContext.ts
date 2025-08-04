import { useContext } from 'react';

import ModalContext from '@app/context/modal/ModalContext';

export function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) throw new Error('useModalContext must be used within ModalProvider');
  return context;
}
