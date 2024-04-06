import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { Raleway } from 'next/font/google';
import Head from 'next/head';
import { useRouter } from 'next/router';

const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });

export default function App({ Component, pageProps }) {
    const router = useRouter();
    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <meta
                    name='freelancehunt'
                    content='8a7d35db8bd0350'
                />
                <link
                    rel='icon'
                    href='/favicon.ico'
                />
            </Head>

            <main className={`${raleway.variable} bg-light dark:bg-dark w-full`}>
                <NavBar />
                <AnimatePresence mode='wait'>
                    <Component
                        key={router.asPath}
                        {...pageProps}
                    />
                </AnimatePresence>
            </main>
            <Footer />
        </>
    );
}
