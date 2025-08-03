import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { TodoProvider } from '@app/context/todo/TodoProvider';

import App from '@app/App.tsx';

import '@app/globals.css';
import ModalProvider from './context/modal/ModalProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </TodoProvider>
  </StrictMode>
);
