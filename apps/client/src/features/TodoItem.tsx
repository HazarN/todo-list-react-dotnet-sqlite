import type { LucideIcon } from 'lucide-react';
import { Delete, Edit } from 'lucide-react';

import { useRefresh } from '@app/hooks/api/useFetchTodos';
import { useRemoveTodo } from '@app/hooks/api/useRemoveTodo';
import { useModalContext } from '@app/hooks/useModalContext';
import { useTodoContext } from '@app/hooks/useTodoContext';

import type { ITodoItem } from '@app/context/todo/types';

import Button from '@app/ui/Button';

type Props = {
  todo: ITodoItem;
  Icon: LucideIcon;
};
function TodoItem({ todo, Icon }: Props) {
  const { openModal } = useModalContext();
  const { dispatch } = useTodoContext();

  const removeTodo = useRemoveTodo(dispatch);
  const refresh = useRefresh(dispatch);

  const handleRemoveTodo = async () => {
    await removeTodo(todo.id);
    await refresh(dispatch);
  };

  return (
    <li className='bg-purple-100 p-3 rounded-lg shadow-sm flex flex-wrap justify-between gap-2 text-lg'>
      <div className='flex gap-5 items-center flex-1 min-w-0 flex-wrap'>
        <input
          type='checkbox'
          className='accent-purple-600 w-6 h-6 cursor-pointer'
          checked={todo.isChecked}
          onChange={() =>
            dispatch({
              type: 'TOGGLE_CHECKED',
              payload: { id: todo.id },
            })
          }
        />

        <div
          className={`flex gap-2 items-center flex-1 min-w-0 ${
            todo.isChecked ? 'line-through text-gray-400' : ''
          }`}
        >
          <div className='shrink-0'>
            <Icon />
          </div>
          <p className='break-words whitespace-normal max-w-full text-lg sm:text-xl'>{todo.note}</p>
        </div>
      </div>

      <div className='flex items-center gap-0.5 sm:gap-2 flex-shrink-0 flex-wrap justify-end'>
        {todo.hasPriority && (
          <div className='uppercase rounded-xl bg-purple-600 px-2 text-white font-extrabold whitespace-nowrap text-lg sm:text-xl'>
            priority
          </div>
        )}

        <Button
          onClick={() =>
            openModal({
              mode: 'edit',
              todo: {
                id: todo.id,
                note: todo.note,
                hasPriority: todo.hasPriority,
              },
            })
          }
        >
          <Edit />
        </Button>

        <Button onClick={handleRemoveTodo}>
          <Delete />
        </Button>
      </div>
    </li>
  );
}

export default TodoItem;
