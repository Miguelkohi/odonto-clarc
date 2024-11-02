import React, { useState, useEffect } from 'react';
import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer/index.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";
import Zap from '../../components/whatsapp/index.jsx';
import axios from 'axios';
import './index.scss';

export default function Contato() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState('');

  const navigate = useNavigate();

  async function enviar() {
    const paramUser = {
      nome,
      sobrenome,
      email,
      data_Nascimento: data,
      telefone,
      mensaagem: mensagem  // Nome correto da coluna
    };

    console.log("Dados enviados:", paramUser);  // Log para debug

    try {
      const url = `http://localhost:5010/preAvaliacao/`;
      const resp = await axios.post(url, paramUser);

      if (resp.data.erro) {
        alert(resp.data.erro);
      } else {
        localStorage.setItem('USUARIO', resp.data.token);
        navigate('/pre');
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setErro('Ocorreu um erro ao enviar o formulário. Tente novamente.');
    }
  }

  const [minDate, setMinDate] = useState('');
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
  }, []);

  return (
    <div className="Contato">
      <Cabecalho />
      <Link to="/">
        <button type="button" className='voltar'><IoChevronBackOutline />Voltar</button>
      </Link>
      <div className="fundo">
        <div className="esq">
          <input type="text" className="text" placeholder="Nome" 
            value={nome} onChange={(e) => setNome(e.target.value)} />
          <input type="text" className="text" placeholder="Sobrenome" 
            value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
          <input type="text" className="text" placeholder="E-mail" 
            value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" className="text" placeholder="Telefone" 
            value={telefone} onChange={(e) => setTelefone(e.target.value)} />

          <input
            type="date"
            className="date"
            min={minDate}
            id="dateInput"
            value={data} onChange={(e) => setData(e.target.value)}
          />

          <textarea className="msg" placeholder="Deixe sua mensagem (opcional)" rows="4"
            value={mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>

          <button type="button" className='enviar' onClick={enviar}>Enviar</button>
          {erro && <p className="erro">{erro}</p>}
        </div>
        <div className="dir">
          <img src="/assets/images/odc-min.png" alt="" />
        </div>
      </div>
      <Footer />
      <Zap />
    </div>
  );
}
