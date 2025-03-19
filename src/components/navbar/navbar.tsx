import * as React from 'react';

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

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header>
      <nav
        className={`mx-auto flex justify-evenly max-w-sm fixed inset-0 rounded-2xl z-50 h-fit md:max-w-lg transition-all duration-200 ${
          scrolled ? 'my-4 py-4 bg-glass' : 'my-0 py-4'
        }`}
      >
        {links.map((link, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(link.sectionId)}
            className='capitalize text-black font-medium text-lg hover:scale-105 transition-all rounded-2xl'
          >
            {link.name}
          </button>
        ))}
      </nav>
    </header>
  );
}
