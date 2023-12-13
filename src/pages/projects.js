import AnimatedTitle from '@/components/AnimatedTitle';
import Layout from '@/components/Layout';
import { GithubIcon } from '@/components/SocialIcons';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import project2 from '../../public/project-2.jpg';
import TransitionEff from '@/components/TransitionEff';

const FeaturedProject = ({
    type,
    title,
    summary,
    img,
    srv_link,
    cl_link,
    github,
}) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl boder border-solid border-dark bg-light dark:bg-slate-800 shadow-2xl p-12 xl:flex-col xl:px-16 xl:gap-y-8 md:px-10 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='w-1/2 overflow-hidden rounded-lg xl:w-full'>
                <Image
                    src={img}
                    alt={title}
                    className='w-full h-auto'
                    priority
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
            </div>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 xl:w-full'>
                <span className='text-primary font-medium text-xl dark:text-slate-300'>
                    {type}
                </span>
                <Link
                    href={cl_link}
                    target='_blank'
                    className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light md:text-3xl sm:text-2xl'>
                        {title}
                    </h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>
                    {summary}
                </p>
                <div className='mt-2 flex items-center xs:m-auto xs:gap-x-5 xs:mt-2'>
                    <Link
                        href={github}
                        target='_blank'
                        className='w-10 dark:bg-light dark:rounded-3xl xs:w-14'>
                        <GithubIcon />
                    </Link>
                    <div className='flex xs:flex-col xs:gap-y-2'>
                        <Link
                            href={srv_link}
                            target='_blank'
                            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold md:text-base md:p-1.5 md:px-3'>
                            Start the Server
                        </Link>
                        <Link
                            href={cl_link}
                            target='_blank'
                            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold md:text-base md:p-1.5 md:px-3'>
                            Visit Project
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
};

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-slate-800 p-6 relative'>
            <div className='w-full overflow-hidden rounded-lg'>
                <Image
                    src={img}
                    alt={title}
                    className='w-full h-auto'
                    priority
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
            </div>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-slate-300'>
                    {type}
                </span>
                <Link
                    href={link}
                    target='_blank'
                    className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light md:text-2xl'>
                        {title}
                    </h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link
                        href={link}
                        target='_blank'
                        className='text-lg font-semibold underline dark:text-light md:text-base'>
                        Visit Project
                    </Link>
                    <Link
                        href={github}
                        target='_blank'
                        className='w-8 dark:bg-light dark:rounded-2xl'>
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    );
};

const projects = () => {
    return (
        <>
            <Head>
                <title>Alex Pirko developer | Projects Page</title>
                <meta name='description' content='my description' />
            </Head>
            <TransitionEff />
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16 lg:!pt-24'>
                    <AnimatedTitle
                        text='Great Projects For You!'
                        className='mb-16 lg:!text-6xl md:!text-5xl sm:!text-3xl sm:mb-8'
                    />

                    <div className='grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-16 sm:gap-x-4'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                type='Fullstack Project'
                                title='MERN simple blog'
                                summary='Simple blog built using React on JavaScript and Redux; server part - NodeJS + Express + MongoDB. The project is a blog where the user can register, as well as write, edit and delete posts, add comments and tags.'
                                img={project2}
                                srv_link='https://pirko-mern-blog.onrender.com/'
                                cl_link='https://mern-blog-client-chi.vercel.app/'
                                github='https://github.com/AlexPirko/MERN-blog-client'
                            />
                        </div>
                        <div className='col-span-6 xs:col-span-12'>
                            <Project
                                type='Fullstack Project'
                                title='MERN simple blog'
                                summary='Simple blog built using React on JavaScript and Redux; server part - NodeJS + Express + MongoDB. The project is a blog where the user can register, as well as write, edit and delete posts, add comments and tags.'
                                img={project2}
                                link='https://mern-blog-client-chi.vercel.app/'
                                github='https://github.com/AlexPirko/MERN-blog-client'
                            />
                        </div>
                        <div className='col-span-6 xs:col-span-12'>
                            <Project
                                type='Fullstack Project'
                                title='MERN simple blog'
                                summary='Simple blog built using React on JavaScript and Redux; server part - NodeJS + Express + MongoDB. The project is a blog where the user can register, as well as write, edit and delete posts, add comments and tags.'
                                img={project2}
                                link='https://mern-blog-client-chi.vercel.app/'
                                github='https://github.com/AlexPirko/MERN-blog-client'
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                type='Fullstack Project'
                                title='MERN simple blog'
                                summary='Simple blog built using React on JavaScript and Redux; server part - NodeJS + Express + MongoDB. The project is a blog where the user can register, as well as write, edit and delete posts, add comments and tags.'
                                img={project2}
                                srv_link='https://pirko-mern-blog.onrender.com/'
                                cl_link='https://mern-blog-client-chi.vercel.app/'
                                github='https://github.com/AlexPirko/MERN-blog-client'
                            />
                        </div>
                        <div className='col-span-6 xs:col-span-12'>
                            <Project
                                type='Fullstack Project'
                                title='MERN simple blog'
                                summary='Simple blog built using React on JavaScript and Redux; server part - NodeJS + Express + MongoDB. The project is a blog where the user can register, as well as write, edit and delete posts, add comments and tags.'
                                img={project2}
                                link='https://mern-blog-client-chi.vercel.app/'
                                github='https://github.com/AlexPirko/MERN-blog-client'
                            />
                        </div>
                        <div className='col-span-6 xs:col-span-12'>
                            <Project
                                type='Fullstack Project'
                                title='MERN simple blog'
                                summary='Simple blog built using React on JavaScript and Redux; server part - NodeJS + Express + MongoDB. The project is a blog where the user can register, as well as write, edit and delete posts, add comments and tags.'
                                img={project2}
                                link='https://mern-blog-client-chi.vercel.app/'
                                github='https://github.com/AlexPirko/MERN-blog-client'
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default projects;
