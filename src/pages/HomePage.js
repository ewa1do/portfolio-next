import { Space_Mono, Roboto } from 'next/font/google'
import NavBar from '@/components/nav'

const spaceMono = Space_Mono({ subsets: ['latin'], weight: '400' })

function HomePage() {
    return (
        <>
            <NavBar />

            <div className={`${spaceMono.className} flex flex-col ml-6 mt-20`}>
                <h5 className={`text-neon-blue text-xl ml-2`}>
                    Hi, my name is
                </h5>
                <h1 className={`text-6xl text-slate-100`}>Eduardo Vera</h1>
            </div>
        </>
    )
}

export default HomePage
