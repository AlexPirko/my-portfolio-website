import React from 'react';
import { LogoSecondary } from './SocialIcons';
import Link from 'next/link';

const HireMe = () => {
    return (
        <div
            className='fixed left-12 bottom-12 flex items-center justify-center
     overflow-hidden lg:right-12 lg:left-auto lg:top-9 lg:bottom-auto lg:absolute'>
            <div className='w-32 h-auto flex items-center justify-center relative md:w-24 xs:w-20'>
                <LogoSecondary
                    className={
                        'animate-spin-slow dark:filter dark:invert dark:md:invert-1'
                    }
                />

                <Link
                    href='mailto:youzhny.foto@gmail.com'
                    className='flex items-center justify-center absolute left-1/2 top-1/2 
                    -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-light font-semibold 
                    shadow-md border border-solid border-slate-900 w-16 h-16 rounded-full
                    hover:bg-light hover:text-slate-800 md:w-12 md:h-12 md:text-[10px]'>
                    HireMe
                </Link>
            </div>
        </div>
    );
};

export default HireMe;
