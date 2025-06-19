import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const AboutUs = () => {
  // Refs para animações baseadas em scroll
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const missionRef = useRef(null);
  
  // Hooks para detectar quando elementos entram na viewport
  const titleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  
  // Animação de parallax para o fundo
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  // Variantes de animação
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 15 
      }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div id='about' className='bg-primary relative overflow-hidden' ref={containerRef}>
      {/* Background parallax effect */}
      <motion.div 
        className="absolute inset-0 opacity-10 z-0" 
        style={{ 
          backgroundImage: 'url("/images/grid-pattern.svg")', 
          backgroundSize: '50px 50px',
          y: backgroundY 
        }}
      />
      
      <div className='container py-[120px] relative z-10'>
        {/* Section Title */}
        <motion.div 
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-24"
        >
          <h1 className='text-5xl font-bold mb-6'>
            Sobre a <span className='text-accent'>Booreal</span>
          </h1>
          <p className='text-xl text-neutral-300 max-w-3xl mx-auto'>
            Transformando ideias em soluções digitais inovadoras que impulsionam o sucesso dos nossos clientes.
          </p>
        </motion.div>
        
        {/* Mission Statement with Image */}
        <motion.div 
          ref={missionRef}
          initial="hidden"
          animate={missionInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32"
        >
          <motion.div variants={fadeInUp} className="order-2 lg:order-1">
            <h2 className='text-3xl font-bold mb-6'>
              Nossa <span className='text-accent'>Missão</span>
            </h2>
            <p className='text-lg text-neutral-200 mb-6 leading-relaxed'>
              Na Booreal, nossa missão é desenvolver soluções digitais que não apenas atendam às necessidades atuais dos nossos clientes, mas também antecipem os desafios futuros do mercado digital em constante evolução.
            </p>
            <p className='text-lg text-neutral-200 leading-relaxed'>
              Combinamos expertise técnica com visão estratégica para criar produtos digitais que se destacam pela qualidade, desempenho e experiência do usuário excepcional.
            </p>
            
            <motion.div 
              className="mt-10 flex gap-4"
              variants={staggerContainer}
            >
              <motion.div 
                className="h-1 bg-accent rounded-full w-16"
                initial={{ width: 0 }}
                animate={{ width: '4rem' }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              <motion.div 
                className="h-1 bg-neutral-700 rounded-full w-8"
                initial={{ width: 0 }}
                animate={{ width: '2rem' }}
                transition={{ delay: 0.7, duration: 0.8 }}
              />
              <motion.div 
                className="h-1 bg-neutral-700 rounded-full w-4"
                initial={{ width: 0 }}
                animate={{ width: '1rem' }}
                transition={{ delay: 0.9, duration: 0.8 }}
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp} 
            className="order-1 lg:order-2 relative"
          >
            <motion.div 
              className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl z-0"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            
            <motion.div 
              className="relative z-10 bg-gradient-to-br from-primary-light to-primary-dark p-2 rounded-2xl overflow-hidden border border-primary-light/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <div className="aspect-video rounded-xl overflow-hidden">
                <img 
                  src="/images/booreal.png" 
                  alt="Booreal workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-10 -right-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl z-0"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
