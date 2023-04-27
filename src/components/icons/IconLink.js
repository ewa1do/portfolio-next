function IconLink(props) {
    return (
        <a
            href={props.href}
            target="_blank"
            className="text-3xl md:text-4xl px-2 py-4 md:hover:text-neon-blue"
        >
            <i>{props.children}</i>
        </a>
    )
}

export default IconLink
