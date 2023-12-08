import { cn } from '@/libs/utils';

interface ButtonProps {
  type?: 'button' | 'submit';
  label: string;
  className?: string;
  onClick: () => void;
}

const ButtonWork = ({
  type = 'button',
  label,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        'py-3 px-4 border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-medium w-full rounded-lg ',
        { className }
      )}
    >
      {label}
    </button>
  );
};

export default ButtonWork;
