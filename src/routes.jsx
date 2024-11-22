import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import QuemSomos from './pages/quemSomos';
import Servicos from './pages/servicos';
import Individual from './pages/servicos/individual';
import Contato from './pages/contato';
import NotFound from './pages/notFound';
import PreConsulta from './pages/preConsulta';
import Login from './pages/adm/login';
import Painel from './pages/adm/painel';
import PreAgenda from './pages/adm/preAgenda';  
import Agenda from './pages/adm/agenda';
import Consulta from './pages/adm/consulta';
import PreAvaliacao from './pages/preAvaliacao';


export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path="/servicos" element={<Servicos />}/>
        <Route path='/servicotal' element={<Individual />} />
        <Route path='/quemsomos' element={<QuemSomos />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/avaliacao' element={<PreAvaliacao />} />
        <Route path='/consulta' element={<PreConsulta />} />

        {/* ADM */}

        <Route path='/adm-login' element={<Login />} />
        <Route path='/adm-painel' element={<Painel />} />
        <Route path='/adm-preagendamentos' element={<PreAgenda />} /> 
        <Route path='/adm-agenda' element={<Agenda />} />
        <Route path='/adm-consulta' element={<Consulta />} />
        <Route path='/adm-avaliacao' element={<Consulta />} />
      </Routes>
    </Router>
  );
}

