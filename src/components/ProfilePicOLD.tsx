import React from 'react';
import '../styles/ProfilePic.css';

import Circulo from '../assets/CIRCULO.png';
import ProfilePicture from '../assets/foto-s-fundo.png';
import Fundo from '../assets/fundo-ft.jpg';

function ProfilePic() {
  return (
    <div className="fotoPerfil">
      <img src={ ProfilePicture } alt="Rafael Nunes" className="FotoPrincipalPerfil" />
      <img src={ Fundo } alt="fundo" className="FotoFundoPerfil" />
    </div>

  );
}

export default ProfilePic;
