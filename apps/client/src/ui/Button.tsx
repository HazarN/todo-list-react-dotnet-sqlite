import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
};
function Button({ children, onClick, type = 'button', className }: Props) {
  return (
    <button
      className={`px-4 py-2 rounded-md cursor-pointer ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
