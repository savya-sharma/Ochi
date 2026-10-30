import EyePair from './EyePair'

function Ready() {
  return (
    <section className='w-full bg-lime-ochi relative overflow-hidden pb-[30vw] md:pb-[22vw] pt-20 md:pt-[8vw]'>
      <div className='heading font-founders uppercase text-[16vw] md:text-[13vw] font-semibold leading-[13vw] md:leading-[10.5vw] text-center text-zinc-900 tracking-tight'>
        <h1>Ready</h1>
        <h1>To Start</h1>
        <h1>The Project?</h1>
      </div>

      <EyePair
        className='absolute left-1/2 -translate-x-1/2 top-[25%] md:top-[30%] pointer-events-none'
        size='w-[24vw] h-[24vw] md:w-[11.5vw] md:h-[11.5vw]'
        pupil='w-[15vw] h-[15vw] md:w-[7vw] md:h-[7vw]'
      />

      <div className='relative flex flex-col text-zinc-700 items-center gap-4 pt-10 md:pt-[3vw] px-5'>
        <a
          href="#"
          className='group w-full max-w-xs bg-zinc-900 justify-between px-6 py-4 tracking-tight text-sm md:text-base text-zinc-200 rounded-full font-semibold flex items-center duration-300 hover:bg-black hover:text-white'
        >
          START THE PROJECT
          <span className='block w-2 h-2 rounded-full bg-zinc-100 duration-300 group-hover:scale-150'></span>
        </a>

        <span className='uppercase text-sm'>or</span>

        <a
          href="mailto:hello@ochi.design"
          className='group w-full max-w-xs border border-zinc-900 justify-between px-6 py-4 tracking-tight text-sm md:text-base text-zinc-900 rounded-full flex items-center duration-300 hover:bg-zinc-900 hover:text-white'
        >
          HELLO@OCHI.DESIGN
          <span className='block w-2 h-2 rounded-full bg-zinc-900 duration-300 group-hover:bg-white'></span>
        </a>
      </div>
    </section>
  )
}

export default Ready
