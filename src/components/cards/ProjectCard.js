import { IoOpenOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";

import useHover from "@/hooks/useHover";
import useScreenSize from "@/hooks/useScreenSize";

import getFonts from "@/utils/fonts";
import ProjectCardMobile from "./ProjectCardMobile";
import IconLink from "../icons/IconLink";

const { roboto, spaceMono } = getFonts();

function ProjectCard(props) {
    const [{ width }, { tablet, desktop }] = useScreenSize();
    const { isHovering, handleMouseEnter, handleMouseLeave } = useHover();

    const { name, description, img, link, repo, stack = [] } = props;

    return <ProjectCardMobile behavior={useHover} {...props} />;

    if (width > tablet) {
        return (
            <div
                className={`relative mb-20 flex ${
                    props.orientation === "left" ? "flex-row-reverse" : "flex-row"
                } items-center `}
            >
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
                    className={`my-12 mx-12 rounded-lg w-2/4 h-[25rem] lg:h-[30rem] xl:h-[35rem] text-dark-gray px-6  bg-gray-100
                     bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent shadow-xl ${
                         props.orientation === "right" ? "lg:ml-[5%]" : "lg:mr-[5%]"
                     }`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                ></div>
                <div
                    className={`${spaceMono.className} w-3/5 flex flex-col absolute ${
                        props.orientation === "left"
                            ? "items-start left-10 lg:left-28"
                            : "items-end right-10 lg:right-28"
                    }`}
                >
                    <h3 className={`text-4xl lg:text-5xl text-slate-300 py-6`}>{name}</h3>

                    <p
                        className={`${roboto.className} text-dark-gray w-[35rem] lg:w-[45rem] z-50 text-2xl lg:text-3xl border border-neon-blue rounded-md bg-bg-dark px-2 py-3`}
                    >
                        {description}
                    </p>

                    <ul className={`grid grid-cols-3 gap-2 py-8 text-dark-gray`}>
                        {stack.map((tech, i) => {
                            return (
                                <li key={`tech-${i + 1}`}>
                                    {" "}
                                    <p className="text-lg md:text-xl lg:text-xl xl:text-2xl">
                                        {tech}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex text-slate-300">
                        <IconLink href={repo}>
                            <FiGithub />
                        </IconLink>

                        <IconLink href={link}>
                            <IoOpenOutline />
                        </IconLink>
                    </div>
                </div>
            </div>
        );
    }

    return <ProjectCardMobile behavior={useHover} {...props} />;
}

export default ProjectCard;
