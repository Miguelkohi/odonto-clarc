import Cabecalho from '../../components/cabecalho/index.jsx';
import './index.scss';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/index.jsx';
import Zap from '../../components/whatsapp/index.jsx';

export default function PreAvaliacao () {
  return (
    <div className="Pre">
      <Cabecalho></Cabecalho>
      <div className='conteudo'>
        <img src="/assets/images/odc-min.png" alt="" />
        <h1>Sua pré-avaliação foi realizado com sucesso!</h1>
        <h2>Em breve entraremos em contato para agendar sua consulta.</h2>
        <Link to="/">
          <button className='enviar'>Voltar para a página inicial</button>
        </Link>
        <Zap/>
      </div>      
      <Footer></Footer>
    </div>
  );
}



import Cabecalho from '../../components/cabecalho/index.jsx';
import './index.scss';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/index.jsx';
import Zap from '../../components/whatsapp/index.jsx';

export default function PreAvaliacao () {
  return (
    <div className="Pre">
      <Cabecalho></Cabecalho>
      <div className='conteudo'>
        <img src="/assets/images/odc-min.png" alt="" />
        <h1>Sua pré-avaliação foi realizado com sucesso!</h1>
        <h2>Em breve entraremos em contato para agendar sua consulta.</h2>
        <Link to="/">
          <button className='enviar'>Voltar para a página inicial</button>
        </Link>
        <Zap/>
      </div>      
      <Footer></Footer>
    </div>
  );
}


