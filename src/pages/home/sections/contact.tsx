import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../../../components/button/button';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

export default function Contact() {
  return (
    <section className='bg-white text-black rounded-b-3xl'>
      <div className='container py-[100px]'>
        <h1 className='text-4xl text-center font-bold mb-[50px]'>
          Pronto para elevar <span className='text-primary'>sua marca</span> a outro
          nível?
        </h1>

        <div className='flex w-full items-center justify-center'>
          <div className='flex flex-col justify-center text-center gap-2 md:flex-row'>
            <Button className='m-0'>
              <FontAwesomeIcon icon={faWhatsapp} className='mr-2' />
              Entrar em contato
            </Button>

            <Button className='m-0' theme='secondary'>
              <FontAwesomeIcon icon={faQuestionCircle} className='mr-2' />
              Ainda tenho dúvidas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
