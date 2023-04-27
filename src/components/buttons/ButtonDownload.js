import { Space_Mono } from 'next/font/google'
const spaceMono = Space_Mono({ subsets: ['latin'], weight: '400' })

function ButtonDownload(props) {
    return (
        <button
            className={`${spaceMono.className} text-neon-blue border-2 border-neon-blue hover:text-bg-dark hover:font-semibold
            rounded-md p-3 text-lg xl:text-xl hover:bg-neon-blue ease-out `}
        >
            {props.text || 'Resume'}
        </button>
    )
}

export default ButtonDownload
