import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket, 
  faBullseye, 
  faEye, 
  faGem, 
  faSync, 
  faStar,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';

export default function About() {
  const containerRef = useRef(null);

  // Dados dos cards
  const aboutCards = [
    {
      title: 'Nossa História',
      content: 'Fundada em 2020, a Booreal nasceu da visão de criar soluções digitais que realmente fazem diferença. Começamos como uma pequena equipe de desenvolvedores apaixonados e crescemos mantendo essa mesma paixão pela inovação.',
      icon: faRocket,
      color: 'from-blue-500/10 to-purple-500/10'
    },
    {
      title: 'Nossa Missão',
      content: 'Transformar ideias em soluções digitais inovadoras que impulsionam o sucesso dos nossos clientes, combinando tecnologia de ponta com design excepcional.',
      icon: faBullseye,
      color: 'from-purple-500/10 to-pink-500/10'
    },
    {
      title: 'Nossa Visão',
      content: 'Ser reconhecida como referência em desenvolvimento de soluções digitais, criando produtos que não apenas atendem, mas superam as expectativas dos nossos clientes.',
      icon: faEye,
      color: 'from-pink-500/10 to-orange-500/10'
    },
    {
      title: 'Nossos Valores',
      content: 'Inovação, qualidade, transparência e compromisso são os pilares que sustentam cada projeto que realizamos, garantindo resultados excepcionais.',
      icon: faGem,
      color: 'from-orange-500/10 to-yellow-500/10'
    },
    {
      title: 'Nossa Abordagem',
      content: 'Adotamos metodologias ágeis e processos eficientes para entregar soluções personalizadas que realmente resolvem os desafios específicos de cada cliente.',
      icon: faSync,
      color: 'from-yellow-500/10 to-green-500/10'
    },
    {
      title: 'Nosso Diferencial',
      content: 'Combinamos expertise técnica com visão estratégica para criar produtos digitais que se destacam pela qualidade, desempenho e experiência do usuário excepcional.',
      icon: faStar,
      color: 'from-green-500/10 to-blue-500/10'
    },
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
    <div className="bg-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Sobre a <span className="text-primary">Booreal</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Conheça mais sobre nossa empresa, nossa história e o que nos motiva a criar soluções digitais excepcionais.
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`bg-gradient-to-br ${card.color} backdrop-blur-sm border border-gray-200 hover:border-primary/20 p-8 rounded-xl shadow-sm transition-all duration-300`}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 text-primary">
                <FontAwesomeIcon icon={card.icon} size="lg" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{card.title}</h3>
              <p className="text-gray-700">{card.content}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <motion.div 
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-gradient-to-br from-primary/5 to-accent/5 border border-gray-200 p-8 md:p-12 rounded-2xl shadow-sm"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full text-primary flex-shrink-0">
                <FontAwesomeIcon icon={faHandshake} size="2x" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Prontos para enfrentar cada desafio</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Na Booreal, estamos sempre disponíveis para transformar suas ideias em realidade. Nossa equipe está preparada para enfrentar qualquer desafio com criatividade e excelência técnica, garantindo que cada projeto seja entregue com a máxima qualidade e que nossos clientes fiquem sempre satisfeitos com os resultados.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                >
                  Fale Conosco
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}