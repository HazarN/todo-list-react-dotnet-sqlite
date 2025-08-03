import { useRef, useState } from 'react';

import useFocusByKeyDown from '@app/hooks/useFocusByKeyDown';
import { useAddTodo } from '../hooks/api/useAddTodo';
import { useTodoContext } from '../hooks/useTodoContext';
import AddTodoModal from './AddTodoModal';

function Input() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { dispatch } = useTodoContext();

  const [input, setInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTodo = useAddTodo(dispatch);

  const handleClick = () => {
    if (input.trim()) {
      setIsModalOpen(true);
    }
  };
  const handleAddTodo = async (note: string, hasPriority: boolean) => {
    await addTodo(note, hasPriority);

    setInput('');
    inputRef.current?.focus();
  };

  useFocusByKeyDown(inputRef);

  return (
    <section className='p-4 '>
      <div className='relative'>
        <input
          type='text'
          className='w-full text-xl bg-purple-50 rounded-4xl border-2 p-5 border-purple-500 focus:outline-none focus:bg-[#f3eaff] transition-all duration-300'
          placeholder='Search for a task or create a new one...'
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          className='absolute top-1/2 right-4 -translate-y-1/2 text-xl font-bold uppercase px-6 py-3 bg-purple-600 text-white rounded-4xl hover:bg-purple-700 transition cursor-pointer'
          onClick={handleClick}
        >
          Add
        </button>
      </div>

      {isModalOpen && (
        <AddTodoModal
          initialNote={input}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddTodo}
        />
      )}
    </section>
  );
}

export default Input;
