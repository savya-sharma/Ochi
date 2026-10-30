import images from '../images'
import Logo from './Logo'
import SafeImg from './SafeImg'

const smallCards = [
  { img: images.clutch, name: "Clutch", label: "Rating 5.0 on Clutch" },
  { img: images.bootcamp, name: "Business Bootcamp", label: "Business Bootcamp Alumni" },
]

const pill = 'absolute left-5 bottom-6 md:bottom-8 px-3 py-0.5 uppercase text-xs md:text-sm lg:text-[0.9vw] font-semibold tracking-tighter border rounded-full duration-300'

function Cards() {
  return (
    <section className='w-full bg-zinc-100 px-5 md:px-[4vw] py-16 md:py-[10vw] flex flex-col lg:flex-row gap-5'>
      <div className='cardcontainer lg:w-1/2'>
        <div className='group relative card w-full h-[40vh] md:h-[55vh] rounded-xl bg-teal-ochi flex justify-center items-center overflow-hidden'>
          <Logo className='w-32 md:w-40 h-auto text-[#CDEA68] duration-500 group-hover:scale-90' />
          <span className={`${pill} border-[#CDEA68] text-[#CDEA68]`}>&copy;2019-2024</span>
        </div>
      </div>

      <div className='cardcontainer lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5'>
        {smallCards.map((c) => (
          <div key={c.label} className='group relative flex items-center justify-center card w-full h-[40vh] md:h-[55vh] rounded-xl bg-[#212121] overflow-hidden'>
            <SafeImg
              className='w-28 md:w-32 duration-500 group-hover:scale-90'
              src={c.img}
              alt={c.name}
              fallback={
                <span className='font-founders uppercase text-zinc-200 text-3xl text-center px-6 leading-none duration-500 group-hover:scale-90'>{c.name}</span>
              }
            />
            <span className={`${pill} border-zinc-300 text-zinc-300 group-hover:bg-white group-hover:text-black`}>
              {c.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Cards
