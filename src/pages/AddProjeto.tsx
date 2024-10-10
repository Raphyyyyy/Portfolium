import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import autenticador from '../components/autenticador';
import { addProjetos } from '../services/api';
import '../styles/AddProjeto.css';

function AddProjeto() {
  
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  interface Portfolio {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    iconimage: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    headerImage: string;
    techs: string[];
    linkSite: string;
    linkCode: string;
  }

  const [portfolio, setPortfolio] = useState<Portfolio>({
    id: '',
    title: '',
    description: '',
    fullDescription: '',
    iconimage: '',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    headerImage: '',
    techs: [],
    linkSite: '',
    linkCode: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPortfolio({ ...portfolio, [name]: value });
  };

  const handleTechChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPortfolio({
      ...portfolio,
      techs: value.split(',').map(tech => tech.trim())
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await addProjetos(portfolio); // Usa o estado portfolio aqui
      setMessage('Projeto adicionado com sucesso!');
      // Limpa o formulário
      setPortfolio({
        id: '',
        title: '',
        description: '',
        fullDescription: '',
        iconimage: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        headerImage: '',
        techs: [],
        linkSite: '',
        linkCode: ''
      });
    } catch (error) {
      setMessage('Erro ao adicionar projeto');
    }
  };

  return (
    <div className='add-projeto'>
      <div className='add-pai'>
        <h1>Cadastro de Portfolio</h1>
        <form onSubmit={handleSubmit}>
          <label>ID:</label>
          <input type="text" name="id" value={portfolio.id} onChange={handleChange} />

          <label>Título:</label>
          <input type="text" name="title" value={portfolio.title} onChange={handleChange} />

          <label>Descrição:</label>
          <textarea name="description" value={portfolio.description} onChange={handleChange} />

          <label>Descrição Completa:</label>
          <textarea name="fullDescription" value={portfolio.fullDescription} onChange={handleChange} />

          <label>Imagem do Ícone (URL):</label>
          <input type="text" name="iconimage" value={portfolio.iconimage} onChange={handleChange} />
          {portfolio.iconimage && <img src={portfolio.iconimage} alt="Icon Preview" />}

          <label>Imagem 1 (URL):</label>
          <input type="text" name="image1" value={portfolio.image1} onChange={handleChange} />
          {portfolio.image1 && <img src={portfolio.image1} alt="Image 1 Preview" />}

          <label>Imagem 2 (URL):</label>
          <input type="text" name="image2" value={portfolio.image2} onChange={handleChange} />
          {portfolio.image2 && <img src={portfolio.image2} alt="Image 2 Preview" />}
          
          <label>Imagem 3 (URL):</label>
          <input type="text" name="image3" value={portfolio.image3} onChange={handleChange} />
          {portfolio.image3 && <img src={portfolio.image3} alt="Image 3 Preview" />}
          
          <label>Imagem 4 (URL):</label>
          <input type="text" name="image4" value={portfolio.image4} onChange={handleChange} />
          {portfolio.image4 && <img src={portfolio.image4} alt="Image 4 Preview" />}

          <label>Tecnologias (separadas por vírgulas):</label>
          <input type="text" value={portfolio.techs.join(', ')} onChange={handleTechChange} />

          <label>Link do Site:</label>
          <input type="text" name="linkSite" value={portfolio.linkSite} onChange={handleChange} />

          <label>Link do Código:</label>
          <input type="text" name="linkCode" value={portfolio.linkCode} onChange={handleChange} />

          <button type="submit">Salvar</button>
        </form>

        <p>{message}</p>
      </div>

      <button onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
}

export default autenticador(AddProjeto);
