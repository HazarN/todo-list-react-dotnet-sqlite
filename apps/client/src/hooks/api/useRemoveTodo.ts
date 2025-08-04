import axios from 'axios';
import { useCallback } from 'react';

import type { TodoAction } from '@app/context/todo/types';

export function useRemoveTodo(dispatch: React.Dispatch<TodoAction>) {
  return useCallback(
    async (id: number) => {
      dispatch({ type: 'ASYNC_TODOS_START' });

      try {
        const res = await axios.delete(`${import.meta.env.VITE_API_URL}/Todo/${id}`);

        if (res.status !== 204) throw new Error();

        dispatch({ type: 'REMOVE_TODO', payload: res.data });
      } catch {
        dispatch({ type: 'ASYNC_TODOS_ERROR' });
      }
    },
    [dispatch]
  );
}
