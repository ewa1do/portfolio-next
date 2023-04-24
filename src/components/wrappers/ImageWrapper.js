import { useState } from 'react'

function ImageWrapper(props) {
    const [isHovering, setIsHovering] = useState(false)

    function handleMouseEnter() {
        setIsHovering(true)
    }

    function handleMouseLeave() {
        setIsHovering(false)
    }

    const { extraStyles } = props
    const defaultStyles = 'mt-10 h-80 w-96'

    if (props.frame) {
        return (
            <picture
                style={{
                    backgroundImage: `linear-gradient(
                        to right,
                        ${
                            !isHovering
                                ? 'rgb(0, 255, 209, 0.25)'
                                : 'transparent'
                        },
                        ${
                            !isHovering
                                ? 'rgb(0, 255, 209, 0.25)'
                                : 'transparent'
                        }
                    ), url(${props.href})`,
                    transition: 'all 1s ease',
                }}
                className={`bg-cover bg-center bg-no-repeat ${
                    props.extraStyles ? extraStyles : defaultStyles
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <h2>Hello</h2>
            </picture>
        )
    }

    return (
        <picture
            style={{
                backgroundImage: `linear-gradient(
                    to right,
                    ${!isHovering ? 'rgb(0, 255, 209, 0.25)' : 'transparent'},
                    ${!isHovering ? 'rgb(0, 255, 209, 0.25)' : 'transparent'}
                ), url(${props.href})`,
                transition: 'all 1s ease',
            }}
            className={`bg-cover bg-center bg-no-repeat ${
                props.extraStyles ? extraStyles : defaultStyles
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        ></picture>
    )
}

export default ImageWrapper
