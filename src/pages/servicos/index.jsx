
import React from 'react';
import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';
import Zap from '../../components/whatsapp/index.jsx';

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
            <h3 className='texto1'>É um procedimento feito para tratar dentes com infecção ou dano na polpa (parte interna do dente). O dentista remove a polpa, limpa o dente e o preenche para salvar o dente e aliviar a dor.</h3>
          </div>

          <div className="container2">Extração
            <h3 className='texto2'>A remoção odontológica é um procedimento seguro para remover dentes comprometidos por cáries, infecções ou desalinhamento.</h3>
          </div>

          <div className="container3">Ortodontia
            <h3 className='texto3'>A ortodontia corrige dentes e maxilares desalinhados, melhorando o sorriso e a função da boca. Com tratamentos personalizados, oferecemos resultados rápidos e eficazes para todas as idades.</h3>
          </div>

          <div className="container4">Limpeza
            <h3 className='texto4'>A limpeza odontológica remove placa e tártaro, prevenindo cáries e doenças gengivais. É um procedimento essencial para manter a saúde bucal e garantir um sorriso saudável.</h3>
          </div>

          <div className="container5">Clareamento
            <h3 className='texto5'>O clareamento odontológico ilumina o sorriso, removendo manchas e deixando os dentes mais brancos. É um procedimento seguro e eficaz, realizado sob orientação profissional.</h3>
          </div>

          <div className="container6">Implante
            <h3 className='texto6'>O implante odontológico substitui dentes perdidos, proporcionando uma solução duradoura e natural. Realizado com materiais de alta qualidade, devolve a funcionalidade e estética do sorriso.</h3>
          </div>

          <div className="container7">Próteses
            <h3 className='texto7'>As próteses odontológicas substituem dentes ausentes, restaurando a função e estética do sorriso. São personalizadas para garantir conforto, durabilidade e aparência natural.</h3>
          </div>

          <div className="container8">Restauração
            <h3 className='texto8'>A restauração odontológica corrige dentes danificados por cáries ou fraturas, devolvendo sua forma e função. Utiliza materiais estéticos para garantir um resultado natural e duradouro.</h3>
          </div>

          <div className="container9">Cirurgia
            <h3 className='texto9'>A cirurgia odontológica envolve procedimentos invasivos para tratar problemas dentários e bucais, como extração de dentes, correção de deformidades e remoção de cistos. Esses tratamentos são realizados por cirurgiões-dentistas especializados, visando a recuperação da saúde bucal e estética.</h3>
          </div>

        </div>
      </div>
      <Footer />
      <Zap />
    </div>
  );
}