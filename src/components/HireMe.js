import React from 'react';
import { LogoSecondary } from './SocialIcons';
import Link from 'next/link';

const HireMe = () => {
    return (
        <div
            className='fixed left-12 bottom-12 flex items-center justify-center
     overflow-hidden'>
            <div className='w-32 h-auto flex items-center justify-center relative'>
                <LogoSecondary className={'fill-slate-800 animate-spin-slow'} />

                <Link
                    href='mailto:youzhny.foto@gmail.com'
                    className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-light font-semibold shadow-md border border-solid border-slate-900 w-16 h-16 rounded-full hover:bg-light hover:text-slate-800'>
                    HireMe
                </Link>
            </div>
        </div>
    );
};

export default HireMe;
