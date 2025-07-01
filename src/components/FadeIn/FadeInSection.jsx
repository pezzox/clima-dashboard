import { useEffect, useRef, useState } from 'react';

const FadeInSection = ({ children, threshold = 0.3, className = '' }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = parseFloat(threshold);

    if (isNaN(t)) {
      const safeValue =
        typeof threshold === 'object'
          ? JSON.stringify(threshold, null, 2)
          : String(threshold);
      console.error('Invalid threshold value:', safeValue);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: t }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? 'visible' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
