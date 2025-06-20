import { useState, useRef } from "react";

import Marker from "@/components/markers/Marker";
import Title from "@/components/titles/Title";
import SectionWrapper from "@/components/wrappers/SectionWrapper";
import getFonts from "@/utils/fonts";

const { roboto, spaceMono } = getFonts();

function Experience(props) {
    const { workExp } = props;

    const buttonRef = useRef();

    const companies = workExp.map((work) => work.company);

    const [currentWork, setCurrentWork] = useState(
        workExp.find((work) => work.company === companies[0]),
    );

    const { company, description, duration, link, role } = currentWork;

    function changeColor(e) {
        const buttons = buttonRef.current;

        [...buttons.children].forEach((btn) => {
            btn.classList.remove("text-neon-blue");
            btn.classList.add("text-slate-300");
        });

        e.target.classList.remove("text-slate-300");
        e.target.classList.add("text-neon-blue");
    }

    function currentWorkHandler(e) {
        changeColor(e);

        const value = e.target.textContent;
        const workData = workExp.find((work) => work.company === value);

        setCurrentWork(workData);
    }

    return (
        <section
            id="work_experience"
            // className="section section--hidden pl-10 pb-40 -mt-20 md:-mt-60"
            className="section px-4 mb-48"
        >
            {/* <div className="md:ml-[25%] mb-6"> */}
            <div className="md:flex md:justify-center mb-6">
                <Title>Work Experience</Title>
            </div>
            <div className="md:flex md:justify-center">
                <div className="flex md:flex-col md:items-start pb-6" ref={buttonRef}>
                    {companies.map((comp, i) => (
                        <button
                            key={i}
                            className={`${
                                i === 0 ? "text-neon-blue" : "text-slate-300"
                            } pr-9 text-xl md:py-2 md:text-2xl lg:text-3xl`}
                            onClick={currentWorkHandler}
                        >
                            {comp}
                        </button>
                    ))}
                </div>
                <div className="md:w-5/12">
                    <h3 className={`${spaceMono.className} text-slate-300 text-2xl lg:text-4xl`}>
                        {role}{" "}
                        <span className="text-neon-blue">
                            @{" "}
                            <a className="cursor-pointer" href={link} target="_blank">
                                {company}
                            </a>{" "}
                        </span>
                    </h3>
                    <p className={`${spaceMono.className} text-dark-gray text-xl lg:text-2xl`}>
                        {duration}
                    </p>
                    <ul
                        className={`${roboto.className} flex flex-col mt-6 items-start min-h-[25rem]`}
                    >
                        {description.map((desc, i) => (
                            <li key={`desc-${i + i}`} className="flex items-center py-3 lg:py-6 ">
                                <svg
                                    width="20"
                                    height="10"
                                    viewBox="0 0 15 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=""
                                >
                                    <path
                                        d="M14.4731 5.05639L3.67164 9.25303L3.75456 0.690513L14.4731 5.05639Z"
                                        fill="#00FFD1"
                                    />
                                </svg>
                                <p className="text-dark-gray ml-2 text-xl md:text-2xl lg:text-3xl">
                                    {desc}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Experience;
