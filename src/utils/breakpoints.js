/**
 *
 * @returns an object with responsive breakpoints
 * * SINCE I'M USING TAILWINDCSS THE BREAKPOINTS ARE TREATED LIKE DESKTOP FIRST
 * * THIS IS ONLY TO CHANGE BETWEEN COMPONENTS NOT TO STYLE
 */

function breakpoints() {
    return {
        mobile: 425,
        tablet: 768,
        desktop: 1020,
    }
}

export default breakpoints
