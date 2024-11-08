import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

export default function Footer(){
  const numero = "5511914817025"; 
  const mensagem = "Olá! Gostaria de mais informações."; 
  const encodedMessage = encodeURIComponent(mensagem);
  return (
    <div className="footer">
      <div className="content">
        <div className="esq">
          <Link to='/'>
          <img src="/assets/images/odc-branca.png" alt="" />
          </Link>
          <div className='social'>
            <a href="" className="social-icon"><BsInstagram /></a>
            <a href="" className="social-icon"><FaFacebookF /></a>
            <a href="" className="social-icon"><FaLinkedinIn /></a>
          </div>
          <Link to='/contato'>
          <div className='agende'>
            Agende Sua Pré Avaliação
          </div>
          </Link>
        </div>
        <ul className='lista'>
          <li>
            <h3>Mapa do Site</h3>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/servicos'>Serviços</Link>
          </li>
          <li>
            <Link to='/quemsomos'>Quem Somos</Link>
          </li>
          <li>
            <Link to='/contato'>Agendar Consulta</Link>
          </li>
          <li>
            
          </li>
        </ul>
        <div className="contato">
          <h3>Contato</h3>
          <div className="number">
            <FaPhoneAlt />
            <Link to={`https://wa.me/${numero}?text=${encodedMessage}`} target="_blank" rel="noopener noreferrer">
              <span>(11) 97461-8123</span>
            </Link>
          </div>
          <div className="email">
            <MdEmail />
            <span>contato@odontoclarc.com.br</span>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.408588454297!2d-46.71567572061772!3d-23.770485867278456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce492c09c36583%3A0x3678805288b49c4b!2sAv.%20Paulo%20Guilguer%20Reimberg%2C%20378%20-%20Jardim%20Maria%20Fernandes%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004858-570!5e0!3m2!1spt-BR!2sbr!4v1729013562780!5m2!1spt-BR!2sbr"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <Link to='/adm-login' className='adm'>ADM</Link>
        </div>
      </div>
    </div>
  );
};

