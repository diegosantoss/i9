import Head from 'next/head';
import BaseApp from '../components/BaseApp';

export default function Home() {
  return (
    <BaseApp>
      <div className="container">
        <Head>
          <title>i9 Corporation</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    </BaseApp>
  )
}


 