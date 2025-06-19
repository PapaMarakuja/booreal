import { motion } from 'framer-motion';
import { FlipWords } from '../../../components/ui/flip-words';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faFileCode,
  faPalette,
  faLayerGroup,
  faObjectGroup,
  faPaintBrush,
  faFont,
  faImage,
  faSwatchbook,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Separator } from '../../../components/separator/separator';

export default function Services() {
  const containerRef = useRef(null);
  
  // Dados dos serviços
  const services = [
    {
      title: 'Desenvolvimento Web',
      description: 'Não adianta ter um site bonito se ele não converte. Aqui, beleza e funcionalidade andam de mãos dadas. Porque o que importa é o resultado, e resultados gritam.',
      features: [
        {
          title: 'Websites Responsivos',
          icon: faLaptopCode as IconProp,
          description: 'Sites que se adaptam perfeitamente a qualquer dispositivo, garantindo a melhor experiência para seus usuários.',
          color: 'from-blue-500/10 to-cyan-400/10'
        },
        {
          title: 'Landing Pages',
          icon: faFileCode as IconProp,
          description: 'Landing pages estratégicas que convertem visitantes em clientes com design persuasivo e otimizado.',
          color: 'from-cyan-400/10 to-teal-500/10'
        },
        {
          title: 'Portfólios',
          icon: faLayerGroup as IconProp,
          description: 'Portfólios impressionantes que destacam seu trabalho e capturam a atenção do seu público-alvo.',
          color: 'from-teal-500/10 to-green-500/10'
        },
        {
          title: 'Wireframes',
          icon: faObjectGroup as IconProp,
          description: 'Prototipagem detalhada que mapeia a jornada do usuário e garante uma experiência fluida.',
          color: 'from-green-500/10 to-emerald-400/10'
        },
        {
          title: 'UI/UX Design',
          icon: faPalette as IconProp,
          description: 'Design de interface e experiência do usuário que combina estética e funcionalidade para resultados excepcionais.',
          color: 'from-emerald-400/10 to-blue-500/10'
        },
      ],
    },
    {
      title: 'Branding',
      description: 'Se a sua marca não está marcando ninguém, qual o ponto? Construímos identidades que falam alto, que conectam e que deixam sua concorrência no chinelo.',
      features: [
        {
          title: 'Logotipos Memoráveis',
          icon: faPaintBrush as IconProp,
          description: 'Logotipos que ninguém esquece: a cara da sua marca com atitude e personalidade única.',
          color: 'from-purple-500/10 to-pink-500/10'
        },
        {
          title: 'Paleta de Cores',
          icon: faSwatchbook as IconProp,
          description: 'Paletas de cores estratégicas que transmitem os valores da sua marca e criam conexão emocional.',
          color: 'from-pink-500/10 to-rose-500/10'
        },
        {
          title: 'Tipografia',
          icon: faFont as IconProp,
          description: 'Seleção tipográfica que traduz a personalidade da sua marca e garante legibilidade em todos os meios.',
          color: 'from-rose-500/10 to-orange-500/10'
        },
        {
          title: 'Identidade Visual',
          icon: faImage as IconProp,
          description: 'Sistema visual completo e coerente que fortalece o reconhecimento da sua marca em todos os pontos de contato.',
          color: 'from-orange-500/10 to-purple-500/10'
        },
      ],
    },
  ];

  const words = ['você', 'sua empresa'];

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id='services' className='bg-primary relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8'>
      {/* Elementos decorativos de fundo */}
      <div className='absolute inset-0 overflow-hidden opacity-10 pointer-events-none'>
        <div className='absolute top-10 left-10 w-64 h-64 bg-accent rounded-full mix-blend-screen filter blur-3xl animate-pulse-slow'></div>
        <div className='absolute bottom-10 right-10 w-80 h-80 bg-primary-light rounded-full mix-blend-screen filter blur-3xl animate-float'></div>
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
            O que podemos fazer para <span className='text-accent'>
              <FlipWords words={words} duration={5000} />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Conheça nossos serviços e descubra como podemos ajudar a impulsionar seu negócio com soluções digitais de alta qualidade.
          </p>
        </motion.div>

        <div className='space-y-24'>
          {services.map((service, serviceIndex) => (
            <div key={serviceIndex} className="space-y-12">
              {/* Título e descrição do serviço */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="text-3xl font-bold mb-4 text-white">{service.title}</h2>
                <p className="text-lg text-white/80">{service.description}</p>
              </motion.div>
              
              {/* Cards de recursos */}
              <motion.div
                ref={containerRef}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    variants={cardVariants}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    className={`bg-gradient-to-br ${feature.color} backdrop-blur-sm border border-white/10 hover:border-accent/20 p-8 rounded-xl shadow-sm transition-all duration-300`}
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 text-white">
                      <FontAwesomeIcon icon={feature.icon} size="lg" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                    <p className="text-white/80">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
