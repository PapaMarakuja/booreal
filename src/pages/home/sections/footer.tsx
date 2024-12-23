export default function Footer() {
  return (
    <section className='sticky -z-10 bottom-0 py-[50px] bg-black'>
      <div className='container overflow-hidden'>
        <div className='flex flex-col-reverse gap-4 items-center justify-center md:flex-row md:justify-between'>
          <p className='text-neutral-200'>
            © 2024 Booreal. Todos os direitos reservados.
          </p>
          <div className='flex gap-4'>
            <a href='#' className='text-neutral-400 hover:text-primary transition-colors'>
              Instagram
            </a>
            <a href='#' className='text-neutral-400 hover:text-primary transition-colors'>
              LinkedIn
            </a>
            <a href='#' className='text-neutral-400 hover:text-primary transition-colors'>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
