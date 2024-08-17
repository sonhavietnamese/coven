import { User } from '@telegram-apps/sdk-react'
import { SVGProps } from 'react'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type Event = {
  id: number
  title: string
  description: string
  image: string
  participants: {
    id: string
    firstName: string
    lastName: string
    username: string
  }[]
}
