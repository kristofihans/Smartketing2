import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__glow" />

      <motion.div
        className="contact__container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="contact__label">Contact</p>
        <h2 className="contact__title">
          Hai să <span className="gradient-text">vorbim</span>
        </h2>
        <p className="contact__subtitle">
          Ai un proiect în minte? Completează formularul și revenim cu un plan personalizat.
        </p>

        <form className="contact__form" onSubmit={(e) => e.preventDefault()} id="contact-form">
          <div className="contact__row">
            <input
              className="contact__input"
              type="text"
              placeholder="Numele tău"
              id="contact-name"
              required
            />
            <input
              className="contact__input"
              type="email"
              placeholder="Email"
              id="contact-email"
              required
            />
          </div>
          <input
            className="contact__input"
            type="text"
            placeholder="Subiect"
            id="contact-subject"
          />
          <textarea
            className="contact__textarea"
            placeholder="Spune-ne mai multe despre proiectul tău..."
            id="contact-message"
            required
          />
          <button className="contact__submit" type="submit" id="contact-submit">
            Trimite mesajul
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
