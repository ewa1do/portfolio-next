import { useState, useCallback, useEffect } from 'react'
import breakpoints from '../utils/breakpoints'

function getScreenDimensions() {
    const { innerHeight: height, innerWidth: width } = window

    return { width, height }
}

function useScreenSize() {
    const [screenSize, setScreenSize] = useState({})

    useEffect(() => {
        setScreenSize(getScreenDimensions())
    }, [])

    useEffect(() => {
        const updateSize = () => {
            setScreenSize(getScreenDimensions())
        }

        window.addEventListener('resize', updateSize)

        return () => {
            window.removeEventListener('resize', updateSize)
        }
    }, [screenSize])

    return [screenSize, breakpoints]
}

export default useScreenSize
