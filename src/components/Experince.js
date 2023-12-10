import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import ListIcon from './ListIcon';

const Details = ({ position, company, time, address, work }) => {
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
                <h3 className='capitalize font-bold text-2xl'>
                    {position}&nbsp;|&nbsp;
                    <span className='capitalize font-medium text-slate-800'>
                        {company}
                    </span>
                </h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>{work}</p>
            </motion.div>
        </li>
    );
};

const Experince = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start'],
    });
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                Work Experince
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 w-[4px] h-full bg-dark origin-top'
                />
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details
                        position='Self-employed'
                        company='Oleksandr Youzhny'
                        time='2013-2023'
                        address='Odessa, Ukraine'
                        work='Commercial photographer, TOP-20 best weddind photographer of Odessa'
                    />
                    <Details
                        position='Technical control department specialist'
                        company='Lk-Ukrneftehazstroy'
                        time='2003-2013'
                        address='Odessa, Ukraine'
                        work='Work with technical documentation, supervision of work
                    performed'
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experince;
