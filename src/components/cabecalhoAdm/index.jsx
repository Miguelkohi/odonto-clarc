import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho_ADM(){
  return (
    <div className="cbc_ADM">
      <Link to='/adm/painel'><img src="/assets/images/odc.png" alt="Logo" /></Link>
    </div>
  );
};