import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const MotionLogo = motion(Link);

const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLogo
                href='/'
                className='w-14 h-14 bg-blue-900 text-light flex items-center justify-center rounded-full text-2xl font-bold'
                whileHover={{
                    backgroundColor: [
                        '#082f49',
                        '#0e7490',
                        '#3730a3',
                        '#6d28d9',
                        '#155e75',
                        '#082f49',
                    ],
                    transition: { duration: 1, repeat: Infinity },
                }}>
                OP
            </MotionLogo>
        </div>
    );
};

export default Logo;
