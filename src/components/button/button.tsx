import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { ButtonHTMLAttributes } from 'react';

export const Button = ({
  children,
  className = '',
  theme = 'primary',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  theme?: 'primary' | 'secondary' | 'white' | 'custom';
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const btnStyles =
    theme === 'primary'
      ? 'bg-primary/10 border-primary/20 text-primary transition-colors duration-300 hover:bg-primary/20 hover:border-primary/30'
      : theme === 'secondary'
        ? 'bg-gradient-5/10 border-gradient-5/20 text-gradient-5 transition-colors duration-300 hover:bg-gradient-5/20 hover:border-gradient-5/30'
        : theme === 'white'
          ? 'bg-white/10 border-white/20 text-white transition-colors duration-300 hover:bg-white/20 hover:border-white/30'
          : '';
  const btnBorder =
    theme === 'primary'
      ? 'via-primary'
      : theme === 'secondary'
        ? 'via-gradient-5'
        : theme === 'white'
          ? 'via-white'
          : '';

  return (
    <>
      {/* @ts-ignore */}
      <motion.button
        className={cn(
          'text-xl px-6 py-3 backdrop-blur-sm border text-center rounded-2xl relative overflow-hidden flex justify-center group/modal-btn',
          className,
          btnStyles
        )}
        {...props}
      >
        <span className='group-hover/modal-btn:translate-y-10 text-center transition duration-300'>
          {children}
        </span>
        <div className='-translate-y-10 group-hover/modal-btn:translate-y-0 flex items-center justify-center absolute inset-0 transition duration-300 z-20'>
          {children}
        </div>
        <div
          className={cn(
            'absolute inset-x-0  h-[3px] -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent to-transparent',
            btnBorder
          )}
        />
      </motion.button>
    </>
  );
};
