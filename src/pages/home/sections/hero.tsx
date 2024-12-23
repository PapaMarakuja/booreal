import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedWords from '../../../components/animated-words/animated-words';
import { Button } from '../../../components/button/button';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { BackgroundGradientAnimation } from '../../../components/ui/background-gradient-animation';

export default function Hero() {
  const words = [
    'Desenvolvimento Web',
    'Landing Pages',
    'Wireframes',
    'Portifolios',
    'Branding',
    'UI/UX',
    'SEO',
  ];

  return (
    <section className='bg-white text-neutral-900 relative'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-5 left-5 lg:top-20 lg:left-20 w-52 h-52 lg:w-96 lg:h-96 bg-gradient-1 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob1' />
        <div className='absolute top-5 right-5 lg:top-40 lg:right-40 w-60 h-60 lg:w-96 lg:h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob2' />
        <div className='absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 lg:w-96 lg:h-96 bg-gradient-3 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob3' />
        <div className='absolute bottom-5 left-5 lg:bottom-20 lg:left-10 w-64 h-64 lg:w-96 lg:h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-slower' />
        <div className='absolute bottom-5 right-5 lg:bottom-20 lg:left-2/3 w-60 h-60 lg:w-96 lg:h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-slow' />
      </div>
      <div className='container h-dvh relative'>
        <div className='h-full flex items-center justify-center relative z-10 md:justify-around'>
          <div className='grid place-items-center text-center'>
            <div className='relative'>
              <h2 className='text-2xl text-neutral-600 px-1 md:px-2 lg:px-4 lg:text-3xl'>
                Booreal
              </h2>
              <div className='absolute -bottom-1 left-0 w-full h-1 animated-gradient rounded-full' />
            </div>
            <h1 className='text-4xl font-bold leading-tight mt-2 md:text-5xl lg:text-7xl lg:my-4'>
              Transformando <br className='hidden md:block' />
              <b className='text-primary font-bold'>visitantes</b> em{' '}
              <b className='text-primary font-bold'>clientes</b>
            </h1>
            <div className='w-full mb-4 flex text-lg text-neutral-700'>
              <AnimatedWords words={words} className='w-full text-3xl' />
            </div>
            <div className='relative group'>
              <Button>
                <FontAwesomeIcon icon={faWhatsapp} className='mr-2' />
                Comece seu projeto agora
              </Button>
              <p className='text-sm text-neutral-600 absolute -bottom-6 left-1/2 -translate-x-1/2 lg:opacity-0 opacity-100 lg:group-hover:opacity-100 transition-all duration-300 lg:-translate-y-2 lg:group-hover:translate-y-0 w-full text-center'>
                Atendimento rápido, em horário flexível
              </p>
            </div>
          </div>
          <div className='relative hidden rounded-xl w-[300px] h-[300px] mt-4 mb-4 place-items-center isolate'>
            <motion.div
              className='absolute -top-20 -left-20 w-60 h-60 bg-primary/20 rounded-sm z-10'
              initial={{ y: 0 }}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className='absolute -bottom-10 -right-10 w-20 h-20 bg-accent rounded-full z-30'
              initial={{ y: 0 }}
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <img
              src='/public/booreal.png'
              alt='Ilustração de desenvolvimento'
              className='w-full h-auto object-cover rounded-lg shadow-2xl z-20'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
