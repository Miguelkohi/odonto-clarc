import Cabecalho from '../../components/cabecalho';
import './index.scss';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/index.jsx';
import Zap from '../../components/whatsapp/index.jsx';
import SliderComponent from '../../components/carrosel/index.jsx';

export default function App() {
  return (
    <div className="App">
      <Cabecalho></Cabecalho>
      <div className="slider">
        <img src="/assets/images/odont2.jpg" alt="" />
      </div>
      <div className="faixa">
        <h1>Nossos Serviços</h1>
      </div>
      <SliderComponent />
      <section className='secao1'>
        <img src="/assets/images/sorriso.jpg" alt="" />
        <p>
          Na OdontoClarc, oferecemos cuidados odontológicos de qualidade superior, combinando tecnologia moderna e um atendimento caloroso. Nossa equipe especializada proporciona uma ampla gama de serviços, desde limpezas preventivas até tratamentos ortodônticos avançados, garantindo resultados duradouros e satisfatórios.
        </p>
      </section>
      <section className='secao2'>
        <img src="/assets/images/foto.jpg" alt="" className='imagem-mobile'/>
        <p>
          Na OdontoClarc, oferecemos cuidados odontológicos de qualidade superior, combinando tecnologia moderna e um atendimento caloroso. Nossa equipe especializada proporciona uma ampla gama de serviços, desde limpezas preventivas até tratamentos ortodônticos avançados, garantindo resultados duradouros e satisfatórios.
        </p>
        <img src="/assets/images/foto.jpg" alt="" className='imagem-desktop'/>
      </section>
      <Footer></Footer>
      <Zap></Zap>
    </div>
  );
}


