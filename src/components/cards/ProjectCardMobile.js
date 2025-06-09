import { IoOpenOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";

import getFonts from "@/utils/fonts";

const { roboto, spaceMono } = getFonts();

function ProjectCardMobile(props) {
    const { isHovering, handleMouseEnter, handleMouseLeave } = props.behavior;
    const { name, description, img, link, repo, stack = [] } = props;

    const backgroundStyles = {
        backgroundImage: `linear-gradient(
        to right,
        ${!isHovering ? "rgb(0, 255, 209, 0.1)" : "transparent"},
        ${!isHovering ? "rgb(0, 255, 209, 0.1)" : "transparent"}
    ), url(${img})`,
        transition: "all 1s ease",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    };

    const anchorStyles = "text-3xl md:text-4xl px-2 py-4 hover:text-neon-blue";

    return (
        <article className="mx-6 md:mx-0 border-2 border-neon-blue rounded-md shadow-md shadow-neutral-600">
            <div>
                <div
                    style={backgroundStyles}
                    className="min-h-[20rem] md:min-h-[30rem] md:w-[60vw] lg:w-[50vw] "
                ></div>
            </div>
            <div className="p-3 text-gray-200">
                <div className="flex items-center justify-between mb-2">
                    <h3 className={`${spaceMono.className} text-3xl lg:text-5xl`}>{name}</h3>
                    <div className="flex flex-row justify-start">
                        <a href={repo} target="_blank" className={anchorStyles}>
                            <i>
                                <FiGithub />
                            </i>
                        </a>

                        <a href={link} target="_blank" className={anchorStyles}>
                            <i>
                                <IoOpenOutline />
                            </i>
                        </a>
                    </div>
                </div>
                <div>
                    <p className="text-2xl">{description}</p>
                </div>

                <ul className={`${spaceMono.className} flex gap-2 py-3`}>
                    {stack.map((tech, i) => (
                        <li key={`tech-${i + 1}`}>
                            <p className="text-lg md:text-2xl">{tech}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

export default ProjectCardMobile;
