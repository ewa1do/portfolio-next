import { Space_Mono } from 'next/font/google'

import useScreenSize from '@/hooks/useScreenSize'
import sectionList from '@/utils/sectionList'
import ButtonDownload from '../buttons/ButtonDownload'

const spaceMono = Space_Mono({ subsets: ['latin'], weight: '400' })

function SectionList() {
    const [{ width }, breakpoints] = useScreenSize()
    const { mobile, tablet, desktop } = breakpoints()

    const sections = sectionList()

    return (
        <ul className="flex items-center py-2">
            {sections.map((sec, i) => (
                <li key={`section-${i}`} className={`px-5`}>
                    <span
                        className={`${spaceMono.className} text-dark-gray md:text-xl lg:text-2xl 
                        hover:text-neon-blue hover:cursor-pointer capitalize`}
                    >
                        {sec}
                    </span>{' '}
                </li>
            ))}
            <li>
                <ButtonDownload />
            </li>
        </ul>
    )
}

export default SectionList
