import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import imagem1 from '../assets/Projetos/PortNovoThumb.gif';
import '../styles/Slider.css';
import mobile from "./IsMobile";

const Slider = ({ imagens }) => {
  const [tamanho, setTamanho] = useState(0);
  const carrosel = useRef(null);

  const recalculateSize = () => {
    if (carrosel.current) {
      setTamanho(carrosel.current.scrollWidth - carrosel.current.offsetWidth);
    }
  };

  // useEffect(() => {
  //   recalculateSize();
  //   window.addEventListener('resize', recalculateSize);

  //   return () => window.removeEventListener('resize', recalculateSize);
  // }, [imagens]);

  // const handleLeftClick = () => {
  //   if (carrosel.current) {
  //     carrosel.current.scrollBy({ left: -300, behavior: 'smooth' });
  //   }
  // };

  // const handleRightClick = () => {
  //   if (carrosel.current) {
  //     carrosel.current.scrollBy({ left: 300, behavior: 'smooth' });
  //   }
  // };

  const baseURL = "https://raphyyyyy.github.io/Portfolium";
  const arrumaURL = (path) => `${baseURL}/${path}`;

  // Calcula 260vw em pixels
  const isMobile = mobile();
  const valorEsq = isMobile?-300 :-260;
  const esquerdaPixel = valorEsq * window.innerWidth / 100;

  // useEffect(() => {
  //   if (!sessionStorage.getItem('hasRefreshed')) {
  //     sessionStorage.setItem('hasRefreshed', 'true');
  //     window.location.reload();
  //   }
  // }, []);

  return (
    <div className='sliderPai'> 
    {console.log(esquerdaPixel)}

      {/* <button className="seta-esquerda" onClick={handleLeftClick}><i className="bi bi-arrow-left-circle"></i></button>
      <button className="seta-direita" onClick={handleRightClick}><i className="bi bi-arrow-right-circle"></i></button> */}
      <div className='seta-esquerda'><i className="bi bi-arrow-left-circle"></i></div>
      <div className='seta-direita'><i className="bi bi-arrow-right-circle"></i></div>
      <motion.div ref={carrosel} className='carrosel-pai'> 
        <motion.div 
          className='carrosel-filho'
          drag='x'
          dragConstraints={{ right: 0, left: esquerdaPixel }}
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
