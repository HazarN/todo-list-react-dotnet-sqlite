import axios from 'axios';
import { useCallback } from 'react';

import type { TodoAction } from '@app/context/todo/types';

const apiUrl = import.meta.env.VITE_API_URL;

export function useEditTodo(dispatch: React.Dispatch<TodoAction>) {
  return useCallback(
    async (id: number, note: string, hasPriority: boolean) => {
      dispatch({ type: 'ASYNC_TODOS_START' });

      if (!apiUrl) {
        dispatch({ type: 'ASYNC_TODOS_ERROR' });
        console.error('VITE_API_URL environment variable is not defined');
        return;
      }

      try {
        const res = await axios.put(`${apiUrl}/Todo/${id}`, {
          note,
          hasPriority,
        });

        if (res.status !== 200) throw new Error();

        dispatch({ type: 'EDIT_TODO', payload: res.data });
      } catch {
        dispatch({ type: 'ASYNC_TODOS_ERROR' });
      }
    },
    [dispatch]
  );
}
