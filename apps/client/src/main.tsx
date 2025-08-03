import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { TodoProvider } from '@app/context/todo/TodoProvider';

import App from '@app/App.tsx';

import '@app/globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>
);
