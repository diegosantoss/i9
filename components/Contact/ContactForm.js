import React, { useState } from 'react';

import { maskTel } from '../Masks';
import BaseContext from '../Context';

import styles from './ContactForm.module.css';

const ContactForm = () => {

  const INITIAL_FORM = {
    name: '',
    phone: '',
    email: '',
    typeOption: '',
    subject: '',
    message: ''
  };

  const [form, setForm] = useState(INITIAL_FORM);
  const [isSending, setIsSending] = useState(false);
  const [resultForm, setResultForm] = useState(false);
  const [messageReturnForm, setMessageReturnForm] = useState('');

  const handleClickBudget = React.useContext(BaseContext);

  const handleChangeInput = ({target}) => {
    let prevForm = {...form};

    if(target.name === 'phone'){
      prevForm[target.name] = maskTel(target.value);   
    } else {
      prevForm[target.name] = target.value;
    }

    setForm(prevForm);
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setIsSending(true)
    
    await fetch('/api/contact', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }).then((res) => {

      if(res.status === 200){
        setMessageReturnForm('Mensagem enviada com sucesso! Responderemos o mais rápido possível.')
        setIsSending(false);
        setResultForm(true);
        setForm(INITIAL_FORM);

        setTimeout( () => {
          setResultForm(false);
          handleClickBudget('', true);
        }, 5000);
        
      } else {
        setMessageReturnForm('Algo deu errado, tente mais uma vez, por favor.')
        setIsSending(false);
        setResultForm(true);

        setTimeout( () => {
          setResultForm(false);
        }, 5000);        
      }
    });

    
    return false;
    
  }

  return (
    <section id="contactform_container" className={styles.contactform_container} style={{ opacity: 0, visibility: "hidden" }}>
      <section className={styles.contactform_content}>
        <section className={styles.contactform_close} 
          onClick={() => {
            handleClickBudget('', true);
          }}
          >X</section>

        {isSending && <span className={styles.isSendingBox}><p className={styles.spinner}></p></span>}
        {resultForm && <span className={styles.isResultForm}><p className={styles.isResultForm_p}>{messageReturnForm}</p></span>}

        <section className={styles.contactform_title}>
          <h2 className="h2_default">SOLICITE UM ORÇAMENTO</h2>
        </section>
        
        <form action="#" className={styles.contactform_form} onSubmit={(e) => handleSubmitForm(e)}>
          <section className={`${styles.contactform_form_item} ${styles.contactform_form_input_name}`}>
            <input type="text" placeholder="Nome*" name="name" className={styles.contactform_form_input} required value={form.name} onChange={(e) => handleChangeInput(e)} />
          </section>
          <section className={`${styles.contactform_form_item} ${styles.contactform_form_input_phone}`}>
            <input type="tel" placeholder="Telefone*" name="phone"maxLength="15" className={styles.contactform_form_input} required value={form.phone} onChange={(e) => handleChangeInput(e)} />
          </section>
          <section className={`${styles.contactform_form_item} ${styles.contactform_form_input_email}`}>
            <input type="email" placeholder="E-mail*" name="email" className={styles.contactform_form_input} required value={form.email} onChange={(e) => handleChangeInput(e)} />
          </section>
          <section className={`${styles.contactform_form_item} ${styles.contactform_form_input_subject}`}>
            <input type="text" placeholder="Assunto*" name="subject" className={styles.contactform_form_input} required value={form.subject} onChange={(e) => handleChangeInput(e)} />
          </section>          
          <section className={`${styles.contactform_form_item} ${styles.contactform_form_input_radio}`}>
            <label>
              <input type="radio" name="typeOption" className={styles.contactform_form_input} required value="Facility" checked={form.typeOption === "Facility"} onChange={(e) => handleChangeInput(e)} />
              Facility
            </label>
            <label>
              <input type="radio" name="typeOption" className={styles.contactform_form_input} required value="Security" checked={form.typeOption === "Security"} onChange={(e) => handleChangeInput(e)} />
              Security
            </label>
            <label>
              <input type="radio" name="typeOption" className={styles.contactform_form_input} required value="Segurança Eletrônica" checked={form.typeOption === "Segurança Eletrônica"} onChange={(e) => handleChangeInput(e)} />
              Segurança eletrônica
            </label>
            <label>
              <input type="radio" name="typeOption" className={styles.contactform_form_input} required value="Outros" checked={form.typeOption === "Outros"} onChange={(e) => handleChangeInput(e)} />
              Outros
            </label>
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