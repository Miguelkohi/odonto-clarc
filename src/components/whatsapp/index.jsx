import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';


import { FaWhatsapp } from 'react-icons/fa';

export default function Zap(){

  const numero = "5511914817025"; 
  const mensagem = "Olá! Gostaria de mais informações."; 
  const encodedMessage = encodeURIComponent(mensagem); 

  return (
    <div className="conteiner">
    <Link to={`https://wa.me/${numero}?text=${encodedMessage}`} target="_blank" rel="noopener noreferrer">
      <div className="zap">   
        <FaWhatsapp/>
      </div>
    </Link>
    </div>
  );
};

