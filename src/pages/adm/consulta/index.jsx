import React, { useState, useEffect } from 'react';
import Cabecalho from '../../../components/cabecalho/index.jsx';
import Footer from '../../../components/footer/index.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";
import Zap from '../../../components/whatsapp/index.jsx';
import axios from 'axios';
import './index.scss';

export default function Consulta() {
    const [Nome_Completo, setNome_Completo] = useState("");
    const [Hora_Consulta, setHora_Consulta] = useState("");
    const [Telefone, setTelefone] = useState("");
    const [Data_Consulta, setData_Consulta] = useState("");
    const [Servicos, setServicos] = useState("");
    const [Erro, setErro] = useState("");
    const navigate = useNavigate();

    async function enviar() {
        const consultas = {
            Nome_Completo,
            Hora_Consulta,
            Telefone,
            Data_Consulta,
            Servicos,
        };

       

        try {
            const url = `http://localhost:5010/Consultas/`;
            const resp = await axios.post(url, consultas);

            if (resp.data.erro) {
                alert(resp.data.erro);
            } else {
                localStorage.setItem('USUARIO', resp.data.token);
                navigate('/consulta');
            }
        } catch (error) {
            console.error("Erro ao enviar:", error);
            setErro('Ocorreu um erro ao enviar o formulario. Tente novamente.');
        }
    }

    const [minDate, setMinDate] = useState('');
    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setMinDate(today);
    }, []);

    return (
        <div className="Consulta">
            <Cabecalho />
            <Link to="/">
                <button type="button" className='voltar'><IoChevronBackOutline />Voltar</button>
            </Link>
            <div className="fundo">
                <div className="esq">
                    <input type="text" className="text" placeholder="Nome_Completo"
                        value={Nome_Completo} onChange={(e) => setNome_Completo(e.target.value)} />

                    <input type="text" className="text" placeholder="Hora_Consulta"
                        value={Hora_Consulta} onChange={(e) => setHora_Consulta(e.target.value)} />

                    <input type="text" className="text" placeholder="Telefone"
                        value={Telefone} onChange={(e) => setTelefone(e.target.value)} />

                        <input
                        type="date"
                        className="date"
                        min={minDate}
                        id="dateInput"
                        value={Data_Consulta} onChange={(e) => setData_Consulta(e.target.value)}
                        />

                    <select value={Servicos} onChange={(e) => setServicos(e.target.value)}>
                        <option>Canal</option>
                        <option>Extração</option>
                        <option>Ortodontia</option>
                        <option>Limpeza</option>
                        <option>Clareamento</option>
                        <option>Implante</option>
                        <option>Próteses</option>
                        <option>Restauração</option>
                        <option>Cirurgia</option>
                    </select>

                    

                    <button type="button" className='enviar' onClick={enviar}>Enviar</button>
                    {Erro && <p className="erro">{Erro}</p>}
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
