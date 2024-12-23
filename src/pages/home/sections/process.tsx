import { useEffect, useRef, useState } from 'react';
import { cn, variantsScale } from '../../../lib/utils';
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faCircle,
  faCode,
  faDraftingCompass,
  faHandshake,
  faPeopleCarry,
  faTasks,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default function Process() {
  const cards = [
    {
      title: 'Reunião de Briefing',
      icon: faHandshake as IconProp,
      text: 'A gente não quer só ouvir suas ideias, queremos entender o que te move. Essa conversa inicial é onde descobrimos como fazer sua marca ser inesquecível..',
    },
    {
      title: 'Planejamento do Projeto',
      icon: faTasks as IconProp,
      text: 'Com o destino traçado, criamos um plano claro e sem firulas. Escopo? Check. Prazos? Check. O resto é suor e entrega.',
    },
    {
      title: 'Criação do Wireframe',
      icon: faDraftingCompass as IconProp,
      text: 'A base de tudo é uma estrutura bem feita. Esboçamos o fluxo ideal, sem enrolação, pra mostrar exatamente como sua presença online vai se destacar.',
    },
    {
      title: 'Desenvolvimento',
      icon: faCode as IconProp,
      text: 'Hora de fazer acontecer. Misturamos design arrojado com tecnologia funcional para criar algo que vai muito além do bonito — é inesquecível.',
    },
    {
      title: 'Revisão e Testes',
      icon: faCheckCircle as IconProp,
      text: 'Revisamos tudo até cada detalhe estar no ponto. Se algo não impressiona, volta pra bancada. Simples assim.',
    },
    {
      title: 'Entrega e Suporte',
      icon: faPeopleCarry as IconProp,
      text: 'Lançamos sua ideia para o mundo e ficamos ao seu lado. Porque o sucesso do seu projeto é tão nosso quanto seu.',
    },
  ];

  const ref = useRef(null);
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

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className='bg-white'>
      <div className='container h-full py-[100px]'>
        <h1 className='text-4xl text-center font-bold mb-[100px] lg:mb-2 text-black'>
          Como trabalhamos em <span className='text-primary'>6</span> passos
        </h1>
        <p className='hidden lg:block text-center text-neutral-600 mb-[100px]'>
          Passe o mouse sobre os cards para mais detalhes
        </p>

        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto w-full content-end items-end gap-2'
          ref={ref}
          initial='hidden'
          animate={isAnimated ? controls : 'hidden'}
          variants={variantsScale}
          transition={{
            duration: 0.5,
            type: 'spring',
            damping: 15,
            stiffness: 100,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              onMouseOver={() => window.innerWidth > 768 && setHovered(index)}
              onMouseLeave={() => window.innerWidth > 768 && setHovered(null)}
              className={cn(
                'flex flex-col justify-start text-black bg-white relative py-8 px-4 min-h-[440px] h-full overflow-hidden transition-all duration-500 rounded-xl',
                hovered === index && 'text-white h-[110%]'
              )}
            >
              <div className='bg-primary/20 z-[2] w-12 h-12 flex justify-center items-center relative rounded-3xl text-[20px]'>
                <FontAwesomeIcon icon={card.icon as IconProp} />
              </div>
              <div className='relative z-[2] mt-6'>
                <h3 className='font-semibold text-3xl'>{card.title}</h3>
              </div>
              <div
                className={cn(
                  'relative z-[2] overflow-hidden transition-all duration-300 h-full lg:h-0',
                  hovered === index && 'text-white lg:h-full'
                )}
              >
                <p className='mt-4 mb-6 text-lg font-normal'>{card.text}</p>
              </div>
              <div className='absolute flex justify-center items-end top-[0%] bottom-[0%] left-[0%] right-[0%] custom-translate-1'>
                <div
                  className={cn(
                    'bg-black z-[1] rounded-[150px] absolute -bottom-72 w-[300px] h-[300px] custom-translate-2 transition-all duration-500 delay-100',
                    hovered === index && 'custom-translate-2--hover'
                  )}
                ></div>
                <div
                  className={cn(
                    'bg-accent z-0 rounded-[150px] absolute -bottom-72 w-[300px] h-[300px] custom-translate-2 transition-all duration-500',
                    hovered === index && 'custom-translate-2--hover',
                    index % 2 == 1 && 'bg-primary'
                  )}
                ></div>
              </div>
              <div className='border border-neutral-700 absolute inset-0 z-0 rounded-xl'></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
