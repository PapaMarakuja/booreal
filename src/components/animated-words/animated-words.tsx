import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { booreal } from '../../lib/utils';

interface AnimatedWordsProps {
  words: string[];
  className?: string;
  duration?: number;
}

const AnimatedWords: React.FC<AnimatedWordsProps> = ({
  words,
  className,
  duration = 3,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <div
      className={`relative flex items-center justify-center w-full h-7 lg:h-11 ${className}`}
    >
      <AnimatePresence mode='wait'>
        <motion.p
          key={currentWordIndex}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
          transition={booreal.transition.smooth}
          className='absolute text-lg text-neutral-700 lg:text-2xl'
        >
          {words[currentWordIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedWords;