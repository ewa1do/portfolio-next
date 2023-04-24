import { Space_Mono } from 'next/font/google'

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] })

function Title(props) {
    return (
        <h2
            className={`${spaceMono.className} text-5xl md:text-7xl lg:text-8xl text-slate-300 pb-8`}
        >
            {props.children}
        </h2>
    )
}

export default Title
