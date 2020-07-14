import React, { useState } from 'react';

import { maskTel } from '../Masks';
import BaseContext from '../Context';

import styles from './ContactForm.module.css';

const ContactForm = () => {

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleClickBudget = React.useContext(BaseContext);

  const handleChangeInput = ({target}) => {
    let prevForm = {...form};
    
    if(target.name === 'phone'){
      prevForm[target.name] = maskTel(target.value);   
    } else {
      prevForm[target.name] = target.value;
    }

    console.log(prevForm);
    setForm(prevForm);
  }

  return (
    <section id="contactform_container" className={styles.contactform_container} style={{ opacity: 0, visibility: "hidden" }}>
      <section className={styles.contactform_content}>
        <section className={styles.contactform_close} 
          onClick={() => {
            handleClickBudget('', true);
          }}
          >X</section>
        <section className={styles.contactform_title}>
          <h2 className="h2_default">SOLICITE UM ORÇAMENTO</h2>
        </section>
        
        <form action="#" className={styles.contactform_form}>
          <section className={`${styles.contactform_form_item} ${styles.contactform_form_input_name}`}>
            <input type="text" placeholder="Nome*" name="name" className={styles.contactform_form_input} required value={form.name} onChange={(e) => handleChangeInput(e)} />
          </section>
          <section className={`${styles.contactform_form_item} ${styles.contactform_form_input_phone}`}>
            <input type="tel" placeholder="Telefone*" name="phone" className={styles.contactform_form_input} required value={form.phone} onChange={(e) => handleChangeInput(e)} />
          </section>
          <section className={`${styles.contactform_form_item} ${styles.contactform_form_input_email}`}>
            <input type="email" placeholder="E-mail*" name="email" className={styles.contactform_form_input} required value={form.email} onChange={(e) => handleChangeInput(e)} />
          </section>
          <section className={`${styles.contactform_form_item} ${styles.contactform_form_input_subject}`}>
            <input type="text" placeholder="Assunto*" name="subject" className={styles.contactform_form_input} required value={form.subject} onChange={(e) => handleChangeInput(e)} />
          </section>
          <section className={`${styles.contactform_form_item} ${styles.contactform_form_input_mensagem}`}>
            <textarea placeholder="Mensagem*" name="message" className={styles.contactform_form_input} required value={form.message} onChange={(e) => handleChangeInput(e)}></textarea>
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