import StaticData from '../../StaticData/index';
import { Event } from '../Tracking';

export default function Header() {
  const { logo, menu } = StaticData;

  const handleClickMenu = () => {
    const body = document.querySelector('body');
    const navMenu = document.querySelector('nav.menu');

    navMenu.classList.toggle('menu_opened');
    body.classList.toggle('menu_opened');
  }

  const handleClickToScroll = (e, link) => {
    e.preventDefault();

    var ref = document.querySelector(link);

    if(ref){ 
      window.scrollTo({ top: ref.offsetTop, behavior: 'smooth' });
      window.history.pushState('', '', link);
      Event('menu', 'click', link);

    } else {
      window.location.href = './' + link;
    }

  }

  return (
    <section className="header_container">
      <section className="container">
        <header>
          <section className="logo">
            <a href={logo.link}><img src={logo.dark} alt={logo.title} title={logo.title}/> </a>
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
                  <a href={item.link}  onClick={ (e) => handleClickToScroll(e, item.link.replace('./', ''))}>{item.text}</a>
                </li>
              ))}            
            </ul>
          </nav>
          <section className="menu_mobile" onClick={() => handleClickMenu()}>
            <img src="./images/menu-mobile-i9-corporation.png" alt="Menu Mobile i9 Corporation" title="Menu Mobile i9 Corporation" />
          </section>
        </header>
      </section>
    </section>
  )
}
