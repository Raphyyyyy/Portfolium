import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import '../styles/Slider.css';

const Slider = ({ imagens }) => {
  const [tamanho, setTamanho] = useState(0);
  const carrosel = useRef(null);

  const recalculateSize = () => {
    if (carrosel.current) {
      setTamanho(carrosel.current.scrollWidth - carrosel.current.offsetWidth);
    }
  };

  useEffect(() => {
    recalculateSize();
    window.addEventListener('resize', recalculateSize);

    // Limpeza do evento ao desmontar o componente
    return () => window.removeEventListener('resize', recalculateSize);
  }, [imagens]);

  const handleLeftClick = () => {
    if (carrosel.current) {
      carrosel.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleRightClick = () => {
    if (carrosel.current) {
      carrosel.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const baseURL = "https://raphyyyyy.github.io/Portfolium";
  const arrumaURL = (path) => `${baseURL}/${path}`;

  return (
    <div className='sliderPai'> 
      <button className="seta-esquerda" onClick={handleLeftClick}><i className="bi bi-arrow-left-circle"></i></button>
      <button className="seta-direita" onClick={handleRightClick}><i className="bi bi-arrow-right-circle"></i></button>
      <motion.div ref={carrosel} className='carrosel-pai'> 
        <motion.div 
          className='carrosel-filho'
          drag='x'
          dragConstraints={{ right: 0, left: -(tamanho + (tamanho * 0.2)) }}
          style={{ width: `${tamanho + carrosel.current?.offsetWidth}px` }}
        > 
          <motion.div className='carrosel-imagem'> 
            {imagens.map((imagem, index) => (
              <img key={index} src={arrumaURL(imagem)} alt={`imagem${index + 1}`} />
            ))}
          </motion.div> 
        </motion.div> 
      </motion.div> 
    </div>
  );
}

export default Slider;
