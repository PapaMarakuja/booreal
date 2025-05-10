import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { booreal } from '../../lib/utils';

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 11) - 5; // Reduzido para -5 a 5 graus
  };

  return (
    <div className='px-6 md:px-0 md:max-w-6xl mx-auto antialiased font-sans'>
      <div className='relative grid grid-cols-1 md:grid-cols-2 gap-20'>
        <div>
          <div className='relative h-80 w-full'>
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                    z: -50,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.97,
                    z: isActive(index) ? 0 : -50,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -20, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                    z: 50,
                    rotate: randomRotateY(),
                  }}
                  transition={booreal.transition.softSpring}
                  className='absolute inset-0 origin-bottom'
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className='h-full w-full rounded-3xl object-cover object-center'
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className='flex justify-between flex-col py-4'>
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
              filter: "blur(5px)",
            }}
            animate={{
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
            }}
            exit={{
              y: -20,
              opacity: 0,
              filter: "blur(5px)",
            }}
            transition={booreal.transition.smooth}
          >
            <h3 className='text-2xl font-bold text-white'>{testimonials[active].name}</h3>
            <p className='text-sm text-neutral-200'>{testimonials[active].designation}</p>
            <motion.p className='text-lg mt-8 text-neutral-300'>
              {testimonials[active].quote.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: 'blur(5px)',
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: 'blur(0px)',
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    ...booreal.transition.smooth,
                    delay: 0.01 * index,
                  }}
                  className='inline-block'
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className='flex gap-4 pt-12 md:pt-0'>
            <motion.button
              onClick={handlePrev}
              className='h-7 w-7 rounded-full bg-neutral-800 flex items-center justify-center group/button'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={booreal.transition.spring}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className='h-5 w-5 text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300'
              />
            </motion.button>
            <motion.button
              onClick={handleNext}
              className='h-7 w-7 rounded-full bg-neutral-800 flex items-center justify-center group/button'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={booreal.transition.spring}
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className='h-5 w-5 text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300'
              />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};
