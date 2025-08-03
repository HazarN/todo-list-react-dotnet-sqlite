export type ModalData = {
  mode: 'add' | 'edit';
  todo?: {
    id?: number;
    note: string;
    hasPriority: boolean;
  };
};

export type ModalContextType = {
  openModal: (data: ModalData) => void;
  closeModal: () => void;
  isOpen: boolean;
  modalData?: ModalData;
};
