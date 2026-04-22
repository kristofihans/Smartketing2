import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const forwardRef = useRef(null);
  const reverseRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState('forward');

  const handleForwardEnd = useCallback(() => {
    setActiveVideo('reverse');
    const rev = reverseRef.current;
    if (rev) {
      rev.currentTime = 0;
      rev.play();
    }
  }, []);

  const handleReverseEnd = useCallback(() => {
    setActiveVideo('forward');
    const fwd = forwardRef.current;
    if (fwd) {
      fwd.currentTime = 0;
      fwd.play();
    }
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Video Background — Forward */}
      <div className="hero__video-wrapper">
        <video
          ref={forwardRef}
          className={`hero__video ${activeVideo === 'forward' ? 'hero__video--active' : ''}`}
          src="herobackgroundvideo.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleForwardEnd}
        />
        <video
          ref={reverseRef}
          className={`hero__video ${activeVideo === 'reverse' ? 'hero__video--active' : ''}`}
          src="herobackgroundvideoreverse.mp4"
          muted
          playsInline
          preload="auto"
          onEnded={handleReverseEnd}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="hero__overlay" />

      {/* Scroll Suggestion */}
      <motion.div
        className="hero__scroll-suggestion"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="hero__scroll-text">
          Hei, mai e ceva mișto de văzut aici!
        </p>
        <div className="hero__scroll-icon">
          <span className="hero__chevron" style={{ '--chevron-base-opacity': 0.3 }} />
          <span className="hero__chevron" style={{ '--chevron-base-opacity': 0.6 }} />
          <span className="hero__chevron" style={{ '--chevron-base-opacity': 1 }} />
        </div>
      </motion.div>

      {/* Glow Line */}
      <motion.div
        className="hero__glow-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.8, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />
    </section>
  );
};

export default Hero;
