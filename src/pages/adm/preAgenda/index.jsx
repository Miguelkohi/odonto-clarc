import React, { useState, useEffect } from 'react';
import Cabecalho_ADM from '../../../components/cabecalhoAdm/index.jsx';
import './index.scss';
import { Link } from 'react-router-dom';
import FooterADM from '../../../components/footerAdm/index.jsx';
import { IoChevronBackOutline } from "react-icons/io5";
import axios from 'axios';

export default function PreAgenda() {
  const [preAgendamentos, setPreAgendamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    buscarPreAgendamentos();
  }, []);

  const buscarPreAgendamentos = async () => {
    try {
      const response = await axios.get('http://localhost:5020/preAvaliacao/');
      setPreAgendamentos(response.data);
    } catch (error) {
      setError('Erro ao buscar pré-agendamentos');
      console.error("Erro ao buscar pré-agendamentos:", error);
    } finally {
      setLoading(false);
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
        {loading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Data_Consulta</th>
                <th>Mensagem</th>
              </tr>
            </thead>
            <tbody>
              {preAgendamentos.length > 0 ? (
                preAgendamentos.map((preAgendamento) => (
                  <tr key={preAgendamento.Id_PreAvaliacao}>
                    <td data-label="Nome">{preAgendamento.Nome || 'N/A'}</td>
                    <td data-label="Sobrenome">{preAgendamento.Sobrenome || 'N/A'}</td>
                    <td data-label="Email">{preAgendamento.Email || 'N/A'}</td>
                    <td data-label="Telefone">{preAgendamento.Celular || 'N/A'}</td>
                    <td data-label="Data_Consulta">
                      {preAgendamento.Date
                        ? new Date(preAgendamento.Date).toLocaleDateString('pt-BR')
                        : 'Data não disponível'}
                    </td>
                    <td data-label="Mensagem">{preAgendamento.Text || 'Sem mensagem'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">Nenhum pré-agendamento disponível</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
      <FooterADM />
    </div>
  );
}
