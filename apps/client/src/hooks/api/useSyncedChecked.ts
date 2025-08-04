import axios from 'axios';
import { useCallback } from 'react';

import type { ITodoItem, TodoAction } from '@app/context/todo/types';

const apiUrl = import.meta.env.VITE_API_URL;

export function useSyncedChecked(dispatch: React.Dispatch<TodoAction>, todos: ITodoItem[]) {
  return useCallback(async () => {
    dispatch({ type: 'ASYNC_TODOS_START' });

    const ids = todos.filter((todo) => todo.isChecked).map((todo) => todo.id);

    if (!apiUrl) {
      dispatch({ type: 'ASYNC_TODOS_ERROR' });
      console.error('VITE_API_URL environment variable is not defined');
      return;
    }

    try {
      const res = await axios.put(`${apiUrl}/Todo/check`, ids);

      if (res.status !== 204) throw new Error();

      res.data.forEach((todo: ITodoItem) => {
        dispatch({
          type: 'SYNCED_CHECKED',
          payload: {
            id: todo.id,
            isChecked: todo.isChecked,
          },
        });
      });
    } catch {
      dispatch({ type: 'ASYNC_TODOS_ERROR' });
    }
  }, [dispatch, todos]);
}
