import React from 'react';
import './index.scss'; 
import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';
import Zap from '../../components/whatsapp/index.jsx';
import { Link } from "react-router-dom";


export default function Servicos() {
  return (
    <div className="Servicos">
      <Cabecalho />
      <div className="faixa">
        <h1>Serviços</h1>
      </div>
      <div className="itens">
        <div className="lista">
          <div className="container">Canal

            <img src="https://odontologiajaguare.com.br/wp-content/uploads/2018/10/shutterstock_1082441402.jpg" alt="imagem1" className='imagem1' />

            <h3 className='texto1'>É um procedimento feito para tratar dentes com infecção ou dano na polpa (parte interna do dente). O dentista remove a polpa, limpa o dente e o preenche para salvar o dente e aliviar a dor.</h3>
          </div>

          <div className="container2">Extração
            <img src="https://radiehl.com.br/wp-content/uploads/2024/07/Extracao.png" alt="imagem2" className='imagem2' />

            <h3 className='texto2'>A remoção odontológica é um procedimento seguro para remover dentes comprometidos por cáries, infecções ou desalinhamento.</h3>
          </div>

          <div className="container3">Ortodontia
                <img src="https://img.freepik.com/fotos-premium/maos-do-dentista-dando-anestesia-dental-com-uma-seringa-para-sua-paciente-do-sexo-feminino-foco-seletivo_485255-525.jpg" alt="imagem3" className='imagem3' />

                <h3 className='texto3'>A ortodontia corrige dentes e maxilares desalinhados, melhorando o sorriso e a função da boca. Com tratamentos personalizados, oferecemos resultados rápidos e eficazes para todas as idades.</h3>
          </div>

          <div className="container4">Limpeza
                <img src="https://odontoapeles.com.br/dentista/clinica-odontologica/zona-sul/wp-content/uploads/2021/11/check-up-treatment-removing-plaque-scaled-2.jpg" alt="imagem4" className='imagem4'/>

                <h3 className='texto4'>A limpeza odontológica remove placa e tártaro, prevenindo cáries e doenças gengivais. É um procedimento essencial para manter a saúde bucal e garantir um sorriso saudável.</h3>

          </div>

          <div className="container5">Clareamento
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ZjlTyWv1Hqu1LwW8lPmlwOkkfKY0ROQOww&s" alt="imagem5" className='imagem5' />

            <h3 className='texto5'>O clareamento odontológico ilumina o sorriso, removendo manchas e deixando os dentes mais brancos. É um procedimento seguro e eficaz, realizado sob orientação profissional.</h3>
          </div>

          <div className="container6">Implante
            <img src="https://gotodontologia.com.br/wp-content/uploads/2021/11/implante-dentario-1.jpg" alt="imagem6" className='imagem6' />

            <h3 className='texto6'>O implante odontológico substitui dentes perdidos, proporcionando uma solução duradoura e natural. Realizado com materiais de alta qualidade, devolve a funcionalidade e estética do sorriso.</h3>
          </div>

          <div className="container7">Próteses
            <img src="https://www.dentalarteclinicas.com.br/wp-content/uploads/2020/07/shutterstock_699897964-800x450.jpg" alt="imagem7" className='imagem7' />

            <h3 className='texto7'>As próteses odontológicas substituem dentes ausentes, restaurando a função e estética do sorriso. São personalizadas para garantir conforto, durabilidade e aparência natural.</h3>
          </div>

          <div className="container8">Restauração
          <img src="https://dentalvidas.com.br/wp-content/uploads/2022/03/Restauracao-de-dente-920x450.jpg" alt="imagem8" className='imagem8' />

          <h3 className='texto8'>A restauração odontológica corrige dentes danificados por cáries ou fraturas, devolvendo sua forma e função. Utiliza materiais estéticos para garantir um resultado natural e duradouro.</h3>

          </div>

          <div className="container9">Cirurgia
            <img src="https://eapgoias.com.br/wp-content/uploads/2023/08/materiais-de-cirurgia-odontologia-1.jpg" alt="imagem9" className='imagem9' />

            <h3 className='texto9'>A cirurgia odontológica envolve procedimentos invasivos para tratar problemas dentários e bucais, como extração de dentes, correção de deformidades e remoção de cistos. Esses tratamentos são realizados por cirurgiões-dentistas especializados, visando a recuperação da saúde bucal e estética.</h3>
          </div>

        </div>
      </div>
      <div className='botao'>
        <Link className='buton-please' to='/adm-consulta'>Agende sua consulta
        </Link></div>
      <Footer />
      <Zap />
    </div>
  );
}
