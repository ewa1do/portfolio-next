import { useEffect } from 'react'

import { Space_Mono } from 'next/font/google'

import NavBar from '@/components/nav'

import About from './About'
import Contact from './Contact'
import Experience from './Experience'
import HomePage from './HomePage'
import Projects from './Projects'

import useScreenSize from '@/hooks/useScreenSize'

const spaceMono = Space_Mono({ subsets: ['latin'], weight: '700' })

export default function Home() {
    const [{ width }, breakpoints] = useScreenSize()

    const { tablet } = breakpoints()

    useEffect(() => {
        const sections = document.querySelectorAll('.section')

        const sectionObserver = new IntersectionObserver(
            (entries, observer) => {
                const [entry] = entries

                if (entry.isIntersecting) {
                    entry.target.classList.remove('section--hidden')
                    observer.unobserve(entry.target)
                }
            },
            { root: null, threshold: 0.15 }
        )

        sections.forEach((section) => sectionObserver.observe(section))
    }, [])

    return (
        <div
            className={`bg-bg-dark h-screen overflow-x-hidden ${
                width >= tablet ? 'px-6 pt-6' : ''
            }`}
        >
            <HomePage />

            <About />

            <Experience />

            <Projects />

            <Contact />
        </div>
    )
}
