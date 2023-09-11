import Head from 'next/head';
import { Button } from 'ui';
import { useEffect } from 'react';
import { getRandomHex } from 'utils';
import { suitExtraBold } from '@/fonts/suitExtraBold';

export default function Home() {
  useEffect(() => {
    const hex = getRandomHex();

    console.log('hex', hex);
  }, []);

  const onClick = () => {
    console.log('click');
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta content="Generated by create next app" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <>
        <Button
          css={{
            backgroundColor: 'green',
          }}
          onClick={onClick}
        >
          Click!!
        </Button>
        <div>
          어제보다 4℃ 높아요 · Gift 카드 등록하기 · 최대 20% 캐시백 · 61,800P
          적립 · QR 결제
        </div>
        <div className={suitExtraBold.className}>
          어제보다 4℃ 높아요 · Gift 카드 등록하기 · 최대 20% 캐시백 · 61,800P
          적립 · QR 결제
        </div>
      </>
    </>
  );
}
