import { motion } from 'framer-motion';
import './Outro.css';
import './Contact.css';

const clients = [
  'LUXE STUDIO',
  'VELOCITY MEDIA',
  'ECHO VIBES',
  'URBAN PULSE',
  'PURE ESSENCE',
  'GLOBAL REACH',
];

const Outro = () => {
  return (
    <section className="outro" id="contact">
      <div className="credits">
        <motion.span 
          className="credits__label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          Partenerii Noștri
        </motion.span>
        
        <div className="credits__grid">
          {clients.map((client, i) => (
            <motion.span 
              key={i}
              className="client-logo"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.2, 
                delay: i * 0.2,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ opacity: 1, scale: 1.1, color: '#fff' }}
            >
              {client}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="outro__separator" />

      <motion.div
        className="contact__container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="contact__title">
          Ești gata să <span className="gradient-text">creștem</span>?
        </h2>
        <p className="contact__subtitle">
          Contactează-ne acum și hai să dăm viață ideilor tale.
        </p>

        <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
          <div className="contact__row">
            <input
              className="contact__input"
              type="text"
              placeholder="Numele tău"
              required
            />
            <input
              className="contact__input"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <textarea
            className="contact__textarea"
            placeholder="Mesajul tău..."
            required
          />
          <button className="contact__submit" type="submit">
            Trimite Cererea
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Outro;
