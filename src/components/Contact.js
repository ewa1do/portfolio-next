import { IoHeartOutline } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

import Button from "@/components/buttons/Button";
import Title from "@/components/titles/Title";

import getFonts from "@/utils/fonts";

const { spaceMono } = getFonts();

const contactLinks = [
    {
        name: "github",
        icon: <FiGithub />,
        link: "https://github.com/ewa1do",
    },
    {
        name: "linkedin",
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/eduardo-vera-612626191/",
    },
    {
        name: "twitter",
        icon: <CiTwitter />,
        link: "https://twitter.com/eduvera_dev",
    },
];

function Contact(props) {
    return (
        <section
            id="contact"
            className={`${spaceMono.className} section flex flex-col items-center pt-20 pb-6 px-16`}
        >
            <Title>Say Hello</Title>

            <p className="text-dark-gray md:pt-10 text-lg md:text-xl lg:text-2xl w-[25rem] md:w-[32rem] lg:w-[40rem]">
                Contact me anytime by clicking the button or sliding into my DMs on social media. My
                inbox is always open, so don&apos;t hesitate to reach out!
            </p>

            <div className="py-20">
                <Button>
                    <a href="mailto:this.eduardovera@gmail.com">Say Hello!</a>
                </Button>
            </div>

            <footer className="flex flex-col">
                <div className="flex justify-center">
                    {contactLinks.map(({ icon, link }, i) => (
                        <a
                            key={`link-${i + 1}`}
                            href={link}
                            target="_blank"
                            className="px-6 text-dark-gray hover:text-neon-blue text-2xl md:text-3xl lg:text-4xl"
                        >
                            <i>{icon}</i>
                        </a>
                    ))}
                </div>

                <h4 className="flex items-center text-dark-gray text-xl md:text-2xl lg:text-3xl pt-8">
                    Made with{"  "}
                    <i className="px-1 text-neon-blue">
                        <IoHeartOutline />
                    </i>
                    {"   "}
                    by Edu
                </h4>
            </footer>
        </section>
    );
}

export default Contact;
