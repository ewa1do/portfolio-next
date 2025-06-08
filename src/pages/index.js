import Head from "next/head";
import { useEffect } from "react";

import getAboutData from "@/lib/about";
import getWorkExperienceData from "@/lib/workExp";
import getProjectsData from "@/lib/projects";

import { Space_Mono } from "next/font/google";

import NavBar from "@/components/nav";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import HomePage from "@/components/HomePage";
import Projects from "@/components/Projects";

import useScreenSize from "@/hooks/useScreenSize";
import useObserver from "@/hooks/useObserver";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: "700" });

export default function Home(props) {
    const observer = useObserver();
    const [{ width }, { tablet }] = useScreenSize();

    return (
        <>
            <Head>
                <title>Edu</title>
            </Head>
            <div
                className={`bg-bg-dark h-screen overflow-x-hidden ${
                    width >= tablet ? "px-6 pt-6" : ""
                }`}
            >
                <HomePage />
                <Experience workExp={props.workExp} />
                <Projects projects={props.projects} />
                <About about={props.about} />
                <Contact />
            </div>
        </>
    );
}

export async function getStaticProps() {
    const about = getAboutData();
    const projects = getProjectsData();
    const workExp = getWorkExperienceData();

    return {
        props: {
            about,
            workExp,
            projects,
        },
    };
}
