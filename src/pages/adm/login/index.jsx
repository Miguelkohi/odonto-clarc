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
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function entrar() {
    // Validação simples para garantir que ambos os campos foram preenchidos
    if (!Login || !Senha) {
      setErro('Por favor, preencha todos os campos.');
      return;
    }

    const paramUser = {
      "Login": Login,
      "Senha": Senha
    }

    const url = `http://localhost:5020/entrar/`;
    let resp = await axios.post(url, paramUser);

    try {
      setLoading(true);
      let resp = await axios.post(url, paramUser);
      setLoading(false);

      if (resp.data.erro !== undefined) {
        setErro(resp.data.erro);  // Exibe o erro na tela
      } else {
        localStorage.setItem('USUARIO', resp.data.token);
        navigate('/adm-painel');
      }
    } catch (error) {
      setLoading(false);
      setErro('Ocorreu um erro ao tentar realizar o login. Tente novamente.');
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
        {/* Exibe o erro caso haja algum */}
        {erro && <div className="error-message">{erro}</div>}
        <button className='enviar' onClick={entrar} disabled={loading}>
          {loading ? 'Carregando...' : 'Entrar'}
        </button>
      </div>
      <FooterADM />
    </div>
  );
}