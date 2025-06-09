import ProjectCard from "@/components/cards/ProjectCard";
import Title from "@/components/titles/Title";
import { useState } from "react";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";

function Projects(props) {
    const { projects } = props;
    const [index, setIndex] = useState(0);

    return (
        <section id="what_i've_built" className="section mb-48">
            <div className="text-center">
                <Title>What I&apos;ve Built</Title>
            </div>

            <ul className={`flex justify-center`}>
                {projects.map(
                    (proj, i) =>
                        index === i && (
                            <li key={`project-${i + 1}`}>
                                <ProjectCard
                                    {...proj}
                                    orientation={`${i % 2 === 0 ? "right" : "left"}`}
                                />
                            </li>
                        ),
                )}
            </ul>
            <div className="flex justify-center">
                {projects.map((_, i) => (
                    <i
                        key={`project-icon-${i + 1}`}
                        className={`text-neon-blue cursor-pointer text-4xl mt-4`}
                        onClick={() => setIndex(i)}
                    >
                        {i === index ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}
                    </i>
                ))}
            </div>
        </section>
    );
}

export default Projects;
