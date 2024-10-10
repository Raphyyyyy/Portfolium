import {Navigate} from 'react-router-dom';

function autenticador(Componente: React.ComponentType<any>) {
  return function CompAutenticado(props: any) {
    const user = JSON.parse(localStorage.getItem('user') || 'null');

    if(!user){
      return <Navigate to='/login' replace/>
      //replace deleta a pagina que 'tentou' acessar no historico
    }
    return <Componente {...props}/>
  };
}

    export default autenticador;

    //essa funcção manda pro login caso tente acessar uma página sem estar logado