import styles from './index.module.css';
import Parser from 'html-react-parser';

const Expertise = ({expertise}) => {
  return (
    <section className={styles.expertise_container} style={{ backgroundImage: `url(${expertise.image})` }} id="areas-de-atuacao">
      <section className={styles.expertise_texts}>
        <section className={`container ${styles.expertise_align_items}`}>
          <h2 className="h2_default">{Parser(expertise.title)}</h2>
          <p>{Parser(expertise.text)}</p> 
        </section>
      </section>
      <section className={styles.expertise_content}>
        <section className={`container ${styles.expertise_align_items}`}>
          {expertise.options.map( (item, index) => (
            <section key={index} className={styles.expertise_content_item}>
              <img src={item.icon} width="45" />
              <p>{item.text}</p>
            </section>
          ))}

          </section>
      </section>
    </section>
  )
}

export default Expertise;