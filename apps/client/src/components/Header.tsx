import { ListTodo } from 'lucide-react';

function Header() {
  return (
    <header>
      <div className='flex justify-between items-center p-4 mt-2'>
        <h1 className='font-heading text-4xl font-black'>To-Do List App</h1>
        <ListTodo size={36} />
      </div>

      <p className='font-sans p-4 text-xl text-center mt-2'>
        Start by adding something to schedule your life better 🚀
      </p>
    </header>
  );
}

export default Header;
