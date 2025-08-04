import { type LucideIcon } from 'lucide-react';

import { useTodoContext } from '@app/hooks/useTodoContext';

import TodoItem from '@app/features/TodoItem';

import Error from '@app/ui/Error';
import Spinner from '@app/ui/Spinner';
import { useState } from 'react';
import { useFetchTodos } from '../hooks/api/useFetchTodos';
import { shuffledIcons } from '../utils/iconShuffle';

function TodoList() {
  const { state, dispatch } = useTodoContext();
  const { todos, status } = state;

  const [sortByPriority, setSortByPriority] = useState(false);

  useFetchTodos(dispatch);

  const handleToggleSorting = () => {
    setSortByPriority((prev) => !prev);
  };

  const sortedTodos = todos.slice().sort((a, b) => Number(b.hasPriority) - Number(a.hasPriority));

  const list = sortByPriority ? todos : sortedTodos;

  return (
    <section className='p-4 flex-1 overflow-hidden bg-purple-50 rounded-md relative'>
      <div className='flex justify-end items-center mb-2'>
        <p
          className='text-purple-600 hover:text-purple-700 cursor-pointer underline'
          onClick={handleToggleSorting}
        >
          {sortByPriority ? 'Sort by priority' : 'Go back to original order'}
        </p>
      </div>

      <ul className='h-full overflow-y-auto space-y-2 pr-2 flex flex-col gap-2'>
        <div className='h-full flex justify-center items-center'>
          {status === 'idle' && (
            <h1 className='font-heading text-xl'>
              There are no tasks to be listed yet, start adding some!
            </h1>
          )}

          {status === 'loading' && <Spinner />}

          {status === 'error' && <Error />}
        </div>

        {status === 'success' &&
          list.map((todo, i) => {
            const RandomIcon = shuffledIcons.at(i % shuffledIcons.length) as LucideIcon;

            return (
              <>
                <TodoItem todo={todo} key={todo.id} Icon={RandomIcon} />
              </>
            );
          })}
      </ul>
    </section>
  );
}

export default TodoList;
