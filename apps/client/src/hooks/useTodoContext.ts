import { useContext } from 'react';

import TodoContext from '@app/context/todo/TodoContext';

export function useTodoContext() {
  const context = useContext(TodoContext);

  if (!context) throw new Error('useTodoContext must be used within TodoProvider');
  return context;
}
