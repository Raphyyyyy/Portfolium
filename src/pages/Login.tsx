import React, { useEffect } from 'react';
import '../styles/Login.css';
import { Navigate, useNavigate } from 'react-router-dom';
import CryptoJS, { SHA256 } from 'crypto-js';
import usersData from '../data/Users';


function Login() {


const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');
const [error, setError] = React.useState('');

const navigate = useNavigate();


//Essa função loga direto sem precisar de senha caso ja tenha sido logado antes
useEffect(() => {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    const user = JSON.parse(storedUser);

    // Verifica se o usuário tem email e password armazenados corretamente
    if (user.email && user.password) {
      navigate('/add-projeto');
    } else {
      // Se os dados estiverem incorretos ou incompletos, limpa o localStorage
      localStorage.removeItem('user');
    }
  }
}, [navigate]);
// <-se navigate for alterado depois ele re-executa essa função

const Logar = (e: React.FormEvent) => {
  e.preventDefault(); // Previne o reload da página ao submeter o formulário
  const user = usersData.find(user => user.email === email);//encontra um login igual ao digitado

  // const senhaCriptografada = SHA256(password).toString(CryptoJS.enc.Base64);//criptografa a senha digitada

  // if (!user || user.password !== senhaCriptografada) {
  if (!user || user.password !== password) {
    setError('Login ou senha inválidos');
    return;
  }else{
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/add-projeto');
  }};




  return (
    <div className="login-container">
      <h2>Entrar na área administrativa</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="login">Login:</label>
          <input type="text" id="login" name="login" 
          onChange={(e) => { 
          setEmail(e.target.value); 
          // Se o erro existir, limpa-o
          if (error !== '') {
            setError(''); 
          }
          }}/>
          {/* ao digitar apaga a msg de erro e manda o valor pra var email */}
        </div>
        <div className="form-group">
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" 
          onChange={(e)=>{setPassword(e.target.value); if(error)setError('')}}/>
        </div>
        {error && <div className="error">{error}</div>
        //se existir erro mostra a msg de erro
        }
        <button type="submit"  onClick={Logar}>Entrar</button>
      </form>
    </div>

  );
}

export default Login;
