import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faCode,
  faDraftingCompass,
  faHandshake,
  faPeopleCarry,
  faTasks,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useLenis } from '../../../components/smooth-scroll/lenis-provider';

export default function Process() {
  const steps = [
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

  const ref = useRef<HTMLDivElement | null>(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const controls = useAnimation();
  const { lenis } = useLenis();

  // Função para verificar se o elemento está visível
  const checkVisibility = () => {
    if (!ref.current) return;
    
    const elementTop = ref.current.getBoundingClientRect().top;
    
    if (elementTop < window.innerHeight - 100) {
      setIsAnimated(true);
      controls.start('visible');
    }
  };

  useEffect(() => {
    // Verificar visibilidade inicial
    checkVisibility();
    
    // Usar o evento personalizado do Lenis para atualizar as animações
    const handleLenisScroll = () => {
      checkVisibility();
    };
    
    // Adicionar listener para o evento personalizado do Lenis
    document.addEventListener('lenisscroll', handleLenisScroll);
    
    // Manter o listener nativo como fallback
    window.addEventListener('scroll', handleLenisScroll);
    
    return () => {
      document.removeEventListener('lenisscroll', handleLenisScroll);
      window.removeEventListener('scroll', handleLenisScroll);
    };
  }, [controls, lenis]);

  return (
    <section id='process' className='bg-gradient-to-b from-white to-gray-100'>
      <div className='container h-full py-[100px]'>
        <h1 className='text-4xl text-center font-bold mb-[50px] text-black'>
          Como trabalhamos em <span className='text-primary'>6</span> passos
        </h1>

        <motion.div
          className='flex flex-col gap-8 max-w-3xl mx-auto'
          ref={ref}
          initial='hidden'
          animate={isAnimated ? controls : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className='bg-white rounded-xl shadow-md overflow-hidden border border-gray-100'
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 12,
                  },
                },
              }}
            >
              <div className='flex flex-col md:flex-row'>
                {/* Número do passo */}
                <div className='w-full md:w-24 flex-shrink-0 bg-gray-50 flex items-center justify-center p-4 md:p-6'>
                  <span className='text-4xl md:text-5xl font-bold text-primary'>
                    {index < 9 ? `0${index + 1}` : index + 1}
                  </span>
                </div>
                
                {/* Conteúdo do passo */}
                <div className='flex-1 p-6'>
                  <div className='flex items-center gap-4 mb-3'>
                    <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary'>
                      <FontAwesomeIcon icon={step.icon} size="lg" />
                    </div>
                    <h3 className='text-xl font-bold text-gray-900'>{step.title}</h3>
                  </div>
                  <p className='text-gray-700'>{step.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
