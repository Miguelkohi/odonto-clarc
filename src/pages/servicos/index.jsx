import React from 'react';
import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';
import Zap from '../../components/whatsapp/index.jsx';
import { Link } from 'react-router-dom';

const servicos = [
  {
    titulo: 'Canal',
    texto: 'É um procedimento feito para tratar dentes com infecção ou dano na polpa (parte interna do dente). O dentista remove a polpa, limpa o dente e o preenche para salvar o dente e aliviar a dor.',
  },
  {
    titulo: 'Extração',
    texto: 'A remoção odontológica é um procedimento seguro para remover dentes comprometidos por cáries, infecções ou desalinhamento.',
  },
  {
    titulo: 'Ortodontia',
    texto: 'A ortodontia corrige dentes e maxilares desalinhados, melhorando o sorriso e a função da boca. Com tratamentos personalizados, oferecemos resultados rápidos e eficazes para todas as idades.',
  },
  {
    titulo: 'Limpeza',
    texto: 'A limpeza odontológica remove placa e tártaro, prevenindo cáries e doenças gengivais. É um procedimento essencial para manter a saúde bucal e garantir um sorriso saudável.',
  },
  {
    titulo: 'Clareamento',
    texto: 'O clareamento odontológico ilumina o sorriso, removendo manchas e deixando os dentes mais brancos. É um procedimento seguro e eficaz, realizado sob orientação profissional.',
  },
  {
    titulo: 'Implante',
    texto: 'O implante odontológico substitui dentes perdidos, proporcionando uma solução duradoura e natural. Realizado com materiais de alta qualidade, devolve a funcionalidade e estética do sorriso.',
  },
  {
    titulo: 'Próteses',
    texto: 'As próteses odontológicas substituem dentes ausentes, restaurando a função e estética do sorriso. São personalizadas para garantir conforto, durabilidade e aparência natural.',
  },
  {
    titulo: 'Restauração',
    texto: 'A restauração odontológica corrige dentes danificados por cáries ou fraturas, devolvendo sua forma e função. Utiliza materiais estéticos para garantir um resultado natural e duradouro.',
  },
  {
    titulo: 'Cirurgia',
    texto: 'A cirurgia odontológica envolve procedimentos invasivos para tratar problemas dentários e bucais, como extração de dentes, correção de deformidades e remoção de cistos. Esses tratamentos são realizados por cirurgiões-dentistas especializados, visando a recuperação da saúde bucal e estética.',
  },
];

export default function Servicos() {
  return (
    <div className="Servicos">
      <Cabecalho />
      <div className="faixa">
        <h1>Serviços</h1>
      </div>
      <div className="itens">
        <div className="lista">
          {servicos.map((servico, index) => (
            <div className="container" key={index}>
              <h2>{servico.titulo}</h2>
              <h3 className="texto">{servico.texto}</h3>
            </div>
          ))}
        </div>
        <div className="agendar">
          <Link to='/contato' className='agende'>Agende sua Consulta</Link>
        </div>
      </div>
     <Footer />
      <Zap />
    </div>
  );
}
