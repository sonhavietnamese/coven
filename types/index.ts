import { SVGProps } from 'react'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type Event = {
  id: number
  title: string
  description: string
  image: string
  // participants: User[]
}
