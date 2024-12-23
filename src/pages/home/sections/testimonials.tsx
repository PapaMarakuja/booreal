import { FunctionComponent } from 'react';
import { AnimatedTestimonials } from '../../../components/ui/animated-testimonials';

const Testimonials: FunctionComponent = () => {
  const testimonials = [
    {
      quote:
        'O cuidado com os detalhes e as funcionalidades inovadoras transformaram completamente a forma como apresentamos nossos serviços online. Era exatamente o que precisávamos.',
      name: 'Sheila Karmen Silva',
      designation: 'Gerente de Recursos Humanos na Empresa Xerecas',
      src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      quote:
        'A implementação foi rápida e os resultados superaram nossas expectativas. A flexibilidade do design foi impressionante.',
      name: 'Maicon Douglas',
      designation: 'CEO da Maicon Motos',
      src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      quote:
        'O site criado pela Booreal melhorou significativamente a percepção da nossa marca. A interface intuitiva foi um diferencial enorme.',
      name: 'Aisha Vasca',
      designation: 'CEO da Aisha Manicure e Pedicure',
      src: 'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      quote:
        'Um suporte excepcional e funcionalidades robustas. É raro encontrar uma empresa que entrega tudo o que promete com tanta dedicação.',
      name: 'Nadia Réia',
      designation: 'Diretora de Marketing na WEG Vendas',
      src: 'https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      quote:
        'Meu site ficou tão **** que até eu não consigo parar de olhar pra ele. Sério, Booreal, vocês fazem milagres... e não, Kyle, você não vai conseguir um site igual ao meu, seu ***!',
      name: 'Eric Cartman',
      designation: 'CEO da DikenBaus',
      src: '/src/assets/EricCartman.png',
    },
  ];

  return (
    <section className='bg-primary'>
      <div className='container py-[100px]'>
        <h1 className='text-4xl text-center font-bold mb-2'>
          Projetos Que Fazem a <span className='text-accent'>Diferença</span>
        </h1>
        <h2 className='text-lg text-center mb-[100px] text-neutral-200'>
          De startups a empresas consolidadas, ajudamos marcas a saírem do comum.
          <br />
          Confira alguns dos nossos trabalhos mais recentes e inspire-se.
        </h2>

        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
};

export default Testimonials;
