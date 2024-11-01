import React, { useState, useEffect } from 'react';
import Cabecalho from '../../components/cabecalho';
import Faixa from '../../components/faixa';
import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/index.jsx';
import { IoChevronBackOutline } from "react-icons/io5";
import Zap from '../../components/whatsapp/index.jsx';
import axios from 'axios';

export default function Contato() {

  const [erro, setErro] = useState('');
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const navigate = useNavigate();

  async function enviar() {
    const paramUser = {
      "nome": nome,
      "sobrenome": sobrenome,
      "email": email,
      "data_Nascimento": data,
      "telefone": telefone,
      "mensagem": mensagem
    }

    const url = `http://localhost:5010/preAvaliacao/`;
    let resp = await axios.post(url, paramUser);

    if (resp.data.erro != undefined) {
      alert(resp.data.erro)
    }
    else {

      localStorage.setItem('USUARIO', resp.data.token);
      navigate('/pre');

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
          value={nome} onChange={(e) => setNome(e.target.value)}/>
          <input type="text" className="text" placeholder="Sobrenome" 
          value={sobrenome} onChange={(e) => setSobrenome(e.target.value)}/>
          <input type="text" className="text" placeholder="E-mail" 
          value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="text" className="text" placeholder="Telefone" 
          value={telefone} onChange={(e) => setTelefone(e.target.value)}/>

          <input
            type="date"
            className="date"
            min={minDate}
            id="dateInput"
            value={data} onChange={(e) => setData(e.target.value)}
          />

          <textarea className="msg" placeholder="Deixe sua mensagem (opcional)" rows="4"
          value={mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>

          <button type="button" className='enviar'>Enviar</button>
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
