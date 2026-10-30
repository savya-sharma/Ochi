import { motion } from 'framer-motion'
import images from '../images'
import SafeImg from './SafeImg'

const projects = [
  {
    title: "Cardboard Spaceship",
    img: images.projects.cardboard,
    color: "#1c1c1c",
    tags: ["Branded Template", "Sales Deck", "Social Media Templates"],
  },
  {
    title: "AH2 & Matt Horn",
    img: images.projects.ah2,
    color: "#2b2b2b",
    tags: ["Pitch Deck"],
  },
  {
    title: "Fyde",
    img: images.projects.fyde,
    color: "#0f2f2a",
    tags: ["Audit", "Copy Writing", "Sales Deck", "Slides Design"],
  },
  {
    title: "Vise",
    img: images.projects.vise,
    color: "#1f2a44",
    tags: ["Agency", "Company Presentation"],
  },
  {
    title: "Trawa",
    img: images.projects.trawa,
    color: "#2e3b1f",
    tags: ["Brand Identity", "Design Research", "Investor Deck"],
  },
  {
    title: "Premium Blend",
    img: images.projects.premiumBlend,
    color: "#3a2a1e",
    tags: ["Branded Template"],
  },
]

const letter = {
  rest: { y: '100%' },
  hover: (i) => ({ y: '0%', transition: { ease: [0.22, 1, 0.36, 1], duration: 0.5, delay: i * 0.03 } }),
}

function ProjectCard({ project, side }) {
  return (
    <motion.div initial="rest" whileHover="hover" animate="rest" className='cardcontainer relative w-full'>
      <div className='flex items-center gap-2 mb-4 text-zinc-900'>
        <span className='w-2.5 h-2.5 rounded-full bg-zinc-900'></span>
        <h3 className='uppercase text-sm md:text-base tracking-tight'>{project.title}</h3>
      </div>

      <div className='relative'>
        {/* Big title that slides in on hover, centred on the gap between the two cards (desktop only) */}
        <h1
          className={`hidden md:flex pointer-events-none absolute z-10 top-1/2 -translate-y-1/2 overflow-hidden whitespace-nowrap font-founders uppercase text-[7vw] leading-none text-[#CDEA68] font-semibold tracking-tighter ${side === 'left' ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`}
        >
          {project.title.split('').map((char, i) => (
            <motion.span key={i} custom={i} variants={letter} className='inline-block'>
              {char === ' ' ? ' ' : char}
            </motion.span>
          ))}
        </h1>

        <motion.div
          variants={{ rest: { scale: 1 }, hover: { scale: 0.96 } }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
          style={{ backgroundColor: project.color }}
          className='card w-full aspect-[4/3] md:aspect-auto md:h-[75vh] rounded-xl overflow-hidden'
        >
          <motion.div
            variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
            className='w-full h-full'
          >
            <SafeImg
              className='w-full h-full object-cover'
              src={project.img}
              alt={project.title}
              fallback={
                <div className='w-full h-full flex items-center justify-center p-6 font-founders uppercase text-[#CDEA68] text-4xl md:text-[3.5vw] leading-none text-center tracking-tight'>
                  {project.title}
                </div>
              }
            />
          </motion.div>
        </motion.div>
      </div>

      <div className='flex flex-wrap gap-2 pt-4'>
        {project.tags.map((tag) => (
          <a
            key={tag}
            href="#"
            className='px-3 py-1 uppercase text-xs md:text-sm tracking-tight border border-zinc-900 text-zinc-900 rounded-full duration-300 hover:bg-zinc-900 hover:text-white'
          >
            {tag}
          </a>
        ))}
      </div>
    </motion.div>
  )
}

function Featured() {
  return (
    <section className='w-full py-16 md:py-20 bg-[#F1F1F1]'>
      <div className='w-full px-5 md:px-[4vw] border-b border-zinc-400 pb-6 md:pb-8'>
        <h1 className='projectheading font-neue text-4xl md:text-[4vw] text-[#212121] tracking-tight'>
          Featured projects
        </h1>
      </div>

      <div className='fliptext px-5 md:px-[4vw] grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-12 md:gap-y-24 mt-10'>
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} side={i % 2 === 0 ? 'left' : 'right'} />
        ))}
      </div>

      <div className="casestudies flex justify-center pt-16 md:pt-[8vw] px-5">
        <a
          href="#"
          className='group w-full max-w-xs text-zinc-200 font-semibold flex items-center justify-between bg-zinc-900 rounded-full text-sm md:text-base py-4 px-6 tracking-tighter'
        >
          VIEW ALL CASE STUDIES
          <span className='w-2 h-2 bg-zinc-100 rounded-full duration-300 group-hover:scale-150'></span>
        </a>
      </div>
    </section>
  )
}

export default Featured
