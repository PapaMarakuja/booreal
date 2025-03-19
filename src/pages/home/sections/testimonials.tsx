import { FunctionComponent } from 'react';
import { AnimatedTestimonials } from '../../../components/ui/animated-testimonials';

const Testimonials: FunctionComponent = () => {
  const testimonials = [
    {
      quote: 'A Booreal pegou minha ideia bagunçada e transformou num site que faz minha concorrência suar frio. Só confio nesses lunáticos pra isso.',
      name: 'Ava Duarte',
      designation: 'Fundadora da Riot Mode',
      src: 'assets/testimonial/AvaDuarte.png',
    },
    {
      quote: 'Meu site não só vende, ele hipnotiza. Se você ainda tá decidindo se contrata a Booreal... já perdeu tempo demais.',
      name: 'João Ferreira',
      designation: 'CEO da Chaos Labs',
      src: '/assets/testimonial/JoãoFerreira.png',
    },
    {
      quote: 'Disseram que era impossível criar um site tão rápido e insano... A Booreal riu na minha cara e entregou o impossível.',
      name: 'Jhenny Vega Silva',
      designation: 'Criadora da startup Phantom Hustle',
      src: '/assets/testimonial/JhennyVegaSilva.png',
    },
    {
      quote: 'Negócio é o seguinte: um site bom fala por si só. A Booreal fez o meu falar alto. Se você quer algo bem feito, contrate eles. Se quer um site medíocre... boa sorte por aí.',
      name: 'Leandro Moreira',
      designation: 'Dono da Moreira Trading Co.',
      src: '/assets/testimonial/LeandroMoreira.png',
    },
    {
      quote: 'Queria um site fora do comum, algo que ninguém tivesse visto antes. A Booreal apareceu, quebrou todas as regras e entregou um monstro digital. Resumindo: do jeito que eu gosto.',
      name: 'Renata Almeida',
      designation: 'Propietária da Comes e Bebes',
      src: '/assets/testimonial/RenataAlmeida.png',
    },
    {
      quote: 'Meu site ficou tão **** que até eu não consigo parar de olhar pra ele. Sério, Booreal, vocês fazem milagres... e não, Kyle, você não vai conseguir um site igual ao meu, seu ***!',
      name: 'Eric Cartman',
      designation: 'CEO da DikenBaus',
      src: '/assets/testimonial/ErikCartman.png',
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
