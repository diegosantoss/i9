import Link from 'next/link';
import StaticData from '../../StaticData/index';

export default function Header() {
  const { logo, menu } = StaticData;

  const handleClickMenu = () => {
    const body = document.querySelector('body');
    const navMenu = document.querySelector('nav.menu');

    navMenu.classList.toggle('menu_opened');
    body.classList.toggle('menu_opened');
  }

  return (
    <section className="container">
      <header>
        <section className="logo">
          <Link href={logo.link}>
            <a><img src={logo.dark} alt={logo.title} title={logo.title}/> </a>
          </Link>
        </section>
        <nav className="menu" onClick={ () => {
          if(document.querySelector('.menu_opened')){
            handleClickMenu();
          }
        }}>
          <ul>
            {menu.map(item => (
              <li key={item.link} onClick={ () => {
                if(document.querySelector('.menu_opened')){
                  handleClickMenu();
                }
              }}>
                <Link href={item.link}>
                  <a>{item.text}</a>
                </Link>
              </li>
            ))}            
          </ul>
        </nav>
        <section className="menu_mobile" onClick={() => handleClickMenu()}>
          <img src="./images/menu-mobile-i9-corporation.png" alt="Menu Mobile i9 Corporation" title="Menu Mobile i9 Corporation" />
        </section>
      </header>
    </section>
  )
}
