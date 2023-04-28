import Image from 'next/image'
import Title from '@/components/titles/Title'
import SectionWrapper from '@/components/wrappers/SectionWrapper'
import ImageWrapper from '@/components/wrappers/ImageWrapper'
import useScreenSize from '@/hooks/useScreenSize'
import getFonts from '@/utils/fonts'
import Marker from '@/components/markers/Marker'

const { roboto, spaceMono } = getFonts()

const contentBlocks = [
    `I'm a highly skilled software developer with a passion
    for creating innovative and functional applications. I have
    extensive experience in both backend and frontend
    development, which allows me to bring a unique perspective
    to any project. Whether it's developing complex
    systems, creating intuitive user interfaces, or optimizing
    application performance, I have the technical knowledge and
    experience to deliver high-quality results.`,

    `In addition to my technical skills, I also have a keen eye
    for design. I believe that a visually pleasing interface can
    greatly enhance the user experience, and I enjoy
    incorporating my design skills into my projects whenever
    possible.`,

    `I'm always seeking new challenges and opportunities to
    learn and grow as a developer. If you're interested in
    collaborating on a project or learning more about my
    experience, please don't hesitate to contact me.`,
]

const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'PHP',
    'Laravel',
]

function About() {
    const [{ width }, breakpoints] = useScreenSize()

    const { tablet } = breakpoints()

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
