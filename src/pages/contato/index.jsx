import React, { useState, useEffect } from 'react';
import Cabecalho from '../../components/cabecalho';
import Faixa from '../../components/faixa';
import './index.scss';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/index.jsx';
import { IoChevronBackOutline } from "react-icons/io5";

export default function Contato() {
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
  }, []);

  return (
    <div className="Contato">
      <Cabecalho />
      <Link to="/">
      <button type="button" className='voltar'><IoChevronBackOutline />Sair</button>
      </Link>
      <div className="fundo">
        <div className="esq">
          <input type="text" className="text" placeholder="Nome" />
          <input type="text" className="text" placeholder="Sobrenome" />
          <input type="text" className="text" placeholder="E-mail" />
          <input type="text" className="text" placeholder="Telefone" />
          
            <input
              type="date"
              className="date"
              min={minDate}
              id="dateInput"
            />
          
          <textarea className="msg" placeholder="Deixe sua mensagem" rows="4"></textarea>

          <button type="button" className='enviar'>Enviar</button>
        </div>
        <div className="dir">
          <img src="/assets/images/odc-min.png" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
