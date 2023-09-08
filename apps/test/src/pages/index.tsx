import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Button } from 'ui';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta content="Generated by create next app" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        Test
        <Button />
      </main>
    </>
  );
}