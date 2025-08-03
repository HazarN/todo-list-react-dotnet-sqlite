import { useEffect, useRef, useState } from 'react';

import useFocusByKeyDown from '@app/hooks/useFocusByKeyDown';
import { useModalContext } from '../hooks/useModalContext';

function Input() {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { openModal, isOpen } = useModalContext();

  const [input, setInput] = useState('');

  const handleClick = () => {
    if (!input.trim()) return;

    openModal(input);
  };

  useFocusByKeyDown(inputRef);

  useEffect(() => {
    if (!isOpen) {
      setInput('');
    }
  }, [isOpen]);

  return (
    <section className='p-4 '>
      <div className='relative flex items-center'>
        <textarea
          className='w-full h-18 text-xl bg-purple-50 rounded-4xl border-2 p-5 border-purple-500 focus:outline-none focus:bg-[#f3eaff] transition-all duration-300'
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
    </section>
  );
}

export default Input;
