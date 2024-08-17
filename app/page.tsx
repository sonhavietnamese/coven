'use client'

import ScreenEvent from '@/components/screen-event'
import ScreenHome from '@/components/screen-home'
import ScreenProfile from '@/components/screen-profile'
import { useScreen } from '@/stores/screen'
import { Event } from '@/types'
import { useInitData, type User } from '@telegram-apps/sdk-react'
import Avatar from 'boring-avatars'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { DUMMY_EVENTS } from './data'

export default function Home() {
  const initData = useInitData()

  const [screen, setScreen] = useScreen((s) => [s.current, s.setScreen])

  const [selectedEvent, setSelectedEvent] = useState<Event>(DUMMY_EVENTS[0])

  if (!initData || !initData.user) {
    return <span>Loading</span>
  }

  const user: User = initData.user

  const changeToProfile = () => {
    setScreen('profile')
  }

  const changeToHome = () => {
    setScreen('home')
  }

  const selectEvent = (event: Event) => {
    setSelectedEvent(event)
    setScreen('event')
  }

  return (
    <main className='flex flex-col gap-3 w-screen min-h-screen  p-3 no-scrollbar'>
      <AnimatePresence>
        <header className='flex justify-between w-full h-10 relative z-10'>
          {screen !== 'home' ? (
            <motion.button
              whileTap={{ scale: 0.8 }}
              onClick={changeToHome}
              type='button'
              className='w-10 h-10 flex items-center justify-center bg-white/50 rounded-xl aspect-square active:scale-90 ease-in-out transition-transform'>
              <svg className='mr-.5' width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M16.0303 4.46967C16.2966 4.73594 16.3208 5.1526 16.1029 5.44621L16.0303 5.53033L9.561 12L16.0303 18.4697C16.2966 18.7359 16.3208 19.1526 16.1029 19.4462L16.0303 19.5303C15.7641 19.7966 15.3474 19.8208 15.0538 19.6029L14.9697 19.5303L7.96967 12.5303C7.7034 12.2641 7.6792 11.8474 7.89705 11.5538L7.96967 11.4697L14.9697 4.46967C15.2626 4.17678 15.7374 4.17678 16.0303 4.46967Z'
                  fill='black'
                />
              </svg>
            </motion.button>
          ) : (
            <div></div>
          )}

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={changeToProfile}
            layoutId='avatar'
            type='button'
            className='avatar-symbol-mask w-10 h-10 aspect-square'>
            <Avatar name={user.id.toString()} square={true} />
          </motion.button>
        </header>
      </AnimatePresence>
      <AnimatePresence>
        {screen === 'home' && <ScreenHome onChangeEvent={selectEvent} events={DUMMY_EVENTS} />}
        {screen === 'profile' && <ScreenProfile user={user} />}
        {screen === 'event' && <ScreenEvent event={selectedEvent} />}
      </AnimatePresence>
    </main>
  )
}
