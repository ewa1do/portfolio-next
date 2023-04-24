import { Space_Mono, Roboto } from 'next/font/google'

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'] })

/**
 *
 * @returns A Reusable function containing an object with the available fonts for the project
 * Use this instead of exporting and creating the variable anytime you'll need it
 */

function getFonts() {
    return {
        spaceMono,
        roboto,
    }
}

export default getFonts
