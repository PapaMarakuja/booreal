import { FunctionComponent, useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { variantsScale } from '../../../lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faUsers,
  faLightbulb,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const ResultsSection: FunctionComponent = () => {
  const results = [
    {
      icon: faChartLine as IconProp,
      title: 'AUMENTO DE TRÁFEGO',
      description: 'Sites que DOMINAM os buscadores e atraem visitantes como um ímã. Sua concorrência vai se perguntar o que aconteceu.',
      stat: '+150%',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: faUsers as IconProp,
      title: 'MAIS CONVERSÕES',
      description: 'Transformamos curiosos em clientes FIÉIS. Seu site não só impressiona, ele CONVENCE e VENDE.',
      stat: '+70%',
      color: 'from-green-500 to-emerald-400'
    },
    {
      icon: faLightbulb as IconProp,
      title: 'EXPERIÊNCIA MEMORÁVEL',
      description: 'Design que HIPNOTIZA à primeira vista. Seus visitantes não vão conseguir ESQUECER sua marca.',
      stat: '95%',
      color: 'from-yellow-500 to-amber-400'
    },
    {
      icon: faRocket as IconProp,
      title: 'CRESCIMENTO ACELERADO',
      description: 'Estratégias digitais EXPLOSIVAS que deixam a concorrência comendo poeira. Prepare-se para DECOLAR.',
      stat: '3x',
      color: 'from-red-500 to-rose-400'
    }
  ];

  const ref = useRef<HTMLDivElement | null>(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const controls = useAnimation();

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
    <section className='bg-primary'>
      <div className='container py-[100px]'>
        <h1 className='text-4xl text-center font-bold mb-2'>
          Resultados <span className='text-accent'>explosivos</span> para seu Negócio
        </h1>
        <h2 className='text-lg text-center mb-[50px] text-neutral-200'>
          Chega de mediocridade digital. Sua marca merece dominar o mercado.
        </h2>

        <motion.div
          ref={ref}
          initial='hidden'
          animate={isAnimated ? controls : 'hidden'}
          variants={variantsScale}
          className='grid grid-cols-1 md:grid-cols-2 gap-2'
        >
          {results.map((result, index) => (
            <motion.div
              key={index}
              className='bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:shadow-glow'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center bg-gradient-to-br ${result.color}`}>
                <FontAwesomeIcon icon={result.icon} className='text-white text-2xl' />
              </div>
              <div className='text-5xl font-bold text-white mb-2'>{result.stat}</div>
              <h3 className='text-xl font-bold text-white mb-2 tracking-wider'>{result.title}</h3>
              <p className='text-neutral-300 font-medium'>{result.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
