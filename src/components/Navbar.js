import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Logo from './Logo'
import { TwitterIcon, GithubIcon, LinkedInIcon } from './Icons'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [isopen, setopen] = useState(false);

    const handleClick = () => {
        setopen(!isopen);
    }

    const router = useRouter();


    const CustomLink = ({ href, title, className = '' }) => {
        return (
            <Link href={href} className={`${className} relative group`}>
                {title}
                <span
                    className={`h-[2px] inline-block  bg-black absolute left-0 -bottom-0.5
                    group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}
                >&nbsp;</span>
            </Link>
        )
    }


    const CustomMobileLink = ({ href, title, className = '', toggle }) => {
        const router = useRouter();
        const handleClick = () => {
            toggle();
            router.push(href);
        }

        return (
            <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
                {title}
                <span
                    className={`h-[2px] inline-block bg-light  dark:bg-black absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}
                >&nbsp;</span>
            </button>
        )
    }


    return (
        <header className='w-full px-32 py-8 relative z-10 lg:px-16 md:px-12 sm:px-8  font-medium flex justify-between items-center'>

            <button className=' flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
                <span className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-1 w-10 rounded-sm -translate-y-1 ${isopen ? 'rotate-45 translate-y-5' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-1 w-10 rounded-sm my-1 ${isopen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-1 w-10 rounded-sm translate-y-1  ${isopen ? '-rotate-45 ' : 'translate-y-0.5'}`}></span>
            </button>

            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href='/' title="Home" className='mr-5' />
                    <CustomLink href='/about' title="About" className='mx-5' />
                    <CustomLink href='/projects' title="Projects" className='mx-5' />
                    {/* <CustomLink href='/articles' title="Articles" className='ml-4'/> */}
                </nav>

                <nav className='flex justify-center items-center flex-wrap'>
                    <motion.a href='https://twitter.com/DakshSingh9072' target={'_blank'}
                        className='w-7 mx-4'
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <TwitterIcon />
                    </motion.a>
                    <motion.a href='https://github.com/DakshCodes' target={'_blank'}
                        className='w-7 mx-4'
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a href='https://www.linkedin.com/in/daksh-singh-128a91246/' target={'_blank'}
                        className='w-7 ml-4 rounded-full'
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <LinkedInIcon />
                    </motion.a>
                </nav>
            </div>

            {
                isopen ?

                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1 }}
                        className='min-w-[75vw]  flex flex-col  justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg  backdrop-blur-md py-32 '>
                        <nav className='flex items-center flex-col justify-center '>
                            <CustomMobileLink href='/' title="Home" className='' toggle={handleClick} />
                            <CustomMobileLink href='/about' title="About" className='' toggle={handleClick} />
                            <CustomMobileLink href='/projects' title="Projects" className='' toggle={handleClick} />
                            {/* <CustomLink href='/articles' title="Articles" className='ml-4'/> */}
                        </nav>

                        <nav className='flex justify-center items-center flex-wrap mt-4'>
                            <motion.a href='https://twitter.com' target={'_blank'}
                                className='w-7 mx-4  sm:mx-1'
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <TwitterIcon />
                            </motion.a>
                            <motion.a href='https://twitter.com' target={'_blank'}
                                className='w-7 mx-4 bg-light rounded-full sm:mx-1'
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <GithubIcon />
                            </motion.a>
                            <motion.a href='https://twitter.com' target={'_blank'}
                                className='w-7 ml-4  sm:mx-1'
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <LinkedInIcon />
                            </motion.a>
                        </nav>
                    </motion.div>

                    : null
            }


            <div className='absolute left-[50%] top-2 md:top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default Navbar
