import axios from 'axios';
import { useCallback } from 'react';
import type { TodoAction } from '../../context/todo/types';

export function useAddTodo(dispatch: React.Dispatch<TodoAction>) {
  return useCallback(
    async (note: string, hasPriority: boolean) => {
      dispatch({ type: 'ASYNC_TODOS_START' });

      try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/Todo`, {
          note,
          hasPriority,
        });

        if (res.status !== 201) throw new Error();

        dispatch({ type: 'ADD_TODO', payload: res.data });
      } catch {
        dispatch({ type: 'ASYNC_TODOS_ERROR' });
      }
    },
    [dispatch]
  );
}
