function Button(props) {
    return (
        <button
            className="border border-neon-blue rounded-md p-4 text-neon-blue 
            hover:text-bg-dark hover:font-semibold text-lg md:text-xl lg:text-2xl 
            hover:bg-neon-blue ease-out "
        >
            {props.children}
        </button>
    )
}

export default Button
