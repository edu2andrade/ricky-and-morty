import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <button
      type="button"
      className="
        w-full  
        mt-4 py-2 px-4
        bg-cyan-400 text-gray-800 
        rounded-lg shadow-lg
        hover:bg-opacity-80 transition
        disabled:bg-opacity-50 disabled:cursor-not-allowed
      "
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
