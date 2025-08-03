import { useEffect, useState } from 'react';
import { useAddTodo } from '../hooks/api/useAddTodo';
import { useModalContext } from '../hooks/useModalContext';
import { useTodoContext } from '../hooks/useTodoContext';
import Button from '../ui/Button';

type Props = {
  initialNote: string;
  onClose: () => void;
};
function AddTodoModal({ initialNote }: Props) {
  const [error, setError] = useState('');
  const [note, setNote] = useState(initialNote);
  const [hasPriority, setHasPriority] = useState(false);

  const { closeModal } = useModalContext();
  const { dispatch } = useTodoContext();

  const addTodo = useAddTodo(dispatch);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!note.trim()) {
      setError('Note is required');
      return;
    }

    if (note.length < 3 || note.length > 100) {
      setError('Note must be between 3 and 100 characters.');
      return;
    }

    setError('');

    await addTodo(note, hasPriority);
    closeModal();
  };

  useEffect(() => {
    setNote(initialNote);
  }, [initialNote]);

  return (
    <div className='fixed inset-0 z-50 bg-black/50 flex items-center justify-center'>
      <div className='bg-white p-6 rounded-xl shadow-lg w-full max-w-md'>
        <h2 className='text-xl font-bold mb-4'>Add New Task</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <input
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder='Task note...'
            className='w-full p-3 border rounded focus:outline-none'
          />
          {error && <p className='text-red-500'>{error}</p>}

          <label className='flex items-center gap-2'>
            <input
              type='checkbox'
              checked={hasPriority}
              onChange={() => setHasPriority((prev) => !prev)}
              className='accent-purple-600'
            />
            High Priority
          </label>

          <div className='flex justify-end gap-2'>
            <Button
              type='button'
              onClick={closeModal}
              className='bg-gray-200 hover:bg-gray-300 text-xl'
            >
              Cancel
            </Button>

            <Button type='submit' className='bg-purple-600 hover:bg-purple-700 text-white text-xl'>
              Add
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTodoModal;
