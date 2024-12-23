const AboutUs = () => {
  const team = [
    {
      bg: 'bg-red-500',
      name: 'Rafael Pereira',
      title: 'Desenvolvedor Full Stack',
    },
    { bg: 'bg-blue-500', name: 'Mia Sotel', title: 'Diretora Criativa' },
    { bg: 'bg-green-500', name: 'Millan Buzando Diporra', title: 'Web Designer' },
    { bg: 'bg-yellow-500', name: 'Tetanic', title: 'Web designer' },
  ];

  return (
    <div className='bg-primary'>
      <div className='container py-[100px]'>
        <h1 className='text-4xl text-center font-bold mb-2'>
          Quem somos <span className='text-accent'>nós</span>?
        </h1>
        <h2 className='text-lg text-center mb-[100px] text-neutral-200'>
          Conheça quem está preparado para moldar o futuro.
        </h2>

        <div>
          {/* Phone */}
          <div className='grid gap-2 sm:hidden'>
            {team.map((person, index) => (
              <div key={index} className='transition-all duration-300 ease-in-out'>
                <div className={`${person.bg} h-[590px] rounded-xl`}></div>
                <span className='block text-center font-bold'>{person.name}</span>
                <p className='text-center'>{person.title}</p>
              </div>
            ))}
          </div>

          {/* Tablet */}
          <div className='hidden sm:flex gap-2 lg:hidden'>
            {team.slice(0, 2).map((person, index) => (
              <div
                key={index}
                className='flex-1 group transition-all duration-300 ease-in-out hover:flex-[2]'
              >
                <div className={`${person.bg} h-[590px] rounded-xl`}></div>
                <span className='block text-center font-bold'>{person.name}</span>
                <p className='text-center'>{person.title}</p>
              </div>
            ))}
          </div>

          <div className='hidden sm:flex gap-2 lg:hidden'>
            {team.slice(2, 4).map((person, index) => (
              <div
                key={index}
                className='flex-1 group transition-all duration-300 ease-in-out hover:flex-[2]'
              >
                <div className={`${person.bg} h-[590px] rounded-xl`}></div>
                <span className='block text-center font-bold'>{person.name}</span>
                <p className='text-center'>{person.title}</p>
              </div>
            ))}
          </div>

          {/* Desktop */}
          <div className='hidden lg:flex gap-2'>
            {team.map((person, index) => (
              <div
                key={index}
                className='flex-1 group transition-all duration-300 ease-in-out hover:flex-[2]'
              >
                <div className={`${person.bg} h-[590px] rounded-xl`}></div>
                <span className='block text-center font-bold'>{person.name}</span>
                <p className='text-center'>{person.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-[50px]'>
          <h3 className='text-2xl font-semibold mb-[50px] text-center'>
            No que <span className='text-accent'>acreditamos</span>
          </h3>
          <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
            <p className='text-lg text-neutral-200 rounded-xl p-4 bg-gradient-1 self-center'>
              Não acreditamos em complicar demais as coisas, usando as ferramentas e
              estratégias que fazem mais sentido para seus objetivos. <br />
              Se um código personalizado for necessário, nós o escrevemos. Se algo
              funciona imediatamente, não o reinventaremos.
            </p>

            <p className='text-lg text-neutral-300'>
              Abordamos cada projeto com as mesmas perguntas:
              <div className='flex flex-col gap-2 my-4'>
                <div className='flex'>
                  <div className='bg-accent p-1 text-sm rounded-full text-black mr-2'>
                    <PencilIcon />
                  </div>
                  <p>O que isso precisa fazer?</p>
                </div>
                <div className='flex'>
                  <div className='bg-accent p-1 text-sm rounded-full text-black mr-2'>
                    <UserGroupIcon />
                  </div>
                  <p>Quem vai usar?</p>
                </div>
                <div className='flex'>
                  <div className='bg-accent p-1 text-sm rounded-full text-black mr-2 h-fit'>
                    <ChartIcon />
                  </div>
                  <p>Como torná-lo o mais simples e eficaz?</p>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PencilIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='size-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
      />
    </svg>
  );
};

const ChartIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='size-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605'
      />
    </svg>
  );
};

const UserGroupIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='size-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z'
      />
    </svg>
  );
};

export default AboutUs;
