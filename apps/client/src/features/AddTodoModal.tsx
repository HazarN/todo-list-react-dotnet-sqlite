import { useEffect, useState } from 'react';
import Button from '../ui/Button';

type Props = {
  initialNote: string;
  onClose: () => void;
  onSubmit: (note: string, hasPriority: boolean) => void;
};
function AddTodoModal({ initialNote, onClose, onSubmit }: Props) {
  const [note, setNote] = useState(initialNote);
  const [hasPriority, setHasPriority] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (note.trim()) {
      onSubmit(note, hasPriority);
      onClose();
    }
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
              onClick={onClose}
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
