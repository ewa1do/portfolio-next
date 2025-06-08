import { IoOpenOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";

import getFonts from "@/utils/fonts";

const { roboto, spaceMono } = getFonts();

function ProjectCardMobile(props) {
    const { isHovering, handleMouseEnter, handleMouseLeave } = props.behavior;
    const { name, description, img, link, repo, stack = [] } = props;

    return (
        <div
            style={{
                backgroundImage: `linear-gradient(
        to right,
        ${!isHovering ? "rgb(0, 255, 209, 0.1)" : "transparent"},
        ${!isHovering ? "rgb(0, 255, 209, 0.1)" : "transparent"}
    ), url(${img})`,
                transition: "all 1s ease",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
            className="my-12 mx-12 rounded-lg min-h-[22rem] md:min-h-[25rem]"
        >
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`${roboto.className} text-dark-gray px-6 h-full w-full bg-gray-100
            rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent shadow-xl min-h-[22rem] md:min-h-[25rem]`}
            >
                <h3 className="text-slate-300 text-4xl md:text-6xl font-medium py-3">{name}</h3>
                <p className="text-xl md:text-3xl py-3">{description}</p>
                <ul className={`${spaceMono.className} grid grid-cols-3 gap-2 py-3`}>
                    {stack.map((tech, i) => (
                        <li key={`tech-${i + 1}`}>
                            <p className="text-lg md:text-2xl">{tech}</p>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-row justify-start md:mt-10">
                    <a href={repo} className="text-3xl md:text-4xl px-2 py-4">
                        <i>
                            <FiGithub />
                        </i>
                    </a>

                    <a href={link} className="text-3xl md:text-4xl px-2 py-4">
                        <i>
                            <IoOpenOutline />
                        </i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCardMobile;
