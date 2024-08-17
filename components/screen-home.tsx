import { motion } from 'framer-motion'
import Masonry from 'react-responsive-masonry'
import { Event } from '@/types'
import { Drawer } from 'vaul'

interface ScreenHomeProps {
  events: Event[]
  onChangeEvent: (event: Event) => void
}

export default function ScreenHome({ events, onChangeEvent }: ScreenHomeProps) {
  return (
    <>
      <motion.section
        transition={{
          delay: 0.3,
        }}
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className='w-full rounded-[20px] h-[250px] overflow-hidden relative no-scrollbar'>
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
          {events.map((event, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.4 + 0.03 * index,
                  ease: [0.77, 0, 0.18, 1],
                },
              }}
              key={index}
              whileTap={{ scale: 0.95, transition: { delay: 0 }, name: 'tap' }}
              onMouseUp={() => onChangeEvent(event)}
              className='w-full h-fit bg-red-400 rounded-[20px] overflow-hidden relative'>
              <motion.img
                layoutId={`event-${event.id}-image`}
                src='https://blog.pintu.co.id/wp-content/uploads/2022/12/Kalender-Bitcoin_Token2049-Singapore-2023-1024x778.jpg'
                alt=''
                className='w-full h-full object-cover'
              />

              <div className='absolute z-20 w-[50%] h-fit p-2 top-0 '>
                <small className='leading-none p-2 bg-black/30 rounded-full px-3 py-1.5 font-lemon backdrop-blur-sm text-white/80'>Happening</small>
              </div>

              <div className='absolute z-20 w-full text-left h-fit p-4 bottom-0 flex bg-gradient-to-b from-white/0 via-[#232323]/30 to-black/70'>
                <motion.span className=' font-integral leading-none'>Asia’s premier crypto</motion.span>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </section>
    </>
  )
}
