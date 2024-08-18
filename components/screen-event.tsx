import { Event } from '@/types'
import Avatar from 'boring-avatars'
import { motion } from 'framer-motion'
import { Drawer } from 'vaul'
import { Link } from './link'

interface ScreenEventProps {
  event: Event | undefined
}

export default function ScreenEvent({ event }: ScreenEventProps) {
  if (!event) {
    return null
  }

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.25,
      }}
      exit={{ opacity: 0, scale: 0.95 }}
      className='w-screen min-h-screen h-screen absolute top-0 right-0 z-0 overflow-auto'>
      <motion.div className='w-full h-[70%] relative'>
        <motion.img src={event.image} alt='' className='w-full h-full object-cover' />

        <div className='absolute flex-col gap-4 z-20 w-full text-left h-fit p-4 pb-6 bottom-0 flex bg-gradient-to-b from-white/0 via-[#232323]/30 to-black/70'>
          <div className='badge-symbol-mask shadow-sm w-[100px] h-[100px] flex items-center justify-center relative'>
            <img className='w-[120%] h-[120%] object-cover object-center' src={event.image} alt='' />
            <img className='w-[95%] h-[95%] absolute z-10' src='/coven-symbol-dash.svg' alt='' />
          </div>

          <motion.span className=' font-integral text-3xl leading-none '>{event.title}</motion.span>
        </div>
      </motion.div>

      <div className='w-full overflow-auto p-3 mt-3 text-black'>
        <span className='font-integral tracking-wider ml-1'>
          {event.participants.length} Attendee{event.participants.length > 0 ? 's' : ''}
        </span>

        <div className='w-full'>
          <div className='no-scrollbar grid grid-cols-3 gap-3 mt-3 overflow-auto'>
            {event.participants.map((attendee, index) => (
              <Drawer.Root shouldScaleBackground>
                <Drawer.Trigger>
                  <motion.button
                    className='text-left w-full relative aspect-square rounded-2xl overflow-hidden'
                    whileTap={{ scale: 0.94 }}
                    key={index}>
                    <Avatar name={attendee.id} square size={'100%'} />

                    <div className='absolute text-white flex flex-col bottom-0 p-2 px-2.5'>
                      <span className='font-lemon text-sm'>
                        {attendee.firstName} {attendee.lastName}
                      </span>
                      <small className='text-xs text-white/80'>@{attendee.username.split('/')[3]}</small>
                    </div>
                  </motion.button>
                </Drawer.Trigger>
                <Drawer.Portal>
                  <Drawer.Overlay className='fixed inset-0 z-20 bg-black/40' />
                  <Drawer.Content className='bg-zinc-100 flex flex-col h-[150px] rounded-t-[20px] mt-28 fixed z-30 bottom-0 left-0 right-0'>
                    <div className='p-4  bg-white text-black rounded-t-[20px] flex-1'>
                      <Drawer.Title className='font-medium'></Drawer.Title>
                      <div className='flex items-center justify-between gap-4 px-2 p-4'>
                        <div className='flex items-center gap-4'>
                          <div className='avatar-symbol-mask w-20 h-20 aspect-square'>
                            <Avatar name={attendee.id.toString()} size={80} square={true} />
                          </div>
                          <div className='flex flex-col'>
                            <span className=' font-integral'>
                              {attendee.firstName} {attendee.lastName}
                            </span>
                            <small className='font-lemon text-default-400'>@{attendee.username.split('/')[3]}</small>
                          </div>
                        </div>
                        <Link href={attendee.id}>
                          <span className='p-2 bg-black font-lemon text-sm rounded-xl text-white px-4'>Say GM</span>
                        </Link>
                      </div>
                    </div>
                  </Drawer.Content>
                </Drawer.Portal>
              </Drawer.Root>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
