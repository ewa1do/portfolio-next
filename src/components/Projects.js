import ProjectCard from "@/components/cards/ProjectCard";
import Title from "@/components/titles/Title";

function Projects(props) {
    const { projects } = props;

    return (
        <section id="what_i've_built" className="section mb-48">
            <div className="text-center">
                <Title>What I&apos;ve Built</Title>
            </div>

            <ul>
                {projects.map((proj, i) => (
                    <li key={`project-${i + 1}`}>
                        <ProjectCard {...proj} orientation={`${i % 2 === 0 ? "right" : "left"}`} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Projects;
