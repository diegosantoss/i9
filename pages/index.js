import Head from 'next/head';
import Link from 'next/link';
import BaseApp from '../components/BaseApp';

import StaticData from '../StaticData/index';

export default function Home() {
  const { services } =  StaticData;
  return (
    <BaseApp>
      <Head>
        <title>i9 Corporation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>    
      <div className="container">
        {services.options.map(item => (
          <Link href={item.link}>
            <a>{item.title}</a>
          </Link>
        ))}
      </div>
    </BaseApp>
  )
}


 