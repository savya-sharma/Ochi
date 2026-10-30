import Logo from './Logo'

const socials = ["Instagram", "Behance", "Facebook", "Linkedin"]
const menu = ["Home", "Services", "Our work", "About us", "Insights", "Contact us"]
const locations = [
  ["202-1965 W 4th Ave", "Vancouver, Canada"],
  ["30 Chukarina St", "Lviv, Ukraine"],
]

function Footer() {
  return (
    <footer className='footer w-full flex flex-col md:flex-row gap-10 md:gap-5 md:min-h-screen bg-[#F1F1F1] text-zinc-800 rounded-t-[20px] -mt-5 relative px-5 py-10 md:p-[3.5vw]'>
      <div className='md:w-1/2 flex flex-col justify-between gap-8'>
        <div className='heading font-founders uppercase font-semibold text-[17vw] md:text-[8.5vw] leading-[0.85]'>
          <h1>Eye-</h1>
          <h1>Opening</h1>
        </div>
        <Logo className='hidden md:block' />
      </div>

      <div className='md:w-1/2'>
        <h1 className='font-founders uppercase font-semibold text-[17vw] md:text-[8.5vw] leading-[0.85]'>
          Presentations
        </h1>

        <div className='dets mt-8 text-zinc-700'>
          <h5 className='mb-3'>S:</h5>
          <div className='flex flex-col'>
            {socials.map((s) => (
              <a key={s} className='underline underline-offset-4 w-fit hover:opacity-60' href="#">{s}</a>
            ))}
          </div>

          <div className='mt-8 grid grid-cols-2 gap-6'>
            <div className='flex flex-col gap-4'>
              <h5>L:</h5>
              {locations.map((lines) => (
                <div key={lines[0]} className='flex flex-col'>
                  {lines.map((l) => (
                    <a key={l} className='underline underline-offset-4 w-fit hover:opacity-60' href="#">{l}</a>
                  ))}
                </div>
              ))}
            </div>

            <div className='flex flex-col gap-4'>
              <h5>M:</h5>
              <div className='flex flex-col'>
                {menu.map((m) => (
                  <a key={m} className='underline underline-offset-4 w-fit hover:opacity-60' href="#">{m}</a>
                ))}
              </div>
            </div>
          </div>

          <div className='mt-8'>
            <h5 className='mb-3'>E:</h5>
            <a className='underline underline-offset-4 hover:opacity-60' href="mailto:hello@ochi.design">hello@ochi.design</a>
          </div>

          <div className='mt-10 flex flex-col sm:flex-row gap-2 justify-between text-sm'>
            <span className='text-zinc-400'>&copy; ochi design 2024. <a className='underline' href="#">Legal Terms</a></span>
            <a className='text-zinc-400' href="#">Website by Obys</a>
          </div>

          <Logo className='md:hidden mt-8' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
