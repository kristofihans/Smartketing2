import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import './Services.css';

const services = [
  {
    id: '01',
    title: 'Productie Video',
    desc: 'Cinematografie de înaltă clasă pentru branduri care vor să iasă în evidență.',
    size: 'span-2'
  },
  {
    id: '02',
    title: 'Fotografie Profitabilă',
    desc: 'Imagini care vând, de la catalog la lifestyle.',
    size: 'span-1'
  },
  {
    id: '03',
    title: 'Web Design Custom',
    desc: 'Interfețe arhitecturale construite pentru conversie.',
    size: 'span-1'
  },
  {
    id: '04',
    title: 'Strategie Social Media',
    desc: 'Planificare bazată pe date pentru creștere organică și viralitate.',
    size: 'span-2'
  },
  {
    id: '05',
    title: 'Performance Marketing',
    desc: 'Campanii PPC optimizate pentru cel mai bun ROI.',
    size: 'span-1'
  },
  {
    id: '06',
    title: 'Consultanță de Brand',
    desc: 'Definim vocea și identitatea afacerii tale în era digitală.',
    size: 'span-1'
  }
];

const Services = () => {
  const containerRef = useRef(null);
  const startFrame = 11;
  const endFrame = 120;
  const [currentFrame, setCurrentFrame] = useState(startFrame);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to frame index (11 to 120)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [startFrame, endFrame]);
  
  // Sync content opacity/position with scroll progress (No blur)
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      setCurrentFrame(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [frameIndex]);

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      for (let i = startFrame; i <= endFrame; i++) {
        const img = new Image();
        const frameNum = String(i).padStart(3, '0');
        img.src = `frames/ezgif-frame-${frameNum}.jpg`;
      }
    };
    preloadImages();
  }, []);

  return (
    <section className="services" id="services" ref={containerRef}>
      {/* Sticky Background Frame Animation */}
      <div className="services__background">
        <div className="services__canvas-container">
          <img 
            src={`frames/ezgif-frame-${String(currentFrame).padStart(3, '0')}.jpg`} 
            alt="Animation Frame" 
            className="services__frame-image"
          />
        </div>
        {/* Dark overlay for text readability */}
        <div className="services__overlay" />
      </div>

      {/* Content Layer */}
      <motion.div 
        className="services__content-wrapper"
        style={{ 
          opacity: contentOpacity,
          y: contentY
        }}
      >
        <div className="services__header">
          <h2 className="services__title">
            Servicii care transformă
          </h2>
          <p className="services__subtitle">
            Tot ce ai nevoie pentru a domina digital-ul, sub un singur acoperiș.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, index) => (
            <motion.div 
              key={s.id} 
              className={`bento-card ${s.size}`}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <div className="bento-card__top">
                <span className="bento-card__number">{s.id}</span>
                <div className="bento-card__icon-container">
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-accent-1)' }}>+</span>
                </div>
              </div>
              <h3 className="bento-card__title">{s.title}</h3>
              <p className="bento-card__desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
