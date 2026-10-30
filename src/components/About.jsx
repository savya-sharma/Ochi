import { FaArrowUpLong } from 'react-icons/fa6'
import images from '../images'

function About() {
  return (
    <section className='w-full bg-lime-ochi rounded-t-3xl text-black pb-12 md:pb-[5vw] -mt-6 relative z-20'>
      <h1 className="font-neue text-[6.5vw] leading-[7.5vw] md:text-[4vw] md:leading-[4.5vw] tracking-tight px-5 py-10 md:p-[3.5vw]">
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
      </h1>
      <div className='w-full border-t border-[#a1b562] flex flex-col md:flex-row gap-8 px-5 pt-8 md:p-[3.5vw]'>
        <div className='md:w-1/2'>
          <h2 className='font-neue text-3xl md:text-[3.5vw]'>Our approach:</h2>
          <a href="#" className='group mt-5 inline-flex px-6 uppercase py-4 bg-zinc-900 rounded-full text-zinc-200 tracking-tight gap-10 items-center'>
            Read More
            <span className='w-2.5 h-2.5 flex items-center justify-center bg-zinc-100 rounded-full duration-300 group-hover:scale-[2.5]'>
              <FaArrowUpLong className='text-black rotate-45 text-[0px] group-hover:text-[5px] duration-300' />
            </span>
          </a>
        </div>

        <div className="md:w-1/2 h-[45vh] md:h-[70vh] rounded-2xl overflow-hidden">
          <img className='w-full h-full object-cover hover:scale-105 duration-700' src={images.about} alt="Our approach" />
        </div>
      </div>
    </section>
  )
}

export default About
