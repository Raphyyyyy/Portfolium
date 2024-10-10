// projetos.ts
const APIurl = 'http://localhost:5000';

interface Projeto {
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

// Função para buscar os dados dos projetos na API
export const fetchProjetos = async (): Promise<Projeto[]> => {
  const response = await fetch(`${APIurl}/projetos`);
  const projects: Projeto[] = await response.json();
  return projects;
};

// Função para adicionar um novo projeto
export const addProjetos = async (projeto: Projeto): Promise<Projeto> => {
  const response = await fetch(`${APIurl}/projetos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(projeto),
  });

  if (!response.ok) {
    throw new Error('Erro ao adicionar projeto');
  }

  const data: Projeto = await response.json();
  return data;
};
