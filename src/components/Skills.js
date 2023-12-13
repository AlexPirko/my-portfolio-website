import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
            dark:bg-light dark:text-dark py-3 px-6 shadow-dark cursor-pointer absolute
            lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light'
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}>
            {name}
        </motion.div>
    );
};

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center dark:text-light lg:text-5xl xl:mt-36 sm:text-4xl xs:text-3xl'>
                Skills
            </h2>
            <div
                className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark 
            lg:h-[80vh] md:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:bg-dark:circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
                <motion.div
                    className='flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light 
                    text-light dark:text-dark p-8 shadow-dark cursor-pointer ld:p-6 md:p-3 md:text-base xs:text-xs xs:p-2'
                    whileHover={{ scale: 1.05 }}>
                    Web
                </motion.div>

                <Skill name='HTML' x='-20vw' y='2vw' />
                <Skill name='CSS' x='-5vw' y='-8vw' />
                <Skill name='JavaScript' x='17vw' y='6vw' />
                <Skill name='TypeScript' x='0vw' y='14.5vw' />
                <Skill name='NodeJS' x='-16vw' y='-15vw' />
                <Skill name='React' x='15vw' y='-12vw' />
                <Skill name='Redux' x='30vw' y='-5vw' />
                <Skill name='NextJS' x='0vw' y='-20.5vw' />
                <Skill name='TailwindCSS' x='-25vw' y='18vw' />
                <Skill name='Express' x='18vw' y='18vw' />
            </div>
        </>
    );
};

export default Skills;
