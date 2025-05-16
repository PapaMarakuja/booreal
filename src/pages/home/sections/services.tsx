import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { FlipWords } from '../../../components/ui/flip-words';
import { cn, booreal } from '../../../lib/utils';
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
      imgSrc: 'images/booreal.png',
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
      imgSrc: 'images/booreal2.png',
    },
  ];

  const words = ['você', 'sua empresa'];
  const [activeService, setActiveService] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [controls]);

  return (
    <section id='services' className='bg-primary relative overflow-hidden'>
      {/* Elementos decorativos de fundo */}
      <div className='absolute inset-0 overflow-hidden opacity-10 pointer-events-none'>
        <div className='absolute top-10 left-10 w-64 h-64 bg-accent rounded-full mix-blend-screen filter blur-3xl animate-pulse-slow'></div>
        <div className='absolute bottom-10 right-10 w-80 h-80 bg-primary-light rounded-full mix-blend-screen filter blur-3xl animate-float'></div>
      </div>

      <div className='container py-[100px] relative z-10' ref={containerRef}>
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={booreal.variants.fadeInUp}
          transition={booreal.transition.softSpring}
        >
          <h1 className='text-4xl text-center font-bold mb-4'>
            O que podemos fazer para
          </h1>
          <div className='text-center mb-[80px]'>
            <span className='text-accent text-4xl hidden md:inline-block'>
              <FlipWords words={words} duration={5000} />
            </span>
            <span className='text-accent text-4xl md:hidden'>você/sua empresa</span>
          </div>
        </motion.div>

        <div className='grid gap-8'>
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              title={service.title}
              text={service.text}
              imgSrc={service.imgSrc}
              sequence={i}
              isActive={activeService === i}
              onHover={() => setActiveService(i)}
              onLeave={() => setActiveService(null)}
              delay={i * 0.2}
              isVisible={isVisible}
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
  isActive,
  onHover,
  onLeave,
  delay,
  isVisible,
}: {
  title: string;
  text?: React.ReactNode;
  imgSrc?: string;
  sequence?: number;
  isActive?: boolean;
  onHover: () => void;
  onLeave: () => void;
  delay: number;
  isVisible: boolean;
}) => {
  const isOdd = sequence % 2 !== 0;
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{
        ...booreal.transition.softSpring,
        delay
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={() => {
        onLeave();
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isActive
          ? `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * -5}deg)`
          : 'perspective(1000px) rotateX(0) rotateY(0)',
        transition: 'transform 0.3s ease'
      }}
      className={cn(
        'bg-neutral-100 text-black rounded-xl flex items-center content-center min-h-[500px] flex-col md:flex-row p-2',
        isOdd && 'md:flex-row-reverse',
        isActive && 'shadow-2xl shadow-accent/20'
      )}
    >
      <motion.div
        className='md:w-7/12 p-4 md:px-8 md:py-6 relative z-10'
        variants={booreal.variants.fadeScale}
        transition={{
          ...booreal.transition.spring,
          delay: delay + 0.1
        }}
      >
        <motion.h2
          className='text-3xl mb-4 font-medium text-neutral-950 relative inline-block'
          initial={{ opacity: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={booreal.transition.spring}
        >
          {title}
          <motion.div
            className='absolute -bottom-1 left-0 h-1 bg-primary rounded-full'
            initial={{ width: 0 }}
            animate={{ width: isActive ? '100%' : '0%' }}
            transition={{ duration: 0.3 }}
          />
        </motion.h2>

        <AnimatePresence>
          <motion.div
            className='text-neutral-800'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {text}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.div
        className='w-full md:w-5/12 h-full bg-dot-thick-black/20 grid place-items-center rounded-lg overflow-hidden relative'
        variants={booreal.variants.slideInRight}
        transition={{
          ...booreal.transition.spring,
          delay: delay + 0.2
        }}
      >
        <motion.div
          className='absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent opacity-0'
          animate={{ opacity: isActive ? 0.5 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className='p-4 h-full md:w-2/3 md:h-auto md:p-0 relative z-10'>
          <motion.img
            className='object-cover rounded-lg max-w-64 md:max-w-full'
            src={imgSrc}
            alt={title}
            initial={{ scale: 1 }}
            animate={{
              scale: isActive ? 1.05 : 1,
              rotate: isActive ? mousePosition.x * 2 : 0
            }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const CheckIcon = () => {
  return (
    <motion.svg
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
      whileHover={{ scale: 1.2, rotate: 5 }}
      transition={booreal.transition.spring}
    >
      <motion.path
        d='M20 6 9 17l-5-5'
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </motion.svg>
  );
};
