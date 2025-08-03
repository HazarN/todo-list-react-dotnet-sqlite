import type { ITodoState, TodoAction } from '@app/context/todo/types';

export default function todoReducer(state: ITodoState, action: TodoAction): ITodoState {
  switch (action.type) {
    case 'FETCH_TODOS_START':
      return {
        ...state,
        status: 'loading',
      };
    case 'FETCH_TODOS_ERROR':
      return {
        ...state,
        status: 'error',
      };
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.payload,
        status: 'success',
      };
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? {
                ...todo,
                isChecked: !todo.isChecked,
              }
            : todo
        ),
      };
    case 'TOGGLE_PRIORITY':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? {
                ...todo,
                hasPriority: !todo.hasPriority,
              }
            : todo
        ),
      };
    default:
      return state;
  }
}
