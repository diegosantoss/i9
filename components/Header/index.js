import Link from 'next/link';
import StaticData from '../../StaticData/index';

export default function Header() {
  const { logo, menu } = StaticData;

  return (
    <section className="container">
      <header>
        <section className="logo">
          <Link href={logo.link}>
            <a><img src={logo.dark} alt={logo.title} title={logo.title}/> </a>
          </Link>
        </section>
        <nav className="menu">
          <ul>
            {menu.map(item => (
              <li key={item.link}>
                <Link href={item.link}>
                  <a>{item.text}</a>
                </Link>
              </li>
            ))}            
          </ul>
        </nav>
      </header>
    </section>
  )
}
