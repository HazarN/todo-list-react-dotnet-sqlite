import { createContext } from 'react';

import type { ModalContextType } from '@app/context/modal/types';

const ModalContext = createContext<ModalContextType | undefined>(undefined);
export default ModalContext;
