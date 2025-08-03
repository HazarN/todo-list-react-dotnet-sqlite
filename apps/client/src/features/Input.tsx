import { useRef } from 'react';

import useFocusByKeyDown from '@app/hooks/useFocusByKeyDown';

function Input() {
  const inputRef = useRef<HTMLInputElement>(null);

  useFocusByKeyDown(inputRef);

  return (
    <section className='p-4 '>
      <div className='relative'>
        <input
          type='text'
          className='w-full text-xl bg-purple-50 rounded-4xl border-2 p-5 border-purple-500 focus:outline-none focus:bg-[#f3eaff] transition-all duration-300'
          placeholder='Search for a task or create a new one...'
          ref={inputRef}
        />

        <button className='absolute top-1/2 right-4 -translate-y-1/2 text-xl font-bold uppercase px-6 py-3 bg-purple-600 text-white rounded-4xl hover:bg-purple-700 transition cursor-pointer'>
          Add
        </button>
      </div>
    </section>
  );
}

export default Input;
