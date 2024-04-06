import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profileImg from '../../public/dev.png';
import AnimatedTitle from '@/components/AnimatedTitle';
import Link from 'next/link';
import HireMe from '@/components/HireMe';
// import TransitionEff from '@/components/TransitionEff';

export default function Home() {
    const imageLoader = ({ src, width, quality }) => {
        return `https://profile.pirko.site/${src}?w=${width}&q=${quality || 75}`;
    };
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
            </Head>
            {/* <TransitionEff /> */}
            <div className='flex items-center m-auto text-dark dark:text-light w-10/12 min-h-screen'>
                <Layout className='pt-0 md:pt-16 sm:pt-8'>
                    <div className='flex items-center justify-between w-full gap-10 lg:flex-col'>
                        <div className='w-2/5 xl:w-1/2 md:w-2/3 sm:w-full'>
                            <Image
                                loader={imageLoader}
                                src='/dev.png'
                                alt='Developer profile image'
                                className='w-full h-auto'
                                width={390}
                                height={390}
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                priority
                            />
                        </div>
                        <div className='w-3/5 flex flex-col items-center self-center xl:w-1/2 lg:w-full'>
                            <AnimatedTitle
                                text='Turning Vision Into Reality'
                                className='!text-6xl !text-left xl:!text-5xl lg:!text-center md:!text-5xl sm:!text-3xl'
                            />
                            <p className='my-10 text-xl font-medium md:my-6 xl:text-base'>
                                As a person who is madly in love with my profession, I do my work to
                                the highest possible quality. I am dedicated to turning ideas into
                                innovative web applications. Explore my latest projects, showcasing
                                my expertise in frontend web development.
                            </p>
                            <div className='flex items-center self-start mt-2 lg:text-center md:self-center'>
                                <Link
                                    href='https://drive.google.com/file/d/17On2Qu99YlziVMJmrijsIwIqRanPmK_Q/view?usp=drive_link'
                                    target={'_blank'}
                                    className='flex items-center bg-slate-900 text-light dark:bg-light dark:font-medium dark:text-dark p-1.5 px-6 rounded-lg text-lg font-semibolg hover:bg-light hover:text-slate-900 border-2 border-solid border-transparent hover:border-slate-900 transition-all duration-500'>
                                    Resume
                                </Link>
                                <Link
                                    href='mailto:youzhny.foto@gmail.com'
                                    aria-label='Send me E-mail'
                                    target={'_blank'}
                                    className='ml-4 text-lg font-medium capitalize text-slate-900 dark:text-light underline md:ml-8'>
                                    Send Email
                                </Link>
                            </div>
                        </div>
                    </div>
                </Layout>
                <HireMe />
            </div>
        </>
    );
}
