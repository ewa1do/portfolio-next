function SectionWrapper(props) {
    const defaultStyles = `flex flex-col`

    return (
        <section
            className={`w-screen bg-bg-dark md:py-80 px-10 md:px-14 ${
                props.extraStyles ? props.extraStyles : defaultStyles
            }`}
        >
            {props.children}
        </section>
    )
}

export default SectionWrapper
