import useScreenSize from '@/hooks/useScreenSize'
import { DotGothic16 } from 'next/font/google'

const docGothic16 = DotGothic16({ subsets: ['latin'], weight: '400' })

function NavWrapper(props) {
    const [{ width }, breakpoints] = useScreenSize()
    const { tablet } = breakpoints()

    const stylesInactive = `px-4`

    return (
        <nav
            className={`flex flex-row justify-between ${
                !props.active ? stylesInactive : 'pl-4'
            } ${width >= tablet ? 'items-center' : ''}`}
        >
            <h3
                className={`${docGothic16.className} text-neon-blue text-3xl lg:text-4xl xl:text-5xl my-2`}
            >
                edu
            </h3>
            {props.children}
        </nav>
    )
}

export default NavWrapper
