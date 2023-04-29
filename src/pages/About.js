import Image from 'next/image'
import Title from '@/components/titles/Title'
import SectionWrapper from '@/components/wrappers/SectionWrapper'
import ImageWrapper from '@/components/wrappers/ImageWrapper'
import useScreenSize from '@/hooks/useScreenSize'
import getFonts from '@/utils/fonts'
import Marker from '@/components/markers/Marker'

const { roboto, spaceMono } = getFonts()

function About(props) {
    const [{ width }, breakpoints] = useScreenSize()

    const { tablet } = breakpoints()

    const { contentBlocks, skills } = props.about

    return (
        <section id="about" className="section section--hidden">
            <SectionWrapper
                extraStyles={`${
                    width >= tablet
                        ? ' md:flex md:flex-row md:justify-between'
                        : ''
                }`}
            >
                <div className={`md:w-3/5 lg:w-2/4`}>
                    <Title>About me</Title>
                    <article className="pr-2">
                        {contentBlocks.map((paragraph, i) => (
                            <p
                                className={`${roboto.className} text-dark-gray py-5 text-2xl md:text-3xl lg:text-4xl`}
                                key={`p-${i + 1}`}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </article>
                </div>

                <ImageWrapper
                    href="/placeholderimg.jpg"
                    extraStyles="h-80 w-96 md:h-96 md:w-2/5 lg:w-2/5 lg:h-[40rem] md:mr-10 mt-10 self-center"
                />
            </SectionWrapper>
            <SectionWrapper>
                <div className={`-mt-96 md:-mt-[36rem] text-dark-gray`}>
                    <h3
                        className={`${roboto.className} text-2xl md:text-3xl lg:text-4xl`}
                    >
                        Here are a few technologies I&apos;ve been working with
                        recently:
                    </h3>
                    <ul
                        className={`${spaceMono.className} grid grid-cols-2 gap-8 md:gap-x-4 sm:w-[40rem] md:w-[45rem] lg:w-[60rem] mt-10`}
                    >
                        {skills.map((skill, i) => (
                            <li key={`skill-${i + 1}`} className="flex">
                                <Marker />{' '}
                                <span className="text-md sm:text-xl md:text-2xl lg:text-3xl pl-2">
                                    {skill}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </SectionWrapper>
        </section>
    )
}

export default About
