import axios from 'axios';
import { useEffect } from 'react';
import type { TodoAction } from '../../context/todo/types';

export function useFetchTodos(dispatch: React.Dispatch<TodoAction>) {
  const apiUrl = (import.meta.env.VITE_API_URL as string) || undefined;

  useEffect(() => {
    async function fetchTodos() {
      dispatch({ type: 'ASYNC_TODOS_START' });

      try {
        const res = await axios.get(`${apiUrl}/Todo`);

        // IDEA: When .env is not loaded, axios returns an html file, thus we need to check whether the data is an array or not
        if (!Array.isArray(res.data)) throw new Error('Invalid data');

        dispatch({ type: 'SET_TODOS', payload: res.data });
      } catch {
        dispatch({ type: 'ASYNC_TODOS_ERROR' });
      }
    }

    fetchTodos();
  }, [apiUrl, dispatch]);
}
