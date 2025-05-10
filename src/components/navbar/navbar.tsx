import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSmoothScroll } from '../../hooks/use-smooth-scroll';

const links = [
  {
    name: 'booreal',
    sectionId: 'hero',
  },
  {
    name: 'sobre',
    sectionId: 'about',
  },
  {
    name: 'serviços',
    sectionId: 'services',
  },
  {
    name: 'contato',
    sectionId: 'contact',
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('hero');
  const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);
  const { scrollTo } = useSmoothScroll();

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);

      const sections = links.map(link => document.getElementById(link.sectionId));
      const validSections = sections.filter(section => section !== null) as HTMLElement[];

      if (validSections.length > 0) {
        const currentPosition = window.scrollY + 200;

        for (let i = validSections.length - 1; i >= 0; i--) {
          const section = validSections[i];
          if (currentPosition >= section.offsetTop) {
            setActiveSection(links[i].sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    scrollTo(sectionId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-center items-center z-[1000] pointer-events-none">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`
          flex justify-between items-center w-full max-w-sm mx-auto
          rounded-full pointer-events-auto transition-all duration-300
          ${scrolled
            ? 'my-4 py-2 px-6 bg-white/70 backdrop-blur-md shadow-lg shadow-black/5 border border-white/20'
            : 'my-6 py-3 px-8 bg-white/50 backdrop-blur-sm border border-white/10'
          }
        `}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 via-white/10 to-accent/10 z-[-1]"
          animate={{
            opacity: scrolled ? 0.9 : 0.6,
            scale: scrolled ? 1 : 1.01
          }}
          transition={{ duration: 0.3 }}
        />

        {links.map((link, index) => (
          <motion.button
            key={index}
            onClick={() => scrollToSection(link.sectionId)}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className={`
              relative flex items-center justify-center px-3 py-1 rounded-full transition-all
              ${activeSection === link.sectionId
                ? 'text-primary font-semibold'
                : 'text-black/80 font-medium hover:text-primary'
              }
            `}
            whileTap={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
          >
            <AnimatePresence>
              {(activeSection === link.sectionId || hoverIndex === index) && (
                <motion.div
                  className={`absolute inset-0 rounded-full ${activeSection === link.sectionId
                    ? 'bg-accent/10 backdrop-blur-sm'
                    : 'bg-primary/5'
                    }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>

            <span className="capitalize text-sm md:text-base relative z-10">
              {link.name}
            </span>
          </motion.button>
        ))}
      </motion.nav>
    </header>
  );
}
