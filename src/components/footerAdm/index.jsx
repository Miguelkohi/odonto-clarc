import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function FooterADM(){
  return (
    <div className="footerADM">
        <div className="esq">
          <img src="/assets/images/odc-branca.png" alt="" className="logo" width={200} />
        </div>
        <div className="dir">
          <div className="endereco">
            <MdLocationPin />
            <p>Av. Paulo Guilguer Reimberg, 378</p>
          </div>
          <div className="telefone">
            <FaPhoneAlt />
            <p>(11) 97461-8123</p>
          </div>
        </div>
    </div>
  );
};

