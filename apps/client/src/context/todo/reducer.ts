import type { ITodoItem, ITodoState, TodoAction } from '@app/context/todo/types';

export default function todoReducer(state: ITodoState, action: TodoAction): ITodoState {
  switch (action.type) {
    case 'ASYNC_TODOS_START':
      return {
        ...state,
        status: 'loading',
      };
    case 'ASYNC_TODOS_ERROR':
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
        status: 'success',
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        status: 'success',
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
        status: 'success',
      };
    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? (action.payload as ITodoItem) : todo
        ),
        status: 'success',
      };
    case 'SYNCED_CHECKED':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? ({
                ...todo,
                isChecked: action.payload.isChecked,
              } as ITodoItem)
            : todo
        ),
        status: 'success',
      };
    case 'TOGGLE_CHECKED':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, isChecked: !todo.isChecked } : todo
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
        status: 'success',
      };
    default:
      return state;
  }
}
