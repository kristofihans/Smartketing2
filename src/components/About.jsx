import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const stats = [
  { number: '150+', label: 'Proiecte Livrate' },
  { number: '50+', label: 'Clienți Fericiți' },
  { number: '5M+', label: 'Reach Total' },
  { number: '3+', label: 'Ani Experiență' },
];

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const glowX = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section className="about" id="about" ref={sectionRef}>
      {/* Parallax ambient glow */}
      <motion.div
        className="about__glow"
        style={{ x: glowX }}
      />

      <div className="about__container">
        {/* Stats Visual */}
        <motion.div
          className="about__visual"
          initial={{ opacity: 0, x: -60, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about__stats-grid">
            {stats.map((stat, i) => (
              <motion.div
                className="about__stat"
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i, duration: 0.6 }}
              >
                <span className="about__stat-number">{stat.number}</span>
                <span className="about__stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="about__content"
          initial={{ opacity: 0, x: 60, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="about__title">
            Nu suntem o agenție obișnuită
          </h2>
          <p className="about__text">
            Suntem o echipă de creatori digitali pasionați de rezultate. Combinăm strategia cu creativitatea pentru a construi prezențe online care nu doar arată bine — ci și convertesc.
          </p>
          <p className="about__text">
            Fiecare proiect este tratat cu aceeași dedicare, fie că ești un start-up la început de drum sau un brand consacrat care vrea să domine piața digitală.
          </p>
          <a href="#contact" className="about__cta">
            Începe un proiect
            <span className="about__cta-arrow">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
