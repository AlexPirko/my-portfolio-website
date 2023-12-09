import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

import Logo from './Logo';
import { useRouter } from 'next/router';
import { GithubIcon, Instagram, LinkedInIcon, Telegram } from './SocialIcons';

const CustomLink = ({ href, title, className = '' }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span
                className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-400
            ${router.asPath === href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </Link>
    );
};

const NavBar = () => {
    return (
        <header className='w-full px-36 pt-16 flex items-center justify-between font-medium'>
            <nav>
                <CustomLink href='/' title='Home' className='mr-4' />
                <CustomLink
                    href='/projects'
                    title='Projects'
                    className='mx-4'
                />
                <CustomLink href='/about' title='About' className='ml-4' />
            </nav>

            <Logo />

            <div className='flex items-center justify-center flex-wrap'>
                <motion.a
                    href='https://github.com/AlexPirko'
                    target={'_blank'}
                    whileHover={{ y: 3 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-7 mr-3'>
                    <GithubIcon />
                </motion.a>
                <motion.a
                    href='https://web.telegram.org/k/#@youzhny_dev'
                    target={'_blank'}
                    whileHover={{ y: 3 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-8 mx-3'>
                    <Telegram />
                </motion.a>
                <motion.a
                    href='https://www.linkedin.com/in/olexandr-pirko/'
                    target={'_blank'}
                    whileHover={{ y: 3 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-6 mx-3'>
                    <LinkedInIcon />
                </motion.a>
                <motion.a
                    href='https://www.instagram.com/'
                    target={'_blank'}
                    whileHover={{ y: 3 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-7 ml-3'>
                    <Instagram />
                </motion.a>
            </div>
        </header>
    );
};

export default NavBar;
