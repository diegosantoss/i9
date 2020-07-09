import React from 'react';
import Link from 'next/link';

import StaticData from '../../StaticData';
import ContactForm from '../Contact/ContactForm';
import styles from './index.module.css';

const Footer = () => {
  const { useful, logo, socials } = StaticData;
  return (
    <footer>
      <section className={styles.footer_primary_container} style={{ backgroundImage: `url(${useful.footer_image})` }} >
        <section className="container">
          <section className={styles.footer_primary_content}>
            <h2>{useful.title}</h2>
            <h3>{useful.text}</h3>
            <section className={styles.footer_primary_buttons}>
              <p>{useful.tel}</p>
              <Link href={useful.budget.link}>
                <a><p>{useful.budget.footer}</p></a>
              </Link>
            </section>
          </section>
        </section>
      </section>
      <section className={styles.footer_second_container}>
        <section className="container">
          <section className={styles.footer_second_content}>
            <section className={styles.footer_logo}>
              <Link href={logo.link}>
                <a><img src={logo.light} alt={logo.title} title={logo.title} /></a>
              </Link>
            </section>
            <section className={styles.footer_address}>
              <address>{useful.address}</address>
            </section>
            <section className={styles.footer_social_media}>
              {socials.map(item => (
                <a key={item.title} href={item.link} target="_blank"><img src={item.icon} alt={item.title} title={item.title} /></a>
              ))}
              <p>{useful.copyright}</p>
            </section>
          </section>
        </section>
      </section>
      <ContactForm />
    </footer>
  )
}

export default Footer;