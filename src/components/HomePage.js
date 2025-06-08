import { useEffect, useRef } from "react";

import NavBar from "@/components/nav";
import ButtonDownload from "@/components/buttons/ButtonDownload";
import getFonts from "@/utils/fonts";

const { roboto, spaceMono } = getFonts();

function HomePage(props) {
    const sectRef = useRef();

    // useEffect(() => {
    //     setTimeout(() => {
    //         sectRef.current.classList.remove('section--fade')
    //     }, 3000)
    // }, [])

    return (
        <section>
            <NavBar />

            <div
                ref={sectRef}
                // className={`${spaceMono.className} section section--fade flex flex-col justify-center px-4 mt-20 md:mt-60 ml-[6%]`}
                className={`${spaceMono.className} section flex flex-col justify-center items-center px-4 mt-32 mb-48`}
            >
                <h5
                    className={`text-neon-blue text-xl sm:text-2xl md:text-3xl lg:text-4xl md:mb-5`}
                >
                    Hi, my name is
                </h5>
                <h1
                    className={`text-5xl sm:text-7xl py-3 md:text-8xl lg:text-9xl text-slate-300 font-bold`}
                >
                    Eduardo Vera.
                </h1>

                <p
                    className={`${roboto.className} text-dark-gray py-3 mb-4 text-2xl md:text-3xl w-full sm:w-4/5 md:w-4/5 xl:w-3/5 xl:text-4xl`}
                >
                    I&apos;m a software developer with expertise in both{" "}
                    <span className="text-neon-blue">backend </span>
                    and <span className="text-neon-blue">frontend</span> development. I also have a
                    knack for <span className="text-neon-blue">design</span> and enjoy building cool
                    stuff. Thank you for visiting my portfolio!{" "}
                </p>

                <div>
                    <ButtonDownload text="Download Resume" />
                </div>
            </div>
        </section>
    );
}

export default HomePage;
