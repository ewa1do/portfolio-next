import { useState } from 'react'

function useHover() {
    const [isHovering, setIsHovering] = useState(false)

    function handleMouseEnter() {
        setIsHovering(true)
    }

    function handleMouseLeave() {
        setIsHovering(false)
    }

    return { isHovering, handleMouseEnter, handleMouseLeave }
}

export default useHover
