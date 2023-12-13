import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Logo from './Logo';
import { useRouter } from 'next/router';
import {
    GithubIcon,
    Instagram,
    LinkedInIcon,
    MoonIcon,
    SunIcon,
    Telegram,
} from './SocialIcons';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = '' }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span
                className={`h-[2px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-400
            ${router.asPath === href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </Link>
    );
};

const CustomMobLink = ({ href, title, className = '', toggle }) => {
    const router = useRouter();

    const handleMobMenu = () => {
        toggle();
        router.push(href);
    };

    return (
        <button
            href={href}
            className={`${className} relative group text-light dark:text-dark my-2`}
            onClick={handleMobMenu}>
            {title}
            <span
                className={`h-[2px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-400
            ${router.asPath === href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </button>
    );
};

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='w-full px-36 pt-20 block font-medium dark:text-light relative sm:px-20 lg:z-30'>
            <button
                className='flex-col items-center justify-center hidden lg:flex'
                onClick={handleOpenMenu}>
                <span
                    className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-in-out ${
                        isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}></span>
                <span
                    className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-in-out my-0.5 ${
                        isOpen ? 'opacity-0' : 'opacity-100'
                    }`}></span>
                <span
                    className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-in-out ${
                        isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`}></span>
            </button>

            <div className='flex items-center justify-between w-full text-xl lg:hidden'>
                <nav>
                    <CustomLink href='/' title='Home' className='mr-4' />
                    <CustomLink
                        href='/projects'
                        title='Projects'
                        className='mx-4'
                    />
                    <CustomLink href='/about' title='About' className='ml-4' />
                </nav>

                <div className='flex items-center justify-center flex-wrap'>
                    <motion.a
                        href='https://github.com/AlexPirko'
                        target={'_blank'}
                        whileHover={{ y: 3 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-10 mr-3'>
                        <GithubIcon />
                    </motion.a>
                    <motion.a
                        href='https://web.telegram.org/k/#@youzhny_dev'
                        target={'_blank'}
                        whileHover={{ y: 3 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-10 mx-3'>
                        <Telegram />
                    </motion.a>
                    <motion.a
                        href='https://www.linkedin.com/in/olexandr-pirko/'
                        target={'_blank'}
                        whileHover={{ y: 3 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-8 mx-3'>
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a
                        href='https://www.instagram.com/'
                        target={'_blank'}
                        whileHover={{ y: 3 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-9 mx-3'>
                        <Instagram />
                    </motion.a>

                    <button
                        className='ml-10 w-9'
                        onClick={() =>
                            setMode(mode === 'light' ? 'dark' : 'light')
                        }>
                        {mode === 'dark' ? (
                            <SunIcon className={'fill-slate-800'} />
                        ) : (
                            <MoonIcon className={'fill-slate-800'} />
                        )}
                    </button>
                </div>
            </div>

            {isOpen ? (
                <motion.div
                    initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
                    animate={{ scale: 1, opacity: 1 }}
                    className='min-w-[70vw] z-30 flex flex-col items-center justify-between text-xl fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-32'>
                    <nav className='flex flex-col items-center justify-center'>
                        <CustomMobLink
                            href='/'
                            title='Home'
                            toggle={handleOpenMenu}
                        />
                        <CustomMobLink
                            href='/projects'
                            title='Projects'
                            toggle={handleOpenMenu}
                        />
                        <CustomMobLink
                            href='/about'
                            title='About'
                            toggle={handleOpenMenu}
                        />
                    </nav>

                    <div className='flex items-center justify-center flex-wrap mt-4'>
                        <motion.a
                            href='https://github.com/AlexPirko'
                            target={'_blank'}
                            whileHover={{ y: 3 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-10 mr-3 bg-light sm:w-7 sm:mr-2 dark:bg-dark'>
                            <GithubIcon />
                        </motion.a>
                        <motion.a
                            href='https://web.telegram.org/k/#@youzhny_dev'
                            target={'_blank'}
                            whileHover={{ y: 3 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-10 mx-3 sm:w-8 sm:mx-2'>
                            <Telegram />
                        </motion.a>
                        <motion.a
                            href='https://www.linkedin.com/in/olexandr-pirko/'
                            target={'_blank'}
                            whileHover={{ y: 3 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-8 mx-3 sm:w-7 sm:mx-2'>
                            <LinkedInIcon />
                        </motion.a>
                        <motion.a
                            href='https://www.instagram.com/'
                            target={'_blank'}
                            whileHover={{ y: 3 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-9 mx-3 sm:w-8 sm:mx-2'>
                            <Instagram />
                        </motion.a>

                        <motion.button
                            className='ml-10 w-9 bg-light sm:ml-3 sm:w-7 dark:bg-dark'
                            whileHover={{ y: 3 }}
                            onClick={() =>
                                setMode(mode === 'light' ? 'dark' : 'light')
                            }>
                            {mode === 'dark' ? (
                                <SunIcon className={'fill-slate-800'} />
                            ) : (
                                <MoonIcon className={'fill-slate-800'} />
                            )}
                        </motion.button>
                    </div>
                </motion.div>
            ) : null}

            <div className='absolute left-[47%] top-12 translate-x-[-50%] lg:left-[50%]'>
                <Logo />
            </div>
        </header>
    );
};

export default NavBar;
