import { useEffect, useRef } from 'react'

import { Space_Mono } from 'next/font/google'

import useScreenSize from '@/hooks/useScreenSize'
import sectionList from '@/utils/sectionList'
import ButtonDownload from '../buttons/ButtonDownload'

const spaceMono = Space_Mono({ subsets: ['latin'], weight: '400' })

function SectionList() {
    const listRef = useRef()

    const [{ width }, { mobile, tablet, desktop }] = useScreenSize()

    const sections = sectionList()

    useEffect(() => {
        setTimeout(() => {
            listRef.current.classList.remove('nav--hidden')
        }, 3000)
    }, [])

    function scrollTo(string = '') {
        const splittedString = string.split(' ')

        if (splittedString.length > 1) {
            return splittedString.join('_')
        }

        return string
    }

    return (
        <ul ref={listRef} className="nav nav--hidden flex items-center py-2">
            {sections.map((sec, i) => (
                <li key={`section-${i}`} className={`px-5`}>
                    <a
                        href={`#${scrollTo(sec)}`}
                        className={`${spaceMono.className} text-dark-gray md:text-xl lg:text-2xl 
                        hover:text-neon-blue hover:cursor-pointer capitalize`}
                    >
                        {sec}
                    </a>{' '}
                </li>
            ))}
            <li>
                <ButtonDownload />
            </li>
        </ul>
    )
}

export default SectionList
