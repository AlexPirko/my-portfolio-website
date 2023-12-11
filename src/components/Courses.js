import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import ListIcon from './ListIcon';

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between'>
            <ListIcon referance={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}>
                <h3 className='capitalize font-bold text-2xl dark:text-light'>{type}</h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full dark:text-light'>{info}</p>
            </motion.div>
        </li>
    );
};

const Courses = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start'],
    });
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center dark:text-light'>
                Courses
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 w-[4px] h-full bg-dark dark:bg-light origin-top'
                />
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details
                        type='The Complete JavaScript Course 2024: From Zero to Profy!'
                        time='2022-2023'
                        place='Udemy'
                        info='Ivan Petrichenko'
                    />
                    <Details
                        type='Course: JavaScript/Front-end'
                        time='2022-2023'
                        place='The Rolling Scopes'
                        info='School based on EPAM'
                    />
                </ul>
            </div>
        </div>
    );
};

export default Courses;
