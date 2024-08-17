import { User } from '@telegram-apps/sdk-react'
import Avatar from 'boring-avatars'
import { motion } from 'framer-motion'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

interface ScreenProfileProps {
  user: User
}

const items = Array(5)
  .fill(0)
  .map((_, ind) => ({ id: `element-${ind}` }))

const responsive = {
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
}

export default function ScreenProfile({ user }: ScreenProfileProps) {
  return (
    <section className=' w-full h-full flex flex-col items-center'>
      <div className='flex flex-col items-center'>
        <motion.div
          transition={{ ease: [0.65, 0.05, 0.36, 1], duration: 0.44 }}
          animate={{ rotate: 22.5 * 3 }}
          layoutId='avatar'
          className='avatar-symbol-mask w-20 h-20 aspect-square '>
          <Avatar name={user.id.toString()} square={true} size={80} />
        </motion.div>

        <motion.div
          className='flex flex-col items-center'
          transition={{ delay: 0.35, ease: [0.65, 0.05, 0.36, 1] }}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}>
          <span className='font-integral text-black mt-2 text-lg tracking-wide'>
            {user.firstName} {user.lastName}
          </span>
          <small className='text-black/50 font-lemon leading-none'>@{user.username}</small>
        </motion.div>
      </div>

      <div className='font-lemon text-lg w-full flex flex-col gap-3 mt-4 text-black'>
        {Array.from({ length: 3 }).map((_, index) => (
          <motion.section
            key={index}
            initial={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              delay: 0.5 + 0.05 * index,
              ease: [0.77, 0, 0.18, 1],
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            className='flex flex-col gap-2'>
            <div className='w-3/4 text-black/90'>
              <span>react-multi-carousel react-multi-carousel l</span>
            </div>

            <div className='flex gap-3 w-full overflow-auto'>
              <div className='badge-symbol-mask shadow-sm w-[100px] h-[100px] flex items-center justify-center relative'>
                <img
                  className='w-[120%] h-[120%] object-cover object-center'
                  src='https://assets.poap.xyz/396d478f-fc6e-4f98-86e6-c1521bf8a250.gif?size=large'
                  alt=''
                />
                <img className='w-[95%] h-[95%] absolute z-10' src='/coven-symbol-dash.svg' alt='' />
              </div>

              <Carousel
                deviceType='mobile'
                removeArrowOnDeviceType={['tablet', 'mobile']}
                transitionDuration={50}
                responsive={responsive}
                className='w-full'>
                {items.map(({ id }) => (
                  <div className='w-[130px] h-[180px] bg-red-400 rounded-2xl ml-3' title={id} key={id} />
                ))}
              </Carousel>
            </div>
          </motion.section>
        ))}
      </div>
    </section>
  )
}
