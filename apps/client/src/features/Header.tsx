import { ListTodo } from 'lucide-react';
import { useTodoContext } from '../hooks/useTodoContext';

function Header() {
  const {
    state: { todos },
  } = useTodoContext();

  return (
    <header>
      <div className='flex justify-between items-center p-4 mt-2'>
        <h1 className='font-heading text-4xl font-black'>To-Do List App</h1>
        <ListTodo size={36} />
      </div>

      {!todos && (
        <p className='font-sans p-4 text-xl text-center mt-2'>
          Start by adding something to schedule your life better 🚀
        </p>
      )}
    </header>
  );
}

export default Header;
