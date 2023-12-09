import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import { Raleway } from 'next/font/google';
import Head from 'next/head';

const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={`${raleway.variable} bg-light w-full`}>
                <NavBar/>
                <Component {...pageProps} />
            </main>
            <Footer/>
        </>
    );
}
