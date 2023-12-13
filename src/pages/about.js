import AnimatedTitle from '@/components/AnimatedTitle';
import Layout from '@/components/Layout';
import aboutPic from '../../public/my-photo.jpg';
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experince from '@/components/Experince';
import Education from '@/components/Education';
import Courses from '@/components/Courses';
import TransitionEff from '@/components/TransitionEff';

const AnimatedNum = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, motionValue, value]);

    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref}></span>;
};

const about = () => {
    return (
        <>
            <Head>
                <title>Alex Pirko developer | About Page</title>
                <meta name='description' content='my description' />
            </Head>
            <TransitionEff />
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16 lg:!pt-24'>
                    <AnimatedTitle
                        text='Passion Fuels Purpose!'
                        className='mb-16 lg:!text-6xl md:!text-5xl sm:!text-3xl sm:mb-12'
                    />
                    <div className='grid w-full grid-cols-8 gap-16 xl:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 xl:items-center lg:order-2 lg:col-span-8'>
                            <h2 className='my-4 text-lg font-bold uppercase text-dark/70 dark:text-light/75'>
                                Biography
                            </h2>
                            <p className='font-medium dark:text-light'>
                                Hi, I’m frontend developer with 1+ years of
                                nonprofit experience. I have extensive life and
                                work experience, both in a large team and as a
                                self employed. Now I spend all my time learning
                                Redux and Nest JS. I play chess, football, love
                                to travel.
                            </p>
                            <p className='my-4 font-medium dark:text-light'>
                                Hi, I’m frontend developer with 1+ years of
                                nonprofit experience. I have extensive life and
                                work experience, both in a large team and as a
                                self employed. Now I spend all my time learning
                                Redux and Nest JS. I play chess, football, love
                                to travel.
                            </p>
                            <p className='font-medium dark:text-light'>
                                Hi, I’m frontend developer with 1+ years of
                                nonprofit experience. I have extensive life and
                                work experience, both in a large team and as a
                                self employed. Now I spend all my time learning
                                Redux and Nest JS. I play chess, football, love
                                to travel.
                            </p>
                        </div>
                        <div className='col-span-3 relative w-max h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 2xl:col-span-4 lg:order-1 lg:col-span-8 lg:m-auto'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                            <Image
                                src={aboutPic}
                                alt="Developer's foto"
                                className='h-auto w-96 rounded-2xl xs:w-72 sd:w-64'
                                priority
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            />
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between 2xl:col-span-8 2xl:flex-row lg:order-3 lg:mt-16 sm:mt-8'>
                            <div className='flex flex-col items-end justify-center 2xl:items-center xs:items-start'>
                                <span className='inline-block text-6xl font-bold dark:text-light lg:text-5xl sm:text-4xl xs:text-3xl'>
                                    <AnimatedNum value={4000} />+
                                </span>
                                <h2 className='text-2xl font-medium capitalize text-dark/70 dark:text-light/75 lg:text-xl sm:text-base xs:text-sm'>
                                    hours of training
                                </h2>
                            </div>
                            <div className='flex flex-col items-end justify-center 2xl:items-center xs:items-start xs:px-4'>
                                <span className='inline-block text-6xl font-bold dark:text-light lg:text-5xl sm:text-4xl xs:text-3xl'>
                                    <AnimatedNum value={50} />+
                                </span>
                                <h2 className='text-2xl font-medium capitalize text-dark/70 dark:text-light/75 lg:text-xl sm:text-base xs:text-sm'>
                                    projects completed
                                </h2>
                            </div>
                            <div className='flex flex-col items-end justify-center 2xl:items-center xs:items-start'>
                                <span className='inline-block text-6xl font-bold dark:text-light lg:text-5xl sm:text-4xl xs:text-3xl'>
                                    <AnimatedNum value={1} />+
                                </span>
                                <h2 className='text-2xl font-medium capitalize text-dark/70 dark:text-light/75 lg:text-xl sm:text-base xs:text-sm'>
                                    years of experience
                                </h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Courses />
                    <Education />
                    <Experince />
                </Layout>
            </main>
        </>
    );
};

export default about;
