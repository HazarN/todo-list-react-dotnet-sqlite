import { createContext } from 'react';
import type { ModalContextType } from './types';

const ModalContext = createContext<ModalContextType | undefined>(undefined);
export default ModalContext;
