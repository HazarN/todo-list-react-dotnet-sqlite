import { useTodoContext } from '@app/hooks/useTodoContext';

import TodoItem from '@app/features/TodoItem';

import Error from '@app/ui/Error';
import Spinner from '@app/ui/Spinner';
import { useFetchTodos } from '../hooks/useFetchTodos';

function TodoList() {
  const { state, dispatch } = useTodoContext();
  const { todos, status } = state;

  useFetchTodos(dispatch);

  return (
    <section className='p-4 flex-1 overflow-hidden bg-purple-50 rounded-md'>
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

        {status === 'success' && todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
      </ul>
    </section>
  );
}

export default TodoList;
