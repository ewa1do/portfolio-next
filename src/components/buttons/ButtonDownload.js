import { Space_Mono } from 'next/font/google'
const spaceMono = Space_Mono({ subsets: ['latin'], weight: '400' })

function ButtonDownload() {
    return (
        <button
            className={`${spaceMono.className} text-neon-blue border-2 border-neon-blue rounded-md p-3 text-lg`}
        >
            Resume
        </button>
    )
}

export default ButtonDownload