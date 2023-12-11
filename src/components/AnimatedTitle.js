import React from 'react';
import { motion } from 'framer-motion';

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.7,
            staggerChildren: 0.12,
        },
    },
};

const word = {
    initial: {
        opacity: 0,
        y:50,
    },
    animate: {
        opacity: 1,
        y:0,
        transition: {
            duration: 1,
        },
    },
};

const AnimatedTitle = ({ text, className = '' }) => {
    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
            <motion.h1
                className={`inline-block w-full text-slate-900 dark:text-light font-bold capitalize text-8xl ${className}`}
                variants={quote}
                initial='initial'
                animate='animate'>
                {text.split(' ').map((elem, ind) => (
                    <motion.span key={elem + '-' + ind} className='inline-block'
                    variants={word}
                    >
                        {elem}&nbsp;
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
};

export default AnimatedTitle;
