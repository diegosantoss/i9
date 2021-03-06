import Link from 'next/link';

import BaseContext from '../Context';
import styles from './index.module.css';

const Contact = ({useful}) => {
  const handleClickBudget = React.useContext(BaseContext);

  return (
    <section className={styles.contact_container}>
      <section className="container">
        <section className={styles.contact_content}>
          <section className={styles.contact_content_item} >
            <a>
              <h2>{useful.text}</h2>
            </a>
          </section>
          <section className={styles.contact_content_item}>
            <a>
              <h2>{useful.tel}</h2>
            </a>
          </section>
          <section className={styles.contact_content_item}>
            <Link href={useful.budget.link}>
              <a onClick={ () => {
                handleClickBudget(useful.budget.link)
              }}>
                <h2>{useful.budget.header}</h2>
              </a>
            </Link>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Contact;