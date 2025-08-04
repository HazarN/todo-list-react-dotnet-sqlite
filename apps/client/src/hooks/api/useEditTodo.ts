import axios from 'axios';
import { useCallback } from 'react';

import type { TodoAction } from '@app/context/todo/types';

export function useEditTodo(dispatch: React.Dispatch<TodoAction>) {
  return useCallback(
    async (id: number, note: string, hasPriority: boolean) => {
      dispatch({ type: 'ASYNC_TODOS_START' });

      try {
        const res = await axios.put(`${import.meta.env.VITE_API_URL}/Todo/${id}`, {
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
