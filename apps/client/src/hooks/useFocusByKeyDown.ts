import { useEffect } from 'react';

export default function useFocusByKeyDown(ref: React.RefObject<HTMLInputElement | null>) {
  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') el.focus();
      if (e.key === 'Escape') el.blur();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => removeEventListener('keydown', handleKeyDown);
  }, [ref]);
}
