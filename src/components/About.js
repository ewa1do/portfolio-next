import Title from "@/components/titles/Title";
import getFonts from "@/utils/fonts";

const { roboto, spaceMono } = getFonts();

function About(props) {
    const { contentBlocks, skills } = props.about;

    return (
        // <section id="about" className="section section--hidden">
        <section id="about" className="section my-40 px-10">
            <div className="">
                <div className="text-center">
                    <Title>About me</Title>
                </div>
                <article className="pr-2">
                    {contentBlocks.map((paragraph, i) => (
                        <p
                            className={`${roboto.className} text-dark-gray py-5 text-xl`}
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
