import type { ITodoState } from '@app/context/todo/types';

const initialState: ITodoState = {
  todos: [],
  status: 'idle',
};
export default initialState;
