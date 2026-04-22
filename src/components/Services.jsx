import { motion } from 'framer-motion';
import './Services.css';

const services = [
  {
    icon: '🚀',
    title: 'Social Media Marketing',
    desc: 'Creăm strategii care transformă follow-eri în clienți fideli. Conținut care captivează, analizează și convertește.',
    num: '01',
  },
  {
    icon: '🎬',
    title: 'Producție Video',
    desc: 'De la concept la editare finală — producții vizuale cinematice care spun povestea brandului tău.',
    num: '02',
  },
  {
    icon: '✨',
    title: 'Branding & Identitate',
    desc: 'Construim identități vizuale memorabile care diferențiază brandul tău în piața competitivă.',
    num: '03',
  },
  {
    icon: '📈',
    title: 'Performance Ads',
    desc: 'Campanii plătite optimizate constant pentru ROI maxim. Google Ads, Meta Ads și TikTok Ads.',
    num: '04',
  },
  {
    icon: '🌐',
    title: 'Web Design & Development',
    desc: 'Website-uri premium, rapide și optimizate SEO care convertesc vizitatorii în clienți.',
    num: '05',
  },
  {
    icon: '📸',
    title: 'Foto & Content Creation',
    desc: 'Ședințe foto profesionale și conținut vizual care ridică standardul prezenței tale online.',
    num: '06',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const Services = () => {
  return (
    <section className="services" id="services">
      <motion.div
        className="services__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="services__label">Ce facem</p>
        <h2 className="services__title">
          Servicii care <span className="gradient-text">transformă</span>
        </h2>
        <p className="services__subtitle">
          Tot ce ai nevoie pentru a domina digital-ul, sub un singur acoperiș.
        </p>
      </motion.div>

      <motion.div
        className="services__grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((s) => (
          <motion.div className="service-card" key={s.num} variants={cardVariants}>
            <span className="service-card__number">{s.num}</span>
            <span className="service-card__icon">{s.icon}</span>
            <h3 className="service-card__title">{s.title}</h3>
            <p className="service-card__desc">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
