import React, { useState } from 'react';

import { maskTel } from '../Masks'

import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [a, setA] = useState();

  console.log(maskTel('11954507550'));

  return (
    <section className={styles.contactform_container}>
      <section className={styles.contactform_content}>
        <section className={styles.contactform_title}>
          <h2 className="h2_default">SOLICITE UM ORÇAMENTO</h2>
        </section>
        
        <form action="#" className={styles.contactform_form}>
          <section className={`${styles.contactform_form_item} ${styles.contactform_form_input_name}`}>
            <input type="text" placeholder="Nome*" name="name" className={styles.contactform_form_input} required />
          </section>
          <section className={`${styles.contactform_form_item} ${styles.contactform_form_input_phone}`}>
            <input type="tel" placeholder="Telefone*" name="phone" className={styles.contactform_form_input} required />
          </section>
          <section className={`${styles.contactform_form_item} ${styles.contactform_form_input_email}`}>
            <input type="email" placeholder="E-mail*" name="email" className={styles.contactform_form_input} required />
          </section>
          <section className={`${styles.contactform_form_item} ${styles.contactform_form_input_subject}`}>
            <input type="text" placeholder="Assunto*" name="subject" className={styles.contactform_form_input} required />
          </section>
          <section className={`${styles.contactform_form_item} ${styles.contactform_form_input_mensagem}`}>
            <textarea placeholder="Mensagem*" name="message" className={styles.contactform_form_input} required ></textarea>
          </section>
          <section className={styles.contactform_form_button}>
            <button className={styles.contactform_form_button_item} type="submit">Enviar Mensagem</button>
          </section>
        </form>

      </section>
    </section>
  )
}

export default ContactForm;