import { useEffect } from 'react'

function useObserver() {
    useEffect(() => {
        const sections = document.querySelectorAll('.section')

        const sectionObserver = new IntersectionObserver(
            (entries, observer) => {
                const [entry] = entries

                if (entry.isIntersecting) {
                    entry.target.classList.remove('section--hidden')
                    observer.unobserve(entry.target)
                }
            },
            { root: null, threshold: 0.15 }
        )

        sections.forEach((section) => sectionObserver.observe(section))
    }, [])
}

export default useObserver
