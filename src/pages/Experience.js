import { useState, useRef } from 'react'

import Marker from '@/components/markers/Marker'
import Title from '@/components/titles/Title'
import SectionWrapper from '@/components/wrappers/SectionWrapper'
import getFonts from '@/utils/fonts'

const { roboto, spaceMono } = getFonts()

const workExp = [
    {
        company: 'Ancient Society',
        role: 'Developer',
        duration: 'Oct 2022 - April 2023',
        description: [
            'Write modern, performant, maintainable code for the backend server and the frontend client',
            'Work with technologies such as Express.js, MySQL, React,js and styled components.',
            'Create RESTful APIs, designing and implementing database schemas, and implementing security features to protect against common attacks.',
        ],
        link: 'https://www.ancientsociety.io',
    },
    {
        company: 'Countop',
        role: 'Freelance',
        duration: 'Jan 2023 - Mar 2023',
        description: [
            'Freelance project to rebuild the business landing page.',
            'Work with React.js and Framer motion.',
        ],
        link: 'https://www.countop.com',
    },
]

function Experience() {
    const buttonRef = useRef()

    const companies = workExp.map((work) => work.company)

    const [currentWork, setCurrentWork] = useState(
        workExp.find((work) => work.company === companies[0])
    )

    const { company, description, duration, link, role } = currentWork

    function changeColor(e) {
        const buttons = buttonRef.current

        ;[...buttons.children].forEach((btn) => {
            btn.classList.remove('text-neon-blue')
            btn.classList.add('text-slate-300')
        })

        e.target.classList.remove('text-slate-300')
        e.target.classList.add('text-neon-blue')
    }

    function currentWorkHandler(e) {
        changeColor(e)

        const value = e.target.textContent
        const workData = workExp.find((work) => work.company === value)

        setCurrentWork(workData)
    }

    return (
        <section className="pl-10 pb-40 -mt-20 md:-mt-60">
            <div className="md:ml-[25%] mb-8">
                <Title>Work Experience</Title>
            </div>
            <div className="md:flex md:justify-center">
                <div
                    className="flex md:flex-col md:items-start pb-6"
                    ref={buttonRef}
                >
                    {companies.map((comp, i) => (
                        <button
                            key={i}
                            className={`${
                                i === 0 ? 'text-neon-blue' : 'text-slate-300'
                            } pr-9 text-xl md:py-2 md:text-2xl lg:text-3xl`}
                            onClick={currentWorkHandler}
                        >
                            {comp}
                        </button>
                    ))}
                </div>
                <div className="md:w-3/5">
                    <h3
                        className={`${roboto.className} text-slate-300 text-3xl lg:text-4xl`}
                    >
                        {role}{' '}
                        <span className="text-neon-blue">
                            @{' '}
                            <a
                                className="cursor-pointer"
                                href={link}
                                target="_blank"
                            >
                                {company}
                            </a>{' '}
                        </span>
                    </h3>
                    <p
                        className={`${spaceMono.className} text-dark-gray text-xl lg:text-2xl`}
                    >
                        {duration}
                    </p>
                    <ul
                        className={`${spaceMono.className} flex flex-col justify-center`}
                    >
                        {description.map((desc, i) => (
                            <li
                                key={`desc-${i + i}`}
                                className="flex items-center py-4 "
                            >
                                <svg
                                    width="20"
                                    height="10"
                                    viewBox="0 0 15 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=""
                                >
                                    <path
                                        d="M14.4731 5.05639L3.67164 9.25303L3.75456 0.690513L14.4731 5.05639Z"
                                        fill="#00FFD1"
                                    />
                                </svg>
                                <p className="text-dark-gray ml-2 text-xl md:text-2xl">
                                    {desc}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Experience
