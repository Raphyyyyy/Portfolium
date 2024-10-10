import React, { useState, useEffect, useRef, ReactNode } from 'react';
import '../App.css'; // Certifique-se de que o CSS correto esteja sendo importado

interface FadeWrapperProps {
  children: ReactNode;
}

const FadeWrapper: React.FC<FadeWrapperProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false); // começa invisível
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      // const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
          const isInViewport = rect.bottom > window.innerHeight && rect.top* 0.8 < window.innerHeight;//muda a visibilidade quando desce 20% da pagina

      setIsVisible(isInViewport);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verifica a visibilidade ao carregar

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`fade-wrapper ${isVisible ? 'visible' : 'hidden'}`}
    >
      {children}
    </div>
  );
};

export default FadeWrapper;
