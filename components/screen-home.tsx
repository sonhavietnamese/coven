import { motion } from 'framer-motion'
import Masonry from 'react-responsive-masonry'

export default function ScreenHome() {
  return (
    <>
      <motion.section
        transition={{
          delay: 0.5,
        }}
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className='w-full rounded-[20px] h-[220px] overflow-hidden relative no-scrollbar'>
        <img
          src='https://blog.pintu.co.id/wp-content/uploads/2022/12/Kalender-Bitcoin_Token2049-Singapore-2023-1024x778.jpg'
          alt=''
          className='w-full h-full object-cover'
        />

        <div className='absolute z-20 w-[50%] h-fit p-2 top-0 '>
          <small className='leading-none p-2 bg-black/30 rounded-full px-3 py-1.5 font-lemon backdrop-blur-sm text-white/80'>Happening</small>
        </div>

        <div className='absolute z-20 w-full justify-between items-end h-fit p-4 bottom-0 flex bg-gradient-to-b from-white/0 via-[#232323]/30 to-black/70'>
          <div className='w-1/2'>
            <span className='text-lg font-integral leading-none'>Asia’s premier crypto</span>
          </div>
          <button className='p-2.5 py-1 bg-white/20 backdrop-blur-sm w-fit rounded-xl flex items-center justify-center'>
            <span className='text-sm text-white/80 font-lemon tracking-wide'>Check in</span>
          </button>
        </div>
      </motion.section>

      <section className='w-full overflow-auto no-scrollbar'>
        <Masonry columnsCount={2} gutter='0.75rem' className='no-scrollbar'>
          {Array.from({ length: 10 }).map((_, index) => (
            <motion.div
              transition={{
                delay: 0.6 + 0.03 * index,
                ease: [0.77, 0, 0.18, 1],
              }}
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              className='w-full h-fit bg-red-400 rounded-[20px] overflow-hidden relative'>
              <img
                src='https://blog.pintu.co.id/wp-content/uploads/2022/12/Kalender-Bitcoin_Token2049-Singapore-2023-1024x778.jpg'
                alt=''
                className='w-full h-full object-cover'
              />

              <div className='absolute z-20 w-[50%] h-fit p-2 top-0 '>
                <small className='leading-none p-2 bg-black/30 rounded-full px-3 py-1.5 font-lemon backdrop-blur-sm text-white/80'>Happening</small>
              </div>

              <div className='absolute z-20 w-full justify-between items-end h-fit p-4 bottom-0 flex bg-gradient-to-b from-white/0 via-[#232323]/30 to-black/70'>
                <span className=' font-integral leading-none'>Asia’s premier crypto</span>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </section>
    </>
  )
}
