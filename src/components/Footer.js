import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-slate-900 dark:border-light font-medium text-lg sm:text-sm'>
            <Layout className='!py-8 flex items-center justify-between text-slate-900 dark:text-light'>
                <span>
                    {new Date().getFullYear()} &copy; All Rights Reserved
                </span>
                <span className='sm:pl-4'>
                    Wellcome to my&nbsp;
                    <Link
                        className='underline underline-offset-2'
                        href='https://github.com/AlexPirko'
                        target={'_blank'}>
                        GitHub
                    </Link>
                </span>
            </Layout>
        </footer>
    );
};

export default Footer;
