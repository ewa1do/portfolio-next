import { Space_Mono } from 'next/font/google'

import NavBar from '@/components/nav'
import HomePage from './HomePage'

import useScreenSize from '@/hooks/useScreenSize'

const spaceMono = Space_Mono({ subsets: ['latin'], weight: '700' })

export default function Home() {
    const [{ width }, breakpoints] = useScreenSize()

    const { tablet } = breakpoints()

    return (
        <div
            className={`bg-bg-dark h-screen ${
                width >= tablet ? 'px-6 pt-6' : ''
            }`}
        >
            <HomePage />
        </div>
    )
}
