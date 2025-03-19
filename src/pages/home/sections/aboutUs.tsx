const AboutUs = () => {
  const team = [
    { name: 'Rafael Pereira', title: 'Desenvolvedor Full Stack', },
    { name: 'Mia Sotel', title: 'Diretora Criativa' },
    { name: 'Millan Buzando Diporra', title: 'Web Designer' },
    { name: 'Tetanic', title: 'Web designer' },
  ];

  // Function to render animation based on title
  const renderAnimation = (title: string) => {
    const lowerTitle = title.toLowerCase();

    if (lowerTitle.includes('desenvolvedor') || lowerTitle.includes('full stack')) {
      return (
        <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 overflow-hidden">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Code brackets */}
            <div className="absolute top-1/4 left-1/4 text-6xl font-mono text-white/20 animate-pulse">{`{`}</div>
            <div className="absolute bottom-1/4 right-1/4 text-6xl font-mono text-white/20 animate-pulse">{`}`}</div>

            {/* Floating elements */}
            <div className="absolute w-full h-full">
              {['<div>', '<span>', 'function()', 'return', '&&', '||', '===', '?:', '[]', '{}'].map((item, i) => (
                <div
                  key={i}
                  className="absolute text-white/40 font-mono text-sm md:text-base animate-float"
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${5 + Math.random() * 5}s`
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Central code editor */}
            <div className="relative z-10 bg-gray-800/70 rounded-lg p-4 w-3/4 max-w-md backdrop-blur-sm border border-white/10">
              <div className="flex gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="font-mono text-sm text-white">
                <div className="flex">
                  <span className="text-gray-500 mr-2">1</span>
                  <span className="text-purple-400">function</span>
                  <span className="text-white ml-1">createApp</span>
                  <span className="text-white">()</span>
                  <span className="text-white ml-1">{`{`}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-2">2</span>
                  <span className="ml-4 text-blue-400">return</span>
                  <span className="text-white ml-1">{`{`}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-2">3</span>
                  <span className="ml-8 text-green-400">render</span>
                  <span className="text-white">:</span>
                  <span className="text-yellow-400 ml-1">{'() =>'}</span>
                  <span className="text-white ml-1">{`{`}</span>
                </div>
                <div className="flex overflow-hidden whitespace-nowrap">
                  <span className="text-gray-500 mr-2">4</span>
                  <span className="ml-12 animate-typing border-r-2 border-white w-0">return &lt;Booreal /&gt;;</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-2">5</span>
                  <span className="ml-8 text-white">{`}`}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-2">6</span>
                  <span className="ml-4 text-white">{`}`}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-2">7</span>
                  <span className="text-white">{`}`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else if (lowerTitle.includes('web designer') || lowerTitle.includes('designer')) {
      return (
        <div className="h-full w-full bg-gradient-to-br from-teal-500 to-emerald-700 flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full">
            {/* Background grid */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="border border-white/10"></div>
              ))}
            </div>

            {/* Central design elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* First circle - clockwise */}
              <div className="absolute w-64 h-64 border-4 border-dashed border-white/30 rounded-full animate-spin-slow"></div>

              {/* Second circle - counter-clockwise */}
              <div className="absolute w-48 h-48 border-4 border-dotted border-white/40 rounded-full animate-spin-reverse"></div>

              {/* Central shape */}
              <div className="relative">
                {/* Design elements that loop in opposite directions */}
                <div className="flex gap-6">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center animate-float"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      <div className={`w-12 h-12 ${i % 2 === 0 ? 'rounded-lg' : 'rounded-full'} bg-white/20 animate-pulse`}></div>
                      <div className="mt-2 w-8 h-1 bg-white/40 rounded-full"></div>
                      <div className="mt-1 w-10 h-1 bg-white/30 rounded-full"></div>
                    </div>
                  ))}
                </div>

                {/* Mirrored elements going in reverse */}
                <div className="flex gap-6 mt-8">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center animate-float-reverse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      <div className="mt-1 w-10 h-1 bg-white/30 rounded-full"></div>
                      <div className="mt-2 w-8 h-1 bg-white/40 rounded-full"></div>
                      <div className={`w-12 h-12 ${i % 2 === 0 ? 'rounded-full' : 'rounded-lg'} bg-white/20 animate-pulse`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Design tools */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center group">
                <div className="w-4 h-4 bg-white/60 rounded-sm transform rotate-45 group-hover:rotate-90 transition-all duration-300"></div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center group">
                <div className="w-4 h-4 bg-white/60 rounded-full group-hover:rounded-sm transition-all duration-300"></div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center group">
                <div className="w-5 h-1 bg-white/60 rounded-full group-hover:w-3 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else if (lowerTitle.includes('criativa') || lowerTitle.includes('diretora')) {
      return (
        <div className="h-full w-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center overflow-hidden">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-white/20 animate-spin-slow"></div>
              <div className="w-60 h-60 rounded-full border-4 border-dashed border-white/40 animate-spin-reverse"></div>
            </div>
            <div className="relative z-10">
              <div className="flex gap-3 justify-center">
                {['#FF5E5B', '#D8D8D8', '#39A0ED', '#FCFF4B', '#A89CFF'].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-24 rounded-full animate-bounce"
                    style={{ backgroundColor: color, animationDelay: `${i * 0.2}s`, animationDuration: '1s' }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      // Default animation
      return (
        <div className="h-full w-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-white/20 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/30 rounded-full animate-pulse"></div>
          </div>
        </div>
      );
    }
  };

  return (
    <div id='about' className='bg-primary'>
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
                <div className="h-[590px] rounded-xl overflow-hidden">
                  {renderAnimation(person.title)}
                </div>
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
                <div className="h-[590px] rounded-xl overflow-hidden">
                  {renderAnimation(person.title)}
                </div>
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
                <div className="h-[590px] rounded-xl overflow-hidden">
                  {renderAnimation(person.title)}
                </div>
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
                <div className="h-[590px] rounded-xl overflow-hidden">
                  {renderAnimation(person.title)}
                </div>
                <span className='block text-center font-bold'>{person.name}</span>
                <p className='text-center'>{person.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-[100px] max-w-6xl mx-auto'>
          <h3 className='text-3xl font-bold mb-[50px] text-center'>
            No que <span className='text-accent'>acreditamos</span>
          </h3>

          <div className='grid gap-8 grid-cols-1 md:grid-cols-2 items-center'>
            <div className='bg-gradient-to-br from-accent/10 to-primary-dark p-6 rounded-2xl backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300'>
              <p className='text-xl leading-relaxed text-neutral-100'>
                Nada de complicação. Usamos o que funciona e descartamos o que só serve pra encher linguiça. Se precisar de código, a gente escreve.
              </p>
              <p className='text-lg mt-4 text-neutral-300'>
                Se for preciso um código personalizado, nós o escrevemos. Se algo já funciona bem, não complicamos.
              </p>
            </div>

            <div className='bg-gradient-to-br from-primary-light to-primary p-6 rounded-2xl border border-neutral-800'>
              <h4 className='text-xl font-semibold mb-6 text-neutral-100'>
                Abordamos cada projeto com as mesmas perguntas:
              </h4>

              <div className='flex flex-col gap-6'>
                <div className='flex items-center group'>
                  <div className='bg-accent p-3 rounded-xl text-black mr-4 group-hover:scale-110 transition-transform duration-300'>
                    <PencilIcon />
                  </div>
                  <p className='text-lg text-neutral-200 group-hover:text-accent transition-colors duration-300'>
                    O que isso precisa fazer?
                  </p>
                </div>

                <div className='flex items-center group'>
                  <div className='bg-accent p-3 rounded-xl text-black mr-4 group-hover:scale-110 transition-transform duration-300'>
                    <UserGroupIcon />
                  </div>
                  <p className='text-lg text-neutral-200 group-hover:text-accent transition-colors duration-300'>
                    Quem vai usar?
                  </p>
                </div>

                <div className='flex items-center group'>
                  <div className='bg-accent p-3 rounded-xl text-black mr-4 group-hover:scale-110 transition-transform duration-300'>
                    <ChartIcon />
                  </div>
                  <p className='text-lg text-neutral-200 group-hover:text-accent transition-colors duration-300'>
                    Como torná-lo o mais simples e eficaz?
                  </p>
                </div>
              </div>
            </div>
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
