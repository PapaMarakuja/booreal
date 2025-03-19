import { BentoGrid, BentoGridItem } from '../../../components/ui/bento-grid';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { AngularIcon } from '../../../components/icons/angular-icon';
import { ReactIcon } from '../../../components/icons/react-icon';
import { TailwindIcon } from '../../../components/icons/tailwindIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function About() {
  return (
    <section className='bg-white'>
      <div className='container h-full py-[100px]'>
        <h1 className='text-4xl text-center font-bold mb-[100px] text-neutral-900'>
          O que faz <span className='text-primary'>Booreal</span> especial
        </h1>

        <BentoGrid className='mx-auto md:auto-rows-[20rem]'>
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn('[&>p:text-lg]', item.className)}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const SkeletonOne = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left - rect.width / 2;
    const mouseY = event.clientY - rect.top - rect.height / 2;
    setMousePosition({ x: mouseX * 0.1, y: mouseY * 0.1 });
  };

  return (
    <div
      className='flex space-x-4 justify-center items-center w-full h-64 bg-dot-thick-black/20'
      onMouseMove={handleMouseMove}
    >
      {/* Olho esquerdo */}
      <div className='relative w-16 h-16 bg-white rounded-full flex justify-center items-center border-2 border-gray-600'>
        <motion.div
          className='w-6 h-6 bg-black rounded-full'
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
        />
      </div>
      {/* Olho direito */}
      <div className='relative w-16 h-16 bg-white rounded-full flex justify-center items-center border-2 border-gray-600'>
        <motion.div
          className='w-6 h-6 bg-black rounded-full'
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
        />
      </div>
    </div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: '100%',
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ['0%', '100%'],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial='initial'
      animate='animate'
      whileHover='hover'
      whileTap='hover'
      className='flex flex-1 w-full h-full min-h-[6rem] bg-dot-thick-black/20 flex-col space-y-2'
    >
      {arr.map((_, i) => (
        <motion.div
          key={'skelenton-two' + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + '%',
          }}
          className='flex flex-row rounded-full border border-white/[0.2] p-2  items-center space-x-2 bg-black w-full h-4'
        ></motion.div>
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  const first = {
    initial: {
      y: 0,
      rotate: 0,
    },
    hover: {
      y: 0,
      rotate: -5,
    },
  };

  return (
    <motion.div
      className='flex flex-1 w-full h-full min-h-[6rem] bg-dot-thick-black/20 rounded-lg flex-col space-y-2'
      initial='initial'
      animate='animate'
      whileTap='hover'
      whileHover='hover'
    >
      <motion.div
        variants={first}
        className='m-4 h-full w-auto rounded-lg animated-gradient-shift'
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 0,
      rotate: 0,
    },
    hover: {
      x: 20,
      rotate: -5,
    },
  };
  const second = {
    initial: {
      x: 0,
      rotate: 0,
    },
    hover: {
      x: -20,
      rotate: 5,
    },
  };
  return (
    <motion.div
      initial='initial'
      animate='animate'
      whileTap='hover'
      whileHover='hover'
      className='flex flex-1 w-full h-full min-h-[6rem] bg-dot-thick-black/20 flex-row space-x-2'
    >
      <motion.div
        variants={first}
        className='h-full w-1/3 rounded-2xl p-4 bg-neutral-100/50 border-angular-dark-red border-2 flex flex-col items-center justify-center'
      >
        <div className='relative flex items-center justify-center p-1 rounded-lg bg-angular-gradient max-w-[8rem] max-h-[8rem] w-full h-full'>
          <div className='flex items-center justify-center w-full h-full'>
            <AngularIcon className='w-full h-full bg-neutral-100 rounded' />
          </div>
        </div>
        <p className='border border-angular-red bg-angular-red/20 text-angular-dark-red text-sm rounded-full px-2 py-0.5 mt-4'>
          Angular
        </p>
      </motion.div>
      <motion.div className='h-full relative z-20 w-1/3 rounded-2xl p-4 bg-neutral-100/50 border-react-dark-blue border-2 flex flex-col items-center justify-center'>
        <div className='relative flex items-center justify-center p-1 rounded-lg bg-gradient-to-r from-react-light-blue via-react-dark-blue to-react-light-blue max-w-[8rem] max-h-[8rem] w-full h-full'>
          <div className='flex items-center justify-center w-full h-full'>
            <ReactIcon className='w-full h-full bg-neutral-100 rounded' />
          </div>
        </div>
        <p className='border border-react-light-blue bg-react-light-blue/20 text-react-dark-blue text-sm rounded-full px-2 py-0.5 mt-4'>
          React
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className='h-full w-1/3 rounded-2xl p-4 bg-neutral-100/50 border-tailwind-blue border-2 flex flex-col items-center justify-center'
      >
        <div className='relative flex items-center justify-center p-1 rounded-lg bg-gradient-to-r from-tailwind-teal via-tailwind-blue to-tailwind-teal max-w-[8rem] max-h-[8rem] w-full h-full'>
          <div className='flex items-center justify-center w-full h-full'>
            <TailwindIcon className='w-full h-full bg-neutral-100 rounded' />
          </div>
        </div>
        <p className='border border-tailwind-teal bg-tailwind-teal/20 text-tailwind-blue text-sm rounded-full px-2 py-0.5 mt-4'>
          Tailwind
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial='initial'
      whileHover='animate'
      whileTap='animate'
      className='flex flex-1 w-full h-full min-h-[6rem] bg-dot-thick-black/20 flex-col space-y-2'
    >
      <motion.div
        variants={variants}
        className='flex flex-row rounded-2xl border border-white/[0.2] p-2  items-start space-x-2 bg-black'
      >
        <div className='h-10 w-10 rounded-full bg-gradient-to-r from-primary to-gradient-3 flex-shrink-0 grid place-items-center'>
          <FontAwesomeIcon icon={faUserAlt} />
        </div>
        <p className='text-xs text-neutral-300'>
          Quero um site mágico que transforme visitantes em clientes fiéis.
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className='flex flex-row rounded-full border border-white/[0.2] p-2 items-center justify-end space-x-2 w-5/6 ml-auto bg-black'
      >
        <p className='text-xs text-neutral-300 text-right'>
          Vamos tornar esse sonho realidade juntos!
        </p>
        <div className='h-6 w-6 rounded-full bg-gradient-to-r from-gradient-5 to-accent flex-shrink-0' />
      </motion.div>
      <motion.div
        variants={variants}
        className='flex flex-row rounded-2xl border border-white/[0.2] p-2  items-start space-x-2 bg-black'
      >
        <div className='h-10 w-10 rounded-full bg-gradient-to-r from-primary to-gradient-3 flex-shrink-0 grid place-items-center'>
          <FontAwesomeIcon icon={faUserAlt} />
        </div>
        <p className='text-xs text-neutral-300'>
          Mal posso esperar para ver minha marca ganhando vida!
        </p>
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: 'Nossas Competências',
    description: <span className='text-sm'>Quebramos as regras, mas dominamos o jogo.</span>,
    header: <SkeletonFour />,
    className: 'md:col-span-2',
    icon: '',
  },
  {
    title: 'Nossa Visão',
    description: <span className='text-sm'>Ferramentas não fazem milagre, mas a gente faz.</span>,
    header: <SkeletonOne />,
    className: 'md:col-span-1',
    icon: '',
  },
  {
    title: 'Nossa Filosofia',
    description: <span className='text-sm'>Criar sem medo. Dominar sem pedir licença.</span>,
    header: <SkeletonTwo />,
    className: 'md:col-span-1',
    icon: '',
  },
  {
    title: 'O Método',
    description: <span className='text-sm'>Criatividade sem frescura, resultado sem enrolação.</span>,
    header: <SkeletonThree />,
    className: 'md:col-span-1',
    icon: '',
  },
  {
    title: 'A Conversão',
    description: <span className='text-sm'>Cliques são fáceis. Transformamos em resultados.</span>,
    header: <SkeletonFive />,
    className: 'md:col-span-1',
    icon: '',
  },
];

