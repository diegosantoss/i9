import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/[service]" as="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/post/[pid]" as="/post/abc">
            <a>post abc</a>
          </Link>
        </li>
        <li>
          <Link href="/[service]" as="/copeira">
            <a>copeira</a>
          </Link>
        </li>
      </ul>
      
 
      <main>
      </main>

      <footer> 
      </footer>

    </div>
  )
}
