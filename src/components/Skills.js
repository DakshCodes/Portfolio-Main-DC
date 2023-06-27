import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'

            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-7xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
            <div className='w-full h-screen relative flex items-center mt-20 justify-center rounded-full bg-circularLight lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]'>
                <motion.div
                    className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2' whileHover={{ scale: 1.05 }}>
                    Web
                </motion.div>
                <Skill name="ReactJs" x="-25vw" y="-2vw" />
                <Skill name="RestApi" x="-12vw" y="-2vw" />
                <Skill name="CSS" x="1vw" y="-19vw" />
                <Skill name="Javascript" x="20vw" y="6vw" />
                <Skill name="Gsap" x="0vw" y="8vw" />
                <Skill name="LocoMotivejs" x="0vw" y="12vw" />
                <Skill name="Javascript" x="-16vw" y="-12vw" />
                <Skill name="HTML" x="-9vw" y="-19vw" />
                <Skill name="NextJs" x="10vw" y="-14vw" />
                <Skill name="NodeJs" x="24vw" y="-2vw" />
                <Skill name="ExpressJs" x="15vw" y="-8vw" />
                <Skill name="Firebase" x="-22vw" y="14vw" />
                <Skill name="SCSS" x="-30vw" y="5vw" />
                <Skill name="MongoDB" x="-0vw" y="20vw" />
                <Skill name="Tailwind CSS" x="21vw" y="14vw" />
            </div>
            <div className='ml-28 w-[60vw] mt-24  h-[80vh] relative flex items-center justify-center rounded-full bg-circularLight lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]'>
                <motion.div
                    className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2' whileHover={{ scale: 1.05 }}>
                    Others
                </motion.div>
                <Skill name="C" x="-12vw" y="0vw" />
                <Skill name="Java" x="0vw" y="-10vw" />
                <Skill name="Ui,Ux" x="13vw" y="-13vw" />
                <Skill name="Git,Github" x="13vw" y="-0vw" />
                <Skill name="Python" x="0vw" y="10vw" />
            </div>
        </>
    )
}

export default Skills
