import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import p1 from '../../public/images/projects/agency-website-cover-image.jpg'
import Transition from '@/components/Transition'
import { motion } from 'framer-motion'

import projImg1 from "../../public/images/projects/Disney.jpg";
import projImg2 from "../../public/images/projects/Netflix.png";
import projImg3 from "../../public/images/projects/Hulu.jpg";
import projImg4 from "../../public/images/projects/Imdb.jpg";
import projImg5 from "../../public/images/projects/Tesla.png";
import projImg6 from "../../public/images/projects/Youtube.png";


const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark' />

            <Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full' href={link} target="_blank">
                <FramerImage
                    src={img}
                    alt={title}
                    className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-2xl xs:text-base'>{type}</span>
                <Link className='hover:underline underline-offset-2 ' href={link} target="_blank">
                    <h2 className='my-2 w-full text-left text-4xl font-bold  sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark '>{summary}</p>
                <div className='mt-2 flex items-center '>
                    <Link className='w-10' href={github} target="_blank"><GithubIcon /></Link>
                    <Link className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:text-base sm:px-4' href={github} target="_blank">Visit project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, img, link, github }) => {
    return (
        <article className='w-full flex-col flex items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
            <Link className='w-full cursor-pointer overflow-hidden rounded-lg ' href={link} target="_blank">
                <FramerImage
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    src={img} alt={title} className='w-full h-auto' />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4 '>
                <span className='text-primary font-medium text-2xl lg:text-lg md:text-base'>{type}</span>
                <Link className='hover:underline underline-offset-2 ' href={link} target="_blank">
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl '>{title}</h2>
                </Link>
                <div className='mt-2 w-full flex items-center justify-between '>
                    <Link className='underline rounded-lg  text-lg font-semibold md:text-base' href={github} target="_blank">Visit</Link>
                    <Link className='w-8 md:w-6' href={github} target="_blank"><GithubIcon /></Link>
                </div>
            </div>
        </article>
    )
}
const projects = () => {
    // data
    const clones = [

        {
            title: "Netflix-Clone",
            description: "It is Amazing Website For Movies",
            imgUrl: projImg2,
            liveUrl: 'https://netflix-clone-dc.vercel.app/',
            githubUrl:"https://github.com/DakshCodes/Netflix-Clone-DC"
       
        },
        {
            title: "Hulu-Clone",
            description: "It is Amazing Website For Movies",
            imgUrl: projImg3,
            liveUrl: 'https://hulu-clone-dc.vercel.app/',
            githubUrl:"https://github.com/DakshCodes/Hulu-Clone-DC"
          
        },

    ];
    const clones2 = [

        {
            title: "Imdb-Clone",
            description: "It is Amazing Website For Movies",
            imgUrl: projImg4,
            liveUrl: 'https://imdb-clone-zeta-tan.vercel.app/',
            githubUrl:"https://github.com/DakshCodes/Imdb-Clone-DC"
        },
        {
            title: "Tesla-Clone",
            description: "It is Tesla Automobiles Componey Clone",
            imgUrl: projImg5,
            liveUrl: 'https://tesla-clone-pi-kohl.vercel.app/',
            githubUrl:"https://github.com/DakshCodes/Tesla-Clone-DC"
        },
    ];


    return (
        <>
            <Head>
                <title>projects Page</title>
            </Head>
            <Transition />
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='p-36 pt-16'>
                    <AnimatedText text="Imagination Trumps Knowledge!"
                        className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                    />

                    <div className='grid   grid-cols-12 gap-24 gap-y-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>

                        <div className='col-span-12'>
                            <FeaturedProject
                                github='https://github.com/DakshCodes/Disney-Clone-DC'
                                img={projImg1}
                                link='https://disney-clone-dc.vercel.app/'
                                summary='It is Amazing Website For Movies '
                                title='Disney-Clone Amazing Movies App'
                                type='FeaturedProject'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            {
                                clones.map((project, index) => {
                                    return (
                                        <Project
                                        key={index}
                                            github={project.githubUrl}
                                            img={project.imgUrl}
                                            link={project.liveUrl}
                                            title={project.title}
                                            type='Fetured Project'
                                        />
                                    )
                                })
                            }

                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            {
                                clones2.map((project, index) => {
                                    return (
                                        <Project
                                        key={index}
                                            github='/'
                                            img={project.imgUrl}
                                            link={project.liveUrl}
                                            title={project.title}
                                            type='Fetured Project'
                                        />
                                    )
                                })
                            }
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                github='https://github.com/DakshCodes/NewTube-App-DC'
                                img={projImg6}
                                link='https://new-tube-app-dc.vercel.app'
                                summary='Its A Video Streaming Platform.'
                                title='New Tube Application'
                                type='FeaTured Project'
                            />
                        </div>
                        {/* <div className='col-span-6 sm:col-span-12'>
                            <Project
                                github='/'
                                img={p1}
                                link='/'
                                title='/'
                                type='/'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                github='/'
                                img={p1}
                                link='/'
                                title='/'
                                type='/'
                            />
                        </div>*/}

                    </div> 

                </Layout>
            </main>
        </>
    )
}

export default projects
