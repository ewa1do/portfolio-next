import Title from "@/components/titles/Title";
import getFonts from "@/utils/fonts";

const { roboto, spaceMono } = getFonts();

function About(props) {
    const { contentBlocks, skills } = props.about;

    return (
        // <section id="about" className="section section--hidden">
        <section id="about" className="section px-4 mb-48">
            <div className="md:flex md:flex-col md:justify-center md:items-center">
                <div className="md:text-center">
                    <Title>About me</Title>
                </div>
                <article className="pr-2 md:w-8/12">
                    {contentBlocks.map((paragraph, i) => (
                        <p
                            className={`${roboto.className} text-dark-gray py-5 text-2xl/8 md:text-3xl lg:text-4xl/[3.3rem]`}
                            key={`p-${i + 1}`}
                        >
                            {paragraph}
                        </p>
                    ))}
                </article>
            </div>
        </section>
    );
}

export default About;
