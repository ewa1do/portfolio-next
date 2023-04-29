import useScreenSize from '@/hooks/useScreenSize'
import { DotGothic16 } from 'next/font/google'

import classes from './navbar.module.css'

const docGothic16 = DotGothic16({ subsets: ['latin'], weight: '400' })

function NavWrapper(props) {
    const [{ width }, { tablet }] = useScreenSize()

    const stylesInactive = `px-4`

    return (
        <nav
            className={`flex flex-row justify-between ${
                !props.active ? stylesInactive : 'pl-4'
            } ${width >= tablet ? 'items-center' : ''}`}
        >
            <h3
                className={`${docGothic16.className} ${classes.edu} text-3xl lg:text-4xl xl:text-5xl my-2`}
            >
                edu
            </h3>
            {props.children}
        </nav>
    )
}

export default NavWrapper
