import type { ITodoItem } from '@app/context/todo/types';

type Props = {
  todo: ITodoItem;
};
function TodoItem({ todo }: Props) {
  return (
    <li className='bg-purple-100 p-3 rounded-lg shadow-sm flex gap-2 text-lg' key={todo.id}>
      <p>{todo.id}</p>
      <p>{todo.note}</p>
      <p>{todo.hasPriority}</p>
    </li>
  );
}

export default TodoItem;
