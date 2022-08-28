import styles from './Contact.module.css'

function Contact() {
  return (
    <section className={styles.contact_container}>
      <h1>Nossos contatos:</h1>
      <p><span>Email:</span> contato@costs.com</p>
      <p><span>Telefone:</span> (99) 9999-9999</p>
    </section>
  );
}

export default Contact;
