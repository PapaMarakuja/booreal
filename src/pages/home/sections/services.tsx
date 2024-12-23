import { motion, useAnimation } from 'framer-motion';
import { FlipWords } from '../../../components/ui/flip-words';
import { cn, variantsScale, variantsY } from '../../../lib/utils';
import { useRef, useState, useEffect } from 'react';

export default function Services() {
  const services = [
    {
      title: 'Desenvolvimento Web',
      text: (
        <>
          <p className='mb-2'>
            Não adianta ter um site bonito se ele não converte. Aqui, beleza e
            funcionalidade andam de mãos dadas. Porque o que importa é o resultado — e
            resultados gritam.
          </p>
          <p>Veja como vamos elevar sua presença online:</p>
          <div className='mt-4 w-full'>
            <div className='flex items-center'>
              <CheckIcon />
              <p className='ml-2'>Websites responsivos</p>
            </div>
            <div className='flex items-center mt-4'>
              <CheckIcon />
              <p className='ml-2'>Landing Pages que vendem</p>
            </div>
            <div className='flex items-center mt-4'>
              <CheckIcon />
              <p className='ml-2'>Portfólios que impressionam</p>
            </div>
            <div className='flex items-center mt-4'>
              <CheckIcon />
              <p className='ml-2'>Prototipagem e Wireframes</p>
            </div>
            <div className='flex items-center mt-4'>
              <CheckIcon />
              <p className='ml-2'>UI/UX com impacto</p>
            </div>
          </div>
        </>
      ),
      imgSrc: '/public/booreal.png',
    },
    {
      title: 'Branding',
      text: (
        <>
          <p>
            Se a sua marca não está marcando ninguém, qual o ponto? Construímos
            identidades que falam alto, que conectam e que deixam sua concorrência no
            chinelo.
          </p>
          <div className='mt-2'>
            <p className='font-bold'>Aqui está o que vai fazer sua marca estourar:</p>
            <div className='mt-4 w-full'>
              <div className='flex items-center'>
                <CheckIcon />
                <p className='ml-2'>
                  Logotipos que ninguém esquece: a cara da sua marca com atitude.
                </p>
              </div>
              <div className='flex items-center mt-4'>
                <CheckIcon />
                <p className='ml-2'>
                  Paleta de cores e tipografia: estética que traduz personalidade.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
      imgSrc: '/public/booreal.png',
    },
  ];

  const words = ['você', 'sua empresa'];

  return (
    <section className='bg-primary'>
      <div className='container py-[100px]'>
        <h1 className='text-4xl text-center font-bold mb-[100px]'>
          O que podemos fazer para
          <br />
          <span className='text-accent hidden md:block'>
            <FlipWords words={words} duration={5000} />
          </span>
          <span className='text-accent md:hidden'>você/sua empresa</span>
        </h1>

        <div className='grid gap-2'>
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              title={service.title}
              text={service.text}
              imgSrc={service.imgSrc}
              sequence={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ServiceCard = ({
  title,
  text,
  imgSrc,
  sequence = 1,
}: {
  title: string;
  text?: React.ReactNode;
  imgSrc?: string;
  sequence?: number;
}) => {
  const isOdd = sequence % 2 !== 0;
  const controls = useAnimation();
  const ref = useRef(null);
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
      variants={variantsY}
      transition={{
        duration: 0.5,
        type: 'spring',
        damping: 15,
        stiffness: 100,
      }}
      className={cn(
        'bg-neutral-100 text-black rounded-xl flex items-center content-center min-h-[500px] flex-col md:flex-row',
        isOdd && 'md:flex-row-reverse'
      )}
    >
      <motion.div
        className='md:w-7/12 p-4 md:px-8 md:py-0'
        variants={variantsScale}
        transition={{
          duration: 0.5,
          delay: isAnimated ? 0.1 : 0,
          type: 'spring',
          damping: 12,
          stiffness: 100,
        }}
      >
        <h2 className='text-3xl mb-4 font-medium text-neutral-950'>{title}</h2>
        <div className='text-neutral-800'>{text}</div>
      </motion.div>
      <motion.div className='w-full md:w-5/12 h-full bg-dot-thick-black/20 grid place-items-center transition-all duration-150 hover:bg-dot-thick-black/30'>
        <div className='p-4 h-full md:w-2/3 md:h-auto md:p-0'>
          <motion.img
            className='object-cover rounded-lg max-w-64 md:max-w-full'
            src={imgSrc}
            alt={title}
            variants={variantsScale}
            transition={{
              duration: 0.5,
              delay: isAnimated ? 0.1 : 0,
              type: 'spring',
              damping: 12,
              stiffness: 100,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-check h-7 w-7 flex-none rounded-full bg-accent p-1 text-black'
    >
      <path d='M20 6 9 17l-5-5'></path>
    </svg>
  );
};
