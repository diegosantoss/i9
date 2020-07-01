import styles from './index.module.css';

const Why = ({why}) => {
  return (
    <section className={styles.why_container}>
      <section className="container">
        <section className={styles.why_texts}>
          <h2 className="h2_default">{why.title}</h2>
        </section>
        <section className={styles.why_content}>
          {why.options.map( (item, index) => (
            <section key={index} className={styles.why_content_item}>
              <img src={item.icon} width="60" />
              <p>{item.text}</p> 
            </section>
          ))}
        </section>
      </section>
    </section>
  )
}

export default Why;