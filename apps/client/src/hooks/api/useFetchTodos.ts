import axios from 'axios';
import { useCallback, useEffect } from 'react';
import type { TodoAction } from '../../context/todo/types';

const fetch = async (dispatch: React.Dispatch<TodoAction>) => {
  dispatch({ type: 'ASYNC_TODOS_START' });

  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/Todo`);
    dispatch({ type: 'SET_TODOS', payload: res.data });
  } catch {
    dispatch({ type: 'ASYNC_TODOS_ERROR' });
  }
};

export function useFetchTodos(dispatch: React.Dispatch<TodoAction>) {
  const fetchTodos = useCallback(fetch, [dispatch]);

  useEffect(() => {
    fetchTodos(dispatch);
  }, [fetchTodos, dispatch]);

  return { fetchTodos };
}

export function useRefresh(dispatch: React.Dispatch<TodoAction>) {
  return useCallback(fetch, [dispatch]);
}
