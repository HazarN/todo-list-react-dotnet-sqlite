import axios from 'axios';
import { useEffect } from 'react';
import type { TodoAction } from '../context/todo/types';

export function useFetchTodos(dispatch: React.Dispatch<TodoAction>) {
  const apiUrl = import.meta.env.VITE_API_URL as string;

  useEffect(() => {
    async function fetchTodos() {
      dispatch({ type: 'FETCH_TODOS_START' });

      try {
        const res = await axios.get(`${apiUrl}/Todo`);

        dispatch({ type: 'SET_TODOS', payload: res.data });
      } catch {
        dispatch({ type: 'FETCH_TODOS_ERROR' });
      }
    }

    fetchTodos();
  }, [apiUrl, dispatch]);
}
