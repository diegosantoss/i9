import styles from './index.module.css';
import Parser from 'html-react-parser';

const About = ({about}) => {
  return (
    <section className={styles.about_container} style={{ backgroundImage: `url(${about.image})` }} id="quem-somos">
      <section className={styles.about_texts}>
        <section className="container">
          <h2 className="h2_default">{Parser(about.title)}</h2>
        </section>
      </section>
      <section className={styles.about_content}>
        <section className="container">
            <section className={styles.about_content_item}>
              <p>{Parser(about.text)}</p> 
            </section>
          </section>
      </section>
    </section>
  )
}

export default About;