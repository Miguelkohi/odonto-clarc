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
      const response = await axios.get('http://localhost:5010/preAvaliacao/'); 
      setPreAgendamentos(response.data); 
    } catch (error) {
      console.error("Erro ao buscar pré-agendamentos:", error);
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
        <h2>Pré-Agendamentos</h2>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Data de Nascimento</th>
              <th>Mensagem</th>
            </tr>
          </thead>
          <tbody>
            {preAgendamentos.length > 0 ? (
              preAgendamentos.map((preAgendamento) => (
                <tr key={preAgendamento.Id_PreAvaliacao}>
                  <td>{preAgendamento.Nome}</td>
                  <td>{preAgendamento.Sobrenome}</td>
                  <td>{preAgendamento.Email}</td>
                  <td>{preAgendamento.Telefone}</td>
                  <td>{preAgendamento.Data_Nascimento}</td>
                  <td>{preAgendamento.Mensagem}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">Nenhum pré-agendamento disponível</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <FooterADM />
    </div>
  );
}
