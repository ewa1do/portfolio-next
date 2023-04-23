import Image from 'next/image'
import { Space_Mono } from 'next/font/google'
import NavBar from '@/components/nav'
import HomePage from './HomePage'

const spaceMono = Space_Mono({ subsets: ['latin'], weight: '700' })

export default function Home() {
    return (
        <div className={`bg-bg-dark h-screen`}>
            <HomePage />
            {/* <h1 className={`${spaceMono.className} font-normal`}>Hi mom!</h1> */}
        </div>
    )
}
