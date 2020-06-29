import Head from 'next/head';
import Link from 'next/link';
import BaseApp from '../components/BaseApp';
import ServicesHome from '../components/Services';

import StaticData from '../StaticData/index';

export default function Home() {
  const { services } =  StaticData;
  return (
    <BaseApp>
      <Head>
        <title>i9 Corporation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>    

      <ServicesHome services={services} />
    </BaseApp>
  )
}


 