'use client'

import { useInitData, User } from '@telegram-apps/sdk-react'
import Avatar from 'boring-avatars'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  const initData = useInitData()

  if (!initData || !initData.user) {
    return <span>Loading</span>
  }

  const backToHome = () => {
    router.push('/')
  }

  const user: User = initData.user

  return (
    <main className='flex flex-col gap-3 w-screen min-h-screen  p-3 no-scrollbar'>
      <header className='flex justify-start w-full h-10'>
        <button onMouseUp={backToHome} type='button' className='w-10 h-10 bg-red-400 aspect-square active:scale-90 ease-in-out transition-transform'>
          <svg className='' width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M16.0303 4.46967C16.2966 4.73594 16.3208 5.1526 16.1029 5.44621L16.0303 5.53033L9.561 12L16.0303 18.4697C16.2966 18.7359 16.3208 19.1526 16.1029 19.4462L16.0303 19.5303C15.7641 19.7966 15.3474 19.8208 15.0538 19.6029L14.9697 19.5303L7.96967 12.5303C7.7034 12.2641 7.6792 11.8474 7.89705 11.5538L7.96967 11.4697L14.9697 4.46967C15.2626 4.17678 15.7374 4.17678 16.0303 4.46967Z'
              fill='black'
            />
          </svg>
        </button>
      </header>

      <motion.button
        layoutId='avatar'
        type='button'
        className='avatar-symbol-mask w-10 h-10 aspect-square active:scale-90 ease-in-out transition-transform'>
        <Avatar name={user.id.toString()} square={true} />
      </motion.button>
    </main>
  )
}
