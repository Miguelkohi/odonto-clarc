import React, { useState, useEffect } from 'react';
import Cabecalho_ADM from '../../../components/cabecalhoAdm/index.jsx';
import './index.scss';
import { Link } from 'react-router-dom';
import FooterADM from '../../../components/footerAdm/index.jsx';
import { IoChevronBackOutline } from "react-icons/io5";
import axios from 'axios';

export default function PreAgenda() {
  const [preAgendamentos, setPreAgendamentos] = useState([]);

  useEffect(() => {
    buscarPreAgendamentos();
  }, []);

  const buscarPreAgendamentos = async () => {
    try {
      
      const response = await axios.get('http://localhost:5020/Consultas');
      setPreAgendamentos(response.data); 
    } catch (error) {
      console.error("Erro ao buscar consultas:", error);
    }
  };

  return (
    <div className="preAgenda">
      <Cabecalho_ADM />
      <button type="button" className="voltar">
        <Link to="/adm-painel">
          <IoChevronBackOutline /> Voltar
        </Link>
      </button>
      <div className="fundo">
        <h2>Calendarização</h2>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Data da Consulta</th>
              <th>Hora</th>
              <th>Serviço</th>
            </tr>
          </thead>
          <tbody>
            {preAgendamentos.length > 0 ? (
              preAgendamentos.map((preAgendamento) => (
                <tr key={preAgendamento.id}>
                  <td>{preAgendamento.nome}</td>
                  <td>{preAgendamento.telefone}</td>
                  <td>{preAgendamento.date}</td>
                  <td>{preAgendamento.time}</td>
                  <td>{preAgendamento.tipos}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">Nenhum agendamento encontrado</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <FooterADM />
    </div>
  );
}
