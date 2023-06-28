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

import aniImg1 from "../../public/images/projects/a.png";
import aniImg2 from "../../public/images/projects/a1.png";
import aniImg3 from "../../public/images/projects/a2.png";
import aniImg4 from "../../public/images/projects/a3.png";
import aniImg5 from "../../public/images/projects/a4.png";
import aniImg6 from "../../public/images/projects/a5.png";
import aniImg7 from "../../public/images/projects/a6.png";
import f1 from "../../public/images/projects/f1.png";
import f2 from "../../public/images/projects/f2.png";
import f3 from "../../public/images/projects/f3.png";
import f4 from "../../public/images/projects/f4.png";


const FramerImage = motion(Image)

const FeaturedProject = ({ title }) => {
    return (
        <article className='w-full flex items-center justify-center
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark' />
            <h1 className='text-primary font-bold hover:underline cursor-pointer text-2xl lg:text-lg md:text-base'>{title}</h1>
        </article>
    )
}

const Project = ({ type, title, img, link, github, description }) => {
    return (
        <article className='w-[35rem] flex-col flex items-center justify-center rounded-2xl
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
                <p className='h-24 text-teal-500 font-light'>{description}</p>
                <div className='mt-2 w-full flex items-center justify-between '>
                    <Link className='underline rounded-lg  text-lg font-semibold md:text-base' href={github} target="_blank">Visit</Link>
                    <Link className='w-8 md:w-6' href={github} target="_blank"><GithubIcon /></Link>
                </div>
            </div>
        </article>
    )
}
const projects = () => {

    const fullstack = [

        {
            title: "FamilyCircle Chat App",
            description: "User Registration and Authentication: Users can create accounts, log in, and manage their profiles. Authentication ensures secure access to the application and personalization of the user experience.",
            imgUrl: f1,
            liveUrl: 'https://faimly-circle-chat-dc.vercel.app/',
            githubUrl: "https://github.com/DakshCodes/Faimly-Circle-Chat-DC"

        },
        {
            title: "Blog Mad App",
            description: "User Registration and Authentication: Users can create accounts, log in, and manage their profiles. Authentication ensures secure access to the application and personalization of the user experience.",
            imgUrl: f2,
            liveUrl: 'https://netflix-clone-dc.vercel.app/',
            githubUrl: "https://github.com/DakshCodes/Blog-Mad-DC"
        },
        {
            title: "To-Do App",
            description: "To Do Application in This User Registration and Authentication: Users can create accounts, log in, and manage their profiles. And Do Crud Oprations ",
            imgUrl: f3,
            liveUrl: 'https://to-do-mern-dc.vercel.app/login',
            githubUrl: "https://github.com/DakshCodes/ToDo-Mern-DC"

        },
        {
            title: "Go Food App",
            description: "Food App in This User Registration and Authentication: Users can create accounts, log in, and manage their profiles. ",
            imgUrl: f4,
            liveUrl: 'https://hulu-clone-dc.vercel.app/',
            githubUrl: "https://github.com/DakshCodes/GoFood-Mern-DC"

        },
        {
            title: "Photo Gallery App",
            description: "In This App You can Upload Your Photos In Cloud As Safe And Download AnyWhere ",
            imgUrl: f4,
            liveUrl: 'https://photo-gallery-mern-dc.vercel.app/',
            githubUrl: "https://github.com/DakshCodes/Photo-Gallery-Mern-Dc"

        },
        {
            title: "Student Entry App",
            description: "In This App You can Add Students And Do Crud Oprations ",
            imgUrl: aniImg6,
            liveUrl: 'https://hulu-clone-dc.vercel.app/',
            githubUrl: "https://github.com/DakshCodes/Student-Entery-DC"

        },

    ];
    const animation = [

        {
            title: "Modeling Page",
            description: "A Home Page of Modeling Website Fully Animated",
            imgUrl: aniImg7,
            liveUrl: 'https://modeling-home-dc.vercel.app/',
            githubUrl: "https://github.com/DakshCodes/Modeling-Home-DC"
        },
        {
            title: "Shoes Page",
            description: "A Home Page of Adidas Shoes Website Fully Animated",
            imgUrl: aniImg1,
            liveUrl: 'https://shoes-page-dc.vercel.app/',
            githubUrl: "https://github.com/DakshCodes/Shoes-Page-DC"
        },
        {
            title: "Cycle Page",
            description: "A Home Page of Cycle Website Fully Animated",
            imgUrl: aniImg6,
            liveUrl: 'https://cycle-page-dc.vercel.app/',
            githubUrl: "https://github.com/DakshCodes/Cycle-page-DC"
        },
        {
            title: "Watch Page",
            description: "A Home Page of Watch Website Fully Animated",
            imgUrl: aniImg4,
            liveUrl: 'https://watch-page-dc.vercel.app/',
            githubUrl: "https://github.com/DakshCodes/Watch-Page-DC"
        },
        {
            title: "Paper Landing Page",
            description: "A Page of Desinged Like Paper",
            imgUrl: aniImg3,
            liveUrl: 'https://paper-landing-dc.vercel.app/',
            githubUrl: "https://github.com/DakshCodes/Paper-Landing-DC"
        },
        {
            title: "Lamp NavBar ",
            description: "A Animated Lamp Navbar",
            imgUrl: aniImg2,
            liveUrl: 'https://lamp-nav-dc.vercel.app/',
            githubUrl: "https://github.com/DakshCodes/Lamp-Nav-DC"
        },
    ];
    const frontend = [

        {
            title: "Imdb-Clone",
            description: "It is Amazing Website For Movies",
            imgUrl: aniImg2,
            liveUrl: 'https://imdb-clone-zeta-tan.vercel.app/',
            githubUrl: "https://github.com/DakshCodes/Imdb-Clone-DC"
        },
        {
            title: "Tesla-Clone",
            description: "It is Tesla Automobiles Componey Clone",
            imgUrl: aniImg1,
            liveUrl: 'https://tesla-clone-pi-kohl.vercel.app/',
            githubUrl: "https://github.com/DakshCodes/Tesla-Clone-DC"
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

                    <div>
                        <div className='mt-5'>
                            <FeaturedProject
                                title={"Full Stack Projects"}
                            />
                        </div>
                        <div className=' flex flex-wrap items-center justify-center gap-10 mt-5 mb-5'>
                            {
                                fullstack.map((project, index) => {
                                    return (<>
                                        <Project
                                            key={index}
                                            github={project.githubUrl}
                                            img={project.imgUrl}
                                            link={project.liveUrl}
                                            title={project.title}
                                            description={project.description}
                                            type='Full Stack Project'
                                        />
                                    </>
                                    )
                                })
                            }

                        </div>
                        <div className='mt-10'>
                            <FeaturedProject
                                title={"Animations Projects"}
                            />
                        </div>
                        <div className='flex flex-wrap items-center justify-center gap-10 mt-5 mb-5'>
                            {
                                animation.map((project, index) => {
                                    return (
                                        <Project
                                            key={index}
                                            github={project.githubUrl}
                                            img={project.imgUrl}
                                            link={project.liveUrl}
                                            title={project.title}
                                            type='Animations Project'
                                        />
                                    )
                                })
                            }

                        </div>
                        <div className='mt-10'>
                            <FeaturedProject
                                title={"Frontend Projects"}
                            />
                        </div>
                        <div className='flex flex-wrap items-center justify-center gap-10 mt-5 mb-5'>
                            {
                                frontend.map((project, index) => {
                                    return (
                                        <Project
                                            key={index}
                                            github={project.githubUrl}
                                            img={project.imgUrl}
                                            link={project.liveUrl}
                                            title={project.title}
                                            type='Frontend Project'
                                        />
                                    )
                                })
                            }

                        </div>
                    </div>

                </Layout>
            </main>
        </>
    )
}

export default projects
