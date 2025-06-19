import { FunctionComponent, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faUsers,
  faLightbulb,
  faArrowDown,
  faStar,
  faQuoteLeft
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const ResultsSection: FunctionComponent = () => {
  const results = [
    {
      icon: faChartLine as IconProp,
      title: 'AUMENTO DE TRÁFEGO',
      description: 'Sites que DOMINAM os buscadores e atraem visitantes como um ímã. Sua concorrência vai se perguntar o que aconteceu.',
      stat: '+150%',
      color: 'from-green-500/20 to-emerald-500/20',
      textColor: 'text-green-500'
    },
    {
      icon: faUsers as IconProp,
      title: 'MAIS CONVERSÕES',
      description: 'Transformamos curiosos em clientes FIÉIS. Seu site não só impressiona, ele CONVENCE e VENDE.',
      stat: '+70%',
      color: 'from-green-500/20 to-emerald-500/20',
      textColor: 'text-green-500'
    },
    {
      icon: faLightbulb as IconProp,
      title: 'EXPERIÊNCIA MEMORÁVEL',
      description: 'Design que HIPNOTIZA à primeira vista. Seus visitantes não vão conseguir ESQUECER sua marca.',
      stat: '95%',
      color: 'from-green-500/20 to-emerald-500/20',
      textColor: 'text-green-500'
    },
    {
      icon: faArrowDown as IconProp,
      title: 'REDUÇÃO DE CUSTOS',
      description: 'Otimizamos seus processos digitais para reduzir custos operacionais e aumentar a eficiência do seu negócio.',
      stat: '-10%',
      color: 'from-red-500/20 to-rose-500/20',
      textColor: 'text-red-500'
    }
  ];

  const testimonials = [
    {
      text: "A Booreal transformou completamente nossa presença online. O tráfego do site aumentou e as vendas dispararam desde o primeiro mês!",
      author: "Carlos Silva, CEO da TechSolutions"
    },
    {
      text: "Trabalhar com a equipe da Booreal foi uma experiência incrível. Eles entenderam perfeitamente nossa visão e entregaram além das expectativas.",
      author: "Ana Ferreira, Diretora de Marketing da CreativeMinds"
    },
    {
      text: "Nosso e-commerce cresceu 200% em 6 meses após o redesign feito pela Booreal. Melhor investimento que fizemos!",
      author: "Roberto Mendes, Fundador da StyleShop"
    }
  ];

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
    <section id='results' className='bg-primary py-20'>
      <div className='container'>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className='text-4xl font-bold mb-4'>
            Resultados <span className='text-accent'>explosivos</span> para seu Negócio
          </h1>
          <p className='text-lg text-neutral-200 max-w-3xl mx-auto'>
            Chega de mediocridade digital. Sua marca merece dominar o mercado.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-20'
        >
          {results.map((result, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`bg-gradient-to-br ${result.color} backdrop-blur-sm border border-white/10 hover:border-white/30 p-8 rounded-xl shadow-md transition-all duration-300`}
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-full text-white">
                  <FontAwesomeIcon icon={result.icon} size="lg" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wider">{result.title}</h3>
              </div>
              <div className={`text-5xl font-bold ${result.textColor} mb-4`}>{result.stat}</div>
              <p className="text-neutral-200">{result.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className='text-3xl font-bold mb-2'>
            O que nossos clientes dizem
          </h2>
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400 text-2xl mx-1" />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className='grid grid-cols-1 md:grid-cols-3 gap-8'
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/30 p-8 rounded-xl shadow-md transition-all duration-300"
            >
              <FontAwesomeIcon icon={faQuoteLeft} className="text-accent/50 text-4xl mb-4" />
              <p className="text-white mb-6">{testimonial.text}</p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400 text-sm mx-0.5" />
                ))}
              </div>
              <p className="text-neutral-300 mt-4 text-sm font-medium">{testimonial.author}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
