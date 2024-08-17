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

  const handleConnect = () => {}

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
        <motion.img
          src='https://blog.pintu.co.id/wp-content/uploads/2022/12/Kalender-Bitcoin_Token2049-Singapore-2023-1024x778.jpg'
          alt=''
          className='w-full h-full object-cover'
        />

        <div className='absolute flex-col gap-4 z-20 w-full text-left h-fit p-4 pb-6 bottom-0 flex bg-gradient-to-b from-white/0 via-[#232323]/30 to-black/70'>
          <div className='badge-symbol-mask shadow-sm w-[100px] h-[100px] flex items-center justify-center relative'>
            <img
              className='w-[120%] h-[120%] object-cover object-center'
              src='https://assets.poap.xyz/396d478f-fc6e-4f98-86e6-c1521bf8a250.gif?size=large'
              alt=''
            />
            <img className='w-[95%] h-[95%] absolute z-10' src='/coven-symbol-dash.svg' alt='' />
          </div>

          <motion.span className=' font-integral text-3xl leading-none '>Asia’s premier crypto</motion.span>
        </div>
      </motion.div>

      <div className='w-full overflow-auto p-3 mt-3 text-black'>
        <span className='font-integral tracking-wider ml-1'>20 Attendees</span>

        <div className='w-full'>
          <div className='no-scrollbar grid grid-cols-3 gap-3 mt-3 overflow-auto'>
            {Array.from({ length: 20 }).map((_, index) => (
              <Drawer.Root shouldScaleBackground>
                <Drawer.Trigger>
                  <motion.button
                    className='text-left w-full relative aspect-square rounded-2xl overflow-hidden'
                    whileTap={{ scale: 0.94 }}
                    key={index}>
                    <Avatar name='abc' square size={'100%'} />

                    <div className='absolute text-white flex flex-col bottom-0 p-2 px-2.5'>
                      <span className='font-lemon text-sm'>Nguyen S AAA</span>
                      <small className='text-xs text-white/80'>@abc</small>
                    </div>
                  </motion.button>
                </Drawer.Trigger>
                <Drawer.Portal>
                  <Drawer.Overlay className='fixed inset-0 z-20 bg-black/40' />
                  <Drawer.Content className='bg-zinc-100 flex flex-col h-[55%] rounded-t-[20px] mt-24 fixed z-30 bottom-0 left-0 right-0'>
                    <div className='p-4 bg-white rounded-t-[20px] flex-1'>
                      <div className='max-w-md mx-auto'>
                        <Drawer.Title className='font-medium mb-4'>Unstyled drawer for React.</Drawer.Title>
                        <p className='text-zinc-600 mb-2'>This component can be used as a replacement for a Dialog on mobile and tablet devices.</p>
                        <p className='text-zinc-600 mb-8'>It uses {index}</p>
                        <Link href={'https://t.me/sonhavietnamese'}>Connect</Link>
                        {/* <button className='text-black' onClick={()}>Connect</button> */}
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
