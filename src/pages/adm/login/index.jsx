import React, { useState } from 'react';
import Cabecalho_ADM from '../../../components/cabecalhoAdm/index.jsx';
import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import FooterADM from '../../../components/footerAdm/index.jsx';
import { IoChevronBackOutline } from "react-icons/io5";
import axios from 'axios';

export default function Login_ADM() {

  const [Login, setNome] = useState('');
  const [Senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const navigate = useNavigate();
  
  async function entrar(){
    
    const paramUser = {
      "Login": Login,
      "Senha": Senha
    }

    const url = `http://localhost:5020/entrar/`;
    let resp = await axios.post(url, paramUser);

    if(resp.data.erro != undefined){
      alert(resp.data.erro)
    }
    else{

      localStorage.setItem('USUARIO', resp.data.token);
      navigate('/adm-painel');

    }
  }
  return (
    <div className="Login">
      <Cabecalho_ADM />
      <Link to="/">
        <button type="button" className='voltar'><IoChevronBackOutline />Voltar</button>
      </Link>
      <div className="fundo">
        <h1>Login ADM</h1>
          <input
            type="text"
            className="text"
            placeholder="Login"
            value={Login}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="password"
            className="text"
            placeholder="Senha"
            value={Senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button className='enviar' onClick={entrar}>Entrar</button>
        
      </div>
      <FooterADM />
    </div>
  );
}
