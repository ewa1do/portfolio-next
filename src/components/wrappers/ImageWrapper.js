import useHover from '@/hooks/useHover'

function ImageWrapper(props) {
    const { isHovering, handleMouseEnter, handleMouseLeave } = useHover()

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
                    backgroundPosition: 'center',
                }}
                className={`bg-cover bg-center bg-no-repeat ${
                    props.extraStyles ? extraStyles : defaultStyles
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {props.children}
            </picture>
        )
    }

    return (
        <picture
            style={{
                backgroundImage: `linear-gradient(
                    to right,
                    ${!isHovering ? 'transparent' : 'transparent'},
                    ${!isHovering ? 'rgb(0, 255, 209, 0.25)' : 'transparent'}
                ), url(${props.href})`,
                backgroundPosition: 'center',
                border: '2px solid var(--neon-blue)',
                borderRadius: '6px',
                padding: '1rem',
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
