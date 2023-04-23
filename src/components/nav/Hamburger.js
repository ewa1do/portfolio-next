import { Space_Mono } from 'next/font/google'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'

import sectionList from '@/utils/sectionList'
import classes from './navbar.module.css'
import ButtonDownload from '../buttons/ButtonDownload'

const spaceMono = Space_Mono({ subsets: ['latin'], weight: '400' })

function Hamburger(props) {
    const { isListActive } = props

    const sections = sectionList()

    function toggleListHandler() {
        props.onClick((prev) => !prev)
    }

    const styles = `${classes.hamburger} border border-neon-blue my-2`

    return (
        <div>
            <div
                className={!isListActive ? styles : 'hidden'}
                onClick={toggleListHandler}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            {isListActive && (
                <div
                    className={`z-[1000] bg-[#2C3333] w-[75vw] h-screen flex flex-col`}
                >
                    <div
                        style={{ marginLeft: 'auto' }}
                        className={`text-slate-100`}
                        onClick={toggleListHandler}
                    >
                        <IoClose />
                    </div>
                    <ul className={`flex flex-col items-center`}>
                        {sections.map((sec, i) => (
                            <li
                                key={`section-${i}`}
                                className={`${spaceMono.className} px-5 py-8 text-dark-gray capitalize flex flex-col items-center`}
                            >
                                <p className={`text-2xl text-neon-blue`}>{`0${
                                    i + 1
                                }.`}</p>
                                <p className={`text-3xl `}>{sec}</p>
                            </li>
                        ))}
                        <li className={`py-8`}></li>
                        <ButtonDownload />
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Hamburger
