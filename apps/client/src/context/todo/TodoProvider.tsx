import { type ReactNode, useReducer } from 'react';

import initialState from '@app/context/todo/initialState';
import todoReducer from '@app/context/todo/reducer';
import TodoContext from '@app/context/todo/TodoContext';

type Props = {
  children: ReactNode;
};
export function TodoProvider({ children }: Props) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
}
