import Header from '@app/features/Header';
import Input from '@app/features/Input';
import TodoList from '@app/features/TodoList';

import { useRefresh } from '@app/hooks/api/useFetchTodos';
import { useSyncedChecked } from '@app/hooks/api/useSyncedChecked';
import { useTodoContext } from '@app/hooks/useTodoContext';

import Button from '@app/ui/Button';

function App() {
  const {
    dispatch,
    state: { todos },
  } = useTodoContext();
  const syncChecked = useSyncedChecked(dispatch, todos);
  const refresh = useRefresh(dispatch);

  return (
    <main className='lg:w-3xl md:w-2xl sm:w-xl h-[90%] bg-purple-50 rounded-[4px] p-4 shadow-right-bottom flex flex-col overflow-hidden'>
      <Header />
      <Input />
      <TodoList />

      <Button
        className='fixed bottom-4 right-4 z-50 bg-purple-600 text-white  uppercase text-2xl font-extrabold px-6 py-3  hover:bg-purple-700 transition-all'
        onClick={async () => {
          await syncChecked();
          await refresh(dispatch);
        }}
      >
        Save
      </Button>
    </main>
  );
}

export default App;
