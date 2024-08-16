'use client'

import { useInitData, useLaunchParams, type User } from '@telegram-apps/sdk-react'

export default function Home() {
  const initData = useInitData()

  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <h1>Wau</h1>
      {initData?.chat && <span>{JSON.stringify(initData.chat)}</span>}
    </section>
  )
}
