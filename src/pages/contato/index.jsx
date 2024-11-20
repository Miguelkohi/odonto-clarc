import React, { useState, useEffect } from 'react';
import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer/index.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";
import Zap from '../../components/whatsapp/index.jsx';
import axios from 'axios';
import './index.scss';

export default function Contato() {
  const [Nome, setNome] = useState("");
  const [Sobrenome, setSobrenome] = useState("");
  const [Email, setEmail] = useState("");
  const [Data_Nascimento, setData_Nascimento] = useState("");  // Renomeado para "Data_Nascimento"
  const [Telefone, setTelefone] = useState("");
  const [Mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function enviar() {
    // Validação simples dos campos
    if (!Nome || !Sobrenome || !Email || !Telefone || !Data_Nascimento) { // Alterado para "Data_Nascimento"
      setErro('Todos os campos são obrigatórios.');
      return;
    }

    const paramUser = {
      Nome,
      Sobrenome,
      Email,
      Telefone,
      Data_Nascimento,  // Alterado para "Data_Nascimento"
      Mensagem 
    };

    setLoading(true);
    try {
      const url = `http://localhost:5010/preAvaliacao/`; // A URL da API permanece a mesma
      const resp = await axios.post(url, paramUser);

      if (resp.data.erro) {
        setErro(resp.data.erro);
      } else {
        localStorage.setItem('USUARIO', resp.data.token);
        navigate('/pre');
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setErro('Ocorreu um erro ao enviar o formulário. Tente novamente.');
    }
    setLoading(false);
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
            value={Nome} onChange={(e) => setNome(e.target.value)} />
          <input type="text" className="text" placeholder="Sobrenome" 
            value={Sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
          <input type="email" className="text" placeholder="E-mail" 
            value={Email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" className="text" placeholder="Telefone" 
            value={Telefone} onChange={(e) => setTelefone(e.target.value)} />

          <input
            type="date"
            className="date"
            min={minDate}
            id="dateInput"
            value={Data_Nascimento} onChange={(e) => setData_Nascimento(e.target.value)} // Alterado para "Data_Nascimento"
          />

          <textarea className="msg" placeholder="Deixe sua mensagem (opcional)" rows="4"
            value={Mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>

          <button type="button" className='enviar' onClick={enviar} disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
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
