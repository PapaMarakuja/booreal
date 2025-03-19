import { createWhatsAppUrl } from "../../../utils/utils";

export default function Footer() {
  const handleWhatsAppRedirect = () => {
    window.open(createWhatsAppUrl(), "_blank");
  };

  return (
    <section className='sticky -z-10 bottom-0 py-[50px] bg-black'>
      <div className='container overflow-hidden'>
        <div className='flex flex-col-reverse gap-4 items-center justify-center md:flex-row md:justify-between'>
          <p className='text-neutral-200'>
            © 2024 Booreal. Todos os direitos reservados.
          </p>
          <div className='flex gap-4'>
            <a
              href='https://www.instagram.com/booreal.lab'
              target="_blank"
              rel="noopener noreferrer"
              className='text-neutral-400 hover:text-primary transition-colors cursor-pointer'
            >
              Instagram
            </a>
            <a
              href='#'
              target="_blank"
              rel="noopener noreferrer"
              className='text-neutral-400 hover:text-primary transition-colors cursor-pointer'
            >
              LinkedIn
            </a>
            <a
              onClick={() => handleWhatsAppRedirect()}
              className='text-neutral-400 hover:text-primary transition-colors cursor-pointer'
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
