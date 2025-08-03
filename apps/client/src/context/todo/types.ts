export interface ITodoItem {
  id: number;
  note: string;
  hasPriority: boolean;
  isChecked: boolean;
}

export interface ITodoState {
  todos: ITodoItem[];
  status: 'idle' | 'loading' | 'error' | 'success';
}

export type TodoAction =
  | { type: 'ASYNC_TODOS_START' }
  | { type: 'ASYNC_TODOS_ERROR' }
  | { type: 'SET_TODOS'; payload: ITodoItem[] }
  | { type: 'ADD_TODO'; payload: ITodoItem }
  | { type: 'REMOVE_TODO'; payload: number }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'TOGGLE_PRIORITY'; payload: number };
