import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSmoothScroll } from '../../hooks/use-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { 
  faInstagram, 
  faFacebook, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';

const leftLinks = [
  { name: 'a booreal', sectionId: 'hero' },
  { name: 'sobre', sectionId: 'about' },
  { name: 'serviços', sectionId: 'services' },
];

const rightLinks = [
  { name: 'passos', sectionId: 'process' },
  { name: 'resultados', sectionId: 'results' },
  { name: 'contato', sectionId: 'contact' },
];

const socialLinks = [
  { icon: faInstagram, url: 'https://www.instagram.com/booreal.lab' },
  { icon: faFacebook, url: 'https://www.facebook.com/booreal.lab' },
  { icon: faLinkedin, url: 'https://www.linkedin.com/company/booreal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [isAtTop, setIsAtTop] = React.useState(true);
  const [activeSection, setActiveSection] = React.useState('hero');
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { scrollTo } = useSmoothScroll();

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrolled = currentScrollY > 50;
      const atTop = currentScrollY < 50; // Reduzido para 50 para detecção mais precisa
      
      setScrolled(isScrolled);
      setIsAtTop(atTop);
      
      // Controle de visibilidade da navbar - ajustado para funcionar melhor com Lenis
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - com delay reduzido
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY < 50) {
        // Scrolling up ou no topo - sempre visível no topo
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);

      // Detecção de seção ativa
      const allLinks = [...leftLinks, ...rightLinks];
      const sections = allLinks.map(link => document.getElementById(link.sectionId));
      const validSections = sections.filter(section => section !== null) as HTMLElement[];

      if (validSections.length > 0) {
        const currentPosition = currentScrollY + 200;

        for (let i = validSections.length - 1; i >= 0; i--) {
          const section = validSections[i];
          if (currentPosition >= section.offsetTop) {
            setActiveSection(allLinks[i].sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    scrollTo(sectionId);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.header 
        className="hidden md:block fixed top-0 left-0 right-0 z-[1000] p-4"
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }} // Reduzido para 0.2s
      >
        <motion.nav
          className="bg-primary rounded-2xl shadow-lg backdrop-blur-md border border-white/10 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center justify-between px-8 py-4">
            {/* Left Links */}
            <div className="flex items-center space-x-8">
              {leftLinks.map((link, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(link.sectionId)}
                  className={`text-white font-medium transition-all duration-300 hover:text-accent ${
                    activeSection === link.sectionId ? 'text-accent' : ''
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>

            {/* Center Logo/Brand - Melhor centralizado */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              {isAtTop ? (
                <motion.img
                  src="/images/logo.svg"
                  alt="Booreal Logo"
                  className="h-8 w-auto"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <motion.div
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-white font-bold text-xl tracking-wider">BOOREAL</span>
                </motion.div>
              )}
            </div>

            {/* Right Links */}
            <div className="flex items-center space-x-8">
              {rightLinks.map((link, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(link.sectionId)}
                  className={`text-white font-medium transition-all duration-300 hover:text-accent ${
                    activeSection === link.sectionId ? 'text-accent' : ''
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.nav>
      </motion.header>

      {/* Mobile Navbar */}
      <motion.header 
        className="md:hidden fixed top-0 left-0 right-0 z-[1000] p-4"
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }} // Reduzido para 0.2s
      >
        <motion.nav
          className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center justify-between px-6 py-4">
            <motion.button
              onClick={toggleMobileMenu}
              className="flex items-center space-x-2 text-white"
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faBars} className="text-lg" />
              <span className="font-medium">MENU</span>
            </motion.button>
          </div>
        </motion.nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-[1001] bg-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6">
                <h2 className="text-white text-xl font-bold">MENU</h2>
                <motion.button
                  onClick={toggleMobileMenu}
                  className="text-white p-2"
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={faTimes} className="text-xl" />
                </motion.button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 flex flex-col justify-center px-6">
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, staggerChildren: 0.1 }}
                >
                  {/* Booreal primeiro */}
                  <motion.button
                    onClick={() => scrollToSection('hero')}
                    className="block text-left text-white text-2xl font-bold py-4 border-b border-white/20 w-full"
                    whileTap={{ scale: 0.95 }}
                  >
                    A BOOREAL
                  </motion.button>
                  
                  {/* Outros links */}
                  {[...leftLinks.slice(1), ...rightLinks].map((link, index) => (
                    <motion.button
                      key={index}
                      onClick={() => scrollToSection(link.sectionId)}
                      className="block text-left text-white text-2xl font-bold py-4 border-b border-white/20 w-full uppercase"
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="p-6">
                <p className="text-white/80 text-center mb-4">Nos acompanhe nas redes sociais</p>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FontAwesomeIcon icon={social.icon} className="text-lg" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
