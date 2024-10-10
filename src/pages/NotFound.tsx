import React from 'react';
import '../styles/NotFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Página Não Encontrada</h2>
      <p>Desculpa, mas a página que procuras não existe.</p>
      <a href="/" className="home-button">Voltar à Página Inicial</a>
    </div>
  );
};

export default NotFound;
