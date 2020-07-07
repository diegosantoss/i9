import Link from 'next/link';
import styles from './services.module.css';

const ServicesHome = ({services}) => {
  return (
    <section className={styles.services_container} id="servicos">
      <section className="container">
        <section className={styles.services_texts}>
          <h2 className="h2_default">{services.title}</h2>
          <p>{services.text}</p>
        </section>

        <section className={styles.services_content}>
          {services.options.map(item => (
            <section key={item.title} className={styles.services_item} style={{ backgroundImage: `url(${item.image})`}}>
              <Link href={item.link} as={item.link} passHref>
                <a>
                  {item.title}
                </a>
              </Link>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
}

export default ServicesHome;