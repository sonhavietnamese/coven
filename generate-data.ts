import { randomInRange } from '@/lib/utils'
import { faker } from '@faker-js/faker'

const DUMMY_EVENTS = [
  {
    id: 1,
    title: 'Canada Crypto Week 2024',
    description:
      'Canada Crypto Week 2024 showcases Canada’s Web3 ecosystem, bringing together more than 10,000 attendees across the week of festivities.',
    image: 'https://cryptoevents.global/wp-content/uploads/Canada-Crypto-Week-2024-768x384.jpg',
    participants: Array.from({ length: randomInRange(20, 30) }).map(() => ({
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      username: faker.internet.userName(),
    })),
  },
  {
    id: 2,
    title: 'Rare Evo 2024',
    description:
      'Rare Evo is a blockchain convention welcoming multi-chain projects, communities, industry leaders, investors, and enthusiasts to network, educate, and celebrate around the theme of interoperability and the convergence of traditional industry with Web3 technology.',
    image: 'https://cryptoevents.global/wp-content/uploads/rare-evo-2024.jpg',
    participants: Array.from({ length: randomInRange(20, 30) }).map(() => ({
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      username: faker.internet.userName(),
    })),
  },
  {
    id: 3,
    title: 'Web3 Summit 2024',
    description:
      'The Web3 Summit 2024 is a collective quest to develop technology that safeguards privacy, defies censorship, and pioneers new economic and societal frameworks.',
    image: 'https://cryptoevents.global/wp-content/uploads/Web3-Summit-2024.jpg',
    participants: Array.from({ length: randomInRange(20, 30) }).map(() => ({
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      username: faker.internet.userName(),
    })),
  },
  {
    id: 4,
    title: 'DAO TOKYO 2024',
    description: 'Join us at DAO TOKYO 2024, a day filled with networking, learning, and fun.',
    image: 'https://cryptoevents.global/wp-content/uploads/DAO-Tokyo-2024.jpg',
    participants: Array.from({ length: randomInRange(20, 30) }).map(() => ({
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      username: faker.internet.userName(),
    })),
  },
  {
    id: 5,
    title: 'Coinfest Asia 2024',
    description:
      'Dive into the heart of cryptocurrency adoption and innovation at CoinFest Asia 2024, the premier event for exploring emerging markets in Asia’s dynamic crypto landscape.',
    image: 'https://cryptoevents.global/wp-content/uploads/Coinfest-Asia-2024.jpg',
    participants: Array.from({ length: randomInRange(20, 30) }).map(() => ({
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      username: faker.internet.userName(),
    })),
  },
  {
    id: 6,
    title: 'Security Token Offering Summit 2024',
    description:
      'The Security Token Offering Summit 2024 is a major financial event that brings together global industry leaders for keynote speeches, panel discussions, and networking opportunities.',
    image: 'https://cryptoevents.global/wp-content/uploads/Security-Token-Offering-Summit-2024.jpg',
    participants: Array.from({ length: randomInRange(20, 30) }).map(() => ({
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      username: faker.internet.userName(),
    })),
  },
  {
    id: 7,
    title: 'Korea Blockchain Week 2024',
    description:
      'Korea Blockchain Week 2024 brings together the brightest minds in the industry to discuss, redefine, and celebrate the future of finance.',
    image: 'https://cryptoevents.global/wp-content/uploads/Korea-Blockchain-Week-2024.jpg',
    participants: Array.from({ length: randomInRange(20, 30) }).map(() => ({
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      username: faker.internet.userName(),
    })),
  },
  {
    id: 7,
    title: 'AI Crypto Summit 2024',
    description:
      'The AI Crypto Summit 2024 is your gateway to the future, a unique convergence of cutting-edge trends in AI and the transformative power of blockchain technology.',
    image: 'https://cryptoevents.global/wp-content/uploads/AI-Crypto-Summit-2024-Korea.jpg',
    participants: Array.from({ length: randomInRange(20, 30) }).map(() => ({
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      username: faker.internet.userName(),
    })),
  },
  {
    id: 8,
    title: 'ETH Warsaw 2024',
    description:
      'ETH Warsaw 2024 is a community-led, grassroots conference and hackathon organized by active members of the Web3 community working in blockchain-focused companies around the world.',
    image: 'https://cryptoevents.global/wp-content/uploads/ETH-Warsaw-2024.jpg',
    participants: Array.from({ length: randomInRange(20, 30) }).map(() => ({
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      username: faker.internet.userName(),
    })),
  },
  {
    id: 9,
    title: 'Dubai AI & Web3 Festival 2024',
    description: 'Dubai AI & Web3 Festival 2024 is a premier event cementing Dubai’s role as a pioneer in the global digital economy.',
    image: 'https://cryptoevents.global/wp-content/uploads/Dubai-AI-Web3-Festival-2024.jpg',
    participants: Array.from({ length: randomInRange(20, 30) }).map(() => ({
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      username: faker.internet.userName(),
    })),
  },
]

console.log(JSON.stringify(DUMMY_EVENTS))
