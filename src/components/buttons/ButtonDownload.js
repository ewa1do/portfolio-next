import { Space_Mono } from 'next/font/google'
const spaceMono = Space_Mono({ subsets: ['latin'], weight: '400' })

function ButtonDownload(props) {
    return (
        <button
            className={`${spaceMono.className} text-neon-blue border-2 border-neon-blue hover:text-bg-dark hover:font-semibold
            rounded-md p-3 text-lg xl:text-xl hover:bg-neon-blue ease-out `}
        >
            <a href="/eduardo_vera_resume.pdf" download={true}>
                {props.text || 'Resume'}
            </a>
        </button>
    )
}

export default ButtonDownload
