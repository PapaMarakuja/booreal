import { motion, useAnimation } from 'framer-motion';
import { booreal, cn } from '../../lib/utils';
import { useEffect, useRef, useState } from 'react';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) {
        return;
      }

      const elementTop = ref.current.getBoundingClientRect().top;

      if (elementTop < window.innerHeight - 100) {
        setIsAnimated(true);
        controls.start('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isAnimated ? controls : 'hidden'}
      variants={booreal.variants.fadeInUp}
      transition={booreal.transition.softSpring}
      className={cn(
        'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-2 max-w-7xl mx-auto ',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div
      className={cn(
        'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 bg-neutral-100 border-white/[0.2] border justify-between flex flex-col space-y-4',
        className
      )}
      whileHover={{ y: -5 }}
      transition={booreal.transition.spring}
    >
      {header}
      <motion.div
        className='group-hover/bento:translate-x-2 transition duration-200'
        initial={{ x: 0 }}
        whileHover={{ x: 5 }}
        transition={booreal.transition.smooth}
      >
        {icon && (
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={booreal.transition.spring}
          >
            {icon}
          </motion.div>
        )}
        <div className='font-sans font-bold text-neutral-900 mb-2 mt-2'>{title}</div>
        <div className='font-sans font-normaltext-xs text-neutral-600'>{description}</div>
      </motion.div>
    </motion.div>
  );
};
