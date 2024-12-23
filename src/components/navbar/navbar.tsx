import * as React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    name: 'booreal',
    path: '/',
  },
  {
    name: 'serviços',
    path: '/',
  },
  {
    name: 'sobre',
    path: '/',
  },
  {
    name: 'contato',
    path: '/sobre',
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

  return (
    <header>
      <nav
        className={`mx-auto flex justify-evenly max-w-sm fixed inset-0 rounded-2xl z-50 h-fit md:max-w-lg transition-all duration-200 ${
          scrolled ? 'my-4 py-4 bg-glass' : 'my-0 py-4'
        }`}
      >
        {links.map((link, index) => {
          return (
            <Link
              key={index}
              to={link.path}
              className='capitalize text-black font-medium text-lg hover:scale-105 transition-all rounded-2xl'
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
