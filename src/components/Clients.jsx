import { FiArrowUpRight } from 'react-icons/fi'
import images from '../images'

const services = ["Investor Deck", "Sales Deck"]

const others = [
  ["Planetly", "Nina Walloch"],
  ["Wokiz Easy", "Tomer Levy"],
  ["Premium Blend", "Ellen Kim"],
  ["Hypercare Systems", "Brendan Goss"],
  ["Officevibe", "Raff Labrie"],
  ["Orderlion", "Stefan Strohmer"],
  ["Black Book", "Jaci Smith"],
  ["Trawa Energy", "David Budde"],
]

function Clients() {
  return (
    <section className='w-full bg-zinc-100 text-zinc-900'>
      <div className='clientheading px-5 md:px-[4vw] pt-12 md:pt-16 border-b border-zinc-400 pb-6 md:pb-8'>
        <h1 className='font-neue text-4xl md:text-[4vw] tracking-tight'>Clients&apos; reviews</h1>
      </div>

      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[5vw] px-5 md:px-[4vw] py-8 md:py-10 border-b border-zinc-400'>
        <div className='flex justify-between gap-6'>
          <h5>Karman Ventures</h5>
          <div>
            <h5 className='mb-4 md:mb-[3vw]'>Services:</h5>
            <div className='flex flex-col gap-2'>
              {services.map((s) => (
                <a key={s} href="#" className='group flex items-center gap-1'>
                  <span className='border border-zinc-600 rounded-full px-3 py-0.5 uppercase text-sm duration-300 group-hover:bg-zinc-900 group-hover:text-white'>{s}</span>
                  <span className='border border-zinc-600 rounded-full p-1.5 duration-300 group-hover:bg-zinc-900 group-hover:text-white'>
                    <FiArrowUpRight />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='flex justify-between gap-6'>
          <div className='max-w-lg'>
            <h5 className='mb-6 md:mb-[3vw]'>William Barnes</h5>
            <div className='w-24 h-24 md:w-[7vw] md:h-[7vw] rounded-[10px] mb-4 overflow-hidden'>
              <img className='w-full h-full object-cover' src={images.reviewer} alt="William Barnes" />
            </div>
            <p className='text-zinc-600 tracking-tight'>
              They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5
            </p>
          </div>
          <h5 className='text-zinc-400 shrink-0'>READ</h5>
        </div>
      </div>

      <div className='partitions'>
        {others.map(([company, person]) => (
          <div key={company} className='partition grid grid-cols-[1fr_auto] md:grid-cols-2 gap-4 md:gap-[5vw] px-5 md:px-[4vw] py-4 border-b border-zinc-400'>
            <a href="#" className='underline underline-offset-4 hover:opacity-60 duration-200'>{company}</a>
            <div className='flex justify-between gap-6'>
              <h5 className='hidden sm:block'>{person}</h5>
              <a href="#" className='underline underline-offset-4 hover:opacity-60 duration-200 ml-auto'>READ</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients
