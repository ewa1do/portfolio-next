import ProjectCard from '@/components/cards/ProjectCard'
import Title from '@/components/titles/Title'

const projects = [
    {
        name: 'Dummy Project',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        stack: ['Next.js', 'React.js', 'Tailwind.css', 'Express.js', 'MongoDB'],
        img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        link: 'https://google.com',
        repo: 'https://github.com/ewa1do',
    },
    {
        name: 'Dummy Project',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        stack: ['Next.js', 'React.js', 'Tailwind.css', 'Express.js', 'MongoDB'],
        img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        link: 'https://google.com',
        repo: 'https://github.com/ewa1do',
    },
    {
        name: 'Dummy Project',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        stack: ['Next.js', 'React.js', 'Tailwind.css', 'Express.js', 'MongoDB'],
        img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        link: 'https://google.com',
        repo: 'https://github.com/ewa1do',
    },
]

function Projects() {
    return (
        <section>
            <div className="pl-10 lg:pl-16">
                <Title>What I&apos;ve Built</Title>
            </div>

            <ul>
                {projects.map((proj, i) => (
                    <li key={`project-${i + 1}`}>
                        <ProjectCard
                            {...proj}
                            orientation={`${i % 2 === 0 ? 'right' : 'left'}`}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Projects
