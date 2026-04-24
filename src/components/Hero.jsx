import { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const forwardRef = useRef(null);
  const reverseRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState('forward');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const videoSrc = isMobile ? 'herobackgroundvideomobile.mp4' : 'herobackgroundvideo.mp4';
  const reverseVideoSrc = isMobile ? 'herobackgroundvideomobilereverse.mp4' : 'herobackgroundvideoreverse.mp4';

  return (
    <section className="hero" id="hero">
      {/* Video Background — Forward */}
      <div className="hero__video-wrapper">
        <video
          ref={forwardRef}
          className={`hero__video ${activeVideo === 'forward' ? 'hero__video--active' : ''}`}
          src={videoSrc}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleForwardEnd}
        />
        <video
          ref={reverseRef}
          className={`hero__video ${activeVideo === 'reverse' ? 'hero__video--active' : ''}`}
          src={reverseVideoSrc}
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

    </section>
  );
};

export default Hero;
