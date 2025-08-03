import { createContext } from 'react';

import type { ITodoState, TodoAction } from '@app/context/todo/types';

type ContextType = {
  state: ITodoState;
  dispatch: React.Dispatch<TodoAction>;
};

const TodoContext = createContext<ContextType | undefined>(undefined);
export default TodoContext;
