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

            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedTitle
                        text='Passion Fuels Purpose!'
                        className='mb-16'
                    />
                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
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
                        <div className='col-span-3 relative w-max h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                            <Image
                                src={aboutPic}
                                alt="Developer's foto"
                                className='h-auto w-96 rounded-2xl'
                            />
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between'>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-6xl font-bold dark:text-light'>
                                    <AnimatedNum value={4000} />+
                                </span>
                                <h2 className='text-2xl font-medium capitalize text-dark/70 dark:text-light/75'>
                                    hours of training
                                </h2>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-6xl font-bold dark:text-light'>
                                    <AnimatedNum value={50} />+
                                </span>
                                <h2 className='text-2xl font-medium capitalize text-dark/70 dark:text-light/75'>
                                    projects completed
                                </h2>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-6xl font-bold dark:text-light'>
                                    <AnimatedNum value={1} />+
                                </span>
                                <h2 className='text-2xl font-medium capitalize text-dark/70 dark:text-light/75'>
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
