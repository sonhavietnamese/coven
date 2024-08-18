import { User } from '@telegram-apps/sdk-react'
import Avatar from 'boring-avatars'
import { motion } from 'framer-motion'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

interface ScreenProfileProps {
  user: User
}
const responsive = {
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
}

const DUMMY_EVENTS = [
  {
    id: 1,
    title: 'Lens and ALLSHIPS: Mints & Music 🎶🌱',
    description: 'Description 1',
    badge: 'https://assets.poap.xyz/ebff9b0e-cfd1-4f7b-92e4-244e2fd1bcb1.png?size=large',
    photos: [
      {
        id: 1,
        url: 'https://cdn.evbstatic.com/s3-build/fe/build/images/75d81eed66f040a590ed5744b3367d8c-music.webp',
      },
      {
        id: 2,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQQMY6jSwfpK8Fi1bejywTRDW6WxgP8Z2Cw&s',
      },
    ],
  },
  {
    id: 2,
    title: 'SheFi Brunch CDMX',
    description: 'Description 1',
    badge: 'https://assets.poap.xyz/3c5fed1a-67d9-4f75-8656-032336db8db6.gif?size=large',
    photos: [
      {
        id: 1,
        url: '/Selfie-Frame-Printing.jpg',
      },
      {
        id: 2,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8hCA6FTkEVk61giUKx-QMih8NBnnxh3Mx6w&s',
      },
      {
        id: 3,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHXMtoM4kH9u0fzvU2TlogmdRmZt8bWRJppzCVX7crY8S74qSBBx3TFUtAitr0d5rQvk&usqp=CAU',
      },
    ],
  },
  {
    id: 3,
    title: 'Woof Weekly #147',
    description: 'Description 1',
    badge: 'https://assets.poap.xyz/woof-weekly-23147-2024-logo-1723658830125.png?size=large',
    photos: [
      {
        id: 1,
        url: 'https://laputafarm.com/wp-content/uploads/2021/12/6222590fa85a62043b4b.jpg',
      },
      {
        id: 2,
        url: 'https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2019/10/gia-cho-shiba-5-1024x1024.jpg',
      },
      {
        id: 3,
        url: 'https://shibainu.vn/wp-content/uploads/2022/04/imager_13038.jpg',
      },
    ],
  },
]

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
        {DUMMY_EVENTS.map((event, index) => (
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
              <span>{event.title}</span>
            </div>

            <div className='flex gap-3 w-full overflow-auto'>
              <div className='badge-symbol-mask shadow-sm w-[100px] h-[100px] flex items-center justify-center relative'>
                <img className='w-[120%] h-[120%] object-cover object-center' src={event.badge} alt='' />
                <img className='w-[95%] h-[95%] absolute z-10' src='/coven-symbol-dash.svg' alt='' />
              </div>

              <Carousel
                deviceType='mobile'
                removeArrowOnDeviceType={['tablet', 'mobile']}
                transitionDuration={50}
                responsive={responsive}
                className='w-full'>
                {event.photos.map((photo) => (
                  <div className='w-[130px] h-[180px] rounded-2xl ml-3' key={photo.url}>
                    <img src={photo.url} alt='' className='w-full h-full object-cover rounded-2xl' />
                  </div>
                ))}
              </Carousel>
            </div>
          </motion.section>
        ))}
      </div>
    </section>
  )
}
